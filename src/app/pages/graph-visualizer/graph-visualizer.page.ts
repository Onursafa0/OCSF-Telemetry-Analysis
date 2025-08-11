import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, TitleCasePipe, JsonPipe, KeyValuePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxGraphModule, Node, Edge } from '@swimlane/ngx-graph';
import { Subject, Subscription } from 'rxjs';
import * as shape from 'd3-shape';

import { GraphDataService } from '../../services/graph-data.service';
import * as OCSF from '@models/ocsf';
import { TranslateModule } from '@ngx-translate/core';

const MAX_NODES_TO_DISPLAY = 250;

// Color mapping by node types
const NODE_TYPE_COLORS: { [key: string]: string } = {
  process: '#ffcdd2', file: '#c8e6c9', ip: '#bbdefb', user: '#fff9c4',
  device: '#d1c4e9', url: '#b2ebf2', module: '#f8bbd0', vulnerability: '#ffab91',
  compliance: '#bcaaa4', malware: '#ef9a9a', resource: '#a5d6a7', job: '#cfd8dc',
  script: '#d7ccc8', group: '#c5cae9', api: '#b3e5fc', scan: '#dcedc8',
  remediation: '#ffecb3', share: '#e1bee7', dns: '#b2dfdb', app: '#f0f4c3',
  driver: '#ffe0b2', log: '#e0e0e0', ticket: '#ffccbc', attack: '#ff8a80',
  default: '#f5f5f5'
};

// Data structure for tooltip
interface TooltipData {
  visible: boolean;
  x: number;
  y: number;
  data: {
    label: string;
    type: string;
    details: string;
    alerts: number;
    exposures: number;
  } | null;
}

@Component({
  selector: 'app-graph-visualizer',
  standalone: true,
  imports: [CommonModule, NgxGraphModule, FormsModule, TitleCasePipe, JsonPipe, KeyValuePipe, TranslateModule],
  templateUrl: './graph-visualizer.page.html',
  styleUrls: ['./graph-visualizer.page.scss']
})
export class GraphVisualizerPage implements OnInit, OnDestroy {
  @ViewChild('graphWrapper') graphWrapper!: ElementRef;

  displayNodes: Node[] = [];
  displayLinks: Edge[] = [];
  private allNodes: Node[] = [];
  private allLinks: Edge[] = [];
  availableNodeTypes: string[] = [];
  selectedNodeTypes = new Set<string>();

  public selectedNode: Node | null = null;
  public selectedNodeOcsfData: any = null;

  highlightedNodes = new Set<string>();
  highlightedLinks = new Set<string>();

  tooltip: TooltipData = { visible: false, x: 0, y: 0, data: null };
  private tooltipTimeout: any;

  hasData = false;
  isDataTruncated = false;
  className = 'Unknown';
  isGraphVisible = true;

  // ngx-graph settings
  update$: Subject<boolean> = new Subject();
  curve = shape.curveBundle.beta(0.8);
  layout = 'dagre';
  layoutSettings = { orientation: 'TB', rankPadding: 120, nodePadding: 80 };

  private eventsSubscription: Subscription | undefined;

