const navbar = document.getElementById('navbar');
const navLinks = navbar.getElementsByClassName('nav-link');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove('active');
        }
        this.classList.add('active');
    });
}
