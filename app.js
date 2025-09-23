const swiper = new Swiper(".swiper-container", {
  effect: "fade",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperNosotros = new Swiper(".swiper-nosotros", {
  direction: "vertical",
  loop: true,
  speed: 500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
});

const swiperProyectos = new Swiper(".swiper-proyectos", {
  loop: true,
  speed: 500,
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

const swiperTestimonios = new Swiper(".swiper-testimonios", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const swiperClientes = new Swiper(".swiper-clientes", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  slidesPerView: 2,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
