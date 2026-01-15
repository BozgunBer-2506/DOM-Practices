// TEIL 10: Data Attributes

const dataItems = document.querySelectorAll('#item-list .item');

dataItems.forEach((item, index) => {
    const itemId = item.dataset.id;
    console.log(`Item ${index + 1} hat ID:`, itemId);

    item.dataset.created = Date.now();
    item.dataset.index = index;
});

const dataItemList = document.querySelector('#item-list');
dataItemList.addEventListener('click', (e) => {
    const clickedItem = e.target.closest('.item');
    if (clickedItem) {
        console.log('Alle data-Attribute:', clickedItem.dataset);
        console.log('Als Objekt:', { ...clickedItem.dataset });
    }
});