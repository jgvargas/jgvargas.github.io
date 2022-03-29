/*---------------------------------------------------------------------------------------
    TODO:
    - bug with checkbox, sometimes themes are not matching with checkbox state
---------------------------------------------------------------------------------------*/

/*--------------------
    Declarations
--------------------*/

/*--------------------
    Mobile menu logic
--------------------*/

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

// Toggle mobile menu
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
let reveals = document.querySelectorAll('.reveal')

function reveal() {
    
    for(let i = 0; i< reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if( revealTop < windowheight - revealPoint) {
            reveals[i].classList.add('active')
        }
        else {
            //reveals[i].classList.remove('active')
        }
    }
}

/*--------------------
    Toggle theme logic
--------------------*/
const toggle = document.querySelector('#toggle')

// check if theme preference was set
let storedTheme = localStorage.getItem('userTheme')

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