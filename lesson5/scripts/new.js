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


