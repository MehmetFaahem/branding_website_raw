document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".case-studies-grid", {
    slidesPerView: "auto",
    spaceBetween: 32,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 16,
      },
      // when window width is >= 480px
      480: {
        spaceBetween: 24,
      },
      // when window width is >= 992px
      992: {
        spaceBetween: 32,
      },
    },
  });

  const processStepsSwiper = new Swiper(".process-steps", {
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      480: {
        spaceBetween: 20,
      },
      992: {
        spaceBetween: 30,
      },
    },
  });

  const blogPostsSwiper = new Swiper(".blog-posts-container", {
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      480: {
        spaceBetween: 20,
      },
      992: {
        spaceBetween: 30,
      },
    },
  });

  const solutionsSwiper = new Swiper(".solutions-wrapper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 16,
      },
      480: {
        spaceBetween: 20,
      },
      992: {
        spaceBetween: 30,
      },
    },
  });
});
