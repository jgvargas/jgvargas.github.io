const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')

// Toggle when menu is clicked
menu.addEventListener('click', function() {
    //Adds a classlist to menu
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});