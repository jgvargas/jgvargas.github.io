const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

/* When menu is clicked, toggle active-ness of object */
menu.addEventListener('click', function() {
    /* Toggles and adds a classList to 'menu' */
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});