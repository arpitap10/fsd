const DESTINATION_WEATHER = {
  "Goa": {
    description: "Warm beach days with a chance of late-evening showers. Pack sunscreen and a light rain layer.",
    weekly: [
      { day: "Mon", icon: "☀️", high: "32°C", low: "26°C", note: "Sunny" },
      { day: "Tue", icon: "⛅", high: "31°C", low: "26°C", note: "Partly cloudy" },
      { day: "Wed", icon: "🌦️", high: "30°C", low: "26°C", note: "Scattered showers" },
      { day: "Thu", icon: "☀️", high: "32°C", low: "26°C", note: "Warm" },
      { day: "Fri", icon: "⛅", high: "31°C", low: "25°C", note: "Mild breeze" },
      { day: "Sat", icon: "🌤️", high: "32°C", low: "26°C", note: "Sun with clouds" },
      { day: "Sun", icon: "🌙", high: "29°C", low: "25°C", note: "Pleasant evening" }
    ]
  },
  "Leh Ladakh": {
    description: "Cool mountain weather. Days are crisp and sunny, nights get cold quickly — warm layers are essential.",
    weekly: [
      { day: "Mon", icon: "🌞", high: "15°C", low: "2°C", note: "Clear and crisp" },
      { day: "Tue", icon: "⛅", high: "14°C", low: "1°C", note: "Light clouds" },
      { day: "Wed", icon: "🌤️", high: "16°C", low: "3°C", note: "Bright skies" },
      { day: "Thu", icon: "🌧️", high: "12°C", low: "1°C", note: "Chance of drizzle" },
      { day: "Fri", icon: "☁️", high: "13°C", low: "0°C", note: "Cool and overcast" },
      { day: "Sat", icon: "🌞", high: "17°C", low: "4°C", note: "Sunny day" },
      { day: "Sun", icon: "🌙", high: "14°C", low: "2°C", note: "Cold night" }
    ]
  },
  "Manali": {
    description: "Mountain air with fresh mornings and cooler nights. Expect a mix of sun, clouds, and a few showers.",
    weekly: [
      { day: "Mon", icon: "☀️", high: "21°C", low: "8°C", note: "Sunny" },
      { day: "Tue", icon: "🌦️", high: "19°C", low: "7°C", note: "Light rain" },
      { day: "Wed", icon: "⛅", high: "20°C", low: "8°C", note: "Partly cloudy" },
      { day: "Thu", icon: "🌤️", high: "22°C", low: "9°C", note: "Fair skies" },
      { day: "Fri", icon: "⛈️", high: "18°C", low: "7°C", note: "Brief showers" },
      { day: "Sat", icon: "☀️", high: "21°C", low: "8°C", note: "Fresh and bright" },
      { day: "Sun", icon: "🌙", high: "17°C", low: "6°C", note: "Chilly night" }
    ]
  },
  "Kerala": {
    description: "Tropical and lush. Expect warm days, humidity, and occasional thunder showers as the week progresses.",
    weekly: [
      { day: "Mon", icon: "🌤️", high: "31°C", low: "25°C", note: "Warm and humid" },
      { day: "Tue", icon: "⛅", high: "30°C", low: "25°C", note: "Cloudy spells" },
      { day: "Wed", icon: "🌧️", high: "29°C", low: "24°C", note: "Rain likely" },
      { day: "Thu", icon: "🌦️", high: "30°C", low: "24°C", note: "Showers" },
      { day: "Fri", icon: "☀️", high: "31°C", low: "25°C", note: "Sunny bursts" },
      { day: "Sat", icon: "🌧️", high: "29°C", low: "24°C", note: "Wet afternoon" },
      { day: "Sun", icon: "🌙", high: "28°C", low: "24°C", note: "Warm night" }
    ]
  },
  "Udaipur": {
    description: "Warm with clear skies. Evenings are pleasant, making it ideal for lakeside strolls and palace visits.",
    weekly: [
      { day: "Mon", icon: "☀️", high: "34°C", low: "24°C", note: "Hot and sunny" },
      { day: "Tue", icon: "🌤️", high: "33°C", low: "24°C", note: "Warm" },
      { day: "Wed", icon: "⛅", high: "33°C", low: "23°C", note: "Light clouds" },
      { day: "Thu", icon: "☀️", high: "35°C", low: "25°C", note: "Bright" },
      { day: "Fri", icon: "🌤️", high: "34°C", low: "25°C", note: "Dry heat" },
      { day: "Sat", icon: "☀️", high: "35°C", low: "24°C", note: "Sunny" },
      { day: "Sun", icon: "🌙", high: "31°C", low: "23°C", note: "Warm night" }
    ]
  },
  "Sikkim": {
    description: "Cool mountain weather with crisp mornings and clear afternoons. Pack layers and prepare for changing conditions.",
    weekly: [
      { day: "Mon", icon: "🌤️", high: "18°C", low: "8°C", note: "Bright day" },
      { day: "Tue", icon: "⛅", high: "17°C", low: "7°C", note: "Cloudy" },
      { day: "Wed", icon: "🌦️", high: "16°C", low: "7°C", note: "Light rain" },
      { day: "Thu", icon: "☁️", high: "15°C", low: "6°C", note: "Cool" },
      { day: "Fri", icon: "🌤️", high: "18°C", low: "8°C", note: "Clear" },
      { day: "Sat", icon: "☀️", high: "19°C", low: "9°C", note: "Sunny" },
      { day: "Sun", icon: "🌙", high: "16°C", low: "7°C", note: "Chilly night" }
    ]
  },
  "Kutch": {
    description: "Dry landscape with warm days and cool nights. A good week for salt desert walks and cultural festivals.",
    weekly: [
      { day: "Mon", icon: "☀️", high: "33°C", low: "20°C", note: "Dry and sunny" },
      { day: "Tue", icon: "🌤️", high: "32°C", low: "20°C", note: "Warm" },
      { day: "Wed", icon: "⛅", high: "33°C", low: "21°C", note: "Some clouds" },
      { day: "Thu", icon: "☀️", high: "34°C", low: "21°C", note: "Bright" },
      { day: "Fri", icon: "🌙", high: "30°C", low: "19°C", note: "Cool night" },
      { day: "Sat", icon: "☀️", high: "34°C", low: "20°C", note: "Warm" },
      { day: "Sun", icon: "🌙", high: "31°C", low: "20°C", note: "Pleasant" }
    ]
  },
  "Nagaland": {
    description: "Green, humid, and lively. Expect warm days with occasional showers as the hills breathe.",
    weekly: [
      { day: "Mon", icon: "🌦️", high: "26°C", low: "20°C", note: "Passing rain" },
      { day: "Tue", icon: "⛅", high: "27°C", low: "20°C", note: "Humid" },
      { day: "Wed", icon: "🌧️", high: "25°C", low: "19°C", note: "Showers" },
      { day: "Thu", icon: "☀️", high: "28°C", low: "20°C", note: "Warm spells" },
      { day: "Fri", icon: "🌤️", high: "27°C", low: "20°C", note: "Fresh" },
      { day: "Sat", icon: "🌦️", high: "26°C", low: "19°C", note: "Scattered rain" },
      { day: "Sun", icon: "🌙", high: "24°C", low: "18°C", note: "Cooler night" }
    ]
  }
};

