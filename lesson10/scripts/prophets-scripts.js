fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
    .then(result => { return result.json(); 
    })
    .then(prophetList => {
        let prophets = prophetList.prophets;
            console.log(prophetList);
            console.log(prophets[0]);

            prophets.forEach( prophet => {
                console.log(prophet);
                const cards = document.getElementById('cards');
                cards.innerHTML += `<article>
                <h1>${prophet.name} ${prophet.lastname}</h1>
                <p> Date of Birth: ${prophet.birthdate} </p>
                <p> Place of Birth: ${prophet.birthplace}</p>
                <img src="${prophet.imageurl}">
                </article>`
            });
    });


// fetch('https://byui-cit230.github.io/lessons/lesson-09/data/la')
//     .then(result => { return result.json(); 
//     })
//     .then(prophetList => {
//         let prophets = prophetList.prophets;
//             console.log(prophetList);
//             console.log(prophets[0]);

//             prophets.forEach( prophet => {
//                 console.log(prophet);
//                 const cards = document.getElementById('cards');
//                 cards.innerHTML += `<article>
//                 <h1>${prophet.name} ${prophet.lastname}</h1>
//                 <p>Date of Birth: ${prophet.birthdate}</p>
//                 <p>Place of Birth: ${prophet.birthplace}</p>
//                 <img src="${prophet.imageurl}">
//                 </article>`

//                 let article = document.createElement('article');

//                 let h1 = document.createElement('h1');
//                 h1.textContent = `${prophet.name} ${prophet.lastname}`;


//                 let dateOfBirth = document.createElement('p');
//                 dateOfBirth = `Date of Birth: ${prophet.birthdate}`;

//                 let placeOfBirth = document.createElement('p');
//                 placeOfBirth = `Place of Birth: ${prophet.birthplace}`;

//                 let image = document.createElement('img');
//                 image.setAttribute('src', prophet.imageurl);

//                 article.appendChild(h1);
//                 cards.appendChild(article)
//             });
//     });
