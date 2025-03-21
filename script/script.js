
// Selecteert de knoppen uit de HTML op basis van hun ID's
const mozarellaKnop = document.querySelector("#mozarellaknop");
const tomaatKnop = document.querySelector("#tomaatknop");
const olijfKnop = document.querySelector("#olijfknop");
const klaarKnop = document.querySelector("#klaarknop");

// Selecteert de afbeeldingen uit de HTML op basis van hun class
const tomaatImg = document.querySelector(".tomaat");
const mozarellaImg = document.querySelector(".mozarella");
const olijfImg = document.querySelector(".olijf");

//Selecteert de titel uit de HTML
const titel = document.querySelector("h1");

// Functie om de topping tomaat toe te voegen of verwijderen
function kiesTomaat() {
    tomaatImg.classList.toggle("visible");
    if (tomaatImg.classList.contains("visible")) {
        console.log("De tomaten zijn toegevoegd");
        titel.textContent = "De tomaten zijn toegevoegd";
    }
    else {
        controleerToppings();
    }
}

// Functie om de topping mozarella toe te voegen of verwijderen
function kiesMozarella() {
    mozarellaImg.classList.toggle("visible");
    if (mozarellaImg.classList.contains("visible")) {
        console.log("De mozarella is toegevoegd");
        titel.textContent = "De mozarella is toegevoegd";
    }
    else {
        controleerToppings();
    }
}

// Functie om de topping olijf toe te voegen of verwijderen
function kiesOlijf() {
    olijfImg.classList.toggle("visible");
    if (olijfImg.classList.contains("visible")) {
        console.log("De olijven zijn toegevoegd");
        titel.textContent = "De olijven zijn toegevoegd";
    }
    else {
        controleerToppings();
    }
}

// Functie die controleert of er toppings ontbreken en past de titel aan
function controleerToppings() {
    if (!tomaatImg.classList.contains("visible")||
        !mozarellaImg.classList.contains("visible")||
        !olijfImg.classList.contains("visible")) {
            titel.textContent = "Kies je toppings";
        }
}

// Functie die aangeeft dat de pizza klaar is een een geluidje afspeelt
function pizzaIsKlaar() {
    titel.textContent = "Je pizza is klaar!"

    // https://pixabay.com/nl/sound-effects/search/ping%20ready/ 
    const audio = new Audio("./audio/geluid.mp3");
    audio.play();
}

//De knoppen worden gekoppeld aan hun functies 
tomaatKnop.addEventListener('click', kiesTomaat);
mozarellaKnop.addEventListener('click', kiesMozarella);
olijfKnop.addEventListener('click', kiesOlijf);
klaarKnop.addEventListener('click', pizzaIsKlaar);