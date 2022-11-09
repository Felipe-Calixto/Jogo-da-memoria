const cards = document.querySelector("#cards-conteiner");
const timeSpan = document.querySelector("#time");
let firstCard = "";
let secundCard = "";
let time = 15;
let cron;

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
    card.setAttribute("data-name", x);

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
    card.addEventListener("click", ()=> {
        if(card.classList.contains("hide")) {
            return;
        }

        if(firstCard == "") {
            card.classList.add("hide");
            firstCard = card;
        } else if(secundCard == "") {
            card.classList.add("hide");
            secundCard = card;   
            check(); 
        }

    });

    console.log(card)
}

function start() {

    let duplicate = [...candidatos, ...candidatos];

    duplicate.sort(()=> Math.random() - 0.5);

    duplicate.forEach((x)=> {
        createCard(x);   
    });

    timer();
}

function check() {
    const first = firstCard.getAttribute("data-name");
    const secund = secundCard.getAttribute("data-name");

    if(first == secund) {
        firstCard.lastChild.classList.add("transparent-card");
        secundCard.lastChild.classList.add("transparent-card");

        firstCard = "";
        secundCard = "";  
        
        time = time + 5;
        endGame();
    } else {
        setTimeout(()=> {
            firstCard.classList.remove("hide");
            secundCard.classList.remove("hide");

            firstCard = "";
            secundCard = "";
        }, 600)
          
    }
}

function endGame() {
    let transparentCard = document.querySelectorAll(".transparent-card");

    if(transparentCard.length == 12) {
        setTimeout(()=> {
            alert("Parabens, voce ganhou!!!");
            clearInterval(cron);
        },200);
    } 
}

function timer() {

    cron = setInterval(()=> {
        time--;

        timeSpan.textContent = time;
        
        if(time == 0) {
            alert("Voce perdeu!!!");
            clearInterval(cron);
        } 
    }, 1000);
    
}


start()

