const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')
const toggle = document.querySelector('.toggle')

// Toggle when menu is clicked
menu.addEventListener('click', () => {
    //Adds a classlist to menu
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// theme change
toggle.addEventListener('change', (event) => {
    const isChecked = event.target.checked;

    if(isChecked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
})