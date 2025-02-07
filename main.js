function toggleMenu() {
    const navList = document.getElementById('nav-list')
    const hamburger = document.getElementById('hamburger-menu')
    
    
     
     navList.classList.toggle('open');
    
    
     hamburger.classList.toggle('open');
}

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function changeSlide(n) {
    currentSlideIndex += n;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1; // Wrap to last slide
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0; // Wrap to first slide

    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n - 1; // Dot is indexed from 1, but array is 0-indexed
    showSlide(currentSlideIndex);
}

function showSlide(n) {
    const sliderContainer = document.querySelector('.slider-container');
    const slideWidth = slides[0].offsetWidth; // Get the width of a slide
    sliderContainer.style.transform = `translateX(-${n * slideWidth}px)`; // Move to the appropriate slide
    
    // Update the active state of the pagination dots
    dots.forEach((dot, index) => {
        if (index === n) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Automatic slide change every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Initially show the first slide
showSlide(currentSlideIndex);
