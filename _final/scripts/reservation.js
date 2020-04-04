// Responsive menu js
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

// last Update Date
const lastUpdateDate = document.lastModified;
document.getElementById("lastUpdateDate").innerHTML = lastUpdateDate;



/**************************************************************************************
Calendar Section for building and rebuilding upon user input
*/

// Code for Dates that will be used throughout the page 
let fullDate;
const currentDate = new Date();

// Get day of week 
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday',
  'Wednesday', 'Thursday', 'Friday',
  'Saturday'
];
const day = daysOfWeek[currentDate.getDay()];

// Get day of Month 
const dayOfMonth = currentDate.getDate();

// Get  month 
const months = ['January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November',
  'December'
]
const month = months[currentDate.getMonth()];

// Get year
let year = currentDate.getFullYear();

// Full date 
fullDate = day + ', ' + dayOfMonth + ' ' + month + ' ' + year;

// selects the calendar section for use throughout the dynamic build
const calendar = document.getElementById('calendar');

let startDate = new Date(year, currentDate.getMonth(), 1);
const endDate = new Date(year, currentDate.getMonth() + 1, 1);

// variable that will be changed when the radio button is selected 
// allowing the calendar to be rebuilt
let ordinanceSelected = "Baptism";

function createCalendar() {
  // adding the month to the calendar
  calendar.innerHTML = `<h2>${month}</h2>`;

  // This fetch grabs the information from a local JSON file 
  // and displays it to the user dynamically
  fetch('json/temples.json')
    .then(response => {
      return response.json();
    })
    .then(response => {
      // selecting the ordinances time slots
      const ordinanceTimes = response.templeList[0].liveOrdinanceSchedule[ordinanceSelected];

      // This loop loops through the Month and creates the days with the 
      // day name and day of the month number
      for (startDate; startDate < endDate; startDate.setDate(startDate.getDate() + 1)) {
        let day = document.createElement('div');
        day.innerHTML = `<h4>${daysOfWeek[startDate.getDay()]}, ${startDate.getDate()}</h4>`;
        // This loops through events for the given day
        ordinanceTimes[startDate.getDay()].forEach(event => {
          // creating an element for 
          const eventElement = document.createElement('div');
          eventElement.setAttribute("class","times");
          // building each individual event availibility
          eventElement.innerHTML = `${event}`;
          day.appendChild(eventElement);
        });
        // adds the day elements to the calendar
        calendar.appendChild(day);
      }

      // resets startDate 
      startDate = new Date(year, currentDate.getMonth(), 1);
    })
}

document.getElementById('ordinanceSelector').addEventListener("click", (e) => {
  ordinanceSelected = e.target.value;
  createCalendar();
})

// Building in form on requested day and time
document.getElementsByClassName("times").addEventListener("click", (e) => {
  if (document.body.contains(document.getElementById('formRequest'))){
    document.getElementById('formRequest').remove();
  }

  const form = document.createElement('form');
  form.setAttribute("id", "formRequest");
  form.setAttribute("action", "thanks.html")
  form.innerHTML = `
          <div>
              <label for="fullName">Full Name: </label>
              <input type="text" id="fullName" name="fullName" required placeholder="John Smith">
          </div>
          <div>
              <label for="email">Email: </label>
              <input type="email" id="email" name="email" placeholder="example@domain.com">
          </div>
          <div>
              <label for="phone">Phone: </label>
              <input type="number" id="phone" name="phone" placeholder="(000)000-0000">
          </div>
          <div>
              <label for="sstate">State/Country: </label>
              <input type="text" id="state" name="state" required placeholder="i.e. Idaho, Hawaii, Mexico">
          </div>
          <div>
              <label for="message">Special Comments:</label>
              <textarea name="message" id="message" cols="50" rows="5" placeholder="Hello there!"></textarea>
          </div>
          <div class="submitReset">
              <input type="submit" value="Submit" id="submit">
              <input type="reset" value="Reset" id="reset">
          </div>`;

  // adding the form to the page
  e.target.append(form);
})

createCalendar();

/**************************************************************************************
END OF:   Calendar Section for building and rebuilding upon user input
*/

//diagnostics
// console.log(document.body.contains(document.getElementById('formRequest')))
// console.log(document.body.contains(document.getElementById('calendar')))
// document.body.addEventListener("click", (e)=>{
//   console.log(document.body.contains(document.getElementById('formRequest')))
// })

