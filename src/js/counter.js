// Active mode for like and dislike buttons

/* first video*/
var btn1 = document.querySelector('#like');
var btn2 = document.querySelector('#dislike');

btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('blue')) {
      btn2.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('blue')) {
      btn1.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

/*second video*/
var btn3 = document.querySelector('#like-1');
var btn4 = document.querySelector('#dislike-1');

btn3.addEventListener('click', function() {
  
    if (btn4.classList.contains('blue')) {
      btn4.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

btn4.addEventListener('click', function() {
  
    if (btn3.classList.contains('blue')) {
      btn3.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

/*third video*/
var btn5 = document.querySelector('#like-2');
var btn6 = document.querySelector('#dislike-2');

btn5.addEventListener('click', function() {
  
    if (btn6.classList.contains('blue')) {
      btn6.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

btn6.addEventListener('click', function() {
  
    if (btn5.classList.contains('blue')) {
      btn5.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

/*fourth video*/
var btn6 = document.querySelector('#like-3');
var btn7 = document.querySelector('#dislike-3');

btn6.addEventListener('click', function() {
  
    if (btn7.classList.contains('blue')) {
      btn7.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

btn7.addEventListener('click', function() {
  
    if (btn6.classList.contains('blue')) {
      btn6.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

/*fifth video*/
var btn8 = document.querySelector('#like-4');
var btn9 = document.querySelector('#dislike-4');

btn8.addEventListener('click', function() {
  
    if (btn9.classList.contains('blue')) {
      btn9.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

btn9.addEventListener('click', function() {
  
    if (btn8.classList.contains('blue')) {
      btn8.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

/*sixth video*/
var btn10 = document.querySelector('#like-5');
var btn11 = document.querySelector('#dislike-5');

btn10.addEventListener('click', function() {
  
    if (btn11.classList.contains('blue')) {
      btn11.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});

btn11.addEventListener('click', function() {
  
    if (btn10.classList.contains('blue')) {
      btn10.classList.remove('blue');
    } 
  this.classList.toggle('blue');
  
});



