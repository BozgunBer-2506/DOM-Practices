// TEIL 8: Elemente erstellen & einfügen

const app = document.querySelector('#app');

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

function createNewItem(text, id) {
    const li = document.createElement('li');
    li.classList.add('item');
    li.dataset.id = id;

    const span = document.createElement('span');
    span.classList.add('item-text');
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'X';
    deleteBtn.type = 'button';

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

addItemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = newItemInput.value.trim();
    if (!text) return;

    currentItemId++;

    const newListItem = createNewItem(text, currentItemId);
    dynamicList.appendChild(newListItem);

    newItemInput.value = '';
    newItemInput.focus();
});

dynamicList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const itemToRemove = e.target.closest('.item');
        itemToRemove.remove();
    }
});