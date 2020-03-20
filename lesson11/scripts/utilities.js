
// gets the current weather for the provided city id
function getCurrentWeather(cityId) {
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id='+ cityId +'&appid=2be460d3e530a2b612efa298610ed104&units=imperial';
    fetch(apiURL)
        .then(response => response.json())
        .then(
            jsObject => {
                console.log(jsObject);

                // getting current temp
                document.querySelector('#current-temp')
                    .textContent = jsObject.main.temp;

                const weatherIcon = document.querySelector('#weather-icon');

                // setting icon
                const image = 'https://openweathermap.org/img/w/' +
                    jsObject.weather[0].icon + '.png';
                weatherIcon.setAttribute('src', image);

                // adjusting icon alt text
                let alt = jsObject.weather[0].description;
                weatherIcon.setAttribute('alt', alt);
            }
        );
}

// gets events for the city page 
function getEvents(cityName) {
    fetch('https://byui-cit230.github.io/weather/data/towndata.json')
        .then(response => response.json())
        .then(
            response => {
                response.towns.forEach(town => {
                    town.events.forEach(event => {
                        if (town.name.toLowerCase() === cityName.toLowerCase()) {
                            let li = document.createElement('li');
                            li.textContent = event;
                            document.getElementById('events').appendChild(li);
                        }
                    });
                })
            }
        )
}