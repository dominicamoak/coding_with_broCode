
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const slides = document.querySelectorAll(".sliderImages img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initialize);
nextBtn.addEventListener("click", nextSlide);
previousBtn.addEventListener("click", previousSlide);

function initialize() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("currentSlide");
        intervalId = setInterval(nextSlide, 3000);
    }
}

function displaySlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("currentSlide");
    });
    slides[slideIndex].classList.add("currentSlide");
}

function nextSlide() {
    slideIndex++;
    displaySlide(slideIndex);
}

function previousSlide() {
    clearInterval(intervalId);
    slideIndex--;
    displaySlide(slideIndex);
}



