const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')

const toggle = document.querySelector('.toggle')
let storedTheme = localStorage.getItem("userTheme")

console.log(storedTheme)
if(storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
}


// Theme change
toggle.addEventListener('change', (event) => {
    storedTheme = event.target.checked;

    let theme = 'light'
    let currentTheme = document.documentElement.getAttribute('data-theme')
    
    if(currentTheme === "light") {
        theme = 'dark'
    }
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem("userTheme", theme)
})

// Mobile menu
menu.addEventListener('click', () => {
    //Adds a classlist to menu
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

