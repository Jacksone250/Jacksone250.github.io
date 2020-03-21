// This is the main JS file for fish-haven.html for Hot Cold Weather


import { getEvents } from './utilities.js';
import { getCurrentWeather } from './utilities.js';



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


// Forcast fetch to get the 5 day forcast
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=2be460d3e530a2b612efa298610ed104&units=imperial';

fetch(forecastURL)
    .then(response => response.json())
    .then(
      jsObject => {
        let counter = 1;
        jsObject.list.forEach(forecast => {
          if (forecast.dt_txt.includes('18:00')){
            let forecastdate = new Date(forecast.dt_txt.replace(' ', 'T'));
            let dayOfWeek = daysOfWeek[forecastdate.getDay()];
            document.getElementById(`day${counter}`).textContent = dayOfWeek;
            document.getElementById(`temp${counter}`).innerHTML = `<img id="icon${counter}" src="" alt="">${forecast.main.temp.toFixed(0)}&deg;F`;
            const weatherIcon = document.getElementById(`icon${counter}`);
            // setting icon
            const image = 'https://openweathermap.org/img/w/' +
                forecast.weather[0].icon + '.png';
            weatherIcon.setAttribute('src', image);
            // adjusting icon alt text
            let alt = forecast.weather[0].description;
            weatherIcon.setAttribute('alt', alt);
            counter++;
          }
        });

      }
    );


getEvents('fish haven');
getCurrentWeather(5585010);