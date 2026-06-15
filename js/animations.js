/**
 * ==========================================================
 * animations.js
 * Premium Animation System
 * ----------------------------------------------------------
 * Features:
 * - Intersection Observer reveal animations
 * - Animated statistics counters
 * - Scroll-based parallax effects
 * - GPU-accelerated transforms
 * - Reduced motion support
 * - RequestAnimationFrame optimization
 * ==========================================================
 */

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {

        const prefersReducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (prefersReducedMotion) {
            document.documentElement.classList.add(
                "reduced-motion"
            );
            return;
        }

        /* ==================================================
           REVEAL ELEMENTS
        ================================================== */

        const revealSelectors = [

            ".section-header",
            ".hero-content",
            ".hero-image-wrapper",
            ".metric-card",
            ".career-card",
            ".skill-domain-card",
            ".timeline-item",
            ".project-card",
            ".resume-card",
            ".achievement-card",
            ".education-card",
            ".certification-card",
            ".contact-card"

        ];

        const revealElements =
            document.querySelectorAll(
                revealSelectors.join(",")
            );

        revealElements.forEach((element, index) => {

            element.style.opacity = "0";
            element.style.transform =
                "translateY(30px)";
            element.style.transition =
                `opacity 700ms ease ${index * 30}ms,
                 transform 700ms ease ${index * 30}ms`;
        });

        const revealObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    });

                },

                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -80px 0px"
                }

            );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

        /* ==================================================
           STATISTICS COUNTERS
        ================================================== */

        const counterElements =
            document.querySelectorAll(
                "[data-counter]"
            );

        function animateCounter(element) {

            if (
                element.dataset.counted === "true"
            ) {
                return;
            }

            element.dataset.counted = "true";

            const target =
                parseInt(
                    element.dataset.counter,
                    10
                ) || 0;

            const duration = 1800;
            const startTime =
                performance.now();

            function updateCounter(now) {

                const progress =
                    Math.min(
                        (now - startTime) /
                        duration,
                        1
                    );

                const eased =
                    1 - Math.pow(
                        1 - progress,
                        4
                    );

                const current =
                    Math.floor(
                        eased * target
                    );

                element.textContent =
                    current.toLocaleString();

                if (progress < 1) {

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    const suffix =
                        element.dataset.suffix || "";

                    element.textContent =
                        target.toLocaleString() +
                        suffix;
                }
            }

            requestAnimationFrame(
                updateCounter
            );
        }

        const counterObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            animateCounter(
                                entry.target
                            );

                            counterObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },

                {
                    threshold: 0.5
                }

            );

        counterElements.forEach(element => {
            counterObserver.observe(element);
        });

        /* ==================================================
           PARALLAX EFFECTS
        ================================================== */

        const heroImage =
            document.querySelector(
                ".hero-image-wrapper"
            );

        const heroSection =
            document.querySelector(
                ".hero-section"
            );

        const floatingElements =
            document.querySelectorAll(
                "[data-parallax]"
            );

        let ticking = false;

        function updateParallax() {

            const scrollY =
                window.pageYOffset;

            if (
                heroImage &&
                heroSection
            ) {

                const heroHeight =
                    heroSection.offsetHeight;

                if (
                    scrollY <
                    heroHeight * 1.2
                ) {

                    heroImage.style.transform =
                        `translateY(${scrollY * 0.08}px)`;
                }
            }

            floatingElements.forEach(
                element => {

                    const speed =
                        parseFloat(
                            element.dataset
                                .parallax
                        ) || 0.08;

                    element.style.transform =
                        `translateY(${
                            scrollY * speed
                        }px)`;

                }
            );

            ticking = false;
        }

        function onScroll() {

            if (!ticking) {

                requestAnimationFrame(
                    updateParallax
                );

                ticking = true;
            }
        }

        window.addEventListener(
            "scroll",
            onScroll,
            { passive: true }
        );

        /* ==================================================
           SECTION FADE-IN SCALE
        ================================================== */

        const sectionObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.animate(
                                [
                                    {
                                        opacity: 0.9,
                                        transform:
                                            "scale(.98)"
                                    },
                                    {
                                        opacity: 1,
                                        transform:
                                            "scale(1)"
                                    }
                                ],
                                {
                                    duration: 600,
                                    easing:
                                        "cubic-bezier(.22,.61,.36,1)",
                                    fill: "forwards"
                                }
                            );

                            sectionObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },

                {
                    threshold: 0.1
                }

            );

        document
            .querySelectorAll(".section")
            .forEach(section => {
                sectionObserver.observe(
                    section
                );
            });

        /* ==================================================
           PROJECT CARD HOVER TILT
        ================================================== */

        const tiltCards =
            document.querySelectorAll(
                ".project-card"
            );

        tiltCards.forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        window.innerWidth < 1024
                    ) {
                        return;
                    }

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const rotateY =
                        ((x / rect.width) -
                            0.5) * 8;

                    const rotateX =
                        ((y / rect.height) -
                            0.5) * -8;

                    card.style.transform =
                        `
                        translateY(-6px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                    `;
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";
                }
            );
        });

        /* ==================================================
           HERO FLOATING EFFECT
        ================================================== */

        if (heroImage) {

            let start = null;

            function floatAnimation(
                timestamp
            ) {

                if (!start) {
                    start = timestamp;
                }

                const elapsed =
                    timestamp - start;

                const offset =
                    Math.sin(
                        elapsed / 1200
                    ) * 8;

                const scrollOffset =
                    window.scrollY * 0.08;

                heroImage.style.transform =
                    `translateY(${
                        offset +
                        scrollOffset
                    }px)`;

                requestAnimationFrame(
                    floatAnimation
                );
            }

            requestAnimationFrame(
                floatAnimation
            );
        }

    });

})();