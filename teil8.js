// TEIL 8: Event Delegation

console.log('=== TEIL 8 START ===');

const itemList = document.querySelector('#item-list');

console.log('Item-Liste selektiert:', itemList);

// ===== EIN Event Listener für alle Aktionen in der Liste =====
itemList.addEventListener('click', (event) => {
    console.log('Geklicktes Element:', event.target);
    console.log('Element-Klassen:', event.target.classList);
    
    // 1. Wenn Item-Text geklickt wurde: Toggle "done" Klasse
    if (event.target.classList.contains('item-text')) {
        const parentItem = event.target.closest('.item');
        parentItem.classList.toggle('done');
        console.log('Item-Text geklickt:', event.target.textContent);
    }
    
    // 2. Wenn Delete-Button geklickt wurde: Item entfernen
    if (event.target.classList.contains('delete-btn')) {
        const itemToDelete = event.target.closest('.item');
        const itemText = itemToDelete.querySelector('.item-text').textContent;
        
        itemToDelete.remove();
        console.log('Item gelöscht mit ID:', event.target.dataset.id);
        console.log('Gelöschter Text:', itemText);
    }
});

console.log('Event Delegation Listener hinzugefügt');

// ===== ERKLÄRUNG: Event Bubbling =====
console.log('');
console.log('=== EVENT DELEGATION ERKLÄRUNG ===');
console.log('Event Delegation nutzt Event Bubbling:');
console.log('- Klick auf Button → Event steigt zum Parent auf');
console.log('- Der Listener auf #item-list fängt ALLE Klicks ab');
console.log('- Auch auf dynamisch hinzugefügten Elementen!');
console.log('');

console.log('=== TEIL 8 FERTIG ===');