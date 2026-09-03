async function getWeather() {
    const city = document.getElementById("city").value;
    const weather = document.getElementById("weather");

    weather.innerHTML = "Loading...";

    const apiKey = "8cb34b5bd1f0116899ec7d60b781c475";

    const url = "https://api.openweathermap.org/data/2.5/weather?q="
        + city + "&appid=" + apiKey + "&units=metric";

    try {
        const response = await fetch(url);

        if (response.status === 404) {
            weather.innerHTML = "City not found. Please try again.";
            return;
        }

        const data = await response.json();

        weather.innerHTML =
            "<h2>" + data.name + "</h2>" +
            "<p>Temperature: " + data.main.temp + "°C</p>" +
            "<p>Weather: " + data.weather[0].description + "</p>" +
            "<p>Humidity: " + data.main.humidity + "%</p>" +
            "<img src='https://openweathermap.org/img/wn/"
            + data.weather[0].icon + "@2x.png'>";

    } catch (error) {
        weather.innerHTML = "Something went wrong. Please try again.";
    }
}