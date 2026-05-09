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
});// --- ЛОГИКА ОКНА ОПЛАТЫ ---
const buyButtons = document.querySelectorAll('.buy-btn');
const paymentModal = document.getElementById('paymentModal');
const closeModal = document.getElementById('closeModal');
const paymentItemName = document.getElementById('paymentItemName');

// Открываем модалку при клике на ЛЮБУЮ кнопку "Купить"
buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Умная фишка: берем название плагина прямо из карточки
        const card = e.target.closest('.plugin-card');
        const pluginName = card.querySelector('h3').innerText;
        
        paymentItemName.innerText = `Оплата: ${pluginName}`;
        paymentModal.classList.add('active');
    });
});

// Закрытие по крестику
closeModal.addEventListener('click', () => {
    paymentModal.classList.remove('active');
});

// Закрытие при клике на темный фон вокруг окна
paymentModal.addEventListener('click', (e) => {
    if (e.target === paymentModal) {
        paymentModal.classList.remove('active');
    }
});