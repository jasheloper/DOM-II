// Your code goes here


// create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. 

let aNavLink = document.querySelectorAll('.nav-link');
const theHeader = document.querySelector('img');

//nav
aNavLink[0].addEventListener('mouseover', (event) => {
    event.target.style.color = 'tomato';
});
aNavLink[1].addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
});
aNavLink[2].addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
});
aNavLink[3].addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
});
aNavLink[4].addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange';
});

theHeader.addEventListener('dblclick', (event) => {
 event.classList.toggle('Large'); 
});







