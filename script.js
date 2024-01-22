const weatherText = document.getElementById('weather');

const getWeather = async (location) => {
  const coords = location.coords;
  const API_KEY = '1b257ef3cb8c8b289c75b3d9f11236bd';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      weatherText.innerText = `Feels like ${data.main.feels_like}°C outside in ${data.name}.`;
    })
    .catch((err) => {
      console.log(err);
    });
};

const notFound = () => {
  console.log('not found');
};

navigator.geolocation.getCurrentPosition(getWeather, notFound);
