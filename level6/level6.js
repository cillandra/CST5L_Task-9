const correctDoor = Math.floor(Math.random() * 3) + 1;

const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');
const resultArea = document.getElementById('resultArea');
const restartBtn = document.getElementById('restartBtn');

function checkDoor(doorNumber) {
    door1.disabled = true;
    door2.disabled = true;
    door3.disabled = true;
    
    resultArea.innerHTML = '';
    
    if (doorNumber === correctDoor) {
        resultArea.innerHTML = '<div class="success-message">🎉 Congratulations! You found the correct door!<br>You are a true champion!</div>';
    } else {
        resultArea.innerHTML = '<div class="error-message">❌ Wrong door! The correct door was Door ' + correctDoor + '.<br>Try again!</div>';
    }
    
    restartBtn.classList.remove('d-none');
}

door1.addEventListener('click', function() {
    checkDoor(1);
});

door2.addEventListener('click', function() {
    checkDoor(2);
});

door3.addEventListener('click', function() {
    checkDoor(3);
});

restartBtn.addEventListener('click', function() {
    location.reload();
});