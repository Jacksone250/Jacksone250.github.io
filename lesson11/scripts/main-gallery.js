// This is the main JS file for gallery.html for Hot Cold Weather



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



// lazy loader for the gallery 
let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

// imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });


if('IntersectionObserver' in window) {
const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
    }
    });
});
imagesToLoad.forEach((img) => {
    observer.observe(img);
});
} else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});
}