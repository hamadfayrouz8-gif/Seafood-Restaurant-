
document.addEventListener("DOMContentLoaded", function () {

    // !================= REVEAL ANIMATIONS =================

    function revealElements(selector, className, threshold, delayStep) {
        const elements = document.querySelectorAll(selector);

        // لو مفيش عناصر مطابقة، مفيش حاجة نعملها
        if (elements.length === 0) {
            return;
        }

        // إظهار العناصر لو المتصفح لا يدعم IntersectionObserver
        if (!("IntersectionObserver" in window)) {
            elements.forEach(function (element) {
                element.classList.add(className);
            });
            return;
        }

        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const elementIndex = Array.from(elements).indexOf(entry.target);

                    setTimeout(function () {
                        entry.target.classList.add(className);
                    }, elementIndex * delayStep);

                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: threshold
        });

        elements.forEach(function (element) {
            revealObserver.observe(element);
        });
    }


    // !================= ABOUT PAGE =================

    revealElements(
        ".body-fish, .body-recicpes, .body-wine",
        "show",
        0.2,
        300
    );


    // !================= MENU PAGE =================

    revealElements(
        ".body-meun1, .body-meun2, .body-meun3, .body-meun4",
        "show",
        0.3,
        150
    );


    // !================= CHEFS SECTION =================

    revealElements(
        ".chef-card",
        "reveal",
        0.15,
        150
    );


    // !================= MOBILE NAVBAR =================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        // إغلاق القائمة بعد الضغط على أي لينك
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

});
