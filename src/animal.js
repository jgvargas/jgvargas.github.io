/*
    TODO: 
    - Implement "Search by breed"
    - Random images on page load
    - Loading animation while waiting for API
    - Change "About me" html layout
*/


const imageRandom = document.querySelector(".pet-img");
const petSpace = document.querySelector(".pet-space")
const sideBarList = document.querySelector(".pet-selection")

const randomImageApiUrl = "https://dog.ceo/api/breeds/image/random";

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

    petSpace.innerHTML ="";

    imageList.forEach( imageSrc => {
        petSpace.innerHTML += 
        `<div class="pet-box">
            <img src="${imageSrc}" class="pet-img" alt="friendly-dog">
            <div class="pet-info">About me: ${breedName}</div>
        </div>`;
    })
}

sideBarList.addEventListener('click', event => {
    if(event.target && event.target.nodeName == "LI") {
        // Refresh images
        getDogBreedImages(event.target.innerHTML.trim());
    }
})
// END OF DYNAMIC SECTION

// Side bar breed list
function createDogBreedList() {
    const allBreedsApiUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(allBreedsApiUrl)
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        let allBreeds = json.message;
        let breedList = Object.keys(allBreeds);

        sideBarList.innerHTML = '';

        breedList.forEach( breed => {
            let sideBarHTML = `<li class="sidebar-li">${breed}</li>`;
            sideBarList.innerHTML += sideBarHTML;
        })
    })
    .catch( (error) => {
        console.log(error);
    });
}

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
    let ageStatement = years + " years"; 
    return ageStatement;
}

function getName() {
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
    // Gets breeds then creates sidebar
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