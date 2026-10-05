const clientsSwiper = new Swiper(".clientsSwiper", {

    slidesPerView:5,
    spaceBetween:25,
    loop:true,
    speed:1000,

    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },

  navigation:{
    nextEl:".clients-next",
    prevEl:".clients-prev"
},

    breakpoints:{

        0:{
            slidesPerView:2,
            spaceBetween:15,
        },

        576:{
            slidesPerView:3,
        },

        768:{
            slidesPerView:4,
        },

        992:{
            slidesPerView:5,
        }

    }

});