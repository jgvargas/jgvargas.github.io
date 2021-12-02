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
    let name;
    
    petSpace.innerHTML ="";

    imageList.forEach( imageSrc => {
        let gender = ( Math.round (Math.random() ) ? "Female" : "Male"  );
        if (gender == "Male")
            name = getName(true);
        else 
            name = getName(false);
        let age = createAge();

        petSpace.innerHTML += 
        `<div class="pet-box">
            <img src="${imageSrc}" class="pet-img" alt="friendly-dog">
            <div class="pet-info"><h3>${name} | ${ gender }</h3>
            <p> ${age} ${capitalizeFirstLetter( breedName )}</p> 
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
    let Input = userInput.value.toLowerCase();

    for( let i = 0; i < listOfBreeds.length ; i++ ) {
        let breed = listOfBreeds[i].innerHTML;

        if ( breed.toLowerCase().indexOf(Input) > -1 ) {
            listOfBreeds[i].style.display = "";
        }
        else {
            listOfBreeds[i].style.display = "none";
        }
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
    let ageStatement = years + " year old"; 
    return ageStatement;
}

function getName(gender) {
    let female = [
        "Bella",
        "Lucy",
        "Daisy",
        "Molly",
        "Lola",
        "Sophie",
        "Sadie",
        "Maggie",
        "Chloe",
        "Bailey",
        "Roxy",
        "Zoey",
        "Lily",
        "Luna",
        "Coco",
        "Stella",
        "Gracie",
        "Abby",
        "Penny",
        "Zoe",
        "Ginger",
        "Ruby",
        "Rosie",
        "Lilly",
        "Ellie",
        "Mia",
        "Sasha",
        "Lulu",
        "Pepper",
        "Nala",
        "Lexi",
        "Lady",
        "Emma",
        "Riley",
        "Dixie",
        "Annie",
        "Maddie",
        "Piper",
        "Princess",
        "Izzy",
        "Maya",
        "Olive",
        "Cookie",
        "Roxie",
        "Angel",
        "Belle",
        "Layla",
        "Missy",
        "Cali",
        "Honey",
        "Millie",
        "Harley",
        "Marley",
        "Holly",
        "Kona",
        "Shelby",
        "Jasmine",
        "Ella",
        "Charlie",
        "Minnie",
        "Willow",
        "Phoebe",
        "Callie",
        "Scout",
        "Katie",
        "Dakota",
        "Sugar",
        "Sandy",
        "Josie",
        "Macy",
        "Trixie",
        "Winnie",
        "Peanut",
        "Mimi",
        "Hazel",
        "Mocha",
        "Cleo",
        "Hannah",
        "Athena",
        "Lacey",
        "Sassy",
        "Lucky",
        "Bonnie",
        "Allie",
        "Brandy",
        "Sydney",
        "Casey",
        "Gigi",
        "Baby",
        "Madison",
        "Heidi",
        "Sally",
        "Shadow",
        "Cocoa",
        "Pebbles",
        "Misty",
        "Nikki",
        "Lexie",
        "Grace",
        "Sierra"
    ];

    let male = [
        "Max",
        "Buddy",
        "Charlie",
        "Jack",
        "Cooper",
        "Rocky",
        "Toby",
        "Tucker",
        "Jake",
        "Bear",
        "Duke",
        "Teddy",
        "Oliver",
        "Riley",
        "Bailey",
        "Bentley",
        "Milo",
        "Buster",
        "Cody",
        "Dexter",
        "Winston",
        "Murphy",
        "Leo",
        "Lucky",
        "Oscar",
        "Louie",
        "Zeus",
        "Henry",
        "Sam",
        "Harley",
        "Baxter",
        "Gus",
        "Sammy",
        "Jackson",
        "Bruno",
        "Diesel",
        "Jax",
        "Gizmo",
        "Bandit",
        "Rusty",
        "Marley",
        "Jasper",
        "Brody",
        "Roscoe",
        "Hank",
        "Otis",
        "Bo",
        "Joey",
        "Beau",
        "Ollie",
        "Tank",
        "Shadow",
        "Peanut",
        "Hunter",
        "Scout",
        "Blue",
        "Rocco",
        "Simba",
        "Tyson",
        "Ziggy",
        "Boomer",
        "Romeo",
        "Apollo",
        "Ace",
        "Luke",
        "Rex",
        "Finn",
        "Chance",
        "Rudy",
        "Loki",
        "Moose",
        "George",
        "Samson",
        "Coco",
        "Benny",
        "Thor",
        "Rufus",
        "Prince",
        "Chester",
        "Brutus",
        "Scooter",
        "Chico",
        "Spike",
        "Gunner",
        "Sparky",
        "Mickey",
        "Kobe",
        "Chase",
        "Oreo",
        "Frankie",
        "Mac",
        "Benji",
        "Bubba",
        "Champ",
        "Brady",
        "Elvis",
        "Copper",
        "Cash",
        "Archie",
        "Walter"
    ];

    if(gender){
        return male[ Math.floor( Math.random() * (male.length) + 1) ]; 
    }
    else {
        return female[ Math.floor( Math.random() * (male.length) + 1) ]; 
    }
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function getBreedName(imgURL) {
    let urlSplit = imgURL.split("/");
    let breedName = "";

    if (urlSplit[4].indexOf("-") != -1) {
        let multiWord = urlSplit[4].split("-");
        breedName = capitalizeFirstLetter( multiWord[1] ) + " " + capitalizeFirstLetter( multiWord[0] );
        return breedName;
    }
    else {
        breedName = urlSplit[4]
        return capitalizeFirstLetter( breedName );
    }
}

function createPetSpace (json) {
    let randImg = json.message;
    let name;
    let gender = ( Math.round (Math.random() ) ? "Female" : "Male"  );
    if (gender == "Male")
        name = getName(true);
    else 
        name = getName(false);
    let age = createAge();
    let breed = getBreedName(randImg);

    petSpace.innerHTML += 
    `<div class="pet-box">
        <img src="${randImg}" class="pet-img" alt="friendly-dog">
        <div class="pet-info"><h3>${name} | ${ gender }</h3>
        <p>${age} ${breed}</p> 
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