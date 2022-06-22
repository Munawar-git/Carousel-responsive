var slideNr = 1;
var slides = document.querySelectorAll(".slide");
var totalSlides = slides.length;

var buttonLeft = document.querySelector(".button_left");
var buttonRight = document.querySelector(".button_right");

buttonLeft.addEventListener("click", toLeft);
buttonRight.addEventListener("click", toRight);


console.log(slides, totalSlides, buttonLeft, buttonRight)

function toLeft(){
    slideNr += 1;
    if (slideNr > totalSlides){
        slideNr = 1;
    }
    showSlide(slideNr);
    console.log(slideNr);
}

function toRight(){
    slideNr -= 1;
    if (slideNr < 1){
        slideNr = totalSlides;
    }
    showSlide(slideNr)
    console.log(slideNr);

}


function showSlide(number){
    for(i=0; i< totalSlides; i++){
        slides[i].classList = "slide slide__off";
    }
    slides[number-1].classList = "slide slide__top";
}