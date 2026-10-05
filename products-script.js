const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll('.pure-image-slider .slide');
    if(images.length > 0) {
        let currentIndex = 0;
        function changeSlide() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }
        setInterval(changeSlide, 4000);
    }
});