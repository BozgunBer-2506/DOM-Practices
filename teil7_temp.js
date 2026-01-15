// TEIL 7: Elemente erstellen & einfügen

console.log('=== TEIL 7 START ===');

const app = document.querySelector('#app');

// HTML für dynamische Liste hinzufügen
app.insertAdjacentHTML('beforeend', `
    <div id="list-section" style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
        <h2>Dynamische Liste</h2>
        <form id="add-item-form" style="display: flex; gap: 10px; margin-bottom: 20px;">
            <input type="text" id="new-item-input" placeholder="Neues Item..." required
                style="flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
            <button type="submit" class="btn">Hinzufügen</button>
        </form>
        <ul id="dynamic-list" style="list-style: none;"></ul>
    </div>
`);

const addItemForm = document.querySelector('#add-item-form');
const newItemInput = document.querySelector('#new-item-input');
const dynamicList = document.querySelector('#dynamic-list');

let currentItemId = 0;

console.log('1. Dynamische Liste HTML hinzugefügt');

// ===== FUNKTION: Neues Item erstellen =====
function createNewItem(text, id) {
    // <li> Element erstellen
    const li = document.createElement('li');
    li.classList.add('item');
    li.dataset.id = id;
    
    // <span> mit Text erstellen (XSS-sicher!)
    const span = document.createElement('span');
    span.classList.add('item-text');
    span.textContent = text;
    
    // Delete Button erstellen
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'X';
    deleteBtn.type = 'button';
    
    // Elemente zusammenfügen
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    return li;
}

console.log('2. Funktion createNewItem erstellt');

// ===== FORM SUBMIT =====
addItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const text = newItemInput.value.trim();
    
    if (text === '') {
        console.log('Leerer Text!');
        return;
    }
    
    currentItemId++;
    
    // Neues Item erstellen
    const newItem = createNewItem(text, currentItemId);
    
    // Zur Liste hinzufügen
    dynamicList.appendChild(newItem);
    
    console.log(`Neues Item hinzugefügt: ${text}`);
    
    // Input leeren und Fokus setzen
    newItemInput.value = '';
    newItemInput.focus();
});

console.log('3. Form submit listener hinzugefügt');

// ===== DELETE BUTTON - EVENT DELEGATION =====
dynamicList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const itemToRemove = event.target.closest('.item');
        const itemText = itemToRemove.querySelector('.item-text').textContent;
        
        itemToRemove.remove();
        
        console.log(`Item gelöscht: ${itemText}`);
    }
});

console.log('4. Delete button listener (Event Delegation) hinzugefügt');

// ===== VORDEFINIERTE ITEMS (ZUM TESTEN) =====
const exampleItems = ['JavaScript lernen', 'DOM Manipulation', 'Event Listener verstehen'];

exampleItems.forEach((text) => {
    currentItemId++;
    const newItem = createNewItem(text, currentItemId);
    dynamicList.appendChild(newItem);
});

console.log('5. Vordefinierte Items hinzugefügt');

console.log('=== TEIL 7 FERTIG ===');