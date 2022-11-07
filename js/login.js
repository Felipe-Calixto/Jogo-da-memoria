let inputLogin = document.querySelector("#input-login");
let bntLogin = document.querySelector("#bnt-login");
let saveInput;

bntLogin.addEventListener("click", (event)=> {
    event.preventDefault();
    
    if(inputLogin.value) {
        localStorage.setItem("name", inputLogin.value);
        window.location = "jogo.html"
    }
    
});