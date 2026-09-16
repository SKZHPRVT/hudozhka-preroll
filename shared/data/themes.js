// Темы для ежедневных рисунков
const DAILY_THEMES = [
    { id: 1, text: 'Осенний лист', emoji: '🍂', hint: 'Используй тёплые цвета' },
    { id: 2, text: 'Твоё любимое животное', emoji: '🐱', hint: 'Передай характер' },
    { id: 3, text: 'Морской закат', emoji: '🌅', hint: 'Плавные переходы цвета' },
    { id: 4, text: 'Цветок в вазе', emoji: '🌸', hint: 'Обрати внимание на форму' },
    { id: 5, text: 'Домик в лесу', emoji: '🏡', hint: 'Добавь деталей' },
    { id: 6, text: 'Портрет друга', emoji: '👤', hint: 'Попробуй передать эмоцию' },
    { id: 7, text: 'Космос и звёзды', emoji: '🌌', hint: 'Играй с контрастами' },
    { id: 8, text: 'Чашка кофе', emoji: '☕️', hint: 'Простая форма, но интересная' },
    { id: 9, text: 'Твоя мечта', emoji: '✨', hint: 'Абстракция приветствуется' },
    { id: 10, text: 'Горный пейзаж', emoji: '🏔', hint: 'Передай глубину' },
    { id: 11, text: 'Любимая игрушка', emoji: '🧸', hint: 'Попробуй передать текстуру' },
    { id: 12, text: 'Фрукты на столе', emoji: '🍎', hint: 'Натюрморт' },
    { id: 13, text: 'Бабочка', emoji: '🦋', hint: 'Симметрия и цвет' },
    { id: 14, text: 'Твой город', emoji: '🏙', hint: 'Что тебе нравится в нём?' },
    { id: 15, text: 'Цветок', emoji: '🌻', hint: 'Один цветок крупным планом' },
    { id: 16, text: 'Птица', emoji: '🐦', hint: 'Попробуй в движении' },
    { id: 17, text: 'Дерево', emoji: '🌳', hint: 'Покажи характер дерева' },
    { id: 18, text: 'Твоя рука', emoji: '✋', hint: 'Сложно, но интересно' },
    { id: 19, text: 'Облака', emoji: '☁️', hint: 'Мягкие формы' },
    { id: 20, text: 'Ёлочная игрушка', emoji: '🎄', hint: 'Новогоднее настроение' },
    { id: 21, text: 'Твоё имя в стиле леттеринг', emoji: '✍️', hint: 'Красивая буква' },
    { id: 22, text: 'Гриб', emoji: '🍄', hint: 'Наблюдательность' },
    { id: 23, text: 'Воздушный шар', emoji: '🎈', hint: 'Яркий и лёгкий' },
    { id: 24, text: 'Дождь за окном', emoji: '🌧', hint: 'Атмосфера' },
    { id: 25, text: 'Твой завтрак', emoji: '🥐', hint: 'Натюрморт из жизни' },
    { id: 26, text: 'Кораблик', emoji: '⛵️', hint: 'Попробуй передать движение' },
    { id: 27, text: 'Снежинка', emoji: '❄️', hint: 'Симметрия' },
    { id: 28, text: 'Кактус', emoji: '🌵', hint: 'Интересная форма' },
    { id: 29, text: 'Мороженое', emoji: '🍦', hint: 'Аппетитно!' },
    { id: 30, text: 'Твоя любимая книга', emoji: '📖', hint: 'Обложка или сюжет' }
];

// Получить тему дня (стабильно для каждого дня)
function getTodayTheme() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    return DAILY_THEMES[dayOfYear % DAILY_THEMES.length];
}

if (typeof module !== 'undefined') {
    module.exports = { DAILY_THEMES, getTodayTheme };
}
