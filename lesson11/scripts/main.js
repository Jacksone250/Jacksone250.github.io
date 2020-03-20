// This is the main JS file for index.html for Hot Cold Weather



// loads the font from google
WebFont.load({
  google: {
    families: [
      'Roboto'
    ]
  }
});



// attaching active class to active links
const navBar = document.querySelector('.navigation');
const links = navBar.getElementsByClassName('lnk');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}



// Responsive menu js
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}



// Code for Dates that will be used throughout the page 
let fullDate;
const currentDate = new Date(); 

// Get day of week 
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 
                    'Wednesday', 'Thursday', 'Friday', 
                    'Saturday'];
const day = daysOfWeek[currentDate.getDay()];

// Get day of Month 
const dayOfMonth = currentDate.getDate();

// Get  month 
const months = ['January', 'February', 'March', 'April', 
                'May', 'June', 'July', 'August', 
                'September', 'October', 'November', 
                'December']
const month = months[currentDate.getMonth()];

// Get year
let year = currentDate.getFullYear();

// Full date 
fullDate = day + ', ' + dayOfMonth + ' ' + month + ' ' + year;

//document.getElementById('currentDate').innerHTML = fullDate;
// or....
document.querySelector('#currentDate').textContent = fullDate;

// adjust the last update date 
const lastUpdateDate = document.lastModified;
document.getElementById("lastUpdateDate").innerHTML = lastUpdateDate;



// gets the cities and their info to be displayed for the users
fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then(result => {
        return result.json();
    })
    .then(resultJSON => {
        let towns = resultJSON.towns;
        
        towns.forEach(town => {
            if (town.name === 'Fish Haven') {
                document.querySelector('#fhName').textContent = town.name;
                document.querySelector('#fhMotto').textContent = town.motto;
                document.querySelector('#fhYear').textContent = `Year Founded:  ${town.yearFounded}`;
                document.querySelector('#fhPop').textContent = `Population: ${town.currentPopulation}`;
                document.querySelector('#fhRain').textContent = `Annual Rain Fall: ${town.averageRainfall}`;
                document.querySelector('#fhImg').setAttribute('src', `images/${town.photo}`);
                document.querySelector('#fhImg').setAttribute('alt', 'Picture of the Fish Haven');
            }
            else if (town.name === 'Preston') {
                document.querySelector('#pName').textContent = town.name;
                document.querySelector('#pMotto').textContent = town.motto;
                document.querySelector('#pYear').textContent = `Year Founded:  ${town.yearFounded}`;
                document.querySelector('#pPop').textContent = `Population: ${town.currentPopulation}`;
                document.querySelector('#pRain').textContent = `Annual Rain Fall: ${town.averageRainfall}`;
                document.querySelector('#pImg').setAttribute('src', `images/${town.photo}`);
                document.querySelector('#pImg').setAttribute('alt', 'Picture of the Preston');
            }
            else if (town.name === 'Soda Springs') {
                document.querySelector('#ssName').textContent = town.name;
                document.querySelector('#ssMotto').textContent = town.motto;
                document.querySelector('#ssYear').textContent = `Year Founded:  ${town.yearFounded}`;
                document.querySelector('#ssPop').textContent = `Population: ${town.currentPopulation}`;
                document.querySelector('#ssRain').textContent = `Annual Rain Fall: ${town.averageRainfall}`;
                document.querySelector('#ssImg').setAttribute('src', `images/${town.photo}`);
                document.querySelector('#ssImg').setAttribute('alt', 'Picture of the Soda Springs');
            }
        })
    });