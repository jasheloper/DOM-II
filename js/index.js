// Your code goes here


// create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. 


const theImages = document.getElementsByTagName('img');
const theHeader = document.querySelectorAll('header');
const theWelcome = document.querySelector('h2');
const buttonAction = document.querySelectorAll('.btn')



theImages[0].addEventListener("click", () => { alert("Welcome to the Fun Bus!"); });
theImages[1].addEventListener("click", () => { alert("Are you ready for an adventure?"); });
theImages[2].addEventListener("click", () => { alert("Lots of great activities await you!"); });
theImages[3].addEventListener("click", () => { alert("Time to pick your destination!"); });



theHeader[0].addEventListener ('mouseover', (event) => {
    event.target.style.backgroundImage = "url('https://nadamoo.com/wp-content/uploads/2018/10/blue-texture-bg.jpg')";
    event.target.style.color = 'white';
  });
  

 theWelcome.addEventListener ('blur', (event) => {
     event.target.style.fontSize = '30px';
 });


 buttonAction[0].addEventListener('mouseenter', (event) => {
     event.target.style.backgroundColor = 'tomato';
     event.target.style.color = 'white';
 });
 buttonAction[1].addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'tomato';
    event.target.style.color = 'white';
});
buttonAction[2].addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'tomato';
    event.target.style.color = 'white';
});

buttonAction[0].addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '#cc8800';
    event.target.style.color = 'white';
    event.target.textContent = 'Are you sure?';
});

buttonAction[1].addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '#cc8800';
    event.target.style.color = 'white';
    event.target.textContent = 'Wait...';
});
buttonAction[2].addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '#cc8800';
    event.target.style.color = 'white';
    event.target.textContent = 'Don`t Go!' ;
});




//  for (i = 0; i < buttonAction.length; i++) {
//     buttonAction[i] = event.target.style.backgroundColor = 'tomato';
//     event.target.style.color = 'white';
//  }
 

