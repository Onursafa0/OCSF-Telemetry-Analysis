/// <reference lib="webworker" />

/**
 * Gets the source username from an OCSF event object.
 * @param item The OCSF event object.
 * @returns The username (string) or undefined.
 */
function getUser(item: any): string | undefined {
  return item.actor?.user?.name;
}

addEventListener('message', ({ data }) => {
  const rawData = data;
  if (!rawData || rawData.length === 0) {
    postMessage({});
    return;
  }

  // 1. Time Series Chart by Severity (Stacked Bar Chart)
  const severities = ['Informational', 'Low', 'Medium', 'High', 'Critical', 'Fatal', 'Unknown'];
  const severityColorMap: { [key: string]: string } = {
    'Informational': '#58a3e6',
    'Low': '#62cb90',
    'Medium': '#ffce56',
    'High': '#ff9f40',
    'Critical': '#ff6384',
    'Fatal': '#9966ff',
    'Unknown': '#c9cbcf'
  };

  const timeMap = new Map<string, { [key: string]: number }>();
  rawData.forEach((item: any) => {
    // Group events by the hour for the time series chart
    const key = new Date(item.time).toISOString().slice(0, 13) + ":00:00"; 
    const severity = item.severity || 'Unknown';

    if (!timeMap.has(key)) {
      const initialCounts: { [key: string]: number } = {};
      severities.forEach(s => initialCounts[s] = 0);
      timeMap.set(key, initialCounts);
    }
    const currentCounts = timeMap.get(key);
    if (currentCounts) {
      currentCounts[severity] = (currentCounts[severity] || 0) + 1;
    }
  });

  const sortedTimeKeys = Array.from(timeMap.keys()).sort((a, b) => a.localeCompare(b));
  const severityChartLabels = sortedTimeKeys.map(key => new Date(key).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }));
  
  const severityChartDatasets = severities.map(severity => ({
    label: severity,
    data: sortedTimeKeys.map(key => timeMap.get(key)?.[severity] || 0),
    backgroundColor: severityColorMap[severity]
  }));


  // 2. Category Distribution Chart (Donut Chart)
  const categoryMap = new Map<string, number>();
  for (const item of rawData) {
    const key = item.category_name || 'Unknown Category';
    categoryMap.set(key, (categoryMap.get(key) || 0) + 1);
  }
  const sortedCategories = Array.from(categoryMap.entries()).sort((a, b) => b[1] - a[1]);
  const categoryLabels = sortedCategories.map(c => c[0]);
  const categoryData = sortedCategories.map(c => c[1]);


  // 3. Event Heatmap 
  const heatmapGrid = Array.from({ length: 7 }, () => Array(24).fill(0));
  for (const item of rawData) {
    const date = new Date(item.time);
    // (getDay() + 6) % 7 makes Monday=0, Tuesday=1, ..., Sunday=6
    const dayOfWeek = (date.getDay() + 6) % 7; 
    heatmapGrid[dayOfWeek][date.getHours()]++;
  }
  const heatmapData: number[][] = [];
  for (let d = 0; d < 7; d++) {
    for (let h = 0; h < 24; h++) {
      // The data format is [hour, day, count]
      heatmapData.push([h, d, heatmapGrid[d][h]]);
    }
  }

  // 4. Top Active Users (Horizontal Bar Chart)
  const userMap = new Map<string, number>();
  for (const item of rawData) {
    const user = getUser(item);
    if (user) {
      userMap.set(user, (userMap.get(user) || 0) + 1);
    }
  }
  const userSorted = Array.from(userMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10).reverse();

  postMessage({
    severityChart: {
      labels: severityChartLabels,
      datasets: severityChartDatasets
    },
    categoryChart: {
      labels: categoryLabels,
      data: categoryData
    },
    heatmapData,
    topUsersChart: {
      labels: userSorted.map(i => i[0]),
      data: userSorted.map(i => i[1])
    }
  });
});
