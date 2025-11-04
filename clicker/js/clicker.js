const button_clicker = document.getElementById("button_clicker");
const button_reset = document.getElementById("button_reset");
const VisualCounter = document.getElementById("visual_counter");
const button_save = document.getElementById("button_save");
let counter = loadCookies();
updateCounterDisplay();

function updateCounterDisplay(){
    VisualCounter.innerText = counter;  
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
    resetCookies();
    console.log("Counter reset to zero.");
}

function clickDelay() {
    button_clicker.disabled = true;
    setTimeout(() => {
        button_clicker.disabled = false;
    }, 50);
}

function clicker() {
    counter += 1;   
    loadCookies();
    updateCounterDisplay();
    clickDelay();
    console.log("Button clicked " + counter + " times."); 
}

function saveGame() {
    saveCookies(counter);
    console.log("Game saved with " + counter + " clicks.");
}

button_clicker.addEventListener("click", clicker);
button_reset.addEventListener("click", resetCounter);
button_save.addEventListener("click", saveGame);
