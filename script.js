(function () {
  "use strict";

  // Mobile nav toggle
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact placeholders: gently notify instead of navigating to "#"
  document.querySelectorAll(".contact-card[data-placeholder]").forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const label = card.getAttribute("data-placeholder") === "linkedin" ? "LinkedIn" : "GitHub";
      card.querySelector(".contact-card__value").textContent = `Add your ${label} link here`;
    });
  });

  // Sticky header shrink shadow on scroll (subtle, performance-friendly)
  const header = document.querySelector(".site-header");
  let lastScroll = 0;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (y > 8 && lastScroll <= 8) {
        header.style.boxShadow = "0 8px 24px rgba(0,0,0,0.25)";
      } else if (y <= 8) {
        header.style.boxShadow = "none";
      }
      lastScroll = y;
    },
    { passive: true }
  );
})();
