import { Routes } from '@angular/router';
import { TelemetryPage } from './pages/telemetry/telemetry.page';
import { DataGeneratorPage } from './pages/data-generator/data-generator.page';
import { GraphVisualizerPage } from './pages/graph-visualizer/graph-visualizer.page';

export const routes: Routes = [
  { path: '', redirectTo: 'telemetry', pathMatch: 'full' },
  { path: 'telemetry', component: TelemetryPage, title: 'Telemetry Analysis' },
  { path: 'data-generator', component: DataGeneratorPage, title: 'Data Generator' },
  { path: 'graph', component: GraphVisualizerPage, title: 'Graph Visualizer' },
  { path: '**', redirectTo: 'telemetry' }
];
