import { readFromLS, writeToLS } from './utilities';

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
const startday = document.getElementById('startday');
const endday = document.getElementById('endday');

let startDate = new Date(year, currentDate.getMonth(), 1);
const endDate = new Date(year, currentDate.getMonth() + 1, 1);

let startEndCounter = 0;

// variable that will be changed when the radio button is selected 
// allowing the calendar to be rebuilt
// let ordinanceSelected = "Baptism";

// populates the endadate select list
function populateEndDate() {
  let start = 1;

  startday.childNodes.forEach((option, i) => {
    if(i != 0){
      if(option.hasAttribute('selected')){
        start = parseInt(option.getAttribute('value'));
      }
    }
  })
  
  // clears out previously selected items
  endday.innerHTML = ``;

  // creates a starting date for the possible last day
  let endDateStart = new Date(year, currentDate.getMonth(), start + 1);

  // loops through the possible enddates and adds them as options to the list 
  for (endDateStart; endDateStart < endDate; endDateStart.setDate( endDateStart.getDate() + 1)) {
    let option = document.createElement('option');
    option.setAttribute('value', endDateStart.getDate());
    option.innerHTML = `${month}, ${endDateStart.getDate()}`;
    endday.appendChild(option);
  }
}

function setFirstHighlightedDay() {
  
  calendar.childNodes.forEach((day) => {
    if (day.classList.contains('firstDay')){
      day.classList.remove('firstDay')
    } else if (day.getAttribute('data-day') === startday.selectedOptions[0].getAttribute('value')){
      day.classList.add('firstDay')
    }
  })
}

function setLastHighlightedDay(){

  calendar.childNodes.forEach((day) => {
    if (day.classList.contains('lastDay')){
      day.classList.remove('lastDay')
    } else if (day.getAttribute('data-day') === endday.selectedOptions[0].getAttribute('value')){
      day.classList.add('lastDay')
    }
  })
}

function setMiddleHighlightedDays(){

  calendar.childNodes.forEach(day => {
    if (parseInt(day.getAttribute('data-day')) > parseInt(startday.selectedOptions[0].getAttribute('value')) 
        && parseInt(day.getAttribute('data-day')) < parseInt(endday.selectedOptions[0].getAttribute('value'))){
      day.classList.add('middleDays')
    } else if(day.classList.contains('middleDays')){
      day.classList.remove('middleDays')
    }
  })
}

  



function createCalendar() {
  //   // adding the month to the calendar
  calendar.innerHTML = `<h2>${month}</h2>`;

  // adding pad days
  for (let padDay = 0; padDay < 6 - startDate.getDay(); padDay++){
    let day = document.createElement('div');
    day.setAttribute("class", "padDays");
    day.innerHTML = `<h4></h4>`;
    calendar.appendChild(day);
  }

  // loops through the beginning of one month and prints out the days
  for (startDate; startDate < endDate; startDate.setDate(startDate.getDate() + 1)) {
    let day = document.createElement('div');
    day.setAttribute("class", "day");
    day.setAttribute("data-day", startDate.getDate());
    day.innerHTML = `<h4>${daysOfWeek[startDate.getDay()]}, ${startDate.getDate()}</h4>`;

    // adding an event listener to each day in the calendar
    day.addEventListener('click', (e) => {
      // gets the target element
      let target = e.target;

      // makes sure that the correct element is selectet no matter what is hit within the day
      if (target.nodeName === "H4"){
        target = target.parentNode;
      }

      // gets the attribute data-day for the use of comparison
      let selectStartDay = target.getAttribute("data-day");

      // Controls whether the first day is going to be moved or the second day
      // will be moved alternating on even and odd clicks
      if (startEndCounter % 2 === 0){
        // controlling which elements are selected
        startday.childNodes.forEach((option, i) => {
          if (i !== 0){
            // console.log(option.getAttribute('value'));
            if(option.getAttribute('value') === selectStartDay){
              option.setAttribute('selected', 'true');
            }else{
              option.removeAttribute('selected');
            }
          }
        })
        setFirstHighlightedDay();
        // incrementing counter to trigger end day move
        startEndCounter++;
      } else if (startEndCounter % 2 === 1){
        // controlling which elements are selected
        endday.childNodes.forEach((option, i) => {
          if (i !== 0){
            // console.log(option.getAttribute('value'));
            if(option.getAttribute('value') === selectStartDay){
              option.setAttribute('selected', 'true');
            }else{
              option.removeAttribute('selected');
            }
          }
        })
        setLastHighlightedDay();
        // incrementing counter to trigger start day move
        startEndCounter++;
      }

      setMiddleHighlightedDays();
      
      // rebuilds the endDate select list
      // populateEndDate();
    })
    // adds the day elements to the calendar
    calendar.appendChild(day);

    // adds a break element for the end of the week
    if (startDate.getDay() === 6) {
      let weekend = document.createElement('div');
      weekend.setAttribute('class', 'endOfWeek');
      calendar.appendChild(weekend);
    }

    // populates the start select list with options 
    let startday = document.getElementById('startday');
    let option = document.createElement('option');
    if (startDate.getDate()===1){
      option.setAttribute('selected', true);
    }
    option.setAttribute('value', startDate.getDate());
    option.innerHTML = `${month}, ${startDate.getDate()}`;
    startday.appendChild(option);
  }
}

