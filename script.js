const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const formSr = document.getElementById('contact-form');
if (formSr) {
  formSr.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('[name="name"]').value.trim();
    const email = this.querySelector('[name="email"]').value.trim();
    const message = this.querySelector('[name="message"]').value.trim();

    let errors = [];

    if (name.length < 3) {
      errors.push("Ime i prezime moraju imati bar 3 slova.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push("Unesite ispravnu email adresu.");
    }

    if (message.length < 10) {
      errors.push("Poruka mora imati bar 10 karaktera.");
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      this.submit();
    }
  });
}

const formEn = document.getElementById('contact-form1');
if (formEn) {
  formEn.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('[name="name"]').value.trim();
    const email = this.querySelector('[name="email"]').value.trim();
    const message = this.querySelector('[name="message"]').value.trim();

    let errors = [];

    if (name.length < 3) {
      errors.push("Full name must be at least 3 characters long.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (message.length < 10) {
      errors.push("Message must be at least 10 characters long.");
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      this.submit();
    }
  });
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("hidden")) {
        entry.target.classList.add("fade-in");
      }

      if (entry.target.classList.contains("fade-left")) {
        entry.target.classList.add("fade-in-left");
      }

      if (entry.target.classList.contains("fade-right")) {
        entry.target.classList.add("fade-in-right");
      }

      observer.unobserve(entry.target);
    }
  });
});

// Posmatraj sve ciljne klase
document.querySelectorAll('.hidden, .fade-left, .fade-right').forEach(el => observer.observe(el));


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



