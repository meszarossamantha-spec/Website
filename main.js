// Meszaros Administrative Solutions — shared site behavior

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Footer year
  var yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", handleContactSubmit);
  }
});

// FORMSPREE_ID: replace with your Formspree form ID (e.g. "abcdwxyz") to send
// submissions straight to your inbox without opening the visitor's mail app.
// Sign up free at https://formspree.io, create a form, and paste the ID here.
// See README.md for step-by-step instructions.
var FORMSPREE_ID = "";

function handleContactSubmit(event) {
  var form = event.target;
  var status = document.getElementById("form-status");

  if (FORMSPREE_ID) {
    // Formspree is configured: let the form submit normally via fetch.
    event.preventDefault();
    var data = new FormData(form);
    status.textContent = "Sending...";
    fetch("https://formspree.io/f/" + FORMSPREE_ID, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          status.textContent = "Thanks — your message has been sent. I'll be in touch soon.";
          form.reset();
        } else {
          status.textContent =
            "Something went wrong sending that. Please email meszarossamantha@gmail.com directly.";
        }
      })
      .catch(function () {
        status.textContent =
          "Something went wrong sending that. Please email meszarossamantha@gmail.com directly.";
      });
    return;
  }

  // No Formspree ID configured yet: fall back to opening the visitor's
  // email client with the message pre-filled.
  event.preventDefault();
  var name = form.name.value.trim();
  var email = form.email.value.trim();
  var org = form.organization ? form.organization.value.trim() : "";
  var tier = form.tier ? form.tier.value : "";
  var message = form.message.value.trim();

  var bodyLines = [
    "Name: " + name,
    "Email: " + email,
    org ? "Organization: " + org : "",
    tier ? "Interested in: " + tier : "",
    "",
    message,
  ].filter(Boolean);

  var subject = encodeURIComponent("Discovery Audit inquiry — " + (org || name));
  var body = encodeURIComponent(bodyLines.join("\n"));
  window.location.href =
    "mailto:meszarossamantha@gmail.com?subject=" + subject + "&body=" + body;

  status.textContent =
    "Opening your email client to send this message. If nothing opens, email meszarossamantha@gmail.com directly.";
}
