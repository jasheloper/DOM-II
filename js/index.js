// Your code goes here


// create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. 

let aNavLink = document.querySelectorAll('.nav-link');
let theP = document.querySelectorAll('p');
const headerImg = document.querySelector('.intro img');
const mapImg = document.querySelector('.img-content img');


//header
headerImg.addEventListener('contextmenu', (event) => {
    alert('I was walking to my car when I noticed my pants were on fire. I turned to my friend and said, I think were going to need an oven and fast.')
});


//nav
aNavLink[0].addEventListener('mouseover', (event) => {
    event.target.style.color = 'tomato';
});
aNavLink[0].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
});

aNavLink[1].addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
});
aNavLink[1].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
});


aNavLink[2].addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
});
aNavLink[2].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
});

aNavLink[3].addEventListener('mouseover', (event) => {
    event.target.style.color = 'hotpink';
});
aNavLink[3].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
});





// paragraphs 
theP[0].addEventListener ('click', (event) => {
    event.target.style.backgroundColor = 'yellow'; 
});

theP[1].addEventListener ('copy', (event) => {
    alert('Text Copied!')
});


// images
mapImg[0].addEventListener ('mousemove', (event) => {
  event.target.style.width = '1%';
}

















// function addEventToList(list, event, fn) {
//     for (let q = 0; q < list.length; q++) {
//       list[q].addEventListener(event, fn);
//     }
//    }

//    let trollPar = document.querySelectorAll("p");
// addEventToList(trollPar, "contextmenu", function() {
//  this.textContent = "No no";
//  this.style.color = "crimson";
// });

