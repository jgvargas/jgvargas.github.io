const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')
const toggle = document.querySelector('.toggle')

let isChecked = localStorage.getItem("userTheme")

console.log(isChecked)



// Toggle when menu is clicked
menu.addEventListener('click', () => {
    //Adds a classlist to menu
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// theme change
toggle.addEventListener('change', (event) => {
    isChecked = event.target.checked;
    let theme = 'light'

    
    localStorage.setItem("userTheme", theme)
    
    if(isChecked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

