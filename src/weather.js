const COORDS = 'coords';
const WEATHER_API_KEY = 'e8044084976053ae1f636577fd6536eb';
const weather = document.querySelector('.js-weather');

function getWeather({ latitude, longitude }) {
  console.log('getWeather: ', { latitude, longitude });
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${Math.round(temperature)}° @ ${place}`;
    });
}

function saveCoords(coordsObject) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObject));
}

function handleGeoSuccess(position) {
  // console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObject = {
    latitude,
    longitude,
  };
  saveCoords(coordsObject);
  getWeather(coordsObject);
}

function handleGeoError() {
  console.log('Cant accegeo location.');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords) {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords);
  } else {
    askForCoords();
  }
}

function init() {
  loadCoords();
}

init();
