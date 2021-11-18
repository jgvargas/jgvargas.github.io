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

// Dynamic selection 
function getDogBreedImages( breedName) {
    let dogImagesUrl = `https://dog.ceo/api/breed/${breedName}/images`;
    fetch(dogImagesUrl)
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        console.log(json)
        showInHtml(json, breedName);
    })
    .catch( (error) => {
        console.log(error);
    });
}

function showInHtml(json, breedName) {
    let imageList = json.message;

    petSpace.innerHTML ="";

    imageList.forEach( image => {
        petSpace.innerHTML += 
        `<div class="pet-box">
            <img src="${image}" class="pet-img" alt="friendly-dog">
            <div class="pet-info">About me: ${breedName}</div>
        </div>`;
    })
}

sideBarList.addEventListener('click', event => {
    if(event.target && event.target.nodeName == "LI") {
        console.log("Clicked on a specific!")
        getDogBreedImages(event.target.innerHTML.trim());
    }
})


function createDogBreedList() {
    const allBreedsApiUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(allBreedsApiUrl)
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        // console.log(json);

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

function getRandomImage() {
    return fetch(randomImageApiUrl)
        .then( (response) => {
            return response.json();
        })
        .then( (json) => {
            return json.message;
        })
        .catch( (error) => {
            console.log(error);
        });

        /*
    try {
        const response = await fetch(randomImageApiUrl);
        const json = await response.json();
        return json.message;
    } catch (error) {
        console.log(error);
    }
    */
}

function createPetSpace (numOfPets) {
    petSpace.innerHTML = '';

    for( let i = 0; i < numOfPets; i++) {
        let petSpaceHTML = 
        `<div class="pet-box">
            <img class="pet-img" alt="friendly-dog">
            <div class="pet-info">About me: </div>
        </div>`;
        petSpace.innerHTML += petSpaceHTML;
    }
}

function renderAdoptPage() {
    // Gets breeds then creates sidebar
    createDogBreedList();

    // Create pet-space
    createPetSpace(30);
}

renderAdoptPage();