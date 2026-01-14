// TEIL 6: Formulare & Input Events

console.log('=== TEIL 6 START ===');

const app = document.querySelector('#app');

// Formular HTML hinzufügen
app.insertAdjacentHTML('beforeend', `
    <div id="form-section" style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
        <h2>Kontaktformular</h2>
        <form id="contact-form">
            <div style="margin-bottom: 15px;">
                <label for="userName">Name:</label><br>
                <input type="text" id="userName" name="userName" required 
                    style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            
            <div style="margin-bottom: 15px;">
                <label for="userEmail">E-Mail:</label><br>
                <input type="email" id="userEmail" name="userEmail" required
                    style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            
            <div style="margin-bottom: 15px;">
                <label for="userMessage">Nachricht:</label><br>
                <textarea id="userMessage" name="userMessage" rows="4" 
                    style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"></textarea>
            </div>
            
            <button type="submit" class="btn">Absenden</button>
        </form>
        <div id="form-output" style="margin-top: 20px; display: none; padding: 15px; background: #d4edda; border-radius: 4px;"></div>
    </div>
`);

// Formular Elemente selektieren
const contactForm = document.querySelector('#contact-form');
const formOutput = document.querySelector('#form-output');

console.log('1. Formular hinzugefügt');

// ===== FORM SUBMIT =====
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formular gesendet!');
    
    // Werte auslesen
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;
    const userMessage = document.querySelector('#userMessage').value;
    
    console.log('Formulardaten:', { userName, userEmail, userMessage });
    
    // Ausgabe anzeigen
    formOutput.textContent = `Vielen Dank, ${userName}! Wir melden uns bei ${userEmail}.`;
    formOutput.style.display = 'block';
    
    // Formular zurücksetzen
    contactForm.reset();
    console.log('Formular zurückgesetzt');
});

console.log('2. Form submit listener hinzugefügt');

// ===== INPUT EVENT - LIVE VALIDIERUNG =====
const emailField = document.querySelector('#userEmail');

emailField.addEventListener('input', (event) => {
    const emailValue = event.target.value;
    console.log('E-Mail eingegeben:', emailValue);
    
    if (emailValue.includes('@') && emailValue.includes('.')) {
        emailField.style.borderColor = '#28a745';
        console.log('✓ E-Mail gültig');
    } else if (emailValue.length > 0) {
        emailField.style.borderColor = '#dc3545';
        console.log('✗ E-Mail ungültig');
    } else {
        emailField.style.borderColor = '#ddd';
    }
});

console.log('3. E-Mail input listener hinzugefügt');

// ===== FOCUS UND BLUR =====
const nameField = document.querySelector('#userName');

nameField.addEventListener('focus', () => {
    console.log('Name-Feld hat Fokus');
    nameField.style.borderColor = '#007bff';
});

nameField.addEventListener('blur', () => {
    console.log('Name-Feld verloren Fokus');
    nameField.style.borderColor = '#ddd';
});

console.log('4. Name field focus/blur listener hinzugefügt');

console.log('=== TEIL 6 FERTIG ===');