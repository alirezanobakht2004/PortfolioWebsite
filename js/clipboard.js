/**
 * ==========================================================
 * clipboard.js
 * Clipboard & Toast Notification System
 * ----------------------------------------------------------
 * Features:
 * - Copy email
 * - Copy phone number
 * - Reusable copy functionality
 * - Toast notifications
 * - Graceful error handling
 * - Accessibility support
 * ==========================================================
 */

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {

        const toastContainer =
            document.getElementById("toast-container");

        /* ==================================================
           TOAST SYSTEM
        ================================================== */

        function createToast(
            message,
            type = "success",
            duration = 3000
        ) {

            if (!toastContainer) {
                console.warn(
                    "Toast container not found."
                );
                return;
            }

            const toast =
                document.createElement("div");

            toast.className =
                `toast ${type}`;

            toast.setAttribute(
                "role",
                "status"
            );

            toast.setAttribute(
                "aria-live",
                "polite"
            );

            toast.innerHTML = `
                <div class="toast-content">
                    ${message}
                </div>
            `;

            toastContainer.appendChild(
                toast
            );

            requestAnimationFrame(() => {
                toast.style.opacity = "1";
            });

            setTimeout(() => {

                toast.style.opacity = "0";
                toast.style.transform =
                    "translateY(12px)";

                setTimeout(() => {

                    toast.remove();

                }, 300);

            }, duration);
        }

        /* ==================================================
           CLIPBOARD COPY
        ================================================== */

        async function copyText(
            text,
            successMessage
        ) {

            if (!text) {

                createToast(
                    "Nothing to copy.",
                    "warning"
                );

                return;
            }

            try {

                if (
                    navigator.clipboard &&
                    window.isSecureContext
                ) {

                    await navigator.clipboard.writeText(
                        text
                    );

                } else {

                    const textArea =
                        document.createElement(
                            "textarea"
                        );

                    textArea.value = text;

                    textArea.style.position =
                        "fixed";

                    textArea.style.left =
                        "-9999px";

                    document.body.appendChild(
                        textArea
                    );

                    textArea.focus();
                    textArea.select();

                    const successful =
                        document.execCommand(
                            "copy"
                        );

                    document.body.removeChild(
                        textArea
                    );

                    if (!successful) {

                        throw new Error(
                            "Copy command failed."
                        );
                    }
                }

                createToast(
                    successMessage,
                    "success"
                );

            } catch (error) {

                console.error(
                    "Clipboard error:",
                    error
                );

                createToast(
                    "Unable to copy. Please copy manually.",
                    "error",
                    4000
                );
            }
        }

        /* ==================================================
           COPY BUTTONS
        ================================================== */

        const copyButtons =
            document.querySelectorAll(
                "[data-copy]"
            );

        copyButtons.forEach(button => {

            button.addEventListener(
                "click",
                async () => {

                    const value =
                        button.dataset.copy;

                    const originalText =
                        button.textContent;

                    const isEmail =
                        value.includes("@");

                    const successMessage =
                        isEmail
                            ? "Email copied to clipboard."
                            : "Phone number copied to clipboard.";

                    await copyText(
                        value,
                        successMessage
                    );

                    button.textContent =
                        "Copied ✓";

                    button.disabled = true;

                    setTimeout(() => {

                        button.textContent =
                            originalText;

                        button.disabled = false;

                    }, 2000);

                }
            );

        });

        /* ==================================================
           GLOBAL COPY API
        ================================================== */

        window.PortfolioClipboard = {

            copy(text, message) {

                return copyText(
                    text,
                    message ||
                    "Copied to clipboard."
                );
            },

            success(message) {

                createToast(
                    message,
                    "success"
                );
            },

            error(message) {

                createToast(
                    message,
                    "error"
                );
            },

            warning(message) {

                createToast(
                    message,
                    "warning"
                );
            }

        };

    });

})();