// ========== КВЕСТ "ТВОЙ АРХЕТИП" С АДАПТАЦИЕЙ ПО ВОЗРАСТУ ==========

const QUIZ_QUESTIONS = [
    // ========== ВОПРОС 1: ВОЗРАСТ (общий) ==========
    {
        id: 1,
        section: 'common',
        text: 'Сколько тебе лет?',
        subtitle: 'Это поможет подобрать правильный путь',
        options: [
            { text: '6-13 лет', value: 'kids', icon: '🧒' },
            { text: '14-17 лет', value: 'teens', icon: '🎓' },
            { text: '18+ лет', value: 'adults', icon: '👤' }
        ]
    },
    
    // ========================================
    // 👶 ВЕТКА ДЛЯ ДЕТЕЙ 6-13
    // ========================================
    
    {
        id: 2,
        section: 'kids',
        text: 'Что тебе больше нравится рисовать? 🎨',
        subtitle: 'Выбери, что откликается',
        options: [
            { text: 'Волшебных существ и фей', value: 'dreamer', icon: '🧚‍♀️' },
            { text: 'Весёлые истории в картинках', value: 'expressionist', icon: '📖' },
            { text: 'Как в мультиках и аниме', value: 'dreamer', icon: '🌸' },
            { text: 'Своих питомцев и зверят', value: 'realist', icon: '🐱' },
            { text: 'Радугу, солнышко, цветочки', value: 'lyric', icon: '🌈' },
            { text: 'Гонки, роботов, superheroes', value: 'sketcher', icon: '🚀' }
        ]
    },
    {
        id: 3,
        section: 'kids',
        text: 'Что тебе интереснее делать? ✨',
        subtitle: 'Как проводишь время с красками',
        options: [
            { text: 'Красить всё вокруг в яркие цвета', value: 'expressionist', icon: '🎨' },
            { text: 'Придумывать своих персонажей', value: 'dreamer', icon: '🦄' },
            { text: 'Мастерить и делать коллажи', value: 'sketcher', icon: '✂️' },
            { text: 'Рисовать животных как в жизни', value: 'realist', icon: '🐶' },
            { text: 'Раскрашивать готовые картинки', value: 'lyric', icon: '🖍' }
        ]
    },
    {
        id: 4,
        section: 'kids',
        text: 'Что бы ты нарисовал(а) для мамы? 💝',
        subtitle: 'Самый лучший подарок',
        options: [
            { text: 'Красивый букет цветов', value: 'lyric', icon: '💐' },
            { text: 'Волшебную страну с феями', value: 'dreamer', icon: '🏰' },
            { text: 'Портрет мамы в короне', value: 'realist', icon: '👑' },
            { text: 'Яркие бабочки и облака', value: 'expressionist', icon: '🦋' },
            { text: 'Домик нашей мечты', value: 'sketcher', icon: '🏠' }
        ]
    },
    {
        id: 5,
        section: 'kids',
        text: 'Какой инструмент тебе интереснее? 🖌',
        subtitle: 'Чем больше нравится работать',
        options: [
            { text: 'Кисточки и краски', value: 'expressionist', icon: '🖌' },
            { text: 'Цветные карандаши', value: 'realist', icon: '✏️' },
            { text: 'Мелки и пастель', value: 'lyric', icon: '🖍' },
            { text: 'Фломастеры всех цветов', value: 'dreamer', icon: '🖊' },
            { text: 'Ножницы, клей, бумага', value: 'sketcher', icon: '✂️' }
        ]
    },
    {
        id: 6,
        section: 'kids',
        text: 'Как ты хочешь проводить время на занятиях? 🎉',
        subtitle: 'Что для тебя важно',
        options: [
            { text: 'Играть и веселиться', value: 'expressionist', icon: '🎮' },
            { text: 'Учиться делать красиво', value: 'realist', icon: '📚' },
            { text: 'Придумывать свои истории', value: 'dreamer', icon: '💭' },
            { text: 'Знакомиться и дружить', value: 'lyric', icon: '👫' },
            { text: 'Хочу вырасти художником', value: 'academic', icon: '🌟' }
        ]
    },
    
    // ========================================
    // 🎓 ВЕТКА ДЛЯ ПОДРОСТКОВ 14-17
    // ========================================
    
    {
        id: 2,
        section: 'teens',
        text: 'Что тебя вдохновляет? 🔥',
        subtitle: 'Что цепляет в современном искусстве',
        options: [
            { text: 'Аниме, манга, вебтуны', value: 'dreamer', icon: '🌸' },
            { text: 'Игры, концепт-арт, cyberpunk', value: 'dreamer', icon: '🎮' },
            { text: 'Классика: реализм, портреты', value: 'realist', icon: '🖼' },
            { text: 'Стрит-арт, граффити, скетчи', value: 'sketcher', icon: '🖍' },
            { text: 'Абстракция, эмоции, цвет', value: 'expressionist', icon: '🌈' },
            { text: 'Иллюстрация для соцсетей', value: 'lyric', icon: '📱' }
        ]
    },
    {
        id: 3,
        section: 'teens',
        text: 'Какие проекты тебе интересны? 🎬',
        subtitle: 'Что хотел(а) бы создать',
        options: [
            { text: 'Свой веб-комикс', value: 'dreamer', icon: '📖' },
            { text: 'Портфолио для ВУЗа', value: 'academic', icon: '🎓' },
            { text: 'Принты для мерча', value: 'expressionist', icon: '👕' },
            { text: 'Дизайн для своего блога', value: 'sketcher', icon: '✨' },
            { text: 'Свою галерею работ', value: 'realist', icon: '🖼' },
            { text: 'Анимацию и моушн', value: 'dreamer', icon: '🎞' }
        ]
    },
    {
        id: 4,
        section: 'teens',
        text: 'Какой формат обучения тебе ближе? 🎒',
        subtitle: 'Как хочешь учиться',
        options: [
            { text: 'Онлайн + цифра, планшет', value: 'dreamer', icon: '💻' },
            { text: 'Классические курсы с натурой', value: 'realist', icon: '🖼' },
            { text: 'Марафоны и челленджи', value: 'sketcher', icon: '⚡️' },
            { text: 'Творческие встречи и воркшопы', value: 'expressionist', icon: '🎉' },
            { text: 'Серьёзная подготовка к ВУЗу', value: 'academic', icon: '📚' }
        ]
    },
    {
        id: 5,
        section: 'teens',
        text: 'Что для тебя успех в творчестве? 🏆',
        subtitle: 'Твоя большая цель',
        options: [
            { text: 'Стать известным иллюстратором', value: 'dreamer', icon: '🌟' },
            { text: 'Поступить в топовый ВУЗ', value: 'academic', icon: '🎓' },
            { text: 'Иметь свой стиль, узнаваемость', value: 'expressionist', icon: '🎨' },
            { text: 'Продавать свои работы', value: 'sketcher', icon: '💰' },
            { text: 'Просто творить в удовольствие', value: 'lyric', icon: '❤️' }
        ]
    },
    {
        id: 6,
        section: 'teens',
        text: 'Что тебе важно в преподавателе? 👀',
        subtitle: 'С кем комфортно учиться',
        options: [
            { text: 'Современный, "на одной волне"', value: 'dreamer', icon: '🤘' },
            { text: 'Профессионал с портфолио', value: 'realist', icon: '💼' },
            { text: 'Тот, кто поддержит эксперименты', value: 'expressionist', icon: '✨' },
            { text: 'Строгий академический подход', value: 'academic', icon: '📏' },
            { text: 'Дружелюбный, спокойный', value: 'lyric', icon: '☕️' }
        ]
    },
    
    // ========================================
    // 👤 ВЕТКА ДЛЯ ВЗРОСЛЫХ 18+
    // ========================================
    
    {
        id: 2,
        section: 'adults',
        text: 'Зачем тебе рисование? 💫',
        subtitle: 'Что привело тебя сюда',
        options: [
            { text: 'Отвлечься от работы, антистресс', value: 'lyric', icon: '🧘‍♀️' },
            { text: 'Давняя мечта, которой не было времени', value: 'expressionist', icon: '💖' },
            { text: 'Найти новое хобби и друзей', value: 'sketcher', icon: '🤝' },
            { text: 'Профессионально развиваться', value: 'academic', icon: '🚀' },
            { text: 'Реализовать творческий потенциал', value: 'dreamer', icon: '✨' },
            { text: 'Хочу писать работы для дома', value: 'realist', icon: '🖼' }
        ]
    },
    {
        id: 3,
        section: 'adults',
        text: 'Что тебе откликается в искусстве? 🎨',
        subtitle: 'Чем любуешься',
        options: [
            { text: 'Импрессионизм, Ван Гог, Моне', value: 'expressionist', icon: '🌻' },
            { text: 'Реализм, портреты, детали', value: 'realist', icon: '👤' },
            { text: 'Современная абстракция', value: 'lyric', icon: '🌀' },
            { text: 'Скетчи, городские зарисовки', value: 'sketcher', icon: '🏙' },
            { text: 'Фэнтези, сюрреализм, фантазии', value: 'dreamer', icon: '🐉' }
        ]
    },
    {
        id: 4,
        section: 'adults',
        text: 'Сколько времени готов(а) уделять? ⏰',
        subtitle: 'Честно',
        options: [
            { text: '1 раз в неделю — для души', value: 'lyric', icon: '🌱' },
            { text: '2-3 раза в неделю', value: 'expressionist', icon: '🔥' },
            { text: 'Хочу погрузиться по максимуму', value: 'academic', icon: '⚡️' },
            { text: 'По выходным на мастер-классы', value: 'sketcher', icon: '📅' }
        ]
    },
    {
        id: 5,
        section: 'adults',
        text: 'Что бы ты хотел(а) создать? 🖼',
        subtitle: 'Твоя картина мечты',
        options: [
            { text: 'Портрет близкого человека', value: 'realist', icon: '💑' },
            { text: 'Пейзаж с эмоциями и цветом', value: 'expressionist', icon: '🌅' },
            { text: 'Акварельные скетчи путешествий', value: 'lyric', icon: '✈️' },
            { text: 'Интерьерную картину для дома', value: 'sketcher', icon: '🏠' },
            { text: 'Иллюстрации для книги/блога', value: 'dreamer', icon: '📖' },
            { text: 'Уровень для выставки или продажи', value: 'academic', icon: '🎨' }
        ]
    },
    {
        id: 6,
        section: 'adults',
        text: 'Что важно в обучении? 🎯',
        subtitle: 'Твои приоритеты',
        options: [
            { text: 'Атмосфера и поддержка', value: 'lyric', icon: '☕️' },
            { text: 'Быстрый результат и техника', value: 'sketcher', icon: '⚡️' },
            { text: 'Глубокие академические знания', value: 'academic', icon: '📚' },
            { text: 'Свобода и эксперименты', value: 'expressionist', icon: '🎭' },
            { text: 'Возможность творить своё', value: 'dreamer', icon: '💫' },
            { text: 'Диплом и системный подход', value: 'realist', icon: '🎓' }
        ]
    }
];

