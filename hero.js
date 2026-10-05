const heroSwiper = new Swiper(".heroSwiper", {

    loop: true,

    speed: 800,

    slidesPerView: 1,

    spaceBetween: 0,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }

});
/* Mobile Menu */

const mobileToggle = document.getElementById("mobileToggle");
const headerNav = document.querySelector(".header-nav");

if (mobileToggle && headerNav) {

    mobileToggle.addEventListener("click", function () {

        headerNav.classList.toggle("show-menu");

        this.classList.toggle("active");

    });

}