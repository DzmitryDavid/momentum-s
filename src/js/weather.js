const temperature =  document.querySelector('.weather__temperature');
const weatherDescription = document.querySelector('.weather__description');
const city = document.querySelector('.weather__city');

city.value = 'minsk'
const getWeather = async function() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&APPID=13a38ef6709ac4364ff921353045412a&units=metric`;
    const res = await fetch(url);
    
            if (res.status === 404) {
                city.value = "Invalid city";
                city.style.color = "#7f7f7f";
            } else {
                city.style.color = "rgb(235, 235, 235)";
            }
    
    const data = await res.json();
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
};

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
};

city.addEventListener('keypress', setCity);

export default getWeather;
