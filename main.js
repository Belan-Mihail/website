function toggleMenu() {
    const navList = document.getElementById('nav-list')
    const hamburger = document.getElementById('hamburger-menu')
    
    
     
     navList.classList.toggle('open');
    
    
     hamburger.classList.toggle('open');
}

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    autoplay: {
        delay: 5000, // Change slide every 5 seconds
        disableOnInteraction: false,
    },
    loop: true,
});