
/* ================= MOBILE NAVBAR ================= */

function initMobileNavbar() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        console.error("Navbar elements not found!");
        return;
    }

    // Prevent duplicate initialization
    if (menuToggle.dataset.navInitialized === "true") {
        return;
    }

    menuToggle.dataset.navInitialized = "true";

    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileNavbar);
} else {
    initMobileNavbar();
}
