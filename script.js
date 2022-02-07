let countEl = document.getElementById("count-el") // Get HTML element by the id
let saveEl = document.getElementById("save-el") // Saves the previous entries entered after each increment


let count = 0;

function increment (){ // Makes the Increment button work
    count ++; 
    countEl.textContent = count // Prints the rext on the screen
}

function save(){ // Makes the save button work
    let dashCounter = count + " - "
    saveEl.textContent += dashCounter
    countEl.textContent = 0
    count = 0
}

//Below is a code that prints out greetings on a dashboard using JS

let welcomeEl = document.getElementById("welcome-el")

let name = "Bernard!"
let greeting = "Welcome to your dashboard, "

welcomeEl.innerText = greeting + name 