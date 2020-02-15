// weather summary update 
let f, t, s;

t = 50;
s = 10;

if (t <= 50 && s >= 3) {
  f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
  document.querySelector('#wind-chill').innerHTML = f.toFixed(2) + '&deg;';
} else {
  f = 'N/A'
  // document.querySelector('#wind-chill').innerHTML = f;
  // document.querySelector('#wind-chill-div').style.display = 'none';
  document.querySelector('#wind-chill-div').classList.add('hidden');
}

document.querySelector('#current-temp').innerHTML = `${t.toFixed(2)}&deg;`;
document.querySelector('#wind-speed').innerHTML = s + 'mph';


// aside pancakse at the park 
const checkDay = new Date();
const aside = document.querySelector('aside');

if (checkDay.getDay() !== 5) {
  aside.style.display = 'none';
} else {
  aside.style.display = 'block';
}


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

WebFont.load({
  google: {
    families: [
      'Roboto'
    ]
  }
});