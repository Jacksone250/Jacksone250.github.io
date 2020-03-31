// gets the current weather for the provided city id
export function getCurrentWeather(cityId, counter) {
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id='+ cityId +'&appid=2be460d3e530a2b612efa298610ed104&units=imperial';
    fetch(apiURL)
        .then(response => response.json())
        .then(
            jsObject => {
                let f,t,s;

                // getting current temp
                t = jsObject.main.temp;
                document.querySelector(`#temp${counter}`).innerHTML = `${t.toFixed(0)}&deg;`;

                // getting wind speed
                s = jsObject.wind.speed;
                document.querySelector(`#windSpeed${counter}`).innerHTML = `${s.toFixed(0)} mph`;

                if (t <= 50 && s >= 3) {
                    f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
                    document.querySelector(`#windChill${counter}`).innerHTML = f.toFixed(0) + '&deg;';
                } else {
                    f = 'N/A'
                    document.querySelector(`#windChillP${counter}`).classList.add('hidden');
                }

                document.getElementById(`weatherDesc${counter}`).textContent = 
                jsObject.weather[0].main;

                // creating weather Icon
                const weatherIcon = document.querySelector(`#weatherIcon${counter}`);

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