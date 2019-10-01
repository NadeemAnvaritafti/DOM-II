const audio = document.createElement('audio');
audio.src = 'sounds/car-horn.mp3';

const audio2 = document.createElement('audio');
audio2.src = 'sounds/yeehaw.mp3';

const audio3 = document.createElement('audio');
audio3.src = 'sounds/yell.mp3';


const busImg = document.querySelector('.intro img');
busImg.addEventListener('click', (e) => {
    audio.play();
    e.stopPropagation();
})

busImg.addEventListener('dblclick', () => {
    audio2.play();
})


const lastImg = document.querySelectorAll('.content-destination img');
lastImg.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.1)';
        el.style.transition = 'all .7s';
    })
})

lastImg.forEach(el => {
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1.0)';
        el.style.transition = 'all .7s';
    })
})

const paragraph = document.createElement('p');
const headerParagraph = document.querySelector('.intro');
headerParagraph.appendChild(paragraph);

document.addEventListener('keydown', (key) => {
    paragraph.textContent = `You pressed: ${key.code}`;
})

document.addEventListener('keyup', () => {
    headerParagraph.style.background = '#17A2B8aa';
})

const footer = document.querySelector('.footer');
window.addEventListener('resize', () => {
    footer.style.background = '#17A2B8aa';
})

const logo = document.querySelector('.logo-heading');
window.addEventListener('scroll', () => {
    logo.style.color = '#17A2B8aa';
})

const text = document.querySelector('.intro p');
text.addEventListener('copy', () => {
    alert("Stop copying!");
})

const newDiv = document.createElement('div');
newDiv.draggable = 'true';
newDiv.textContent = 'DRAG ME';
footer.prepend(newDiv);
newDiv.style.fontSize = '50px';
newDiv.style.textAlign = 'center';

newDiv.addEventListener('drag', () => {
    audio3.play();
})


const body = document.querySelector('body');
body.addEventListener('click', () => {
    body.style.background = '#FFEBCD';
})

const stopTheLinks = document.querySelectorAll('.nav-link');
stopTheLinks.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
    })
})