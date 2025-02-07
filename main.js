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
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1; // Обрабатываем случай, если индекс меньше 0
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0; // Обрабатываем случай, если индекс больше длины слайдов

    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlide(currentSlideIndex);
}

function showSlide(n) {
    const sliderContainer = document.querySelector('.slider-container');
    const slideWidth = slides[0].offsetWidth; // Определяем ширину одного слайда
    sliderContainer.style.transform = `translateX(-${n * slideWidth}px)`; // Сдвигаем слайдер на ширину слайда

    // Обновляем точки (pagination)
    dots.forEach((dot, index) => {
        if (index === n) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Автоматическая смена слайдов каждые 5 секунд
setInterval(() => {
    changeSlide(1);
}, 5000);

// Изначально отображаем первый слайд
showSlide(currentSlideIndex);