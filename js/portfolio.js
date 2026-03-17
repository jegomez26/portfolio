document.addEventListener("DOMContentLoaded", () => {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
    }

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.toggle("open");
        });

        mobileMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("open");
            });
        });
    }

    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (!entry.isIntersecting) {
                    return;
                }

                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 60);

                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.1 }
    );

    revealEls.forEach((el) => observer.observe(el));

    const form = document.getElementById("contact-form");
    const success = document.getElementById("form-success");

    if (form && success) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const submit = form.querySelector('button[type="submit"]');

            if (submit) {
                submit.disabled = true;
                submit.textContent = "Sending...";
            }

            window.setTimeout(() => {
                success.classList.add("show");
                form.reset();

                if (submit) {
                    submit.disabled = false;
                    submit.innerHTML = 'Send Message <i data-lucide="send" style="width:15px;height:15px;"></i>';
                    if (window.lucide && typeof window.lucide.createIcons === "function") {
                        window.lucide.createIcons();
                    }
                }
            }, 1000);
        });
    }

    initLightbox();
});

function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox) {
        return;
    }

    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeButton = document.getElementById("lightbox-close");
    const triggers = document.querySelectorAll("[data-lightbox-src]");

    const close = () => {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
    };

    triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const src = trigger.getAttribute("data-lightbox-src");
            const title = trigger.getAttribute("data-lightbox-title") || "";
            const caption = trigger.getAttribute("data-lightbox-caption") || "";

            if (!src || !lightboxImage) {
                return;
            }

            lightboxImage.src = src;
            lightboxImage.alt = title || caption || "Portfolio image";

            if (lightboxTitle) {
                lightboxTitle.textContent = title;
            }

            if (lightboxCaption) {
                lightboxCaption.textContent = caption;
            }

            lightbox.classList.add("open");
            document.body.style.overflow = "hidden";
        });
    });

    if (closeButton) {
        closeButton.addEventListener("click", close);
    }

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            close();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("open")) {
            close();
        }
    });
}
