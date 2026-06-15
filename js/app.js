/**
 * ==========================================================
 * app.js
 * Portfolio Application Bootstrap
 * ----------------------------------------------------------
 * Features:
 * - Application initialization
 * - Shared utility functions
 * - Global event listeners
 * - Accessibility enhancements
 * - Error handling
 * - Performance optimizations
 * ==========================================================
 */

(function () {
    "use strict";

    /* ======================================================
       APP CONFIG
    ====================================================== */

    const App = {

        version: "1.0.0",

        initialized: false,

        config: {

            debug: false,

            scrollOffset: 90,

            backToTopThreshold: 600

        }

    };

    /* ======================================================
       LOGGER
    ====================================================== */

    const Logger = {

        info(...args) {

            if (App.config.debug) {
                console.log(
                    "[Portfolio]",
                    ...args
                );
            }

        },

        warn(...args) {

            console.warn(
                "[Portfolio]",
                ...args
            );

        },

        error(...args) {

            console.error(
                "[Portfolio]",
                ...args
            );

        }

    };

    /* ======================================================
       UTILITIES
    ====================================================== */

    const Utils = {

        debounce(fn, delay = 250) {

            let timeout;

            return (...args) => {

                clearTimeout(timeout);

                timeout = setTimeout(
                    () => fn(...args),
                    delay
                );

            };

        },

        throttle(fn, limit = 100) {

            let waiting = false;

            return (...args) => {

                if (waiting) return;

                fn(...args);

                waiting = true;

                setTimeout(() => {

                    waiting = false;

                }, limit);

            };

        },

        isMobile() {

            return window.innerWidth < 768;

        },

        prefersReducedMotion() {

            return window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        }

    };

    /* ======================================================
       BACK TO TOP BUTTON
    ====================================================== */

    function createBackToTopButton() {

        const button =
            document.createElement("button");

        button.id = "back-to-top";

        button.type = "button";

        button.setAttribute(
            "aria-label",
            "Back to top"
        );

        button.innerHTML = "↑";

        Object.assign(button.style, {

            position: "fixed",

            right: "24px",
            bottom: "24px",

            width: "48px",
            height: "48px",

            borderRadius: "999px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background:
                "var(--color-primary)",

            color: "#ffffff",

            fontSize: "1.2rem",

            opacity: "0",

            visibility: "hidden",

            transform:
                "translateY(10px)",

            transition:
                "all 250ms ease",

            zIndex: "900",

            boxShadow:
                "var(--shadow-lg)"
        });

        document.body.appendChild(button);

        button.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

        const updateVisibility =
            Utils.throttle(() => {

                const shouldShow =
                    window.scrollY >
                    App.config
                        .backToTopThreshold;

                button.style.opacity =
                    shouldShow ? "1" : "0";

                button.style.visibility =
                    shouldShow
                        ? "visible"
                        : "hidden";

                button.style.transform =
                    shouldShow
                        ? "translateY(0)"
                        : "translateY(10px)";

            }, 100);

        window.addEventListener(
            "scroll",
            updateVisibility,
            { passive: true }
        );
    }

    /* ======================================================
       CURRENT YEAR
    ====================================================== */

    function updateFooterYear() {

        const yearElements =
            document.querySelectorAll(
                "[data-current-year]"
            );

        if (!yearElements.length) return;

        const year =
            new Date().getFullYear();

        yearElements.forEach(el => {

            el.textContent = year;

        });

    }

    /* ======================================================
       EXTERNAL LINKS
    ====================================================== */

    function enhanceExternalLinks() {

        const links =
            document.querySelectorAll(
                'a[target="_blank"]'
            );

        links.forEach(link => {

            if (
                !link.rel.includes(
                    "noopener"
                )
            ) {

                link.rel +=
                    " noopener noreferrer";
            }

        });

    }

    /* ======================================================
       IMAGE LOADING
    ====================================================== */

    function optimizeImages() {

        const images =
            document.querySelectorAll("img");

        images.forEach(image => {

            if (
                !image.hasAttribute(
                    "loading"
                )
            ) {

                image.loading = "lazy";

            }

            if (
                !image.hasAttribute(
                    "decoding"
                )
            ) {

                image.decoding = "async";

            }

        });

    }

    /* ======================================================
       KEYBOARD ACCESSIBILITY
    ====================================================== */

    function setupKeyboardAccessibility() {

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "/" &&
                    !event.ctrlKey &&
                    !event.metaKey
                ) {

                    const searchInput =
                        document.querySelector(
                            '[data-search]'
                        );

                    if (searchInput) {

                        event.preventDefault();

                        searchInput.focus();
                    }

                }

            }
        );

    }

    /* ======================================================
       PAGE VISIBILITY
    ====================================================== */

    function setupVisibilityHandling() {

        document.addEventListener(
            "visibilitychange",
            () => {

                if (
                    document.hidden
                ) {

                    Logger.info(
                        "Page hidden"
                    );

                } else {

                    Logger.info(
                        "Page visible"
                    );
                }

            }
        );

    }

    /* ======================================================
       GLOBAL ERROR HANDLING
    ====================================================== */

    function setupErrorHandling() {

        window.addEventListener(
            "error",
            event => {

                Logger.error(
                    "Runtime error:",
                    event.error
                );

                if (
                    window
                        .PortfolioClipboard
                ) {

                    window
                        .PortfolioClipboard
                        .error(
                            "Something went wrong."
                        );
                }

            }
        );

        window.addEventListener(
            "unhandledrejection",
            event => {

                Logger.error(
                    "Unhandled Promise Rejection:",
                    event.reason
                );

            }
        );

    }

    /* ======================================================
       PERFORMANCE OBSERVER
    ====================================================== */

    function monitorPerformance() {

        if (
            !(
                "PerformanceObserver" in
                window
            )
        ) {
            return;
        }

        try {

            const observer =
                new PerformanceObserver(
                    list => {

                        list
                            .getEntries()
                            .forEach(
                                entry => {

                                    if (
                                        App.config
                                            .debug
                                    ) {

                                        Logger.info(
                                            entry.name,
                                            entry
                                        );
                                    }

                                }
                            );

                    }
                );

            observer.observe({

                entryTypes: [
                    "largest-contentful-paint"
                ]

            });

        } catch (error) {

            Logger.warn(
                "PerformanceObserver unavailable."
            );

        }

    }

    /* ======================================================
       GLOBAL HELPERS
    ====================================================== */

    window.PortfolioApp = {

        version: App.version,

        config: App.config,

        utils: Utils,

        notifySuccess(message) {

            if (
                window
                    .PortfolioClipboard
            ) {

                window
                    .PortfolioClipboard
                    .success(message);
            }

        },

        notifyError(message) {

            if (
                window
                    .PortfolioClipboard
            ) {

                window
                    .PortfolioClipboard
                    .error(message);
            }

        }

    };

    /* ======================================================
       INIT
    ====================================================== */

    function initialize() {

        if (App.initialized) {
            return;
        }

        App.initialized = true;

        Logger.info(
            "Initializing Portfolio..."
        );

        updateFooterYear();

        enhanceExternalLinks();

        optimizeImages();

        setupKeyboardAccessibility();

        setupVisibilityHandling();

        setupErrorHandling();

        monitorPerformance();

        createBackToTopButton();

        document.body.classList.add(
            "app-ready"
        );

        Logger.info(
            "Portfolio initialized."
        );

    }

    /* ======================================================
       DOM READY
    ====================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();

    }

})();