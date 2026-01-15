// TEIL 7: Formulare & Input Events

const app = document.querySelector('#app');

app.insertAdjacentHTML('beforeend', `
    <div id="form-section" style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
        <h2>Kontaktformular</h2>
        <form id="contact-form">
            <div style="margin-bottom: 15px;">
                <label for="userName">Name:</label><br>
                <input type="text" id="userName" required 
                    style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label for="userEmail">E-Mail:</label><br>
                <input type="email" id="userEmail" required
                    style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label for="userMessage">Nachricht:</label><br>
                <textarea id="userMessage" rows="4" 
                    style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"></textarea>
            </div>
            <button type="submit" class="btn">Absenden</button>
        </form>
        <div id="form-output" style="margin-top: 20px; display: none; padding: 15px; background: #d4edda; border-radius: 4px;"></div>
    </div>
`);

const contactForm = document.querySelector('#contact-form');
const formOutput = document.querySelector('#form-output');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;
    const userMessage = document.querySelector('#userMessage').value;

    console.log('Formulardaten:', { userName, userEmail, userMessage });

    formOutput.textContent = `Vielen Dank, ${userName}! Wir melden uns bei ${userEmail}.`;
    formOutput.style.display = 'block';

    contactForm.reset();
});

const emailField = document.querySelector('#userEmail');

emailField.addEventListener('input', (e) => {
    const emailValue = e.target.value;

    if (emailValue.includes('@') && emailValue.includes('.')) {
        emailField.style.borderColor = '#28a745';
    } else if (emailValue.length > 0) {
        emailField.style.borderColor = '#dc3545';
    } else {
        emailField.style.borderColor = '#ddd';
    }
});