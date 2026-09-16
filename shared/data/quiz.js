// Квест-опросник для определения архетипа
const QUIZ_QUESTIONS = [
    {
        id: 1,
        text: 'Сколько тебе лет?',
        subtitle: 'Это поможет подобрать направление',
        options: [
            { text: '6-13 лет', value: 'kids', icon: '👶' },
            { text: '14-17 лет', value: 'teen', icon: '🎓' },
            { text: '18+ лет', value: 'adult', icon: '👤' }
        ]
    },
    {
        id: 2,
        text: 'Что тебя привлекает в рисовании?',
        subtitle: 'Выбери, что откликается',
        options: [
            { text: 'Точность и реализм', value: 'realist', icon: '🎨' },
            { text: 'Яркие цвета и эмоции', value: 'expressionist', icon: '🌈' },
            { text: 'Мягкие переходы и прозрачность', value: 'lyric', icon: '💧' },
            { text: 'Быстрая зарисовка', value: 'sketcher', icon: '✏️' },
            { text: 'Свои миры и персонажи', value: 'dreamer', icon: '🌸' },
            { text: 'Серьёзное обучение', value: 'academic', icon: '🎓' }
        ]
    },
    {
        id: 3,
        text: 'Какой материал тебе ближе?',
        subtitle: 'Интуитивно',
        options: [
            { text: 'Карандаш и уголь', value: 'realist', icon: '✏️' },
            { text: 'Акварель', value: 'lyric', icon: '💧' },
            { text: 'Масло и гуашь', value: 'expressionist', icon: '🖌' },
            { text: 'Пастель', value: 'expressionist', icon: '🖍' },
            { text: 'Графический планшет', value: 'dreamer', icon: '💻' },
            { text: 'Пока не знаю', value: 'sketcher', icon: '❓' }
        ]
    },
    {
        id: 4,
        text: 'Что бы ты хотел создавать?',
        subtitle: 'Твоя мечта',
        options: [
            { text: 'Реалистичные портреты', value: 'realist', icon: '👤' },
            { text: 'Пейзажи и природу', value: 'lyric', icon: '🌅' },
            { text: 'Персонажей и миры', value: 'dreamer', icon: '🌸' },
            { text: 'Быстрые зарисовки', value: 'sketcher', icon: '✏️' },
            { text: 'Абстрактные композиции', value: 'expressionist', icon: '🌈' },
            { text: 'Портфолио для ВУЗа', value: 'academic', icon: '🎓' }
        ]
    },
    {
        id: 5,
        text: 'Сколько времени готов уделять?',
        subtitle: 'Честно',
        options: [
            { text: '1 раз в неделю', value: 'light', icon: '🌱' },
            { text: '2-3 раза в неделю', value: 'medium', icon: '🔥' },
            { text: 'Каждый день', value: 'intensive', icon: '⚡️' }
        ]
    },
    {
        id: 6,
        text: 'Что для тебя важно в обучении?',
        subtitle: 'Выбери главное',
        options: [
            { text: 'Диплом гособразца', value: 'academic', icon: '📜' },
            { text: 'Творческая атмосфера', value: 'expressionist', icon: '🎭' },
            { text: 'Быстрый результат', value: 'sketcher', icon: '⚡️' },
            { text: 'Глубокие знания', value: 'realist', icon: '📚' },
            { text: 'Своё портфолио', value: 'dreamer', icon: '🎨' }
        ]
    },
    {
        id: 7,
        text: 'Опиши себя одним словом',
        subtitle: 'Финальный вопрос',
        options: [
            { text: 'Точный', value: 'realist', icon: '🎯' },
            { text: 'Эмоциональный', value: 'expressionist', icon: '❤️' },
            { text: 'Мечтательный', value: 'dreamer', icon: '✨' },
            { text: 'Спокойный', value: 'lyric', icon: '🌊' },
            { text: 'Энергичный', value: 'sketcher', icon: '⚡️' },
            { text: 'Целеустремлённый', value: 'academic', icon: '🏆' }
        ]
    }
];

// Логика подсчёта архетипа
function calculateArchetype(answers) {
    const scores = {
        realist: 0,
        expressionist: 0,
        lyric: 0,
        sketcher: 0,
        dreamer: 0,
        academic: 0
    };
    
    answers.forEach(answer => {
        if (scores[answer] !== undefined) {
            scores[answer]++;
        }
    });
    
    // Находим максимальный
    let maxScore = 0;
    let archetype = 'expressionist'; // дефолт
    
    for (const [key, value] of Object.entries(scores)) {
        if (value > maxScore) {
            maxScore = value;
            archetype = key;
        }
    }
    
    return archetype;
}

if (typeof module !== 'undefined') {
    module.exports = { QUIZ_QUESTIONS, calculateArchetype };
}
