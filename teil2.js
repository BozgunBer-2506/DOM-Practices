// TEIL 2: Elemente selektieren

// 1. Selektiere das Element mit id="main-title"
const title = document.querySelector('#main-title');
console.log('Titel:', title);

// 2. Selektiere das Element mit id="intro"
const introText = document.querySelector('#intro');
console.log('Intro:', introText);

// 3. Selektiere den Button mit id="demo-btn"
const mainButton = document.querySelector('#demo-btn');
console.log('Button:', mainButton);

// 4. Selektiere ALLE Elemente mit class="item"
const allItems = document.querySelectorAll('.item');
console.log('Alle Items:', allItems);
console.log('Anzahl Items:', allItems.length);

// 5. Selektiere das erste .item innerhalb von #item-list
const firstListItem = document.querySelector('#item-list .item');
console.log('Erstes Item:', firstListItem);