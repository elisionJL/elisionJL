let slideI   = 1;
showSlides(slideI);

//function for arrows to move slide
function plusSlides(n) {
  showSlides(slideI += n);
}
//mmove slide function for dot
function currentSlide(n) {
  showSlides(slideI = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {slideI = 1}
  if (n < 1) {slideI = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideI-1].style.display = "block";
  dots[slideI-1].className += " active";
}
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dots = document.querySelectorAll(".dot");
dots[0].addEventListener('click', function(){ return currentSlide(1)})
dots[1].addEventListener('click', function(){return currentSlide(2)})
prev.addEventListener('click', function(){return plusSlides(-1)})
next.addEventListener('click', function(){return plusSlides(1)})
window.onload=showSlides(1);