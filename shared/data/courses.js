// Каталог курсов школы Художка.ПРО
const COURSES = {
    // 🎨 РИСУНОК И ЖИВОПИСЬ (взрослые и подростки)
    'graphics': {
        id: 'graphics',
        name: 'Графика, рисунок в карандаше',
        category: 'art',
        categoryName: 'Рисунок и живопись',
        emoji: '✏️',
        age: '14+',
        duration: '12 занятий',
        level: 'Для продолжающих',
        description: 'Академический рисунок, портрет, гипсовые головы, изучение анатомии',
        program: [
            'Изображение черепа, изучение анатомии',
            'Изображение гипсовых частей лица',
            'Женская гипсовая голова',
            'Мужская гипсовая голова',
            'Портрет с натуры'
        ],
        price: 4200,
        hasDiploma: true
    },
    'oil': {
        id: 'oil',
        name: 'Масляная живопись',
        category: 'art',
        categoryName: 'Рисунок и живопись',
        emoji: '🖌',
        age: '16+',
        duration: '10 занятий',
        level: 'Для начинающих',
        description: 'Плотные мазки, работа с фактурой, классическая живопись маслом',
        program: [
            'Знакомство с материалом',
            'Натюрморт в тёплой гамме',
            'Пейзаж маслом',
            'Портрет',
            'Итоговая работа'
        ],
        price: 4200,
        hasDiploma: true
    },
    'watercolor': {
        id: 'watercolor',
        name: 'Акварельная живопись',
        category: 'art',
        categoryName: 'Рисунок и живопись',
        emoji: '💧',
        age: '12+',
        duration: '10 занятий',
        level: 'Для начинающих',
        description: 'Прозрачность, цветовые переходы, лессировки, работа с натурой',
        program: [
            'Простой натюрморт в тёплой гамме',
            'Натюрморт в холодной гамме',
            'Сложный натюрморт',
            'Итоговая работа'
        ],
        price: 3500,
        hasDiploma: true
    },
    'pastel': {
        id: 'pastel',
        name: 'Пастель',
        category: 'art',
        categoryName: 'Рисунок и живопись',
        emoji: '🖍',
        age: '12+',
        duration: '10 занятий',
        level: 'Для начинающих',
        description: 'Мягкая пастель, работа с цветом, пейзажи и портреты',
        program: [
            'Знакомство с материалом',
            'Художники-пастелисты',
            'Пейзаж пастелью',
            'Натюрморт с цветами',
            'Сложный натюрморт'
        ],
        price: 3500,
        hasDiploma: true
    },
    'sketching': {
        id: 'sketching',
        name: 'Скетчинг',
        category: 'art',
        categoryName: 'Рисунок и живопись',
        emoji: '✏️',
        age: '14+',
        duration: '10 занятий',
        level: 'Для начинающих',
        description: 'Быстрые зарисовки, точность линий, скетчинг в интерьере и иллюстрации',
        program: [
            'Техники скетчинга',
            'Совмещение графики и акварели',
            'Управление линией и пятном',
            'Скетчинг в интерьере',
            'Итоговая работа'
        ],
        price: 3500,
        hasDiploma: true
    },
    'portrait': {
        id: 'portrait',
        name: 'Портрет с натуры',
        category: 'art',
        categoryName: 'Рисунок и живопись',
        emoji: '👤',
        age: '14+',
        duration: '10 занятий',
        level: 'Для продвинутых',
        description: 'Академический портрет, работа с живой моделью, передача характера',
        program: [
            'Основы построения головы',
            'Анатомия лица',
            'Объём в портрете',
            'Портрет живой модели'
        ],
        price: 4500,
        hasDiploma: true
    },
    'anime': {
        id: 'anime',
        name: 'Аниме и манга',
        category: 'art',
        categoryName: 'Рисунок и живопись',
        emoji: '🌸',
        age: '10+',
        duration: '10 занятий',
        level: 'Для начинающих',
        description: 'Стилизация, персонажи, эмоции, основы японской анимации',
        program: [
            'Основы аниме-стиля',
            'Лицо и эмоции персонажа',
            'Пропорции тела',
            'Создание персонажа',
            'Итоговая работа'
        ],
        price: 3500,
        hasDiploma: true
    },
    
    // 📚 ПОДГОТОВКА К ВУЗУ
    'academic': {
        id: 'academic',
        name: 'Подготовка к ВУЗу',
        category: 'academic',
        categoryName: 'Подготовка к ВУЗу',
        emoji: '🎓',
        age: '15+',
        duration: 'Индивидуально',
        level: 'Продвинутый',
        description: 'Интенсивная подготовка к поступлению в художественные ВУЗы',
        program: [
            'Академический рисунок',
            'Живопись',
            'Композиция',
            'История искусств',
            'Портфолио'
        ],
        price: 6000,
        hasDiploma: true
    },
    'composition': {
        id: 'composition',
        name: 'Основы композиции',
        category: 'academic',
        categoryName: 'Подготовка к ВУЗу',
        emoji: '📐',
        age: '14+',
        duration: '8 занятий',
        level: 'Для начинающих',
        description: 'Законы композиции, ритм, баланс, построение изображения',
        program: [
            'Основные законы композиции',
            'Ритм и баланс',
            'Цветовая композиция',
            'Практика'
        ],
        price: 3200,
        hasDiploma: true
    },
    'color-science': {
        id: 'color-science',
        name: 'Цветоведение',
        category: 'academic',
        categoryName: 'Подготовка к ВУЗу',
        emoji: '🎨',
        age: '12+',
        duration: '6 занятий',
        level: 'Для начинающих',
        description: 'Цветовой круг, гармония, колористика',
        program: [
            'Цветовой круг',
            'Тёплые и холодные цвета',
            'Цветовая гармония',
            'Практика'
        ],
        price: 2400,
        hasDiploma: true
    },
    
    // 👶 ДЛЯ ДЕТЕЙ 6-13 ЛЕТ
    'kids-gouache': {
        id: 'kids-gouache',
        name: 'Гуашь для детей',
        category: 'kids',
        categoryName: 'Для детей 6-13 лет',
        emoji: '🎨',
        age: '6-10',
        duration: '10 занятий',
        level: 'Для начинающих',
        description: 'Яркие краски, весёлые сюжеты, развитие моторики',
        program: [
            'Знакомство с гуашью',
            'Простые сюжеты',
            'Сказочные персонажи',
            'Итоговая работа'
        ],
        price: 2800,
        hasDiploma: true
    },
    'kids-watercolor': {
        id: 'kids-watercolor',
        name: 'Акварель для детей',
        category: 'kids',
        categoryName: 'Для детей 6-13 лет',
        emoji: '💧',
        age: '6-10',
        duration: '10 занятий',
        level: 'Для начинающих',
        description: 'Волшебство акварели, простые сюжеты',
        program: [
            'Знакомство с акварелью',
            'Цветы и бабочки',
            'Пейзажи',
            'Итоговая работа'
        ],
        price: 2800,
        hasDiploma: true
    },
    'kids-oil': {
        id: 'kids-oil',
        name: 'Масло для детей',
        category: 'kids',
        categoryName: 'Для детей 6-13 лет',
        emoji: '🖌',
        age: '9-13',
        duration: '10 занятий',
        level: 'Для начинающих',
        description: 'Первые шаги в живописи маслом',
        program: [
            'Знакомство с маслом',
            'Простые пейзажи',
            'Натюрморты',
            'Итоговая работа'
        ],
        price: 3500,
        hasDiploma: true
    },
    
    // 💻 КОМПЬЮТЕРНАЯ ГРАФИКА
    'digital-art': {
        id: 'digital-art',
        name: 'Цифровая живопись и иллюстрация',
        category: 'digital',
        categoryName: 'Компьютерная графика',
        emoji: '💻',
        age: '14+',
        duration: '10 занятий',
        level: 'Для начинающих',
        description: 'Работа в Photoshop/Procreate, создание иллюстраций',
        program: [
            'Знакомство с программой',
            'Основы цифровой живописи',
            'Иллюстрация',
            'Итоговый проект'
        ],
        price: 4000,
        hasDiploma: true
    },
    'concept-art': {
        id: 'concept-art',
        name: '2D/3D концепт-арт',
        category: 'digital',
        categoryName: 'Компьютерная графика',
        emoji: '🎮',
        age: '15+',
        duration: '12 занятий',
        level: 'Для продвинутых',
        description: 'Создание концептов для игр и кино',
        program: [
            'Основы концепт-арта',
            '2D концепты',
            '3D моделирование',
            'Портфолио'
        ],
        price: 5500,
        hasDiploma: true
    },
    'animation': {
        id: 'animation',
        name: 'Анимация',
        category: 'digital',
        categoryName: 'Компьютерная графика',
        emoji: '🎬',
        age: '14+',
        duration: '12 занятий',
        level: 'Для начинающих',
        description: 'Основы 2D-анимации, раскадровка, оживление персонажей',
        program: [
            'Основы анимации',
            'Раскадровка',
            'Анимация персонажа',
            'Итоговый проект'
        ],
        price: 5000,
        hasDiploma: true
    }
};

if (typeof module !== 'undefined') {
    module.exports = COURSES;
}
