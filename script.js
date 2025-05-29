const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

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

document.getElementById('contact-form1').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

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



