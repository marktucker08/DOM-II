import './less/index.less'

// Your code goes here!

window.onload = function (event) {
    h1.textContent = "Fun Bus GO!";
}

const introHeading = document.querySelector('.intro h2');
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
            introHeading.textContent += text
        })
})

const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'yellow';
});

const homeContainer = document.querySelector('.home')
const busImg = document.querySelector('.intro img');
busImg.addEventListener('click', event => {
    homeContainer.style.backgroundColor = 'yellow';
});
function escKey(event){
    if (event.key === "Escape") {
        homeContainer.style.backgroundColor = 'white';
    }
}
document.addEventListener('keydown', escKey);

const imgContent = document.querySelector('.img-content');
const h2Text = document.querySelector('.content-section p');
function logSelection(event) {
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(`You selected: ${selection}`);
    event.target.style.color = 'pink';
  }
h2Text.addEventListener('select', logSelection);

const footerText = document.querySelector('footer p');
footerText.addEventListener('dblclick', event => {
    alert("****Why'd you click here????****");
})

const destinations = document.querySelectorAll('.destination');

for (let destination of destinations) {
    destination.addEventListener('mouseenter', event => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}

const buttons = document.querySelector('.btn');
function homeBtn (event) {
    alert("preventDefault() won't let you check this!");
    event.preventDefault();
}
buttons.addEventListener('click', homeBtn);
    