import { Component, ChangeDetectorRef, HostListener, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule, BaseChartDirective } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { saveAs } from 'file-saver';
import * as OCSF from '@models/ocsf';
import { OcsfFactory } from '../../factories/ocsf.factory';
import { TranslateModule } from '@ngx-translate/core';
import { EChartsOption } from 'echarts';

(pdfMake as any).vfs = pdfFonts.vfs;
Chart.register(zoomPlugin);

@Component({
  selector: 'app-telemetry',
  standalone: true,
  imports: [CommonModule, FormsModule, NgChartsModule, NgxEchartsModule, TranslateModule],
  templateUrl: './telemetry.page.html',
  styleUrls: ['./telemetry.page.scss']
})
export class TelemetryPage {
  @ViewChildren(BaseChartDirective) chartDirectives?: QueryList<BaseChartDirective>;
  echartsInstance: any;

  // --- General State ---
  rawData: OCSF.OcsfEvent[] = [];
  errorMessage = '';
  fileName = '';
  isDragging = false;
  private worker: Worker;

  // --- Filtering ---
  filter = { class_uid: '', src_ip: '', user: '', severity: '', dateFrom: '', dateTo: '' };
  uniqueClassUids: string[] = [];
  uniqueSrcIps: string[] = [];
  uniqueUsers: string[] = [];
  uniqueSeverities: string[] = [];

  // --- Chart Data ---
  severityChartData: ChartConfiguration<'bar'>['data'] = { labels: [], datasets: [] };
  categoryChartData: ChartConfiguration<'doughnut'>['data'] = { labels: [], datasets: [] };
  heatmapData: number[][] = [];
  topUsersChartData: ChartConfiguration<'bar'>['data'] = { labels: [], datasets: [] };
  