function getPageDestination() {
  const title = document.title || '';
  if (title.includes('—')) {
    return title.split('—')[0].trim();
  }
  return title.trim();
}

function renderWeatherPanel() {
  const destination = getPageDestination();
  const data = DESTINATION_WEATHER[destination] || {
    description: 'Weekly forecast is currently unavailable for this destination.',
    weekly: []
  };

  const sectionHtml = `
    <section class="section-weather fade-up" id="weekly-weather">
      <div>
        <div class="section-label">Weather Report</div>
        <h2>This week in <span id="weatherLocation">${destination}</span></h2>
      </div>
      <div class="weather-summary" id="weatherSummary"></div>
      <div class="weather-grid" id="weatherGrid"></div>
    </section>
  `;

  const planSection = document.querySelector('.section-plan');
  if (planSection) {
    planSection.insertAdjacentHTML('beforebegin', sectionHtml);
  }

  const summaryEl = document.getElementById('weatherSummary');
  const gridEl = document.getElementById('weatherGrid');
  if (summaryEl) {
    summaryEl.textContent = data.description;
  }

  if (gridEl && data.weekly.length) {
    gridEl.innerHTML = data.weekly.map(item => `
      <article class="weather-card">
        <div class="weather-day">${item.day}</div>
        <div class="weather-icon">${item.icon}</div>
        <div class="weather-temp"><strong>${item.high}</strong> / ${item.low}</div>
        <div class="weather-note">${item.note}</div>
      </article>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', renderWeatherPanel);
