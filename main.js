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
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;

    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlide(currentSlideIndex);
}

function showSlide(n) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${n * 100}%)`;

    // Update dots
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

// Initial slide
showSlide(currentSlideIndex);
