let griglia = document.querySelector(".grid");

// griglia.innerHTML("ciao"); non mi funziona, perché va usato append da quello che ho capito
for (let i = 0; i < 100; i++) {

    let quadrato = document.createElement("div");
    griglia.append(quadrato)

    quadrato.classList.add("square");
    quadrato.innerText = i;
    console.log("ciao")

}
