// TEIL 3: Inhalte ändern

// 1. Ändere den Titel
const pageTitle = document.querySelector('#main-title');
pageTitle.textContent = 'Meine DOM App';
console.log('Neuer Titel:', pageTitle.textContent);

// 2. Ändere den Intro-Text
const pageIntro = document.querySelector('#intro');
pageIntro.textContent = 'JavaScript macht Webseiten interaktiv!';
console.log('Neuer Intro:', pageIntro.textContent);

// 3. Ändere den Button-Text
const demoButton = document.querySelector('#demo-btn');
demoButton.textContent = "Los geht's!";
console.log('Neuer Button-Text:', demoButton.textContent);

// 4. Ändere den Inhalt der Content-Box mit innerHTML
const contentBox = document.querySelector('#content');
contentBox.innerHTML = '<strong>Neuer Inhalt!</strong> Mit HTML formatiert.';
console.log('Neue Content:', contentBox.innerHTML);

// 5. Ändere das Bild
const demoImg = document.querySelector('#demo-image');
demoImg.src = 'https://picsum.photos/200/100';
demoImg.alt = 'Geändertes Bild';
console.log('Neues Bild src:', demoImg.src);

// 6. Lies den Text der Item-Texte aus
const itemTexts = document.querySelectorAll('.item-text');
console.log('--- Alle Item Texte ---');
itemTexts.forEach((item, index) => {
    console.log(`Item ${index + 1}: ${item.textContent}`);
});