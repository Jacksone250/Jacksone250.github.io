// weather summary update
document.querySelector('#current-temp').innerHTML = '50&deg;'
document.querySelector('#wind-speed').innerHTML = '5mph'
document.querySelector('#humidity').innerHTML = '30%'

// aside pancakse at the park 
const checkDay = new Date();
const aside = document.querySelector('aside');

if ( checkDay.getDay() !== 5 ) {
    aside.style.display = 'none';
}
else {
    aside.style.display = 'block';
}


// attaching active class to active links
const navBar = document.querySelector('.navigation');
const links = navBar.getElementsByClassName('lnk');

for (let i = 0; i < lnks.length; i++) {
    lnks[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
    });
}

