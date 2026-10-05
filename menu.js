document.addEventListener("DOMContentLoaded", function () {

    const mobileToggle = document.getElementById("mobileToggle");
    const headerNav = document.querySelector(".header-nav");

    if (mobileToggle && headerNav) {

        mobileToggle.addEventListener("click", function () {

            headerNav.classList.toggle("mobile-menu-open");

            // Icon change
            const icon = mobileToggle.querySelector("i");

            if (headerNav.classList.contains("mobile-menu-open")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    }

});