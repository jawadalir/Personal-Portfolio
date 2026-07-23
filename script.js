// Navbar shadow on scroll
(function () {
  var nav = document.querySelector(".navbar");
  if (!nav) return;

  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

// Scroll reveal
(function () {
  var els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach(function (el) {
    obs.observe(el);
  });
})();

// Smooth scroll for anchor links
document.addEventListener("click", function (e) {
  var link = e.target.closest('a[href^="#"]');
  if (!link) return;

  var targetId = link.getAttribute("href").slice(1);
  if (!targetId) return;

  var targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  e.preventDefault();
  targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Contact form -> mailto
var contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var toEmail = "jawadaliraja2022@gmail.com";

    var subject = "Portfolio Contact from " + (name || "Someone");
    var body =
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      "Message:\n" + message;

    window.location.href =
      "mailto:" +
      encodeURIComponent(toEmail) +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  });
}

// Footer year
var yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
