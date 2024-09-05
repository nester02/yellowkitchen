const navBtn = document.querySelector('.header__menu'),
    mobileNav = document.querySelector('.mobile__nav');

navBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('-show');
});



const slideButtons = document.querySelectorAll('.slider__wrapper .card__btn'),
    sliderCards  = document.querySelector('.slider__wrapper .slider__cards'),
    slides = document.querySelectorAll('.slider__card');

slideButtons.forEach(button => {
    button.addEventListener('click', () => {
        const direction = button.id === 'prev-slide' ? -1 : 1,
            slideWidth = slides[0].clientWidth,
            scrollAmount = slideWidth * 2 * direction;
        sliderCards.scrollBy({ left: scrollAmount, behavior: 'smooth'});
    });
});


// Swiper slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    freeMode: true,

    slidesPerView: 1,
    spaceBetween: 24,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 14,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 24,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
});