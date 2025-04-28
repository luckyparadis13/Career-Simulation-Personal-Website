// script.js

// Contact Form Alert
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent actual form submission
      alert("Thank you for reaching out! I'll get back to you soon.");
      form.reset(); // clear the form
    });
  }
});

// Highlight current nav link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentURL = window.location.pathname;

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentURL.split("/").pop()) {
      link.style.borderBottom = "2px solid #fff";
    }
  });
});
