// Initialize the Leaflet map centered roughly on the entire planet
const map = L.map('map').setView([20, 0], 2);

// Base layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 19
}).addTo(map);

// Use your OpenWeatherMap API key
const API_KEY = '6b0fe9e71fa5f2a7544cedf1cada576a';

// Temperature overlay from OpenWeatherMap
const tempLayer = L.tileLayer(
  `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`,
  {
    attribution: 'Map data © OpenWeatherMap',
    maxZoom: 19
  }
);

// Add the temperature overlay to the map
tempLayer.addTo(map);
