// =====================================
// LOAD SAVED THEME
// =====================================

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// =====================================
// SELECT HTML ELEMENTS
// =====================================

const heading = document.getElementById("mainHeading");
const contactBtn = document.getElementById("contactBtn");
const themeBtn = document.getElementById("themeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const aboutSection = document.getElementById("about");

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// =====================================
// CHANGE HEADING
// =====================================

function changeHeading() {

    console.log("Contact Button Clicked");

    heading.textContent = "Welcome to My Portfolio!";

}

contactBtn.addEventListener("click", changeHeading);

// =====================================
// DARK MODE
// =====================================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️ Light Mode";

    } else {

        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙 Dark Mode";

    }

}

themeBtn.addEventListener("click", toggleDarkMode);

// Set button text on page load

if (document.body.classList.contains("dark-mode")) {

    themeBtn.textContent = "☀️ Light Mode";

} else {

    themeBtn.textContent = "🌙 Dark Mode";

}

// =====================================
// SHOW / HIDE ABOUT SECTION
// =====================================

function toggleAboutSection() {

    if (aboutSection.style.display === "none") {

        aboutSection.style.display = "block";
        aboutBtn.textContent = "Hide About Section";

    } else {

        aboutSection.style.display = "none";
        aboutBtn.textContent = "Show About Section";

    }

}

aboutBtn.addEventListener("click", toggleAboutSection);

// =====================================
// CONTACT FORM VALIDATION
// =====================================

function validateForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {

        formMessage.textContent = "Please enter your name.";
        formMessage.style.color = "red";
        return;

    }

    if (!email.includes("@")) {

        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;

    }

    if (message.length < 10) {

        formMessage.textContent = "Message must be at least 10 characters.";
        formMessage.style.color = "red";
        return;

    }

    formMessage.textContent = "Message Sent Successfully ✅";
    formMessage.style.color = "green";

    form.reset();

}

form.addEventListener("submit", validateForm);

// =====================================
// PAGE LOADED
// =====================================

console.log("JavaScript Connected Successfully!");