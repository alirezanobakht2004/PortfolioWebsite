/**
 * ==========================================================
 * theme.js
 * Premium Theme Management
 * ----------------------------------------------------------
 * Features:
 * - Dark mode by default
 * - Light mode toggle
 * - LocalStorage persistence
 * - Smooth theme transitions
 * - No theme flashing on page load
 * ==========================================================
 */

(function () {
    "use strict";

    const STORAGE_KEY = "portfolio-theme";
    const DEFAULT_THEME = "dark";

    /**
     * Get saved theme
     */
    function getSavedTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            return null;
        }
    }

    /**
     * Save theme
     */
    function saveTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (error) {
            console.warn("Unable to save theme preference.");
        }
    }

    /**
     * Apply theme immediately
     */
    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);

        const toggle = document.getElementById("theme-toggle");
        const icon = document.getElementById("theme-icon");

        if (toggle) {
            toggle.setAttribute(
                "aria-label",
                theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

            toggle.setAttribute(
                "aria-pressed",
                theme === "light"
            );
        }

        if (icon) {
            icon.textContent =
                theme === "dark"
                    ? "☀️"
                    : "🌙";
        }
    }

    /**
     * Determine initial theme
     */
    function getInitialTheme() {
        const savedTheme = getSavedTheme();

        if (savedTheme === "dark" || savedTheme === "light") {
            return savedTheme;
        }

        return DEFAULT_THEME;
    }

    /**
     * Prevent flash of wrong theme
     */
    const initialTheme = getInitialTheme();
    document.documentElement.setAttribute(
        "data-theme",
        initialTheme
    );

    /**
     * DOM Ready
     */
    document.addEventListener("DOMContentLoaded", () => {

        const toggleButton =
            document.getElementById("theme-toggle");

        applyTheme(initialTheme);

        if (!toggleButton) {
            return;
        }

        toggleButton.addEventListener("click", () => {

            const currentTheme =
                document.documentElement.getAttribute("data-theme");

            const newTheme =
                currentTheme === "dark"
                    ? "light"
                    : "dark";

            applyTheme(newTheme);
            saveTheme(newTheme);

        });

    });

})();