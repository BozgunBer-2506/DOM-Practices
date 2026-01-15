// TEIL 9: Data Attributes

console.log('=== TEIL 9 START ===');

const dataItems = document.querySelectorAll('#item-list .item');

console.log('Alle Items:', dataItems.length);
console.log('');

// ===== DATA ATTRIBUTES AUSLESEN UND SETZEN =====
dataItems.forEach((item, index) => {
    // 1. Lies die data-id jedes Items aus
    const itemId = item.dataset.id;
    console.log(`Item ${index + 1} hat ID:`, itemId);
    
    // 2. Füge ein neues data-Attribut hinzu: data-created mit aktuellem Timestamp
    item.dataset.created = Date.now();
    console.log(`Item ${index + 1} created-Timestamp:`, item.dataset.created);
    
    // 3. Füge data-index hinzu mit dem aktuellen Index
    item.dataset.index = index;
    console.log(`Item ${index + 1} index:`, item.dataset.index);
});

console.log('');
console.log('--- Alle Data-Attribute hinzugefügt ---');
console.log('');

// ===== EVENT DELEGATION: Bei Klick alle data-Attribute anzeigen =====
const itemListEl = document.querySelector('#item-list');

itemListEl.addEventListener('click', (event) => {
    const clickedItem = event.target.closest('.item');
    
    if (clickedItem) {
        console.log('');
        console.log('=== ITEM GEKLICKT ===');
        console.log('Alle data-Attribute:', clickedItem.dataset);
        console.log('Als Objekt:', { ...clickedItem.dataset });
        console.log('');
        console.log('Einzelne Attribute:');
        console.log('- data-id:', clickedItem.dataset.id);
        console.log('- data-created:', clickedItem.dataset.created);
        console.log('- data-index:', clickedItem.dataset.index);
        console.log('');
    }
});

console.log('Click listener für data-Attribute hinzugefügt');

console.log('');
console.log('=== TEIL 9 FERTIG ===');