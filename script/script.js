console.log("hallo");

const mozarellaKnop = document.querySelector("#mozarellaknop");
const tomaatKnop = document.querySelector("#tomaatknop");
const olijfKnop = document.querySelector("#olijfknop");
const klaarKnop = document.querySelector("#klaarknop");

const tomaatImg = document.querySelector(".tomaat");
const mozarellaImg = document.querySelector(".mozarella");
const olijfImg = document.querySelector(".olijf");
const titel = document.querySelector("h1");

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

function controleerToppings() {
    if (!tomaatImg.classList.contains("visible")||
        !mozarellaImg.classList.contains("visible")||
        !olijfImg.classList.contains("visible")) {
            titel.textContent = "Kies je toppings";
        }
}

function pizzaIsKlaar() {
    titel.textContent = "Je pizza is klaar!"

    const audio = new Audio("./audio/geluid.mp3");
    audio.play();
}

tomaatKnop.addEventListener('click', kiesTomaat);
mozarellaKnop.addEventListener('click', kiesMozarella);
olijfKnop.addEventListener('click', kiesOlijf);
klaarKnop.addEventListener('click', pizzaIsKlaar);