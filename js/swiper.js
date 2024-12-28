document.addEventListener("DOMContentLoaded", function () {
  // Animation setup
  setup();

  // Initialize swipers with unique configurations
  const caseStudiesSwiper = new Swiper(".case-studies-grid", {
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

  const processStepsSwiper = new Swiper(".process-steps", {
    slidesPerView: "auto",
    spaceBetween: 25,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 12,
      },
      480: {
        spaceBetween: 18,
      },
      992: {
        spaceBetween: 25,
      },
    },
  });

  const blogPostsSwiper = new Swiper(".blog-posts-container", {
    slidesPerView: "auto",
    spaceBetween: 35,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 18,
      },
      480: {
        spaceBetween: 22,
      },
      992: {
        spaceBetween: 35,
      },
    },
  });

  const solutionsSwiper = new Swiper(".solutions-wrapper", {
    slidesPerView: "auto",
    spaceBetween: 28,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 14,
      },
      480: {
        spaceBetween: 19,
      },
      992: {
        spaceBetween: 28,
      },
    },
  });

  // Mobile Menu Functionality
  const menuToggle = document.querySelector(".menu-toggle");
  const drawerMenu = document.getElementById("drawerMenu");
  const drawerClose = document.querySelector(".drawer-close");
  const drawerItems = document.querySelectorAll(".drawer-item > a");

  // Toggle Drawer Menu
  menuToggle.addEventListener("click", () => {
    drawerMenu.classList.toggle("active");
    document.body.style.overflow = drawerMenu.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close Drawer Menu
  drawerClose.addEventListener("click", () => {
    drawerMenu.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Handle Submenu in Drawer
  drawerItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const parent = e.target.parentElement;
      parent.classList.toggle("active");
    });
  });

  // Close drawer when clicking outside
  document.addEventListener("click", (e) => {
    if (
      drawerMenu.classList.contains("active") &&
      !drawerMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      drawerMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
