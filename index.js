// ------Fetch me your soul-----
//knapper
const hattKnapp = document.getElementById('hattKnapp');
const fargeKnapp = document.getElementById('fargeKnapp');

//divs
const hattDiv = document.getElementById('hattDiv');
const fargeDiv = document.getElementById('fargeDiv');

// kattefarger
const blaa = document.getElementById('blaa');
const graa = document.getElementById('graa');
const rosa = document.getElementById('rosa');

// hatter for katt
const krone = document.getElementById('krone');
const sombrero = document.getElementById('sombrero');
const pilgrim = document.getElementById('pilgrim');

// katten og hatter
const katten = document.getElementById('katt');
const hatter = document.getElementById('hatter');

// tittel
const tittel = document.getElementById('tittel');

// ------for å bytte mellom farge og hatt-------
hattKnapp.addEventListener('click',() => {
    hattDiv.classList.add('hattDiv');
    hattDiv.classList.remove('none');

    fargeDiv.classList.add('none');
    fargeDiv.classList.remove('fargeDiv');
});
fargeKnapp.addEventListener('click',() => {
    fargeDiv.classList.add('fargeDiv');
    fargeDiv.classList.remove('none');

    hattDiv.classList.add('none');
    hattDiv.classList.remove('hattDiv');
});

//-----For å bytte katt--------
blaa.addEventListener('click', () => {
    katten.style.backgroundImage = "url('./Bilder/blå\ katt.webp')"
});

graa.addEventListener('click', () => {
    katten.style.backgroundImage = "url('./Bilder/grå\ katt.webp')"
});

rosa.addEventListener('click', () => {
    katten.style.backgroundImage = "url('./Bilder/rosa\ katt.webp')"
});

//-------for å bytte hatt--------
krone.addEventListener('click', () => {
    hatter.style.top = '20vh'
    hatter.style.left = '18vw'
    hatter.style.height = '250px'
    hatter.style.width = '350px'
    hatter.style.backgroundImage = "url('./Bilder/crown.jpg')"
});
sombrero.addEventListener('click', () => {
    hatter.style.top = '20vh'
    hatter.style.left = '15vw'
    hatter.style.height = '250px'
    hatter.style.width = '470px'
    hatter.style.backgroundImage = "url('./Bilder/sombrero.png')"
});
pilgrim.addEventListener('click', () => {
    hatter.style.top = '19vh'
    hatter.style.left = '18vw'
    hatter.style.height = '250px'
    hatter.style.width = '290px'
    hatter.style.backgroundImage = "url('./Bilder/pilgrim.jpg'"
});

//-------for å bytte farge på planet--------



// if(tittelFarge === ''){

// } else {
//     if(tittelFarge === 'blå'){
//         console.log('haha')
//     } else if (tittelFarge === 'grå'){
//         console.log('haha')
//     }else {
//         console.log('haha')
//     }
// }