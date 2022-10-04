import './less/index.less'

// Your code goes here!

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
const h2Text = document.querySelector('.content-section h2');
function selectContent(event) {
    event.target.style.color = 'purple';
}
h2Text.addEventListener('select', event => {
    event.target.style.color = 'pink';
});


const footerText = document.querySelector('footer p');
footerText.addEventListener('dblclick', event => {
    alert("****Why'd you click here????****");
})