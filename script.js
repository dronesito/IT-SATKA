let currentIndex = 0; 
const banners = document.querySelectorAll('.banner-slider img'); 
const totalBanners = banners.length; 
// Массив текстов для каждого баннера 
const texts = [ 
    "Внедрение и сопровождение программ на платформе 1С:Предприятие", 
    "Разработка программного обеспечения под заказ", 
    "Создание веб-приложений и сайтов" 
]; 
const bannerTextElement = document.querySelector('.banner-text'); 
const menuItems = document.querySelectorAll('.menuban'); 
// Функция для анимации текста
function animateText(oldText, newText) {
    const textLength = oldText.length;
    let index = 0;
    // Убираем старый текст по буквам
    const removeInterval = setInterval(() => {
        if (index < textLength) {
            bannerTextElement.textContent = oldText.slice(0, textLength - index - 1);
            index++;
        } else {
            clearInterval(removeInterval);
            // Пауза перед добавлением нового текста
            setTimeout(() => {
                addText(newText);
            }, 300); // Уменьшена пауза перед началом добавления нового текста
        }
    }, 20); // Уменьшена скорость удаления букв
}
// Функция для добавления нового текста
function addText(newText) {
    const newTextLength = newText.length;
    let index = 0;
    const addInterval = setInterval(() => {
        bannerTextElement.textContent = newText.slice(0, index + 1);
        index++;
        if (index === newTextLength) {
            clearInterval(addInterval);
        }
    }, 30); // Уменьшена скорость добавления букв
}
// Скрыть все баннеры, кроме первого 
function showBanner(index) { 
    banners.forEach((banner, i) => { 
        if (i === index) { 
            banner.classList.add('active'); 
            banner.classList.remove('inactive'); // Убедитесь, что класс inactive удален
        } else { 
            banner.classList.add('inactive'); // Добавляем класс inactive для скрытия
            banner.classList.remove('active'); 
        } 
    }); 
    // Получаем текущий текст и новый текст
    const oldText = bannerTextElement.textContent;
    const newText = texts[index];
    // Запускаем анимацию текста
    animateText(oldText, newText);
    // Обновить цвет текста в меню 
    menuItems.forEach((item, i) => { 
        const h1Element = item.querySelector('h1'); 
        const pElement = item.querySelector('p'); 
        if (i === index) { 
            h1Element.style.color = '#3CFF00'; // Зелёный цвет для активного баннера 
            pElement.style.color = '#3CFF00'; // Зелёный цвет для активного баннера 
        } else { 
            h1Element.style.color = ''; // Удалить цвет для неактивных 
            pElement.style.color = ''; // Удалить цвет для неактивных 
        } 
    }); 
} 
// Менять баннер каждые 5 секунд 
function changeBanner() { 
    currentIndex = (currentIndex + 1) % totalBanners; 
    showBanner(currentIndex); 
} 
// Инициализация 
showBanner(currentIndex); 
setInterval(changeBanner, 5000); // 5000 миллисекунд = 5 секунд
