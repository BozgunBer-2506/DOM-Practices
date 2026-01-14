// TEIL 5: Events & Event Listener

console.log('=== TEIL 5 START ===');

// Elemente selektieren
const incrementBtn = document.querySelector('#demo-btn');
const decrementBtn = document.querySelector('#dec-btn');
const countDisplay = document.querySelector('#click-count');

// Zähler-Variable
let counter = 0;

console.log('Increment Button:', incrementBtn);
console.log('Decrement Button:', decrementBtn);

// ===== INCREMENT BUTTON =====
incrementBtn.addEventListener('click', () => {
    counter = counter + 1;
    countDisplay.textContent = counter;
    console.log('Erhöht! Neuer Wert:', counter);
    
    // Bonus: Alert bei 10
    if (counter === 10) {
        alert('🎉 Du hast 10 erreicht!');
    }
});

console.log('1. Increment Button - Listener hinzugefügt');

// ===== DECREMENT BUTTON =====
decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter = counter - 1;
        countDisplay.textContent = counter;
        console.log('Verringert! Neuer Wert:', counter);
    } else {
        console.log('Bereits 0, nicht weniger!');
    }
});

console.log('2. Decrement Button - Listener hinzugefügt');

// ===== ALLE BUTTONS =====
const allButtons = document.querySelectorAll('.btn');
console.log('Alle Buttons:', allButtons.length);

allButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        console.log(`Button ${index + 1} geklickt - Text: ${event.target.textContent}`);
    });
});

console.log('3. Alle Buttons - click listener hinzugefügt');

// ===== BOX - DOUBLE CLICK =====
const box = document.querySelector('#box');

box.addEventListener('dblclick', () => {
    console.log('Box doppelt geklickt!');
    box.classList.toggle('active');
});

console.log('4. Box - dblclick listener hinzugefügt');

// ===== BOX - MOUSE ENTER/LEAVE =====
box.addEventListener('mouseenter', () => {
    box.style.opacity = '0.7';
    console.log('Maus ist in der Box');
});

box.addEventListener('mouseleave', () => {
    box.style.opacity = '1';
    console.log('Maus hat die Box verlassen');
});

console.log('5. Box - mouseenter/mouseleave listener hinzugefügt');

console.log('=== TEIL 5 FERTIG ===');