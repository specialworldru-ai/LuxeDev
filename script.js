const authBtn = document.getElementById('authBtn');
const authDropdown = document.getElementById('authDropdown');

// Открытие/закрытие по клику на кнопку
authBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Чтобы клик не улетал дальше
    authDropdown.classList.toggle('active');
});

// Закрытие меню, если кликнуть в любое другое место сайта
document.addEventListener('click', () => {
    authDropdown.classList.remove('active');
});

// Чтобы само меню не закрывалось при клике внутри него
authDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});