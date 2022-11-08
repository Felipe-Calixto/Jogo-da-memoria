const cards = document.querySelector("#cards-conteiner");

//functions//

const candidatos = [
    "bolsonaro",
    "felipe",
    "lula",
    "padre",
    "simone",
    "soraya",
]

function createCard(x) {

    const card = document.createElement("div");
    card.classList.add("cards");

    const front = document.createElement("div");
    front.classList.add("img");
    front.classList.add("front");
    card.appendChild(front);

    const back = document.createElement("div");
    back.classList.add("img");
    back.classList.add("back");
    back.style.backgroundImage = `url("../img/${x}.png")`
    card.appendChild(back);

    cards.appendChild(card);
}

function start() {

    candidatos.forEach((x)=> {
        createCard(x);   
    });
}

start()

