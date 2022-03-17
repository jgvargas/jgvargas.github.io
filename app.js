const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')
const toggle = document.querySelector('.toggle')
let storedTheme = localStorage.getItem("userTheme")

// Theme logic
function loadTheme() {
    console.log("Hello")
}

if(storedTheme) {
    console.log(`The stored theme is ${storedTheme}`)
    document.documentElement.setAttribute('data-theme', storedTheme)
    if(storedTheme === 'dark') {
        toggle.classList.toggle('night')
    }
}

toggle.addEventListener('change', (event) => {
    toggle.classList.toggle('night')
    let theme = 'light'
    storedTheme = document.documentElement.getAttribute('data-theme')
    
    if(storedTheme === "light" || storedTheme === null) {
        theme = 'dark'
    }
    localStorage.setItem('userTheme', theme)
    document.documentElement.setAttribute('data-theme', theme)
})

// Mobile menu
menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

