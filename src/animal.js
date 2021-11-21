/*
    TODO: 
    - Mobile view
        - hamburger menu setup
        - filter system
    - Implement "Search by breed"
    - Loading animation while waiting for API
    - Random name assignment
*/

const imageRandom = document.querySelector(".pet-img");
const petSpace = document.querySelector(".pet-space")
const sideBarList = document.querySelector(".pet-selection")

const randomImageApiUrl = "https://dog.ceo/api/breeds/image/random";
const sidebarInput = document.getElementById("sidebar-input");

let mainSectionSize = document.querySelector(".main-container");
let sidebarSize = document.querySelector(".sidebar");


// Dynamic html selection 
function getDogBreedImages( breedName) {
    let dogImagesUrl = `https://dog.ceo/api/breed/${breedName}/images`;
    fetch(dogImagesUrl)
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        createSpecificBreedHtml(json, breedName);
    })
    .catch( (error) => {
        console.log(error);
    });
}

function createSpecificBreedHtml(json, breedName) {
    let imageList = json.message;
    let name = getName();
    let gender = Math.round (Math.random() );
    let age = createAge();

    petSpace.innerHTML ="";

    imageList.forEach( imageSrc => {
        petSpace.innerHTML += 
        `<div class="pet-box">
            <img src="${imageSrc}" class="pet-img" alt="friendly-dog">
            <div class="pet-info"><h3>${name}</h3>
            <p>${ gender ? "Female" : "Male" } | ${age}</p> 
            </div>
        </div>`;
    })
}

sideBarList.addEventListener('click', event => {
    if(event.target && event.target.nodeName == "LI") {
        // Refresh images
        getDogBreedImages(event.target.innerHTML.trim());
    }
})

// Filter Breed List
function filterBreedList() {
    let breedList = document.querySelector(".pet-selection");
    let listOfBreeds = breedList.getElementsByTagName("LI");
    let userInput = document.getElementById("sidebar-input");
    
    for( let i = 0; i < listOfBreeds.length ; i++ ) {
        let breed = listOfBreeds[i].getElementsByTagName("LI")

        if (userInput.value[i] != listOfBreeds[i].innerHTML[0]) {
            listOfBreeds[i].style.display = "none";
        }
       //console.log("User: " + userInput.value[0] + " Breed " + listOfBreeds[i].innerHTML[0]);
    }
}

// END


// SIDEBAR CREATION
function createSidebar(breedList) {
    sideBarList.innerHTML = '';

    breedList.forEach( breed => {
        let sideBarHTML = `<li class="sidebar-li">${breed}</li>`;
        sideBarList.innerHTML += sideBarHTML;
    })
}

function createDogBreedList() {
    const allBreedsApiUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(allBreedsApiUrl)
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        createSidebar(Object.keys(json.message) );
    })
    .catch( (error) => {
        console.log(error);
    });
}

// Resizing grid
visualViewport.addEventListener('resize', () => {
    
    let sizeDif = mainSectionSize.offsetWidth - sideBarList.offsetWidth;
    
    if ( sizeDif > 990) {
        document.querySelector(".pet-space").style["grid-template-columns"] = "auto auto auto";
    }
    else if ( sizeDif > 570 && sizeDif < 990) {
        document.querySelector(".pet-space").style["grid-template-columns"] = "auto auto";
    }
    else if ( sizeDif < 570) {
        document.querySelector(".pet-space").style["grid-template-columns"] = "auto";
    }
})

// INIT page settings
function createRandomPet() {
    return fetch(randomImageApiUrl)
        .then( (response) => {
            return response.json();
        })
        .then( (json) => {
            createPetSpace(json);
        })
        .catch( (error) => {
            console.log(error);
        });
}

function createAge() {
    let years = Math.round( Math.random() * 12);
    let ageStatement = years + " years old"; 
    return ageStatement;
}

function getName() {
    let nameFile = new XMLHttpRequest();
    nameFile.open("GET", "pet-names.txt", true);

    return "Bob"
}

function createPetSpace (json) {
    let randImg = json.message;
    let name = getName();
    let gender = Math.round (Math.random() );
    let age = createAge();

    petSpace.innerHTML += 
    `<div class="pet-box">
        <img src="${randImg}" class="pet-img" alt="friendly-dog">
        <div class="pet-info"><h3>${name}</h3>
        <p>${ gender ? "Female" : "Male" } | ${age}</p> 
        </div>
    </div>`;
}

function renderAdoptPage() {
    // Gets breeds then populate sidebar
    createDogBreedList();

    // Create pet-space
    petSpace.innerHTML = '';
    for(let i =0; i< 30; i++) {
        createRandomPet();
    }
    // Promise.all( imgArray.map( () => {
    //     fetch(randomImageApiUrl)
    //     .then( json => {
    //         createPetSpace(json.message)
    //     })
    //     petSpace.innerHTML += petSpaceHTML;
    //     console.log("Finished after fetch")
    // }))
    
}

renderAdoptPage();