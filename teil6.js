// TEIL 6: Counter mit Events

// Elemente selektieren
const incrementBtn = document.querySelector('#demo-btn');
const decrementBtn = document.querySelector('#dec-btn');
const countDisplay = document.querySelector('#click-count');

// State (Zähler-Variable)
let counter = 0;

// 1. Füge einen click Event Listener zum Increment-Button hinzu
incrementBtn.addEventListener('click', () => {
    counter++;
    countDisplay.textContent = counter;
    
    if (counter === 10) {
        alert('Du hast 10 erreicht!');
    }
});

// 2. Füge einen click Event Listener zum Decrement-Button hinzu
decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        countDisplay.textContent = counter;
    }
});