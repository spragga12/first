const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {navLinks.classList.toggle("active");});

const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){e.preventDefault()

    message.textContent = 
    "Thank you! Your message has been sent successfully.";

    form.reset();
})