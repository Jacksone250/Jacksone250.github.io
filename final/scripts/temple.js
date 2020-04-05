import { getCurrentWeather } from './utilities.js';

// Responsive menu js
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}


// adding the temples to the temples page 
fetch('json/temples.json')
    .then(response => {
       return response.json();
    })
    .then( response => {
        response.templeList.forEach((temple, i) => {
            const templeInfo = document.createElement('article');
            
            // building the main element of the templeInfo
            templeInfo.innerHTML = `
                <section>
                    <h2>${temple.templeName} Summary</h2>
                    <img src="images/${temple.imageName}" alt="${temple.imageAlt}" class="templeImg">
                </section>
                <section class="info">
                    <div>
                        <h3>Contact Information</h3>
                        <p>Address: ${temple.streetLine1} ${temple.city}, ${temple.state} ${temple.zip} ${temple.country}</p>
                        <p>Phone: ${temple.telephone}</p>
                        <p>Email: ${temple.email}</p>
                    </div>
                    <div>
                        <h3>Current Weather</h3>
                        <img id="weatherIcon${i}" class="weatherIcon" src="" alt="" >
                        <p>Current Conditions: <span id="weatherDesc${i}"></span></p>
                        <p>Temperature: <span id="temp${i}"></span></p>
                        <p>Wind Speed: <span id="windSpeed${i}"></span></p>
                        <p id="windChillP${i}">Wind Chill: <span id="windChill${i}"></span></p>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <p>${temple.services[0]}</p>
                        <p>${temple.services[1]}</p>
                        <p>${temple.services[2]}</p>
                        <p>${temple.services[3]}</p>
                    </div>
                    <div id="history${i}">
                        <h3>History</h3>
                    </div>
                    <div>
                        <h3>Ordinance Schedule</h3>
                        <p><h4>Baptism:</h4> ${temple.schedule.Baptism}</p>
                        <p><h4>Iniatory:</h4> ${temple.schedule.Iniatory}</p>
                        <p><h4>Endowment:</h4> ${temple.schedule.Endowment}</p>
                        <p><h4>Sealing:</h4> ${temple.schedule.Sealing}</p>
                    </div>
                    <div id="closureSchedule${i}">
                        <h3>Temple Closure Schecdule</h3>
                    </div>
                </section>`;

            //  adding the base temple info to the document
            document.querySelector('#content').appendChild(templeInfo);
            // adding the history events to the history section of the temple
            const history = document.getElementById(`history${i}`);
            temple.History.forEach(event => {
                const eventElement = document.createElement('p');
                eventElement.innerHTML = `${event.date} - ${event.milestone}`;
                history.appendChild(eventElement);
            });

            // adding the history events to the history section of the temple
            const closureEvent = document.getElementById(`closureSchedule${i}`);
            temple.closure.forEach(closure => {
                const eventElement = document.createElement('p');
                eventElement.innerHTML = `${closure}`;
                closureEvent.appendChild(eventElement);
            });

            getCurrentWeather(`${temple.weatherId}`, i);

        });
    })

// last Update Date
const lastUpdateDate = document.lastModified;
document.getElementById("lastUpdateDate").innerHTML = lastUpdateDate;