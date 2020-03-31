fetch('json/temples.json')
    .then(response => {
       return response.json();
    })
    .then( response => {
        console.log(response);

        let counter = 0;
        response.templeList.forEach(temple => {
            const templeInfo = document.createElement('article');
            
            // building the main element of the templeInfo
            templeInfo.innerHTML = `
                <section>
                    <h2>${temple.templeName} Summary</h2>
                    <img src="images/${temple.imageName}" alt="${temple.imgAlt}">
                    <div>
                        <p>Address: ${temple.streetLine1} ${temple.city}, ${temple.state} ${temple.zip} ${temple.country}</p>
                        <p>Phone: ${temple.telephone}</p>
                        <p>Email: ${temple.email}</p>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <p>${temple.services[0]}</p>
                        <p>${temple.services[1]}</p>
                        <p>${temple.services[2]}</p>
                        <p>${temple.services[3]}</p>
                    </div>
                    <div id="history${counter}">
                        <h3>History</h3>
                    </div>
                    <div>
                        <h3>Ordinance Schedule</h3>
                        <p>Baptism: ${temple.schedule.Baptism}</p>
                        <p>Iniatory: ${temple.schedule.Iniatory}</p>
                        <p>Endowment: ${temple.schedule.Endowment}</p>
                        <p>Sealing: ${temple.schedule.Sealing}</p>
                    </div>
                    <div id="closureSchedule${counter}">
                        <h3>Temple Closure Schecdule</h3>
                    </div>
                </section>
                <section>
                    <h3>Current Weather</h3>
                    <img src="" alt="" id="currentConditions${counter}">
                    <p>Current Conditions: <span id="conditions${counter}"></span></p>
                    <p>Temperature: <span id="temp${counter}"></span></p>
                    <p>Wind Speed: <span id="windSpeed${counter}"></span></p>
                </section>`;
            // check to see what is in templeInfo
            console.log(templeInfo);

            //  adding the base temple info to the document
            document.querySelector('#content').appendChild(templeInfo);
            // adding the history events to the history section of the temple
            const history = document.getElementById(`history${counter}`);
            temple.History.forEach(event => {
                const eventElement = document.createElement('p');
                eventElement.innerHTML = `${event.date} - ${event.milestone}`;
                history.appendChild(eventElement);
            });

            // adding the history events to the history section of the temple
            const closureEvent = document.getElementById(`closureSchedule${counter}`);
            temple.closure.forEach(closure => {
                const eventElement = document.createElement('p');
                eventElement.innerHTML = `${closure}`;
                closureEvent.appendChild(eventElement);
            });


            counter++;
        });
    })

// last Update Date
const lastUpdateDate = document.lastModified;
document.getElementById("lastUpdateDate").innerHTML = lastUpdateDate;