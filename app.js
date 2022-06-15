/*---------------------------------------------------------------------------------------
    TODO:
    - bug with checkbox, sometimes themes are not matching with checkbox state
---------------------------------------------------------------------------------------*/

/*--------------------
    Declarations
--------------------*/
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
let reveals = document.querySelectorAll('.reveal')
const toggle = document.querySelector('#toggle')
let storedTheme = localStorage.getItem('userTheme')
/*--------------------
    Mobile menu logic
--------------------*/
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

document.querySelectorAll(".nav-item").forEach( item => item.addEventListener( 'click', () => {
    menu.classList.remove('active')
    menuLinks.classList.remove('active')
}))

/*--------------------
    Scroll animations
--------------------*/
window.addEventListener('scroll', reveal)

function reveal() {
    for(let i = 0; i< reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if( revealTop < windowheight - revealPoint) {
            reveals[i].classList.add('active')
        }
        else {
            reveals[i].classList.remove('active')
        }
    }
}
/*--------------------
    Toggle theme logic
--------------------*/
console.log(document.getElementById('toggle').checked)

if (storedTheme === null) {
    // Default to light theme
    storedTheme = 'light'
    localStorage.setItem('userTheme', storedTheme)
    console.log(document.getElementById('toggle').checked)
} else {
    storedTheme = localStorage.getItem('userTheme')
    document.documentElement.setAttribute('data-theme', storedTheme)
}

toggle.addEventListener('change', (event) => {
    storedTheme === 'light' ? storedTheme = 'dark' : storedTheme = 'light'
    localStorage.setItem('userTheme', storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

    console.log(document.getElementById('toggle').checked)
})