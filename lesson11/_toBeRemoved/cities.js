
// PLEASE NOTE: This file should no longer be in use trouble shoot removing it when ready to begin removing files.

// gets the cities and their info to be displayed for the users
// fetch('https://byui-cit230.github.io/weather/data/towndata.json')
//     .then(result => {
//         return result.json();
//     })
//     .then(resultJSON => {
//         let towns = resultJSON.towns;
        
//         towns.forEach(town => {
//             if (town.name === 'Fish Haven') {
//                 document.querySelector('#fhName').textContent = town.name;
//                 document.querySelector('#fhMotto').textContent = town.motto;
//                 document.querySelector('#fhYear').textContent = `Year Founded:  ${town.yearFounded}`;
//                 document.querySelector('#fhPop').textContent = `Population: ${town.currentPopulation}`;
//                 document.querySelector('#fhRain').textContent = `Annual Rain Fall: ${town.averageRainfall}`;
//                 document.querySelector('#fhImg').setAttribute('src', `images/${town.photo}`);
//                 document.querySelector('#fhImg').setAttribute('alt', 'Picture of the Fish Haven');
//             }
//             else if (town.name === 'Preston') {
//                 document.querySelector('#pName').textContent = town.name;
//                 document.querySelector('#pMotto').textContent = town.motto;
//                 document.querySelector('#pYear').textContent = `Year Founded:  ${town.yearFounded}`;
//                 document.querySelector('#pPop').textContent = `Population: ${town.currentPopulation}`;
//                 document.querySelector('#pRain').textContent = `Annual Rain Fall: ${town.averageRainfall}`;
//                 document.querySelector('#pImg').setAttribute('src', `images/${town.photo}`);
//                 document.querySelector('#pImg').setAttribute('alt', 'Picture of the Preston');
//             }
//             else if (town.name === 'Soda Springs') {
//                 document.querySelector('#ssName').textContent = town.name;
//                 document.querySelector('#ssMotto').textContent = town.motto;
//                 document.querySelector('#ssYear').textContent = `Year Founded:  ${town.yearFounded}`;
//                 document.querySelector('#ssPop').textContent = `Population: ${town.currentPopulation}`;
//                 document.querySelector('#ssRain').textContent = `Annual Rain Fall: ${town.averageRainfall}`;
//                 document.querySelector('#ssImg').setAttribute('src', `images/${town.photo}`);
//                 document.querySelector('#ssImg').setAttribute('alt', 'Picture of the Soda Springs');
//             }
//         })
//     });