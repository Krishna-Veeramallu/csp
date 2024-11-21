document.addEventListener('DOMContentLoaded', () => {
  // Simulate Real-Time Power Usage
  const powerGauge = document.getElementById('power-gauge');
  const powerValue = document.getElementById('power-value');

  function updatePowerUsage() {
    const usage = (Math.random() * 5).toFixed(2); // Random value between 0 and 5 kW
    powerValue.textContent = `${usage} kW`;
    powerGauge.style.background = `conic-gradient(#198754 0% ${usage * 20}%, #dc3545 ${usage * 20}% 100%)`;
  }
  setInterval(updatePowerUsage, 1000);

  // Usage Trends Chart
  const ctx = document.getElementById('usage-trend-chart').getContext('2d');
  const trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      datasets: [{
        label: 'Hourly Energy Usage (kWh)',
        data: Array.from({ length: 24 }, () => Math.random() * 10),
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.1)',
        fill: true,
      }],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'kWh' } },
        x: { title: { display: true, text: 'Time of Day' } },
      },
    },
  });

  // Alerts Section
  const alertList = document.getElementById('alert-list');
  const alertMessages = [
    'High usage detected in Zone 1',
    'Unusual activity in Zone 3',
    'Power spike in Zone 2'
  ];

  function updateAlerts() {
    const randomAlert = alertMessages[Math.floor(Math.random() * alertMessages.length)];
    if (Math.random() > 0.8) { // Randomly show alerts
      const alertItem = document.createElement('li');
      alertItem.textContent = randomAlert;
      alertItem.className = 'list-group-item list-group-item-danger';
      alertList.prepend(alertItem);
    }
  }
  setInterval(updateAlerts, 5000);

  // Tips Section
  const tipsText = document.getElementById('tips-text');
  const tips = [
    'Consider using LED lighting to save power.',
    'Schedule high-consumption appliances during off-peak hours.',
    'Unplug devices when not in use to prevent phantom loads.',
  ];

  function updateTips() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipsText.textContent = randomTip;
  }
  setInterval(updateTips, 10000);
});
