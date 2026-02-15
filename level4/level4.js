const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const messageArea = document.getElementById('messageArea');
const nextBtn = document.getElementById('nextBtn');

submitBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    
    messageArea.innerHTML = '';
    
    if (name === '') {
        messageArea.innerHTML = '<div class="error-message">❌ Please enter your name!</div>';
        nextBtn.disabled = true;
    } else {
        messageArea.innerHTML = '<div class="success-message">✅ Welcome, ' + name + '!</div>';
        nextBtn.disabled = false;
    }
});

nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitBtn.click();
    }
});

nextBtn.addEventListener('click', function() {
    if (!nextBtn.disabled) {
        window.location.href = '../level5/level5.html';
    }
});