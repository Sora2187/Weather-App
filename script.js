async function fetchWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "ab0fe41f46c2e23ec5014180c4ebd1fb"; // Replace with your API key

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred while fetching weather data. Please try again later.");
    }
}
