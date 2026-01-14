// TEIL 4: Klassen & Styles manipulieren

console.log('=== TEIL 4 BAŞLANGIÇ ===');

const styleBox = document.querySelector('#box');
const listItems = document.querySelectorAll('.item');

console.log('Box Element:', styleBox);
console.log('Eski Klassen:', styleBox.className);

// 1. Füge der Box die Klasse "active" hinzu
styleBox.classList.add('active');
console.log('1. "active" hinzugefügt - Neue Klassen:', styleBox.className);

// 2. Warte 2 Sekunden, dann entferne "active" wieder
setTimeout(() => {
    styleBox.classList.remove('active');
    console.log('2. "active" entfernt - Klassen jetzt:', styleBox.className);
}, 2000);

// 3. Toggle "highlight" bei der Box
styleBox.classList.toggle('highlight');
console.log('3. "highlight" toggled - Klassen jetzt:', styleBox.className);

// 4. Prüfe, ob die Box die Klasse "box" hat
if (styleBox.classList.contains('box')) {
    console.log('4. ✓ Die Box hat die Klasse "box"');
}

// 5. Füge dem ersten Item die Klasse "selected" hinzu
listItems[0].classList.add('selected');
console.log('5. Erste Item hat jetzt "selected"');

// 6. Setze einen Inline-Style: Box soll einen blauen Rahmen haben
styleBox.style.border = '3px solid blue';
console.log('6. Blauer Rahmen hinzugefügt');

// 7. Toggle "selected" bei jedem Klick auf ein Item
listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('selected');
        console.log(`7. Item ${index + 1} geklickt - "selected" toggled`);
    });
});

console.log('=== TEIL 4 FERTIG ===');