// ========== ЛОГИКА ПОДСЧЁТА АРХЕТИПА ==========
function calculateArchetype(answers) {
    const scores = {
        realist: 0,
        expressionist: 0,
        lyric: 0,
        sketcher: 0,
        dreamer: 0,
        academic: 0
    };
    
    // Считаем голоса (пропускаем возрастной вопрос)
    answers.forEach(answer => {
        if (scores[answer] !== undefined) {
            scores[answer]++;
        }
    });
    
    // Находим максимальный
    let maxScore = 0;
    let archetype = 'expressionist';
    
    for (const [key, value] of Object.entries(scores)) {
        if (value > maxScore) {
            maxScore = value;
            archetype = key;
        }
    }
    
    return archetype;
}

// ========== ФИЛЬТРАЦИЯ ВОПРОСОВ ПО ВОЗРАСТУ ==========
function getQuestionsForAge(ageGroup) {
    // Вопрос 1 — всегда
    const commonQuestions = QUIZ_QUESTIONS.filter(q => q.section === 'common');
    // Вопросы по возрасту
    const ageQuestions = QUIZ_QUESTIONS.filter(q => q.section === ageGroup);
    
    return [...commonQuestions, ...ageQuestions];
}

// ========== ЭМОЦИОНАЛЬНЫЕ РЕАКЦИИ ПО ВОЗРАСТУ ==========
const AGE_REACTIONS = {
    kids: {
        greeting: 'Привет, юный художник! 🎨',
        subtitle: 'Давай найдём твой волшебный стиль!',
        loading: 'Открываем портал в мир красок...'
    },
    teens: {
        greeting: 'Йо! Ты готов(а) найти свой вайб? 🔥',
        subtitle: 'Этот квест покажет твой стиль в искусстве',
        loading: 'Сканируем твою творческую ДНК...'
    },
    adults: {
        greeting: 'Здравствуйте! ✨',
        subtitle: 'Давайте найдём направление, которое откликается именно вам',
        loading: 'Анализируем ваши предпочтения...'
    }
};

// Экспорт
if (typeof module !== 'undefined') {
    module.exports = { QUIZ_QUESTIONS, calculateArchetype, getQuestionsForAge, AGE_REACTIONS };
}
