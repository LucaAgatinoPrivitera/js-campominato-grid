let griglia = document.querySelector(".grid");

// griglia.innerHTML("ciao"); non mi funziona, perché va usato append da quello che ho capito
for (let i = 0; i < 100; i++) {

    let quadrato = document.createElement("div");
    griglia.append(quadrato)

    quadrato.classList.add("square");
    quadrato.innerText = i;
    console.log("ciao");

    //Ho i miei dubbi che vada messo qui, a causa del for, ma fuori dal loop non trova quadrato quindi It Just Works
    quadrato.addEventListener("click", function () {
        console.log("cliccato", this); //this indica proprio questo elemento
        this.classList.toggle("clicked");
    })
}