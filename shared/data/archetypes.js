// 6 архетипов художников
const ARCHETYPES = {
    realist: {
        id: 'realist',
        name: 'Реалист',
        emoji: '🎨',
        color: '#8B4513',
        shortDesc: 'Точность, форма, детали',
        description: 'Ты видишь мир в деталях. Тебе важно передать форму, свет, тень — всё как в реальности. Академический подход — твой путь.',
        strengths: ['Внимание к деталям', 'Точность', 'Терпение'],
        recommendedCourses: ['graphics', 'portrait', 'academic-drawing']
    },
    expressionist: {
        id: 'expressionist',
        name: 'Экспрессионист',
        emoji: '🌈',
        color: '#FF6B9D',
        shortDesc: 'Цвет, эмоции, свобода',
        description: 'Цвет — твой язык. Ты выражаешь эмоции через яркие мазки и смелые решения. Живопись маслом и пастель — твоя стихия.',
        strengths: ['Чувство цвета', 'Смелость', 'Эмоциональность'],
        recommendedCourses: ['oil', 'pastel', 'gouache']
    },
    lyric: {
        id: 'lyric',
        name: 'Лирик',
        emoji: '💧',
        color: '#4ECDC4',
        shortDesc: 'Мягкость, прозрачность, текучесть',
        description: 'Ты чувствуешь тонкие переходы и полутона. Акварель с её прозрачностью и лёгкостью — идеальный инструмент для тебя.',
        strengths: ['Тонкость восприятия', 'Терпение', 'Гармония'],
        recommendedCourses: ['watercolor', 'botanical', 'watercolor-pro']
    },
    sketcher: {
        id: 'sketcher',
        name: 'Скетчер',
        emoji: '✏️',
        color: '#95A5A6',
        shortDesc: 'Быстро, точно, динамично',
        description: 'Ты ловишь момент. Быстрые зарисовки, динамичные линии — твой стиль. Тебе важно передать суть, а не детали.',
        strengths: ['Скорость', 'Наблюдательность', 'Лёгкость'],
        recommendedCourses: ['sketching', 'urban', 'graphics']
    },
    dreamer: {
        id: 'dreamer',
        name: 'Фантазёр',
        emoji: '🌸',
        color: '#9B59B6',
        shortDesc: 'Свои миры и персонажи',
        description: 'Ты живёшь в своих мирах. Персонажи, истории, фантазии — тебе тесно в реальности. Аниме, цифровая живопись, концепт-арт — твой путь.',
        strengths: ['Воображение', 'Креативность', 'Сторителлинг'],
        recommendedCourses: ['anime', 'digital-art', 'concept-art', 'animation']
    },
    academic: {
        id: 'academic',
        name: 'Академик',
        emoji: '🎓',
        color: '#2C3E50',
        shortDesc: 'Серьёзный путь к мастерству',
        description: 'Ты настроен серьёзно. Хочешь не просто рисовать, а освоить профессию, поступить в ВУЗ, получить документ гособразца. Мы поможем.',
        strengths: ['Целеустремлённость', 'Дисциплина', 'Глубина'],
        recommendedCourses: ['academic', 'composition', 'color-science']
    }
};

// Экспорт для использования
if (typeof module !== 'undefined') {
    module.exports = ARCHETYPES;
}
