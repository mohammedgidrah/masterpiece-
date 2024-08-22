document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.links');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        body.classList.toggle('show-sidebar');
    });
});