  constructor(private graphDataService: GraphDataService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.eventsSubscription = this.graphDataService.currentEvents$.subscribe(events => {
      this.resetGraph();
      if (events && events.length > 0) {
        this.hasData = true;
        this.className = events[0]?.class_name || 'Unknown';
        this.processAllGraphData(events);
      }
      this.cd.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.eventsSubscription?.unsubscribe();
  }

  /** @description Processes incoming OCSF events and constructs graph data (nodes, links). */
  private processAllGraphData(events: OCSF.OcsfEvent[]): void {
    const { nodes, links, nodeTypes } = this.transformEventsToGraph(events);
    this.allNodes = nodes;
    this.allLinks = links;
    this.availableNodeTypes = [...nodeTypes].sort();
    this.selectedNodeTypes = new Set(this.availableNodeTypes);
    this.applyFilters();
  }

  applyFilters(): void {
    this.closeDetailsPanel();
    this.onMouseLeaveGraph();

    const filteredNodes = this.allNodes.filter(node => this.selectedNodeTypes.has(node.data.type));
    const filteredNodeIds = new Set(filteredNodes.map(n => n.id));

    this.displayLinks = this.allLinks.filter(link =>
      filteredNodeIds.has(link.source) && filteredNodeIds.has(link.target)
    );

    const visibleNodeIds = new Set(this.displayLinks.flatMap(l => [l.source, l.target]));
    this.allNodes.forEach(node => {
      if (this.selectedNodeTypes.has(node.data.type)) {
        visibleNodeIds.add(node.id);
      }
    });

    this.displayNodes = this.allNodes.filter(node => visibleNodeIds.has(node.id) && this.selectedNodeTypes.has(node.data.type));

    if (this.displayNodes.length > MAX_NODES_TO_DISPLAY) {
      this.isDataTruncated = true;
      this.displayNodes = this.displayNodes.slice(0, MAX_NODES_TO_DISPLAY);
      const truncatedNodeIds = new Set(this.displayNodes.map(n => n.id));
      this.displayLinks = this.displayLinks.filter(link =>
        truncatedNodeIds.has(link.source) && truncatedNodeIds.has(link.target)
      );
    } else {
      this.isDataTruncated = false;
    }

    this.isGraphVisible = false;
    setTimeout(() => {
      this.isGraphVisible = true;
      this.update$.next(true);
    }, 0);
  }

  onNodeClick(node: Node): void {
    this.selectedNode = node;
    this.selectedNodeOcsfData = node.data.ocsfData;
  }

  closeDetailsPanel(): void {
    this.selectedNode = null;
    this.selectedNodeOcsfData = null;
  }

  onNodeMouseEnter(event: MouseEvent, node: Node): void {
    clearTimeout(this.tooltipTimeout);

    this.highlightedNodes.clear();
    this.highlightedLinks.clear();
    if (!node || !node.id) return;

    this.highlightedNodes.add(node.id);
    this.allLinks.forEach(link => {
      if (link.source === node.id && link.target) {
        this.highlightedNodes.add(link.target);
        if (link.id) this.highlightedLinks.add(link.id);
      }
      if (link.target === node.id && link.source) {
        this.highlightedNodes.add(link.source);
        if (link.id) this.highlightedLinks.add(link.id);
      }
    });

    const containerRect = this.graphWrapper.nativeElement.getBoundingClientRect();
    const x = event.clientX - containerRect.left + 15;
    const y = event.clientY - containerRect.top + 15;

    const ocsfData = node.data.ocsfData;
    let details = `Type: ${node.data.type}`;
    if (node.data.type === 'device' && ocsfData.os?.name) {
      details = ocsfData.os.name;
    } else if (node.data.type === 'user' && ocsfData.domain) {
      details = `Domain: ${ocsfData.domain}`;
    }

    this.tooltip = {
      visible: true,
      x: x,
      y: y,
      data: {
        label: node.label ?? 'Unknown',
        type: node.data?.type ?? 'Unknown',
        details: details,
        alerts: node.data.alerts,
        exposures: node.data.exposures
      }
    };
  }

  onNodeMouseLeave(): void {
    this.tooltipTimeout = setTimeout(() => {
      this.tooltip.visible = false;
    }, 100);
  }

  onMouseLeaveGraph(): void {
    this.highlightedNodes.clear();
    this.highlightedLinks.clear();
    this.tooltip.visible = false;
  }

  onFilterChange(nodeType: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedNodeTypes.add(nodeType);
    } else {
      this.selectedNodeTypes.delete(nodeType);
    }
    this.applyFilters();
  }

  selectAllFilters(): void {
    this.selectedNodeTypes = new Set(this.availableNodeTypes);
    this.applyFilters();
  }

  deselectAllFilters(): void {
    this.selectedNodeTypes.clear();
    this.applyFilters();
  }

  getNodeColor(node: Node): string {
    return NODE_TYPE_COLORS[node.data.type as keyof typeof NODE_TYPE_COLORS] || NODE_TYPE_COLORS['default'];
  }

  getIconForNodeType(type: string): string {
    const iconMap: { [key: string]: string } = {
      device: 'fas fa-desktop', user: 'fas fa-user', process: 'fas fa-cog',
      file: 'fas fa-file-alt', ip: 'fas fa-network-wired', url: 'fas fa-link',
      malware: 'fas fa-bug', vulnerability: 'fas fa-shield-virus', attack: 'fas fa-crosshairs'
    };
    return iconMap[type] || 'fas fa-question-circle';
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  private resetGraph(): void {
    this.hasData = false;
    this.allNodes = []; this.allLinks = [];
    this.displayNodes = []; this.displayLinks = [];
    this.availableNodeTypes = [];
    this.selectedNodeTypes.clear();
    this.closeDetailsPanel();
    this.onMouseLeaveGraph();
  }

  private transformEventsToGraph(events: OCSF.OcsfEvent[]): { nodes: Node[], links: Edge[], nodeTypes: Set<string> } {
    const nodeMap = new Map<string, Node>();
    const linkCountMap = new Map<string, { source: string; target: string; label: string; count: number }>();
    const nodeTypes = new Set<string>();
    
    const alertCounts = new Map<string, number>();
    const exposureCounts = new Map<string, number>();

    const sanitizeId = (id: any): string => {
      if (typeof id !== 'string' && typeof id !== 'number') return `invalid-id-${Math.random()}`;
      const idStr = String(id).replace(/[^a-zA-Z0-9_.\-]/g, '-');
      return /^\d/.test(idStr) ? `id-${idStr}` : idStr;
    };

    events.forEach(event => {
        const anyEvent = event as any;
        const deviceId = sanitizeId(anyEvent.device?.uid || anyEvent.device?.name);
        const actorUserId = sanitizeId(anyEvent.actor?.user?.uid || anyEvent.actor?.user?.name);

        if (event.class_uid === OCSF.OcsfClassUid.SECURITY_FINDING || event.class_uid === OCSF.OcsfClassUid.DETECTION_FINDING) {
            if (deviceId) alertCounts.set(deviceId, (alertCounts.get(deviceId) || 0) + 1);
            if (actorUserId) alertCounts.set(actorUserId, (alertCounts.get(actorUserId) || 0) + 1);
        }

        if (event.class_uid === OCSF.OcsfClassUid.VULNERABILITY_FINDING) {
            if (deviceId) exposureCounts.set(deviceId, (exposureCounts.get(deviceId) || 0) + 1);
        }
    });

    const addNode = (id: any, label: string, type: string, ocsfData: any): Node | undefined => {
      if (!id || !label) return undefined;
      const sanitizedId = sanitizeId(id);
      if (!nodeMap.has(sanitizedId)) {
        nodeTypes.add(type);
        nodeMap.set(sanitizedId, { 
            id: sanitizedId, 
            label, 
            data: { 
                type, 
                ocsfData,
                alerts: alertCounts.get(sanitizedId) || 0,
                exposures: exposureCounts.get(sanitizedId) || 0
            } 
        });
      }
      return nodeMap.get(sanitizedId);
    };

    const aggregateLink = (sourceNode: Node | undefined, targetNode: Node | undefined, label: string) => {
      if (!sourceNode || !targetNode || !label || sourceNode.id === targetNode.id) return;
      const key = `${sourceNode.id}|${targetNode.id}|${label}`;
      const existingLink = linkCountMap.get(key);
      if (existingLink) {
        existingLink.count++;
      } else {
        linkCountMap.set(key, { source: sourceNode.id, target: targetNode.id, label, count: 1 });
      }
    };

    const getNode = (entity: any, type: string): Node | undefined => {
        if (!entity) return undefined;
        switch (type) {
            case 'process': return addNode(entity.uid || entity.pid, entity.name || `PID:${entity.pid}`, 'process', entity);
            case 'user': return addNode(entity.uid || entity.name, entity.name, 'user', entity);
            case 'file': return addNode(entity.file_path, entity.file_name || entity.file_path, 'file', entity);
            case 'device': return addNode(entity.uid || entity.name, entity.name, 'device', entity);
            case 'ip': return addNode(entity, entity, 'ip', { ip: entity });
            case 'url': return addNode(entity.full_url || entity, entity.domain || entity.full_url || entity, 'url', entity);
            case 'module': return addNode(entity.name, entity.name, 'module', entity);
            case 'vulnerability': return addNode(entity.cve_id, entity.cve_id, 'vulnerability', entity);
            case 'compliance': return addNode(entity.control, entity.control, 'compliance', entity);
            case 'resource': return addNode(entity.uid || entity.name, entity.name, 'resource', entity);
            case 'job': return addNode(entity.uid || entity.name, entity.name, 'job', entity);
            case 'script': return addNode(entity.name, entity.name, 'script', entity);
            case 'group': return addNode(entity.uid || entity.name, entity.name, 'group', entity);
            case 'api': return addNode(entity.service_name, entity.service_name, 'api', entity);
            case 'scan': return addNode(entity.name, entity.name, 'scan', entity);
            case 'remediation': return addNode(entity.name, entity.name, 'remediation', entity);
            case 'share': return addNode(entity.name, entity.name, 'share', entity);
            case 'dns': return addNode(entity.hostname, entity.hostname, 'dns', entity);
            case 'app': return addNode(entity.name, entity.name, 'app', entity);
            case 'malware': return addNode(entity.name, entity.name, 'malware', entity);
            case 'driver': return addNode(entity.name, entity.name, 'driver', entity);
            case 'log': return addNode(entity.log_name, entity.log_name, 'log', entity);
            case 'ticket': return addNode(entity.ticket_id, entity.ticket_id, 'ticket', entity);
            case 'attack': return addNode(entity.technique_id, entity.technique, 'attack', entity);
            default: return undefined;
        }
    };

    events.forEach(event => {
      const anyEvent = event as any;
      const actorProcess = getNode(anyEvent.actor?.process, 'process');
      const actorUser = getNode(anyEvent.actor?.user, 'user');
      const primaryActor = actorProcess || actorUser;
      const device = getNode(anyEvent.device || anyEvent.actor?.device, 'device');
      const targetUser = getNode(anyEvent.user, 'user');

      if (actorUser && actorProcess) aggregateLink(actorUser, actorProcess, 'runs');
      if (primaryActor && device) aggregateLink(primaryActor, device, 'on');

      switch (event.class_uid) {
        case OCSF.OcsfClassUid.SECURITY_FINDING:
        case OCSF.OcsfClassUid.DETECTION_FINDING:
            if (device) anyEvent.malware?.forEach((m: any) => aggregateLink(device, getNode(m, 'malware'), 'has'));
            if (device) anyEvent.attacks?.forEach((a: any) => aggregateLink(device, getNode(a, 'attack'), 'exhibits'));
            break;
        case OCSF.OcsfClassUid.VULNERABILITY_FINDING:
            if(device) anyEvent.vulnerabilities?.forEach((v: any) => aggregateLink(getNode(v, 'vulnerability'), device, 'found on'));
            break;
        case OCSF.OcsfClassUid.FILE_SYSTEM_ACTIVITY: 
            aggregateLink(primaryActor, getNode(anyEvent.file, 'file'), anyEvent.activity_name || 'accesses'); 
            break;
        case OCSF.OcsfClassUid.PROCESS_ACTIVITY: 
            const targetProcess = getNode(anyEvent.process, 'process');
            if (anyEvent.process?.parent_process) {
                const parent = getNode(anyEvent.process.parent_process, 'process');
                aggregateLink(parent, targetProcess, 'launches');
            } else {
                aggregateLink(primaryActor, targetProcess, 'launches');
            }
            break;
        case OCSF.OcsfClassUid.NETWORK_ACTIVITY:
        case OCSF.OcsfClassUid.HTTP_ACTIVITY:
            const dstIp = getNode(anyEvent.dst_endpoint?.ip_address, 'ip');
            const url = getNode(anyEvent.http_request?.url, 'url');
            if(device && dstIp) aggregateLink(device, dstIp, 'connects to');
            if(device && url) aggregateLink(device, url, 'requests');
            break;
        case OCSF.OcsfClassUid.DNS_ACTIVITY:
            const dnsQuery = getNode(anyEvent.query, 'dns');
            if(device && dnsQuery) aggregateLink(device, dnsQuery, 'queries');
            break;
        case OCSF.OcsfClassUid.AUTHENTICATION: 
            aggregateLink(targetUser, device, anyEvent.activity_name || 'logs on to'); 
            break;
        case OCSF.OcsfClassUid.ACCOUNT_CHANGE:
            const changedUser = getNode(anyEvent.user, 'user');
            aggregateLink(primaryActor, changedUser, anyEvent.activity_name || 'changes account');
            break;
        case OCSF.OcsfClassUid.GROUP_MANAGEMENT:
            const managedUser = getNode(anyEvent.user, 'user');
            const group = getNode(anyEvent.group, 'group');
            if(managedUser && group) aggregateLink(managedUser, group, anyEvent.activity_name || 'manages group');
            break;
        case OCSF.OcsfClassUid.API_ACTIVITY:
            const api = getNode(anyEvent.api, 'api');
            aggregateLink(primaryActor, api, 'calls');
            break;
        case OCSF.OcsfClassUid.APPLICATION_LIFECYCLE:
            const app = getNode(anyEvent.app, 'app');
            aggregateLink(primaryActor, app, anyEvent.activity_name || 'manages app');
            break;
        default:
          if (primaryActor && device) aggregateLink(primaryActor, device, 'interacts on');
          break;
      }
    });

    const newLinks: Edge[] = Array.from(linkCountMap.entries()).map(([key, linkInfo]) => ({
      id: key.replace(/[^a-zA-Z0-9]/g, '-'),
      source: linkInfo.source,
      target: linkInfo.target,
      label: linkInfo.count > 1 ? `${linkInfo.label} (${linkInfo.count})` : linkInfo.label
    }));

    return { nodes: Array.from(nodeMap.values()), links: newLinks, nodeTypes };
  }
}
