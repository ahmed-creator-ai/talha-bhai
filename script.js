
function showWelcome() {
    alert("Welcome to my portfolio!");
}

function goTo(section) {
    document.getElementById(section).scrollIntoView({
        behavior: "smooth"
    });
}

function contactMe() {
    alert("Thank you for visiting my portfolio!");
}
