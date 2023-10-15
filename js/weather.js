const API_KEY = config.api_key;

function getWeatherEmoji(weatherCondition) {
  // 날씨 조건에 따라 이모티콘을 반환
  switch (weatherCondition) {
    case "Clear":
      return "☀️";
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧️";
    case "Thunderstorm":
      return "⛈️";
    case "Snow":
      return "❄️";
    default:
      return "❓";
  }
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:last-child");
      const weather = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      const weatherCondition = data.weather[0].main;
      const temperature = Math.round(data.main.temp * 10) / 10;
      const emoji = getWeatherEmoji(weatherCondition);
      weather.innerText = `${emoji} ${temperature}도`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
