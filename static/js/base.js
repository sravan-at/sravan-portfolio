const navLinks = document.querySelectorAll(".nav-links a")

function toggleMenu() {
    const menu = document.querySelector(".nav-links")
    menu.classList.toggle("active")
}

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".nav-links").classList.remove("active")
    })
})

function sendMessage(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert("Thank you, " + name + "! Your message has been received.")
    document.querySelector(".contact-form").reset()
}