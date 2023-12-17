const apiKey = "12cd233ef651716178e91c37c5da7ea2";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const city = urlParams.get("city") ?? "New York";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;


async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();
    document.getElementById(`speed`).textContent = Math.round(data.wind.speed) + ` km/h`
    const humidity = data.main.humidity;
    let humidity2 = document.querySelector(`.first`);
    humidity2.innerHTML = humidity + `%`
    document.getElementById(`temperature`).textContent = Math.round(data.main.temp) + `°C`
    const cityName = data.name;
    const cityName2 = document.getElementById(`cityName`);
    cityName2.textContent = cityName
    let searchBox = document.getElementById(`searchBox`);
    const searchBox2 = data.name;
    searchBox.addEventListener(`input`, (e) => {e.target.value});
    if(data.weather[0].main == "Clouds") {
        document.querySelector(`.forecast`).src = "/clouds.png"
    } else if(data.weather[0].main == "Clear") {
        document.querySelector(`.forecast`).src = "/clear.png"
    } else if(data.weather[0].main == "Rain") {
        document.querySelector(`.forecast`).src = "/rain.png"
    } else if(data.weather[0].main == "Drizzle") {
        document.querySelector(`.forecast`).src = "/drizzle.png"
    } else if(data.weather[0].main == "Mist") {
        document.querySelector(`.forecast`).src = "/mist.png"
    } else if(data.weather[0].main == "Snow") {
        document.querySelector(`.forecast`).src = "snow.png"
    }
}

checkWeather();
