
//! ================= MOBILE NAVBAR for NAV Bottum ================= 

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

// !Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });

});





const items = document.querySelectorAll(
  '.image-meun-1, .meun-1-h2, .meun-1-p, ' +
  '.image-meun-2, .meun-2-h2, .meun-2-p, ' +
  '.image-meun-3, .meun-3-h2, .meun-3-p, ' +
  '.image-meun-4, .meun-4-h2, .meun-4-p'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

items.forEach(el => observer.observe(el));


const slideTrack = document.querySelector('.slide-track');
const slideItems = document.querySelectorAll('.slide-item');
const slideSlider = document.querySelector('.slide-slider');
let slideIndex = 0;
let slideTimer;

function slidePerView() {
  const w = window.innerWidth;
  if (w >= 1024) return 3;   // desktop
  if (w >= 600) return 2;    // تابلت
  return 1;                  // موبايل
}







document.addEventListener('DOMContentLoaded'), function () {
  const carouselEl = document.getElementById('carousel');

  // تشغيل الـ carousel
  new bootstrap.Carousel(carouselEl, { interval: 3000, ride: 'carousel' });

  // كل عنصر يعرض كذا صورة حسب حجم الشاشة
  function getItemsPerView() {
    if (window.innerWidth >= 992) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }}





