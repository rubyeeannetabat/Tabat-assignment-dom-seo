const mainText = document.getElementById('main-text');
const changeTextBtn = document.getElementById('change-text-btn');
const gamesList = document.getElementById('games-list');
const addItemBtn = document.getElementById('add-item-btn');


changeTextBtn.addEventListener('click', () => {
    mainText.textContent = "Every game is an adventure, a chance to become a hero, a strategist, or a world-builder. It's a journey I'm always ready to take.";
});


addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Baldur\'s Gate 3';
    gamesList.appendChild(newItem);
});