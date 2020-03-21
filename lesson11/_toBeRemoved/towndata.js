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