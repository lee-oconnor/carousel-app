const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const dotOne = document.querySelector(".dotOne")
const dotTwo = document.querySelector(".dotTwo")
const dotThree = document.querySelector(".dotThree")

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
   
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}


dotTwo.addEventListener('click', function() {
    dotTwo.style.backgroundColor = "#a9a9a9";
    dotOne.style.backgroundColor = "#ffffff";
    dotThree.style.backgroundColor = "#ffffff";
    moveToNextSlide()
})

dotThree.addEventListener('click', function() {
    dotOne.style.backgroundColor = "#ffffff";
    dotTwo.style.backgroundColor = "#ffffff";
    dotThree.style.backgroundColor = "#a9a9a9";
    moveToNextSlide()
})

dotOne.addEventListener('click', function() {
  dotOne.style.backgroundColor = "#a9a9a9";
  dotTwo.style.backgroundColor = "#ffffff";
  moveToNextSlide()
})