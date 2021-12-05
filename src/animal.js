/*
    TODO: 
    - Mobile view
        - hamburger menu setup
        - filter button system
    - Loading animation while waiting for API
    - Random pet detail assignment
        - Some names assigned Undefined
        - Age should not be 0
*/

const randomImageApiUrl = "https://dog.ceo/api/breeds/image/random";

function renderHomePage() {
    console.log("Hello Home page")

    // Home dependencies
    const homePets = document.querySelector(".pet-showcase");

    homePets.innerHTML = '';
    for( let i = 0; i < 3; i++) {
        
    }
}

/**----------------------- 
 * Mobile Nav controls
 ------------------------*/
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-list")

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})