const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Molimo vas da popunite sva polja.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Unesite validnu email adresu.");
      return;
    }

    alert("Poruka uspešno poslata!");
    contactForm.reset();
  });
}

const contactForm1 = document.getElementById("contact-form1");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message sent successfully!");
    contactForm.reset();
  });
}

document.querySelectorAll('.hidden').forEach(el => obs.observe(el));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});



document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.fade-left, .fade-right').forEach(el => observer.observe(el));

document.getElementById("languageSelect").addEventListener("change", function () {
  const selectedLanguage = this.value;
  const currentPage = window.location.pathname.split("/").pop();

  const srToEn = {
    "pocetna.html": "home.html",
    "O_meni.html": "about_me.html",
    "obrazovanje.html": "education.html",
    "vestine.html": "skills.html",
    "projekti.html": "projects.html",
    "kontakt.html": "contact.html"
  };

  const enToSr = {
    "home.html": "pocetna.html",
    "about_me.html": "O_meni.html",
    "education.html": "obrazovanje.html",
    "skills.html": "vestine.html",
    "projects.html": "projekti.html",
    "contact.html": "kontakt.html"
  };

  if (selectedLanguage === "en" && srToEn[currentPage]) {
    window.location.href = srToEn[currentPage];
  } else if (selectedLanguage === "sr" && enToSr[currentPage]) {
    window.location.href = enToSr[currentPage];
  }
});