  // --- Chart Options ---
  severityChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true, title: { display: true, text: 'Time', font: { size: 14 } }, grid: { drawOnChartArea: false } },
      y: { stacked: true, title: { display: true, text: 'Event Count', font: { size: 14 } }, beginAtZero: true, ticks: { precision: 0 } }
    },
    plugins: {
      legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8 } },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          footer: (tooltipItems) => {
            let sum = 0;
            tooltipItems.forEach(function(tooltipItem) { sum += tooltipItem.parsed.y; });
            return 'Total: ' + sum;
          },
        },
      },
      zoom: {
        pan: { enabled: true, mode: 'x' },
        zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'x' }
      }
    },
    interaction: { mode: 'index', intersect: false },
    datasets: { bar: { maxBarThickness: 70 } }
  };

  categoryChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'right', labels: { usePointStyle: true, boxWidth: 10 } },
      tooltip: {
        callbacks: {
            label: (context) => {
                const label = context.label || '';
                const value = context.parsed || 0;
                const dataset = context.chart.data.datasets[0].data as number[];
                const total = dataset.reduce((acc, curr) => acc + curr, 0) || 1;
                const percentage = ((value / total) * 100).toFixed(2);
                return `${label}: ${value} (${percentage}%)`;
            }
        }
      }
    }
  };

  heatmapOptions!: EChartsOption;
  dayNames: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  horizontalBarOptions: ChartOptions<'bar'> = {
    responsive: true, maintainAspectRatio: false, indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: { x: { beginAtZero: true, ticks: { precision: 0 } } },
    datasets: { bar: { maxBarThickness: 50, borderRadius: 4 } }
  };

  constructor(private cdr: ChangeDetectorRef) {
    this.worker = new Worker(new URL('../../workers/data-processor.worker', import.meta.url), { type: 'module' });
    this.worker.onmessage = ({ data }) => {
      this.updateCharts(data);
      this.cdr.detectChanges();
    };
  }

  onChartInit(ec: any) {
    this.echartsInstance = ec;
  }

  @HostListener('window:dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  @HostListener('window:dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  @HostListener('window:drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    if (event.dataTransfer?.files.length) {
      this.processFile(event.dataTransfer.files[0]);
    }
  }

  get filteredData(): OCSF.OcsfEvent[] {
    return this.rawData.filter(item => {
        const time = new Date(item.time).getTime();
        const from = this.filter.dateFrom ? new Date(this.filter.dateFrom).getTime() : null;
        const to = this.filter.dateTo ? new Date(this.filter.dateTo).getTime() : null;
        const anyItem = item as any;
        return (!this.filter.class_uid || item.class_uid.toString() === this.filter.class_uid) &&
               (!this.filter.src_ip || this.getSrcIp(item) === this.filter.src_ip) &&
               (!this.filter.user || anyItem.actor?.user?.name === this.filter.user) &&
               (!this.filter.severity || item.severity === this.filter.severity) &&
               (!from || time >= from) &&
               (!to || time <= to);
      });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    this.processFile(input.files[0]);
  }
  
  private processFile(file: File): void {
    this.fileName = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsedJson = JSON.parse(reader.result as string);
        const dataToProcess = Array.isArray(parsedJson) ? parsedJson : [parsedJson];
        this.rawData = dataToProcess.map(item => OcsfFactory.createEventFromObject(item)).filter(Boolean) as OCSF.OcsfEvent[];
        this.errorMessage = this.rawData.length > 0 ? '' : 'File does not contain valid OCSF events.';
        this.extractUniqueFilterValues();
        this.onFilterChange();
      } catch (e: any) {
        this.errorMessage = 'JSON parsing error: Invalid file format.';
        this.rawData = [];
        this.fileName = '';
        console.error('JSON parsing error:', e);
      }
    };
    reader.readAsText(file);
  }

  onFilterChange(): void {
    const data = this.filteredData;
    if (data.length === 0) {
      this.clearCharts();
    } else {
      this.worker.postMessage(data);
    }
  }

  updateCharts(data: any): void {
    if (!data) return;
    
    if (data.severityChart) {
      this.severityChartData = {
        labels: data.severityChart.labels,
        datasets: data.severityChart.datasets
      };
    }

    if (data.categoryChart) {
      this.categoryChartData = {
        labels: data.categoryChart.labels,
        datasets: [{ data: data.categoryChart.data }]
      };
    }

    if (data.heatmapData) {
      this.setHeatmapOptions(data.heatmapData);
    }

    if (data.topUsersChart) {
        this.topUsersChartData = {
            labels: data.topUsersChart.labels,
            datasets: [{ data: data.topUsersChart.data, label: 'Event Count', backgroundColor: '#58a3e6' }]
        };
    }
  }

  setHeatmapOptions(data: number[][]): void {
    this.heatmapData = data;
    const maxVal = data.length > 0 ? Math.max(...data.map(v => v[2])) : 0;
    this.heatmapOptions = {
      tooltip: { 
        position: 'top',
        formatter: (params: any) => {
          const hour = params.value[0];
          const dayIndex = params.value[1];
          const count = params.value[2];
          const dayName = this.dayNames[dayIndex];
          return `${dayName}, ${hour}:00 - <strong>${count}</strong> Events`;
        }
      },
      grid: { height: '70%', top: '10%' },
      xAxis: { type: 'category', data: Array.from({ length: 24 }, (_, i) => `${i}`), splitArea: { show: true } },
      yAxis: { type: 'category', data: this.dayNames, splitArea: { show: true } },
      visualMap: {
        min: 0,
        max: Math.ceil(maxVal) || 1,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '0',
        inRange: { color: ['#e0f3ff', '#58a3e6', '#e65858'] }
      },
      series: [{ type: 'heatmap', data, label: { show: false } }]
    };
  }

  clearCharts(): void {
    this.severityChartData = { labels: [], datasets: [] };
    this.categoryChartData = { labels: [], datasets: [] };
    this.heatmapData = [];
    this.topUsersChartData = { labels: [], datasets: [] };
  }
  
  resetFilters(): void {
    this.filter = { class_uid: '', src_ip: '', user: '', severity: '', dateFrom: '', dateTo: '' };
    this.onFilterChange();
  }

  private getSrcIp(item: OCSF.OcsfEvent): string | undefined {
    const anyItem = item as any;
    return anyItem.src_endpoint?.ip_address 
        || anyItem.connection_info?.src_ip 
        || anyItem.device?.ip_address
        || anyItem.actor?.process?.device?.ip_address;
  }

  extractUniqueFilterValues(): void {
    const classUids = new Set<string>();
    const srcIps = new Set<string>();
    const users = new Set<string>();
    const severities = new Set<string>();
    this.rawData.forEach(item => {
      const anyItem = item as any;
      if (item.class_uid !== undefined) classUids.add(item.class_uid.toString());
      const srcIp = this.getSrcIp(item);
      if (srcIp) srcIps.add(srcIp);
      if (anyItem.actor?.user?.name) users.add(anyItem.actor.user.name);
      if (item.severity) severities.add(item.severity);
    });
    this.uniqueClassUids = Array.from(classUids).sort((a, b) => a.localeCompare(b));
    this.uniqueSrcIps = Array.from(srcIps).sort();
    this.uniqueUsers = Array.from(users).sort();
    this.uniqueSeverities = Array.from(severities).sort();
  }
  
  async downloadPdf(): Promise<void> {
    if (this.filteredData.length === 0) {
      alert('Please load and filter data before creating a PDF.');
      return;
    }

    const chartImages: { image: string; headline: string }[] = [];
    const charts = this.chartDirectives?.toArray() || [];

    // Get chart images in a specific order
    const severityChart = charts.find(c => c.chart?.canvas.id === 'severityChart');
    const categoryChart = charts.find(c => c.chart?.canvas.id === 'categoryChart');
    const topUsersChart = charts.find(c => c.chart?.canvas.id === 'topUsersChart');

    if (severityChart?.chart) {
      chartImages.push({
        image: severityChart.chart.toBase64Image(),
        headline: this.getChartTitle('severityChart'),
      });
    }

    const smallChartImages = [];
    if (categoryChart?.chart) {
      smallChartImages.push({
        image: categoryChart.chart.toBase64Image(),
        headline: this.getChartTitle('categoryChart'),
      });
    }

    if (topUsersChart?.chart) {
      smallChartImages.push({
        image: topUsersChart.chart.toBase64Image(),
        headline: this.getChartTitle('topUsersChart'),
      });
    }
    
    // Convert ECharts (Heatmap) to Base64
    if (this.echartsInstance) {
      const heatmapImage = this.echartsInstance.getDataURL({
        type: 'png',
        pixelRatio: 2,
        backgroundColor: '#fff'
      });
      chartImages.push({
        image: heatmapImage,
        headline: 'Daily Event Density Heatmap'
      });
    }

    const docDefinition: any = {
      content: [
        { text: 'Telemetry Analysis Report', style: 'header' },
        { text: `Report Date: ${new Date().toLocaleString()}`, style: 'subheader' },
      ],
      styles: {
        header: { fontSize: 22, bold: true, margin: [0, 0, 0, 10] },
        subheader: { fontSize: 10, margin: [0, 0, 0, 20] },
        chartTitle: { fontSize: 14, bold: true, margin: [0, 15, 0, 5] }
      },
      pageSize: 'A4',
      pageMargins: [40, 60, 40, 60],
    };

    // Add large charts
    chartImages.forEach(img => {
      docDefinition.content.push({ text: img.headline, style: 'chartTitle' });
      docDefinition.content.push({ image: img.image, width: 515 });
    });

    // Add small charts side-by-side
    if (smallChartImages.length > 0) {
      const columns = smallChartImages.map(img => {
        return [
          { text: img.headline, style: 'chartTitle' },
          { image: img.image, width: 250 }
        ];
      });
      docDefinition.content.push({ columns: columns, margin: [0, 0, 0, 10] });
    }

    pdfMake.createPdf(docDefinition).download('telemetry-report.pdf');
  }

  private getChartTitle(canvasId: string): string {
    switch (canvasId) {
      case 'severityChart': return 'Event Volume by Severity';
      case 'categoryChart': return 'Event Category Distribution';
      case 'topUsersChart': return 'Top Active Users';
      default: return 'Chart';
    }
  }

  downloadJson(): void {
    const json = JSON.stringify(this.filteredData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    saveAs(blob, 'telemetry-data.json');
  }

  downloadCsv(): void {
    const data = this.filteredData;
    if (data.length === 0) return;

    const flattenedData = data.map(item => this.flattenObject(item));

    const allHeaders = new Set<string>();
    flattenedData.forEach(row => {
      Object.keys(row).forEach(key => allHeaders.add(key));
    });
    const headerArray = Array.from(allHeaders).sort();

    const csvRows = [
      headerArray.join(','),
      ...flattenedData.map(row => 
        headerArray.map(header => {
          const value = row[header];
          const escaped = (value === null || value === undefined) 
            ? '' 
            : String(value).replace(/"/g, '""');
          return `"${escaped}"`;
        }).join(',')
      )
    ];
    
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'telemetry-data.csv');
  }

  private flattenObject(obj: any, parentKey = ''): { [key: string]: any } {
    let result: { [key: string]: any } = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const propName = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          result = { ...result, ...this.flattenObject(value, propName) };
        } else if (Array.isArray(value)) {
            result[propName] = JSON.stringify(value);
        }
        else {
          result[propName] = value;
        }
      }
    }
    return result;
  }
}
