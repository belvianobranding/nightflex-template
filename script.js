// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav__links--open");
  });

  // Close nav on link click (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav__links--open");
    });
  });
}

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Pricing toggle
const switchEl = document.getElementById("pricing-switch");
const labels = document.querySelectorAll(".pricing__label");
const amounts = document.querySelectorAll(".amount");

let yearly = false;

if (switchEl) {
  switchEl.addEventListener("click", () => {
    yearly = !yearly;
    switchEl.classList.toggle("pricing__switch--yearly");

    labels.forEach((label) => {
      label.classList.toggle(
        "pricing__label--active",
        (yearly && label.dataset.plan === "yearly") ||
          (!yearly && label.dataset.plan === "monthly")
      );
    });

    amounts.forEach((amt) => {
      const monthVal = amt.dataset.monthly;
      const yearVal = amt.dataset.yearly;

      if (yearly && yearVal) {
        amt.textContent = yearVal;
      } else if (!yearly && monthVal) {
        amt.textContent = monthVal;
      }
    });
  });
}

// Simple fake submit for contact form
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "Thanks! We’ll contact you within 24 hours.";
    contactForm.reset();

    setTimeout(() => {
      formStatus.textContent = "";
    }, 4000);
  });
}
