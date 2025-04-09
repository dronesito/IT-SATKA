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
const buttonContainer = document.querySelector('.button-container'); // Получаем элемент кнопки
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
            }, 300); // Пауза перед началом добавления нового текста
        }
    }, 20); // Скорость удаления букв
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
    }, 30); // Скорость добавления букв
}
// Скрыть все баннеры, кроме первого 
function showBanner(index) { 
    banners.forEach((banner, i) => { 
        if (i === index) { 
            banner.classList.add('active'); 
            banner.classList.remove('inactive'); 
        } else { 
            banner.classList.remove('active'); 
            banner.classList.add('inactive'); 
        } 
    }); 
    // Получаем текущий текст и новый текст
    const oldText = bannerTextElement.textContent;
    const newText = texts[index];
    // Убираем кнопку
    // buttonContainer.style.display = 'none'; // Удалите или закомментируйте эту строку
    // Задержка перед началом анимации текста
    setTimeout(() => {
        animateText(oldText, newText); // Запускаем анимацию текста
       
    }, 500); // Задержка перед началом анимации текста
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
// Менять баннер каждые 10 секунд 
function changeBanner() { 
    currentIndex = (currentIndex + 1) % totalBanners; 
    showBanner(currentIndex); 
} 
// Инициализация 
showBanner(currentIndex); 
setInterval(changeBanner, 10000); // 10000 миллисекунд = 10 секунд




