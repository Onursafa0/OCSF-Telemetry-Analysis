# OCSF Telemetry Analysis & Visualization Platform

This project is an Angular-based web application developed to **generate**, **analyze**, and **visualize** telemetry data in the **Open Cybersecurity Schema Framework (OCSF)** format.  
It provides a powerful toolset for cybersecurity analysts, researchers, and developers.

---

## 🚀 Overview
The platform consists of three main modules:

1. **Data Generator**  
   Generates random telemetry data based on specific cybersecurity scenarios or individual OCSF event classes. This enables the creation of rich datasets for testing, analysis, and simulation.

2. **Telemetry Analysis**  
   Processes OCSF JSON files — either generated or uploaded from external sources — and visualizes the data through interactive charts and tables. This helps quickly identify patterns, anomalies, and significant events in large datasets.

3. **Graph Visualizer**  
   Displays relationships between entities (users, processes, files, devices, etc.) in generated data as a network graph. This is critical for understanding the links between events in an attack chain or system.

The application also includes user-friendly features such as **multi-language support** (Turkish, English) and **switchable themes** (Light, Dark, Blue, Green).

---

## ✨ Features

### Data Generator
- **Two Generation Modes:**
  - **Single Class Mode:** Generates a specified number of events from a specific OCSF class (e.g., `File System Activity`, `Process Activity`, `Authentication`).
  - **Scenario Mode:** Creates a logical chain of events based on predefined attack scenarios such as *Ransomware Attack*, *Phishing*, and *Data Infiltration*.

- **Extensive OCSF Support:** Supports multiple OCSF categories and classes, including System Activity, Findings, Network Activity, IAM, and Application Activity.

- **Performance:** Data generation is handled asynchronously using **Web Workers** to prevent UI freezing.

- **Data Download & Visualization:** Generated data can be downloaded in JSON format or visualized directly in the Graph Visualizer.

---

### Telemetry Analysis
- **Data Upload:** Supports `.json` file upload via drag-and-drop or file selection.

- **Advanced Filtering:** Filter data by date range, event class (`class_uid`), user, and severity level.

- **Interactive Visualizations:**
  - **Event Volume by Severity:** Stacked bar chart showing events over time grouped by severity.
  - **Event Category Distribution:** Donut chart showing distribution by OCSF categories.
  - **Daily Event Heatmap:** Heatmap showing event density by day and hour.
  - **Top Active Users:** Horizontal bar chart of the top 10 users generating the most events.

- **Reporting & Export:**
  - Download all charts as a single **PDF**.
  - Export filtered data as **CSV** or **JSON**.

---

### Graph Visualizer
- **Network Visualization:** Displays complex event relationships as nodes (entities) and edges (connections).

- **Dynamic Filtering:** Filter nodes by type (`process`, `file`, `ip`, `user`, `device`, etc.) to simplify the view.

- **Interactive Exploration:**
  - Tooltips with detailed info on hover.
  - Click a node to open a detail panel showing all OCSF data fields.
  - Highlight a node and its directly connected nodes/edges while dimming the rest.

- **Performance Optimization:** Limits visible nodes in very large graphs and notifies the user for better readability.

---

## 🛠️ Technologies Used
- **Frontend:** [Angular 20+](https://angular.io/)
- **Chart Libraries:**
  - [ng2-charts](https://valor-software.com/ng2-charts/) (Chart.js-based) — For Telemetry Analysis
  - [ngx-echarts](https://xieziyu.github.io/ngx-echarts/) — For heatmaps
  - [@swimlane/ngx-graph](https://swimlane.github.io/ngx-graph/) — For Graph Visualizer
- **Internationalization (i18n):** [`@ngx-translate/core`](https://github.com/ngx-translate/core)
- **Utilities:**
  - [Bootstrap 5](https://getbootstrap.com/) — UI styling
  - [pdfmake](http://pdfmake.org/) — PDF generation
  - [file-saver](https://github.com/eligrey/FileSaver.js/) — File downloading

---

## 📂 Project Structure

```
ocsf-telemetry-analysis/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── data-generator/   # Data Generator components
│   │   │   ├── graph-visualizer/ # Graph Visualizer components
│   │   │   └── telemetry/        # Telemetry Analysis components
│   │   ├── services/
│   │   │   ├── ocsf-data-generator.service.ts # OCSF data generation logic
│   │   │   └── graph-data.service.ts          # Data sharing between components
│   │   ├── shared/
│   │   │   └── navbar/           # Navigation bar component
│   │   ├── workers/
│   │   │   ├── data-generator.worker.ts # Web Worker for data generation
│   │   │   └── data-processor.worker.ts # Web Worker for chart data processing
│   │   ├── app.routes.ts         # App routing definitions
│   │   └── app.config.ts         # App configuration
│   ├── assets/
│   │   ├── i18n/                 # Language files (en.json, tr.json)
│   ├── models/
│   │   └── ocsf/                 # OCSF event & object models
│   ├── styles/
│   │   └── themes.css            # Theme color definitions
│   └── main.ts                   # App entry point
├── angular.json                  # Angular CLI configuration
└── package.json                  # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Requirements
- **Node.js** (v18.x or later)
- **npm** (v8.x or later)
- **Angular CLI** (v20.x or later)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Onursafa0/OCSF-Telemetry-Analysis.git
cd OCSF-Telemetry-Analysis
```

2. Install dependencies:
```bash
npm install
```

### Running
1. Start the development server:
```bash
ng serve
```

2. Open [http://localhost:4200/](http://localhost:4200/) in your browser.  
   The app will automatically reload when you make changes.

---

## 📖 Usage

### Generating Data
1. Go to the **Data Generator** page.
2. Select **Single Class** or **Scenario** mode.
3. Choose the OCSF class or attack scenario.
4. Specify the number of records/events to generate.
5. Click **Generate Data**.
6. Once generated, you can either:
   - Download as JSON via **Download JSON**  
   - View directly in the **Graph Visualizer**.

---

### Telemetry Analysis
1. Go to the **Telemetry** page.
2. Upload your OCSF `.json` file via drag-and-drop or file selection.
3. Apply filters to narrow down the analysis.  
   Charts will update dynamically.
4. Export your analysis via the **Reporting** section:
   - **PDF**
   - **CSV**
   - **JSON**

---

### Graph Visualization
1. After generating data in the Data Generator, click **View Graph**.
2. On the **Graph Visualizer** page:
   - Use filters to select the types of entities you want to view.
   - Hover over or click nodes for more details.
3. Explore the graph interactively.

---
