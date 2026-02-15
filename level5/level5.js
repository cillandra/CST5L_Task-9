let coins = 0;

const coinCount = document.getElementById('coinCount');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');

plusBtn.addEventListener('click', function() {
    coins++;
    coinCount.textContent = coins;
});

minusBtn.addEventListener('click', function() {
    if (coins > 0) {
        coins--;
        coinCount.textContent = coins;
    }
});