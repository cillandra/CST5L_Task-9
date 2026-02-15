let currentLevel = 1;
const maxLevel = 6;

const levelBadge = document.getElementById('levelBadge');
const levelText = document.getElementById('levelText');
const levelUpBtn = document.getElementById('levelUpBtn');

levelUpBtn.addEventListener('click', function() {
    if (currentLevel < maxLevel) {
        currentLevel++;
        levelBadge.textContent = 'Level ' + currentLevel;
        levelText.textContent = 'You are now at Level ' + currentLevel + '! Keep going!';
        
        levelUpBtn.classList.remove('btn-primary', 'btn-info', 'btn-warning', 'btn-danger', 'btn-success');
        
        if (currentLevel === 2) {
            levelUpBtn.classList.add('btn-primary'); 
        } else if (currentLevel === 3) {
            levelUpBtn.classList.add('btn-info'); 
        } else if (currentLevel === 4) {
            levelUpBtn.classList.add('btn-warning');
        } else if (currentLevel === 5) {
            levelUpBtn.classList.add('btn-danger'); 
        } else if (currentLevel >= 6) {
            levelUpBtn.classList.add('btn-success'); 
            levelBadge.classList.remove('bg-dark');
            levelBadge.classList.add('bg-success');
            levelText.textContent = 'Max Level Reached! You are a master!';
            levelUpBtn.textContent = 'Max Level!';
        }
    }
});