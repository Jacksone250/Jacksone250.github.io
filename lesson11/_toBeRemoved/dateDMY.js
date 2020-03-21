
// used by all pages for date and time poosible candidate for utilities or main 

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