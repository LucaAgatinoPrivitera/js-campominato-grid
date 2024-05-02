/* MS 1 - MS3
let griglia = document.querySelector(".grid");

// griglia.innerHTML("ciao"); non mi funziona, perché va usato append da quello che ho capito
for (let i = 1; i < 101; i++) {

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
*/

/*
// MS-4
let griglia = document.querySelector(".grid");

// griglia.innerHTML("ciao"); non mi funziona
for (let i = 1; i < 101; i++) {
    let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
    griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
    
}

//Funzioni
function creaQuadrato(i) {
    let quadrato = document.createElement("div");
    quadrato.classList.add("square");
    quadrato.innerText = i;

    // Event-listener click
    quadrato.addEventListener("click", function () {
        console.log("cliccato", this); //this indica proprio questo elemento i+1 ovviamente indica il numero dopo sul log
        this.classList.toggle("clicked");
    });

    //return così viene conservato
    return quadrato;
}
*/


// Bonus 1
/*
let griglia = document.querySelector(".grid");
let quadrato = document.createElement("div");
// griglia.innerHTML("ciao"); non mi funziona, perché va usato append da quello che ho capito
for (let i = 1; i < 101; i++) {
    let quadrato = document.createElement("div");
    griglia.append(quadrato)

    quadrato.classList.add("square");
    console.log("ciao");

    quadrato.addEventListener("click", function () { //Per ricordarsi il valore lo metto qui, così lo prende
        console.log("cliccato", this); //this indica proprio questo elemento
        this.classList.toggle("clicked");
        quadrato.innerText = i;
    })
}
*/


//Bonus 2
/*
button = document.getElementById("btn");
button.addEventListener("click", function(){
    let griglia = document.querySelector(".grid");

    // griglia.innerHTML("ciao"); non mi funziona
    for (let i = 1; i < 101; i++) {
        let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
        griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
    }
    //Funzioni
    function creaQuadrato(i) {
        let quadrato = document.createElement("div");
        quadrato.classList.add("square");
        quadrato.innerText = i;
    
        // Event-listener click
        quadrato.addEventListener("click", function () {
            console.log("cliccato", this); //this indica proprio questo elemento i+1 ovviamente indica il numero dopo sul log
            this.classList.toggle("clicked");
        });
    
        //return così viene conservato
        return quadrato;
    }
});
*/



//Bonus 3

//Col change
/*
button = document.getElementById("opzione");
button.addEventListener("change", function(){
    let griglia = document.querySelector(".grid");

    // griglia.innerHTML("ciao"); non mi funziona
    for (let i = 1; i < 101; i++) {
        let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
        griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
    }
    //Funzioni
    function creaQuadrato(i) {
        let quadrato = document.createElement("div");
        quadrato.classList.add("square");
        quadrato.innerText = i;
    
        // Event-listener click
        quadrato.addEventListener("click", function () {
            console.log("cliccato", this); //this indica proprio questo elemento i+1 ovviamente indica il numero dopo sul log
            this.classList.toggle("clicked");
        });
    
        //return così viene conservato
        return quadrato;
    }
});
*/



let button = document.getElementById("btn");
let buttonMed = document.getElementById("btn_med");
let buttonHard = document.getElementById("btn_hard");

//La griglia la inizializzo qui, altrimenti mi creava un problema
let griglia = document.querySelector(".grid");



//Al click abbiamo la versione facile
button.addEventListener("click", function () {
    griglia.classList.remove("grid", "grid_med", "grid_hard");
    griglia.classList.add("grid");
    griglia.innerHTML = " ";

    // griglia.innerHTML("ciao"); non mi funziona
    for (let i = 1; i < 101; i++) {
        let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
        griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
    }
});

//Al click abbiamo la versione medium
buttonMed.addEventListener("click", function () {
    griglia.classList.remove("grid", "grid_med", "grid_hard");
    griglia.classList.add("grid_med");
    griglia.innerHTML = " ";

    // griglia.innerHTML("ciao"); non mi funziona
    for (let i = 1; i < 82; i++) {
        let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
        griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
    }
});

//Al click abbiamo la versione hard
buttonHard.addEventListener("click", function () {
    griglia.classList.remove("grid", "grid_med", "grid_hard");
    griglia.classList.add("grid_hard");
    griglia.innerHTML = " ";

    // griglia.innerHTML("ciao"); non mi funziona
    for (let i = 1; i < 50; i++) {
        let quadrato = creaQuadrato(i); //in questo caso quadrato non va in conflitto a causa dello scope
        griglia.append(quadrato);  //Serve ad aggiungere il quadrato creato, altrimenti viene creato e rimane in un altro mondo
    }
});





//Funzioni questo prima era messo prima di ogni griglia.append(quadrato);
function creaQuadrato(i) {
    let quadrato = document.createElement("div");
    quadrato.classList.add("square");

    // Event-listener click
    quadrato.addEventListener("click", function () {
        console.log("cliccato", this); //this indica proprio questo elemento i+1 ovviamente indica il numero dopo sul log
        this.classList.toggle("clicked");
        if (quadrato.innerText == i) {
            quadrato.innerText = "";
        }
        else {
            quadrato.innerText = i;
        }
    });

    //return così viene conservato
    return quadrato;
}