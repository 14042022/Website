//Website Slider
spaceBetween: 25,
loop: true,
centerSlide: 'true',
fade: 'true',
grabCursor: 'true',
//Pages
pagination: 
{
  el: ".swiper-pagination",
  clickable: true,
  dynamicBullets: true,
},
//Buttons
navigation: 
{
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
//Breakpoints
breakpoints:{
    0: 
    {
        slidesPerView: 1,
    },
    520: 
    {
        slidesPerView: 2,
    },
    950: 
    {
        slidesPerView: 3,
    },
},
});