// creates the calendar to be used
createCalendar();
// populates the end day select lists options
populateEndDate();

// highlights the default selected days
setFirstHighlightedDay();
setMiddleHighlightedDays();
setLastHighlightedDay();

// watchs for changes at the beginning of the form when the select statements are run
startday.addEventListener('change', (e) => {
  // check to see if the startday is after the endday
  if (parseInt(startday.selectedOptions[0].getAttribute('value')) >= parseInt(endday.selectedOptions[0].getAttribute('value'))) {
    // clears out the current options list so that it can be regenerated
    endday.innerHTML = ``;
    // gets the first availible day after the the startdate
    let endDateStart = new Date(year, currentDate.getMonth(), parseInt(e.target.value) + 1);
    // loops through the possible options for an endday and adds them to the endday select options
    for (endDateStart; endDateStart < endDate; endDateStart.setDate( endDateStart.getDate() + 1)) {
      let option = document.createElement('option');
      option.setAttribute('value', endDateStart.getDate());
      option.innerHTML = `${month}, ${endDateStart.getDate()}`;
      endday.appendChild(option);
    }
  }
  setFirstHighlightedDay();
  setMiddleHighlightedDays();
})

// watches for changes to the beginning of the for for the end day
endday.addEventListener('change', (e) => {
  setLastHighlightedDay();
  setMiddleHighlightedDays();
})











/**************************************************************************************
END OF:   Calendar Section for building and rebuilding upon user input
*/



/**************************************************************************************
Diagnostics: code used to diagnose what it happening within the scope of this file
*/

// console.log(document.body.contains(document.getElementById('formRequest')))
// console.log(document.body.contains(document.getElementById('calendar')))
// document.body.addEventListener("click", (e)=>{
//   console.log(document.body.contains(document.getElementById('formRequest')))
// })

/**************************************************************************************
END OF: Diagnostics: code used to diagnose what it happening within the scope of this file
*/


/**************************************************************************************
DUMP: Code that is not being used and is no longer needed but may be reintroduced 
        or canabalized for other use
*/

  // This fetch grabs the information from a local JSON file 
  // and displays it to the user dynamically
  //   fetch('json/temples.json')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(response => {
  //       // selecting the ordinances time slots
  //       const ordinanceTimes = response.templeList[0].liveOrdinanceSchedule[ordinanceSelected];

  //       // This loop loops through the Month and creates the days with the 
  //       // day name and day of the month number
  //       for (startDate; startDate < endDate; startDate.setDate(startDate.getDate() + 1)) {
  //         let day = document.createElement('div');
  //         day.innerHTML = `<h4>${daysOfWeek[startDate.getDay()]}, ${startDate.getDate()}</h4>`;
  //         // This loops through events for the given day
  //         ordinanceTimes[startDate.getDay()].forEach(event => {
  //           // creating an element for 
  //           const eventElement = document.createElement('div');
  //           eventElement.setAttribute("class","times");
  //           // building each individual event availibility
  //           eventElement.innerHTML = `${event}`;
  //           day.appendChild(eventElement);
  //         });
  //         // adds the day elements to the calendar
  //         calendar.appendChild(day);
  //       }

  //       // resets startDate 
  //       startDate = new Date(year, currentDate.getMonth(), 1);
  //     })


//  adjusts the time availibility per ordinance 
// document.getElementById('ordinanceSelector').addEventListener("click", (e) => {
//   ordinanceSelected = e.target.value;
//   createCalendar();
// })

// Building in form on requested day and time
// document.getElementsByClassName("times").addEventListener("click", (e) => {
//   if (document.body.contains(document.getElementById('formRequest'))){
//     document.getElementById('formRequest').remove();
//   }

//   const form = document.createElement('form');
//   form.setAttribute("id", "formRequest");
//   form.setAttribute("action", "thanks.html")
//   form.innerHTML = `
//           <div>
//               <label for="fullName">Full Name: </label>
//               <input type="text" id="fullName" name="fullName" required placeholder="John Smith">
//           </div>
//           <div>
//               <label for="email">Email: </label>
//               <input type="email" id="email" name="email" placeholder="example@domain.com">
//           </div>
//           <div>
//               <label for="phone">Phone: </label>
//               <input type="number" id="phone" name="phone" placeholder="(000)000-0000">
//           </div>
//           <div>
//               <label for="sstate">State/Country: </label>
//               <input type="text" id="state" name="state" required placeholder="i.e. Idaho, Hawaii, Mexico">
//           </div>
//           <div>
//               <label for="message">Special Comments:</label>
//               <textarea name="message" id="message" cols="50" rows="5" placeholder="Hello there!"></textarea>
//           </div>
//           <div class="submitReset">
//               <input type="submit" value="Submit" id="submit">
//               <input type="reset" value="Reset" id="reset">
//           </div>`;

//   // adding the form to the page
//   e.target.append(form);
// })


/**************************************************************************************
END OF: DUMP: Code that is not being used and is no longer needed but may be reintroduced 
              or canabalized for other use
*/




