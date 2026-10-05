// ===============================
// REVIEW SWIPER
// ===============================

const reviewSwiper = new Swiper(".reviewSwiper", {

    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    speed: 800,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".review-next",
        prevEl: ".review-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 1,
            spaceBetween: 25,
        },

        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        }

    }

});