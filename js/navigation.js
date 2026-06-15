/**
 * ==========================================================
 * navigation.js
 * Premium Navigation System
 * ----------------------------------------------------------
 * Features:
 * - Sticky navbar behavior
 * - Active section highlighting
 * - Mobile menu toggle
 * - Smooth scrolling
 * - Scroll progress indicator
 * - Accessible interactions
 * ==========================================================
 */

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {

        const header =
            document.querySelector(".site-header");

        const navbar =
            document.querySelector(".navbar");

        const navLinks =
            document.querySelectorAll('.nav-links a[href^="#"]');

        const sections =
            document.querySelectorAll("section[id]");

        const mobileToggle =
            document.querySelector(".mobile-menu-toggle");

        const mobileMenu =
            document.querySelector(".nav-links");

        /* ==================================================
           CREATE SCROLL PROGRESS BAR
        ================================================== */

        const progressBar = document.createElement("div");
        progressBar.className = "scroll-progress";

        progressBar.style.position = "fixed";
        progressBar.style.top = "0";
        progressBar.style.left = "0";
        progressBar.style.width = "0%";
        progressBar.style.height = "3px";
        progressBar.style.zIndex = "9999";
        progressBar.style.background =
            "var(--gradient-primary)";
        progressBar.style.transition =
            "width 0.1s linear";

        document.body.appendChild(progressBar);

        /* ==================================================
           STICKY NAVBAR SCROLL EFFECT
        ================================================== */

        function handleNavbarScroll() {

            const scrollY = window.scrollY;

            if (!header) return;

            if (scrollY > 20) {

                header.classList.add("navbar-scrolled");

                header.style.backdropFilter =
                    "blur(20px)";

                header.style.webkitBackdropFilter =
                    "blur(20px)";

                header.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,.12)";

            } else {

                header.classList.remove("navbar-scrolled");

                header.style.boxShadow = "none";
            }
        }

        /* ==================================================
           SCROLL PROGRESS
        ================================================== */

        function updateScrollProgress() {

            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop;

            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress =
                scrollHeight > 0
                    ? (scrollTop / scrollHeight) * 100
                    : 0;

            progressBar.style.width =
                `${progress}%`;
        }

        /* ==================================================
           ACTIVE SECTION HIGHLIGHTING
        ================================================== */

        function updateActiveNavLink() {

            const scrollPosition =
                window.scrollY + 160;

            let currentSection = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop;

                const sectionHeight =
                    section.offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition <
                    sectionTop + sectionHeight
                ) {
                    currentSection = section.id;
                }

            });

            navLinks.forEach(link => {

                const href =
                    link.getAttribute("href");

                if (href === `#${currentSection}`) {

                    link.classList.add("active");

                } else {

                    link.classList.remove("active");
                }

            });
        }

        /* ==================================================
           SMOOTH SCROLLING
        ================================================== */

        navLinks.forEach(link => {

            link.addEventListener("click", (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                const navbarHeight =
                    navbar?.offsetHeight || 80;

                const offsetTop =
                    target.offsetTop -
                    navbarHeight -
                    10;

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });

                /* Close mobile menu after click */

                if (
                    mobileMenu &&
                    mobileMenu.classList.contains("mobile-open")
                ) {

                    mobileMenu.classList.remove(
                        "mobile-open"
                    );

                    mobileToggle?.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });

        });

        /* ==================================================
           MOBILE MENU
        ================================================== */

        function toggleMobileMenu() {

            if (!mobileMenu) return;

            const isOpen =
                mobileMenu.classList.contains(
                    "mobile-open"
                );

            mobileMenu.classList.toggle(
                "mobile-open"
            );

            if (mobileToggle) {

                mobileToggle.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );
            }

            document.body.classList.toggle(
                "mobile-menu-open",
                !isOpen
            );
        }

        if (mobileToggle) {

            mobileToggle.addEventListener(
                "click",
                toggleMobileMenu
            );
        }

        /* ==================================================
           CLOSE MOBILE MENU ON OUTSIDE CLICK
        ================================================== */

        document.addEventListener("click", (event) => {

            if (
                !mobileMenu ||
                !mobileToggle ||
                !mobileMenu.classList.contains(
                    "mobile-open"
                )
            ) {
                return;
            }

            const clickedInsideMenu =
                mobileMenu.contains(event.target);

            const clickedToggle =
                mobileToggle.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedToggle
            ) {

                mobileMenu.classList.remove(
                    "mobile-open"
                );

                mobileToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "mobile-menu-open"
                );
            }

        });

        /* ==================================================
           ESC KEY CLOSE MENU
        ================================================== */

        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Escape" &&
                mobileMenu?.classList.contains(
                    "mobile-open"
                )
            ) {

                mobileMenu.classList.remove(
                    "mobile-open"
                );

                document.body.classList.remove(
                    "mobile-menu-open"
                );

                mobileToggle?.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

        /* ==================================================
           INTERSECTION OBSERVER
        ================================================== */

        const observer = new IntersectionObserver(

            () => {
                updateActiveNavLink();
            },

            {
                root: null,
                rootMargin: "-30% 0px -50% 0px",
                threshold: 0
            }

        );

        sections.forEach(section => {
            observer.observe(section);
        });

        /* ==================================================
           SCROLL EVENTS
        ================================================== */

        let ticking = false;

        function handleScroll() {

            if (!ticking) {

                window.requestAnimationFrame(() => {

                    handleNavbarScroll();
                    updateScrollProgress();
                    updateActiveNavLink();

                    ticking = false;

                });

                ticking = true;
            }
        }

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        /* ==================================================
           INITIALIZE
        ================================================== */

        handleNavbarScroll();
        updateScrollProgress();
        updateActiveNavLink();

    });

})();