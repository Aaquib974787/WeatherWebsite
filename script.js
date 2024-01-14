const apiKey = '2d80f1ec651bfa51b13c34a44150eb72';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    
    const city = prompt('Enter city name:');
    if (city) {
        const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }
}

function displayWeather(data) {
    const weatherInfoElement = document.getElementById('weatherInfo');

    if (data.cod === '404') {
        weatherInfoElement.innerHTML = 'City not found';
    } else {
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Update background image based on temperature
        updateBackgroundImage(temperature);

        const html = `<p>Temperature: ${temperature} &#8451;</p>
                      <p>Description: ${description}</p>`;

        weatherInfoElement.innerHTML = html;
    }
}

function updateBackgroundImage(temperature) {
    const bodyElement = document.body;

    if (temperature > 20 && temperature < 25) {
        // Use a spring background image for 20 to 25 temperatures
        bodyElement.style.backgroundImage = 'url("image/spring.jpg")';
    }
    else if (temperature > 25 && temperature < 45) {
         // Use a Summer background image for 25 to 45 temperatures
        bodyElement.style.backgroundImage = 'url("image/summer.jpg")';
    }
    else if (temperature > 5 && temperature < 25 ) {
         // Use a Winter background image for 5 to 25 temperatures
        bodyElement.style.backgroundImage = 'url("image/winter.jpg")';
    }
    else if (temperature > 30 && temperature < 35 ) {
         // Use a Monsoon background image for 30 to 35 temperatures
        bodyElement.style.backgroundImage = 'url("image/monsoon.jpg")';
    }
    else {
       // Use a Autumn background image
        bodyElement.style.backgroundImage = 'url("image/autumn.jpg")';
    }
}

// Initial weather fetch on page load
getWeather();
