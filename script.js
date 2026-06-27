/* =========================================================
   IT Servis – interaktivita
   Vanilla JavaScript, žádné závislosti
   ========================================================= */
(function () {
  "use strict";

  /* ---------- 1) Mobilní navigace ---------- */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  function closeNav() {
    nav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Otevřít menu");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Zavřít menu" : "Otevřít menu");
    });

    // Zavřít menu po kliknutí na odkaz
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    // Zavřít při kliknutí mimo / klávesou Escape
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") &&
          !nav.contains(e.target) && !navToggle.contains(e.target)) {
        closeNav();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---------- 2) Stín hlavičky při scrollu ---------- */
  const header = document.getElementById("header");
  const toTop = document.getElementById("toTop");

  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (toTop) {
      const show = y > 500;
      toTop.classList.toggle("is-visible", show);
      toTop.hidden = !show;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 3) Tlačítko zpět nahoru ---------- */
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 4) Scroll-reveal animace ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            // Drobné stupňování pro plynulejší dojem
            entry.target.style.transitionDelay = (i % 4) * 70 + "ms";
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback – vše rovnou zobrazit
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- 5) Validace kontaktního formuláře (demo) ---------- */
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  function setError(field, message) {
    const group = field.closest(".form-group");
    if (group) group.classList.add("has-error");
    const errEl = form.querySelector('.form-error[data-for="' + field.id + '"]');
    if (errEl) errEl.textContent = message;
  }

  function clearError(field) {
    const group = field.closest(".form-group");
    if (group) group.classList.remove("has-error");
    const errEl = form.querySelector('.form-error[data-for="' + field.id + '"]');
    if (errEl) errEl.textContent = "";
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (form) {
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");
    const gdpr = form.querySelector("#gdpr");

    // Vyčistit chybu při psaní
    [name, email, message].forEach(function (field) {
      field.addEventListener("input", function () { clearError(field); });
    });
    gdpr.addEventListener("change", function () { clearError(gdpr); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;
      if (success) success.hidden = true;

      if (!name.value.trim()) {
        setError(name, "Vyplňte prosím své jméno.");
        valid = false;
      }
      if (!email.value.trim()) {
        setError(email, "Vyplňte prosím e-mail.");
        valid = false;
      } else if (!isValidEmail(email.value.trim())) {
        setError(email, "Zadejte platný e-mail.");
        valid = false;
      }
      if (!message.value.trim()) {
        setError(message, "Napište prosím, s čím můžeme pomoci.");
        valid = false;
      }
      if (!gdpr.checked) {
        setError(gdpr, "Bez souhlasu nelze poptávku odeslat.");
        valid = false;
      }

      if (!valid) {
        const firstError = form.querySelector(".has-error input, .has-error textarea");
        if (firstError) firstError.focus();
        return;
      }

      // DEMO: data se nikam neodesílají – jen potvrdíme „odeslání"
      form.reset();
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  /* ---------- 6) Rok v patičce ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
