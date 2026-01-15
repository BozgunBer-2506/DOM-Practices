// TEIL 9: Event Delegation

const mainItemList = document.querySelector('#item-list');

mainItemList.addEventListener('click', (e) => {
    console.log('Geklicktes Element:', e.target);

    if (e.target.classList.contains('item-text')) {
        const parentItem = e.target.closest('.item');
        parentItem.classList.toggle('done');
        console.log('Item-Text geklickt:', e.target.textContent);
    }

    if (e.target.classList.contains('delete-btn')) {
        const itemToDelete = e.target.closest('.item');
        itemToDelete.remove();
        console.log('Item gelöscht mit ID:', e.target.dataset.id);
    }
});

console.log('Event Delegation aktiv auf #item-list');