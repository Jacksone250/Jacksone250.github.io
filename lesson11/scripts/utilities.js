
// gets the current weather for the provided city id
export function getCurrentWeather(cityId) {
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id='+ cityId +'&appid=2be460d3e530a2b612efa298610ed104&units=imperial';
    fetch(apiURL)
        .then(response => response.json())
        .then(
            jsObject => {
                let f,t,s;

                // getting current temp
                t = jsObject.main.temp;
                document.querySelector('#current-temp').innerHTML = `${t.toFixed(0)}&deg;`;

                // getting wind speed
                s = jsObject.wind.speed;
                document.querySelector('#wind-speed').innerHTML = `${s.toFixed(0)} mph`;

                if (t <= 50 && s >= 3) {
                    f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
                    document.querySelector('#wind-chill').innerHTML = f.toFixed(0) + '&deg;';
                } else {
                    f = 'N/A'
                    document.querySelector('#wind-chill-div').classList.add('hidden');
                }

                document.getElementById('weatherDesc').textContent = 
                jsObject.weather[0].main;

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
export function getEvents(cityName) {
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