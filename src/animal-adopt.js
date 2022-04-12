/*
    TODO: 
    - Mobile view
        - filter button system
    - Loading animation while waiting for API
    - Random pet detail assignment
        - Some names assigned Undefined
        - Age should not be 0
*/

/*------------------------------------------
    Pet Adoption

    Create pets
    -> allPets[] contains all adoption data
    -> getDogData() starts creation of pet objects

    Create breed list
    -> 
------------------------------------------*/
let breedList = document.querySelector(".breed-list")
const petSpace = document.querySelector(".main")
let amount = 9
const allBreedsUrl = `https://dog.ceo/api/breeds/list/all`
const url = `https://dog.ceo/api/breeds/image/random/${amount}`
let allPets = []
let data = ''

function loadPage() {
    //Creates sidebar
    getDogData(allBreedsUrl, "side")
    //Creates adoption page
    getDogData(url, "main")
    console.log(allPets)
}

async function getDogData(url = '', content = 'main') {
    const res = await fetch(url)

    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
    }
    data = await res.json()
    
    content === 'main' ? 
        createPetInfo(data.message) :
        createSideBar(data.message)
}

// Sidebar ////////////////////////////////////////
function createSideBar(breedList) {
    breedName1 = Object.keys(breedList)
    breedName2 = Object.values(breedList)

    
    //console.log(...breedName1, ...breedName2)
    for (let i = 0; i < breedName2.length ; i++) {
        if(breedName2[i].length !== 0) {
            console.log(breedName2[i], breedName1[i])
        }
        else {
            createLiElement(breedName1[i])
        }
    }
}

function createLiElement(breedName) {
    let capWord = breedName.charAt(0).toUpperCase() 
        + breedName.slice(1)
    
    const newLi = `
    <li>
        <a href="#">${capWord}</a>
    </li>`
    breedList.innerHTML += newLi
}

// Main adoption ///////////////////////////////////
function createPetInfo( dogImgArr) {
    for( let i = 0 ; i < dogImgArr.length; i++) {

        let petGender = getGender()
        let petName = getName(petGender)
        let petAge = getAge()
        let petImg = dogImgArr[i]
        let petBreed = getBreed(dogImgArr[i])

        let newPet = {
            imgSrc: petImg,
            name: petName,
            gender: petGender,
            age: petAge,
            breed: petBreed
        }
        allPets.push(newPet)     
        createPetBox(newPet)
    }
}

function createPetBox(pet) {
    let petBox = `
    <div class="pet-box">
        <img class="pet-img" src="${pet.imgSrc}" alt="Dog">
        <div class="pet-details">
            <p>
                <span class="pet-name">${pet.name}</span>
            </p>
        </div>   
    </div>
    `
    petSpace.innerHTML += petBox
}

function getAge() {
    return Math.floor(Math.random() * (17 - 1 + 1) + 1 )
}

function getBreed(petString) {
    // Parse img src string for breed
    const stringTokens = petString.split('/')
    return stringTokens[4]
}

function getGender() {
    return Math.floor(Math.random() * 2) ===1 ?
     "male" : "female"
}

function getName( gender) {
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

    return gender ==="male" ? 
        male[Math.floor(Math.random() * male.length)]
        : 
        female[Math.floor(Math.random() * female.length)]
}

/*----------------------------------------------------- 
 * Mobile Nav controls
 ----------------------------------------------------*/
 const menu = document.querySelector("#mobile-menu");
 const menuLinks = document.querySelector(".nav-list")
 
 menu.addEventListener('click', () => {
     menu.classList.toggle('is-active');
     menuLinks.classList.toggle('active');
 })