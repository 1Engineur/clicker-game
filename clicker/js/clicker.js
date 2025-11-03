let counter = loadCookies();
const button_clicker = document.getElementById("button_clicker");
const button_reset = document.getElementById("button_reset");
const VisualCounter = document.getElementById("visual_counter");



function updateCounterDisplay(){
    VisualCounter.innerText = counter;  
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
    resetCookies();
    console.log("Counter reset to zero.");
}

function clicker() {
    loadCookies();
    counter += 1;
    updateCounterDisplay();
    saveCookies(counter);
    console.log("Button clicked " + counter + " times."); 
    
    button_clicker.disabled = true;
    setTimeout(() => {
        button_clicker.disabled = false;
    }, 50);
}

button_clicker.addEventListener("click", clicker);
button_reset.addEventListener("click", resetCounter);
updateCounterDisplay();