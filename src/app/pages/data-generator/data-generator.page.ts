import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { OcsfDataGeneratorService } from '../../services/ocsf-data-generator.service';
import { GraphDataService } from '../../services/graph-data.service';
import * as OCSF from '@models/ocsf';
import { saveAs } from 'file-saver';
import { TranslateModule } from '@ngx-translate/core';

interface OcsfClassGroup {
  category: string;
  classes: { name: string, uid: OCSF.OcsfClassUid }[];
}

interface Scenario {
  id: string;
  name: string;
}

@Component({
  selector: 'app-data-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterLink],
  templateUrl: './data-generator.page.html',
  styleUrls: ['./data-generator.page.scss']
})
export class DataGeneratorPage implements OnInit {

  // General State
  isLoading: boolean = false;
  generatedData: OCSF.OcsfEvent[] = [];
  generationTime: number = 0;
  message: string = '';
  messageType: 'success' | 'danger' | '' = '';
  
  // Generation Mode
  generationMode: 'single' | 'scenario' = 'single';

  // Single Class Mode State
  ocsfClassGroups: OcsfClassGroup[] = [];
  selectedClassUid: OCSF.OcsfClassUid = OCSF.OcsfClassUid.FILE_SYSTEM_ACTIVITY;
  
  // Scenario Mode State
  scenarios: Scenario[] = [
    { id: 'ransomware', name: 'Ransomware Attack' },
    { id: 'phishing', name: 'Phishing Attack' },
    { id: 'data_infiltration', name: 'Data Infiltration' },
  ];
  selectedScenarioId: string = 'ransomware';

  // Common State
  numberOfRecords: number = 10;
  
  // For tracking progress
  progressMessage: string = '';

  constructor(
    private ocsfDataGenerator: OcsfDataGeneratorService,
    private graphDataService: GraphDataService
  ) { }

  ngOnInit(): void {
    this.initializeOcsfClasses();
  }

  /**
   * @description Starts the test data generation process according to the user's settings.
   * Retrieves the data in chunks to prevent the UI from freezing.
   */  
  generateTestData(): void {
    this.isLoading = true;
    this.generatedData = [];
    this.message = '';
    this.progressMessage = 'Starting data generation...';
    const startTime = performance.now();

    const payload = this.generationMode === 'single'
      ? { classUid: this.selectedClassUid, count: this.numberOfRecords }
      : { scenarioId: this.selectedScenarioId, count: this.numberOfRecords };

    this.ocsfDataGenerator.generateData(payload).subscribe({
      next: (chunk: OCSF.OcsfEvent[]) => {
        // Add each incoming data chunk to the main array
        this.generatedData.push(...chunk);
        // Update progress message
        this.progressMessage = `${this.generatedData.length} / ${this.numberOfRecords} records generated...`;
      },
      error: (err: any) => {
        console.error('Error occurred while generating data:', err);
        this.message = 'An error occurred while generating data: ' + err.message;
        this.messageType = 'danger';
        this.isLoading = false;
        this.progressMessage = '';
      },
      complete: () => {
        // Runs when all chunks have arrived and the process is complete
        this.graphDataService.updateEvents(this.generatedData);
        
        const endTime = performance.now();
        this.generationTime = parseFloat(((endTime - startTime) / 1000).toFixed(2));
        this.message = `${this.generatedData.length} records successfully generated in ${this.generationTime} seconds.`;
        this.messageType = 'success';
        this.isLoading = false;
        this.progressMessage = ''; // Clear progress message when done
      }
    });
  }

  downloadJson(): void {
    if (this.generatedData.length === 0) return;
    const json = JSON.stringify(this.generatedData, null, 2);
    const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
    const fileName = this.generationMode === 'single'
      ? `ocsf_class_${this.selectedClassUid}_${this.numberOfRecords}_records.json`
      : `ocsf_scenario_${this.selectedScenarioId}_${this.numberOfRecords}_events.json`;
    saveAs(blob, fileName);
  }

  /**
   * @private
   * @description Reads OCSF classes from the enum, categorizes them, and fills the `ocsfClassGroups` array.
   */
  private initializeOcsfClasses(): void {
    const classList = Object.keys(OCSF.OcsfClassUid)
      .filter(key => !isNaN(Number(OCSF.OcsfClassUid[key as any])))
      .map(key => {
        const uid = OCSF.OcsfClassUid[key as keyof typeof OCSF.OcsfClassUid] as OCSF.OcsfClassUid;
        const name = `${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} (${uid})`;
        return { name, uid };
      });

    // Group classes by their categories.
    const groups: { [key: string]: { name: string, uid: OCSF.OcsfClassUid }[] } = {};
    for (const ocsfClass of classList) {
        const categoryName = this.getCategoryNameForClass(ocsfClass.uid);
        if (!groups[categoryName]) {
            groups[categoryName] = [];
        }
        groups[categoryName].push(ocsfClass);
    }

    // Convert grouped data into the format the component will use.
    this.ocsfClassGroups = Object.keys(groups).map(category => ({
        category,
        classes: groups[category].sort((a,b) => a.name.localeCompare(b.name)) 
    }));

    this.ocsfClassGroups.sort((a, b) => {
        const numA = parseInt(a.category.match(/\[(\d+)\]/)?.[1] || '99', 10);
        const numB = parseInt(b.category.match(/\[(\d+)\]/)?.[1] || '99', 10);
        return numA - numB;
    });
  }

  private getCategoryNameForClass(classUid: OCSF.OcsfClassUid): string {
    const uidStr = classUid.toString();
    if (uidStr.startsWith('1')) return 'System Activity [1]';
    if (uidStr.startsWith('2')) return 'Findings [2]';
    if (uidStr.startsWith('3')) return 'Identity & Access Management [3]';
    if (uidStr.startsWith('4')) return 'Network Activity [4]';
    if (uidStr.startsWith('5')) return 'Discovery [5]';
    if (uidStr.startsWith('6')) return 'Application Activity [6]';
    if (uidStr.startsWith('7')) return 'Remediation [7]';
    if (uidStr.startsWith('8')) return 'Unmanned Systems [8]';
    return 'Other';
  }
}
