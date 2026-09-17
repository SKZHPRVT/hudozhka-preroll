// ========== 12 МЕСЯЧНЫХ ТЕМ × 365 ДНЕЙ ==========

const MONTHLY_THEMES = {
    0: { // Январь
        name: 'Зимняя сказка',
        emoji: '❄️',
        description: 'Месяц снега, мороза и волшебства',
        themes: [
            { text: 'Снежинка', emoji: '❄️', hint: 'Рассмотри форму' },
            { text: 'Снеговик', emoji: '⛄️', hint: 'Весёлый или серьёзный?' },
            { text: 'Зимнее окно', emoji: '🪟', hint: 'Узоры на стекле' },
            { text: 'Ёлочная игрушка', emoji: '🎄', hint: 'Новогоднее настроение' },
            { text: 'Снегирь на ветке', emoji: '🐦', hint: 'Красная грудка' },
            { text: 'Зимний лес', emoji: '🌲', hint: 'Тайна среди деревьев' },
            { text: 'Тёплый шарф', emoji: '🧣', hint: 'Уют и узоры' },
            { text: 'Северное сияние', emoji: '🌌', hint: 'Волшебство неба' },
            { text: 'Пингвин', emoji: '🐧', hint: 'Весёлый или задумчивый?' },
            { text: 'Морозный узор', emoji: '❄️', hint: 'Как кружево' },
            { text: 'Зимний закат', emoji: '🌅', hint: 'Короткий день' },
            { text: 'Санки', emoji: '🛷', hint: 'Катание с горки' },
            { text: 'Медведь в берлоге', emoji: '🐻', hint: 'Спит до весны' },
            { text: 'Дом с трубой', emoji: '🏠', hint: 'Дым из трубы' },
            { text: 'Снежная крепость', emoji: '🏰', hint: 'Защита или игра?' },
            { text: 'Горячий чай', emoji: '☕️', hint: 'Пар поднимается вверх' },
            { text: 'Ёлка в снегу', emoji: '🎄', hint: 'Сказка' },
            { text: 'Зимняя шапка', emoji: '🎩', hint: 'С помпоном?' },
            { text: 'Снежинки на варежке', emoji: '🧤', hint: 'Крупным планом' },
            { text: 'Ледяная горка', emoji: '🏔', hint: 'Блестящая и опасная' },
            { text: 'Морозное утро', emoji: '🌫', hint: 'Туман и иней' },
            { text: 'Хоровод вокруг ёлки', emoji: '💃', hint: 'Праздник' },
            { text: 'Зимний вечер', emoji: '🌙', hint: 'Окна светятся' },
            { text: 'Сосульки', emoji: '🧊', hint: 'Капает капель' },
            { text: 'Птицы у кормушки', emoji: '🐦', hint: 'Забота' },
            { text: 'Снежная баба', emoji: '⛄️', hint: 'С метлой?' },
            { text: 'Зимний пейзаж', emoji: '🏞', hint: 'Всё в снегу' },
            { text: 'Синица', emoji: '🐦', hint: 'Жёлтая грудка' },
            { text: 'Новогодний стол', emoji: '🎁', hint: 'Что на столе?' },
            { text: 'Фейерверк', emoji: '🎆', hint: 'Праздничный салют' },
            { text: 'Снегопад', emoji: '❄️', hint: 'Хлопья снега' }
        ]
    },
    1: { // Февраль
        name: 'Животные',
        emoji: '🐾',
        description: 'Месяц пушистых, пернатых и хвостатых',
        themes: [
            { text: 'Кот', emoji: '🐈', hint: 'Пушистый и важный' },
            { text: 'Собака', emoji: '🐕', hint: 'Верный друг' },
            { text: 'Лиса', emoji: '🦊', hint: 'Хитрая и рыжая' },
            { text: 'Заяц', emoji: '🐰', hint: 'Белый или серый?' },
            { text: 'Медведь', emoji: '🐻', hint: 'Большой и сильный' },
            { text: 'Ёжик', emoji: '🦔', hint: 'Колючий' },
            { text: 'Сова', emoji: '🦉', hint: 'Мудрая' },
            { text: 'Пингвин', emoji: '🐧', hint: 'Весёлый' },
            { text: 'Белка', emoji: '🐿', hint: 'С орехом' },
            { text: 'Лев', emoji: '🦁', hint: 'Царь зверей' },
            { text: 'Слон', emoji: '🐘', hint: 'Огромный и добрый' },
            { text: 'Жираф', emoji: '🦒', hint: 'Самый высокий' },
            { text: 'Панда', emoji: '🐼', hint: 'Пушистая' },
            { text: 'Тигр', emoji: '🐯', hint: 'Полосатый' },
            { text: 'Кошка и котёнок', emoji: '🐱', hint: 'Мама и малыш' },
            { text: 'Птица в небе', emoji: '🕊', hint: 'Свобода' },
            { text: 'Рыба в море', emoji: '🐟', hint: 'Подводный мир' },
            { text: 'Дельфин', emoji: '🐬', hint: 'Умный и весёлый' },
            { text: 'Бабочка', emoji: '🦋', hint: 'Яркая и хрупкая' },
            { text: 'Пчела', emoji: '🐝', hint: 'Трудолюбивая' },
            { text: 'Лошадь', emoji: '🐴', hint: 'Благородная' },
            { text: 'Корова', emoji: '🐮', hint: 'Добрая' },
            { text: 'Свинья', emoji: '🐷', hint: 'Розовая' },
            { text: 'Курица', emoji: '🐔', hint: 'Домашняя' },
            { text: 'Утка', emoji: '🦆', hint: 'На пруду' },
            { text: 'Черепаха', emoji: '🐢', hint: 'Медленная и мудрая' },
            { text: 'Улитка', emoji: '🐌', hint: 'Домик на спине' },
            { text: 'Мышь', emoji: '🐭', hint: 'Маленькая и юркая' }
        ]
    },
    2: { // Март
        name: 'Цветы и весна',
        emoji: '🌸',
        description: 'Месяц пробуждения и нежности',
        themes: [
            { text: 'Подснежник', emoji: '🌸', hint: 'Первый цветок' },
            { text: 'Тюльпан', emoji: '🌷', hint: 'Яркий' },
            { text: 'Мимоза', emoji: '🌼', hint: 'Пушистая' },
            { text: 'Ромашка', emoji: '🌼', hint: 'Простая' },
            { text: 'Роза', emoji: '🌹', hint: 'Королева цветов' },
            { text: 'Ландыш', emoji: '🌼', hint: 'Нежный аромат' },
            { text: 'Сирень', emoji: '💜', hint: 'Душистая' },
            { text: 'Пион', emoji: '🌸', hint: 'Большой' },
            { text: 'Нарцисс', emoji: '🌼', hint: 'Жёлтый' },
            { text: 'Крокус', emoji: '🌷', hint: 'Ранний' },
            { text: 'Одуванчик', emoji: '🌻', hint: 'Солнечный' },
            { text: 'Незабудка', emoji: '💙', hint: 'Голубая' },
            { text: 'Ирис', emoji: '💜', hint: 'Изящный' },
            { text: 'Мак', emoji: '🌺', hint: 'Красный' },
            { text: 'Орхидея', emoji: '🌺', hint: 'Экзотическая' },
            { text: 'Подсолнух', emoji: '🌻', hint: 'Огромный' },
            { text: 'Букет полевых', emoji: '💐', hint: 'Разные цветы' },
            { text: 'Ветка сакуры', emoji: '🌸', hint: 'Розовая' },
            { text: 'Лаванда', emoji: '💜', hint: 'Аромат Прованса' },
            { text: 'Василёк', emoji: '💙', hint: 'Синий' },
            { text: 'Бабочка на цветке', emoji: '🦋', hint: 'Нежная пара' },
            { text: 'Пчёлы у цветов', emoji: '🐝', hint: 'Опыление' },
            { text: 'Цветущее дерево', emoji: '🌳', hint: 'Всё розовое' },
            { text: 'Первоцветы', emoji: '🌱', hint: 'Сквозь снег' },
            { text: 'Цветок в вазе', emoji: '💐', hint: 'Натюрморт' },
            { text: 'Цветочное поле', emoji: '🌾', hint: 'Разноцветное' },
            { text: 'Гиацинт', emoji: '💜', hint: 'Пахучий' },
            { text: 'Георгин', emoji: '🌺', hint: 'Пышный' },
            { text: 'Хризантема', emoji: '🌼', hint: 'Осенняя' },
            { text: 'Цветок в горшке', emoji: '🪴', hint: 'Домашний' },
            { text: 'Первый цветок', emoji: '🌸', hint: 'Символ весны' }
        ]
    },
    3: { // Апрель
        name: 'Космос и фантазии',
        emoji: '🚀',
        description: 'Месяц далёких миров и мечтаний',
        themes: [
            { text: 'Планета', emoji: '🪐', hint: 'С кольцами?' },
            { text: 'Ракета', emoji: '🚀', hint: 'Летит к звёздам' },
            { text: 'Космонавт', emoji: '👨‍🚀', hint: 'В скафандре' },
            { text: 'Луна', emoji: '🌙', hint: 'Полная' },
            { text: 'Звёздное небо', emoji: '🌌', hint: 'Много звёзд' },
            { text: 'Комета', emoji: '☄️', hint: 'С хвостом' },
            { text: 'Инопланетянин', emoji: '👽', hint: 'Дружелюбный' },
            { text: 'НЛО', emoji: '🛸', hint: 'Летающая тарелка' },
            { text: 'Галактика', emoji: '🌠', hint: 'Спиральная' },
            { text: 'Туманность', emoji: '✨', hint: 'Разноцветная' },
            { text: 'Чёрная дыра', emoji: '⚫️', hint: 'Загадочная' },
            { text: 'Солнечная система', emoji: '☀️', hint: 'Все планеты' },
            { text: 'Марс', emoji: '🔴', hint: 'Красная планета' },
            { text: 'Сатурн', emoji: '🪐', hint: 'С кольцами' },
            { text: 'Космический корабль', emoji: '🚀', hint: 'Свой дизайн' },
            { text: 'Астронавт на Луне', emoji: '🌙', hint: 'Один' },
            { text: 'Звёздный дождь', emoji: '💫', hint: 'Падающие звёзды' },
            { text: 'Космическая станция', emoji: '🛰', hint: 'На орбите' },
            { text: 'Чужая планета', emoji: '🌍', hint: 'Придумай свою' },
            { text: 'Космический пейзаж', emoji: '🌌', hint: 'Цвета космоса' },
            { text: 'Ракета и звёзды', emoji: '🚀', hint: 'Путь к звёздам' },
            { text: 'Космический шлем', emoji: '👨‍🚀', hint: 'Отражение в стекле' },
            { text: 'Комета и звёзды', emoji: '☄️', hint: 'Летит' },
            { text: 'Другая галактика', emoji: '🌠', hint: 'Неизвестная' },
            { text: 'Космический монстр', emoji: '👾', hint: 'Из другой планеты' },
            { text: 'Луноход', emoji: '🚙', hint: 'На Луне' },
            { text: 'Созвездие', emoji: '⭐️', hint: 'Найди своё' },
            { text: 'Парад планет', emoji: '🪐', hint: 'Редкое явление' },
            { text: 'Космический взрыв', emoji: '💥', hint: 'Сверхновая' },
            { text: 'Звёздные войны', emoji: '⚔️', hint: 'Фантазия' }
        ]
    },
    4: { // Май
        name: 'Город и путешествия',
        emoji: '🏙',
        description: 'Месяц открытий и новых мест',
        themes: [
            { text: 'Городской пейзаж', emoji: '🏙', hint: 'Общий вид' },
            { text: 'Улица', emoji: '🛣', hint: 'С домами' },
            { text: 'Мост через реку', emoji: '🌉', hint: 'Красивый вид' },
            { text: 'Кофейня', emoji: '☕️', hint: 'Уютная' },
            { text: 'Старый дом', emoji: '🏠', hint: 'С историей' },
            { text: 'Небоскрёб', emoji: '🏢', hint: 'Высотка' },
            { text: 'Парк', emoji: '🌳', hint: 'Зелёный' },
            { text: 'Фонарь', emoji: '💡', hint: 'Вечерний' },
            { text: 'Скамейка в парке', emoji: '🪑', hint: 'Для отдыха' },
            { text: 'Метро', emoji: '🚇', hint: 'Подземное' },
            { text: 'Вокзал', emoji: '🚉', hint: 'Поезд отправляется' },
            { text: 'Аэропорт', emoji: '✈️', hint: 'Взлёт' },
            { text: 'Автобус', emoji: '🚌', hint: 'Городской' },
            { text: 'Такси', emoji: '🚕', hint: 'Жёлтое' },
            { text: 'Велосипед на улице', emoji: '🚲', hint: 'Прогулка' },
            { text: 'Светофор', emoji: '🚦', hint: 'Красный или зелёный?' },
            { text: 'Витрина магазина', emoji: '🏪', hint: 'Что продаётся?' },
            { text: 'Уютный дворик', emoji: '🏘', hint: 'С цветами' },
            { text: 'Высотка на закате', emoji: '🌆', hint: 'Силуэт' },
            { text: 'Ночной город', emoji: '🌃', hint: 'Огни' },
            { text: 'Кафе на улице', emoji: '🍽', hint: 'Столики снаружи' },
            { text: 'Мост ночью', emoji: '🌉', hint: 'Огни отражаются' },
            { text: 'Река и город', emoji: '🏞', hint: 'Вид с берега' },
            { text: 'Крыша', emoji: '🏠', hint: 'Сверху видно всё' },
            { text: 'Фонтан', emoji: '⛲️', hint: 'Красивый' },
            { text: 'Площадь', emoji: '🏛', hint: 'Главная' },
            { text: 'Памятник', emoji: '🗿', hint: 'Известный' },
            { text: 'Метро-эскалатор', emoji: '🪜', hint: 'Спуск вниз' },
            { text: 'Улочка Европы', emoji: '🏘', hint: 'Узкая' },
            { text: 'Путешествие', emoji: '✈️', hint: 'Куда?' },
            { text: 'Чемодан', emoji: '🧳', hint: 'Собран в дорогу' }
        ]
    },
    5: { // Июнь
        name: 'Лето и радость',
        emoji: '☀️',
        description: 'Месяц солнца, каникул и веселья',
        themes: [
            { text: 'Солнце', emoji: '☀️', hint: 'Яркое' },
            { text: 'Мороженое', emoji: '🍦', hint: 'Холодное' },
            { text: 'Арбуз', emoji: '🍉', hint: 'Сочный' },
            { text: 'Пляж', emoji: '🏖', hint: 'Песок и море' },
            { text: 'Море', emoji: '🌊', hint: 'Синее' },
            { text: 'Зонтик на пляже', emoji: '⛱', hint: 'От солнца' },
            { text: 'Купальник', emoji: '🩱', hint: 'Яркий' },
            { text: 'Мяч', emoji: '🏐', hint: 'Пляжный' },
            { text: 'Ракушка', emoji: '🐚', hint: 'Красивая' },
            { text: 'Пальма', emoji: '🌴', hint: 'На берегу' },
            { text: 'Кокос', emoji: '🥥', hint: 'Тропический' },
            { text: 'Сандалии', emoji: '👡', hint: 'Лёгкие' },
            { text: 'Очки от солнца', emoji: '🕶', hint: 'Стильные' },
            { text: 'Шляпа', emoji: '👒', hint: 'Соломенная' },
            { text: 'Велосипед', emoji: '🚲', hint: 'Прогулка' },
            { text: 'Летний луг', emoji: '🌾', hint: 'Цветы и трава' },
            { text: 'Бабочка', emoji: '🦋', hint: 'Яркая' },
            { text: 'Пчёлы', emoji: '🐝', hint: 'Собирают мёд' },
            { text: 'Пикник', emoji: '🧺', hint: 'На природе' },
            { text: 'Костёр', emoji: '🔥', hint: 'Вечером' },
            { text: 'Палатка', emoji: '⛺️', hint: 'Поход' },
            { text: 'Летний дождь', emoji: '🌧', hint: 'Тёплый' },
            { text: 'Радуга', emoji: '🌈', hint: 'После дождя' },
            { text: 'Закат на море', emoji: '🌅', hint: 'Розовое небо' },
            { text: 'Воздушный змей', emoji: '🪁', hint: 'В небе' },
            { text: 'Квас', emoji: '🥤', hint: 'Холодный' },
            { text: 'Мороженое в стаканчике', emoji: '🍨', hint: 'С топпингом' },
            { text: 'Летний сад', emoji: '🌻', hint: 'Всё цветёт' },
            { text: 'Птицы в небе', emoji: '🕊', hint: 'Свобода' },
            { text: 'Отпуск', emoji: '🏖', hint: 'Каникулы!' },
            { text: 'Счастливое лето', emoji: '☀️', hint: 'Радость' }
        ]
    },
    6: { // Июль
        name: 'Море и вода',
        emoji: '🌊',
        description: 'Месяц воды, глубины и прохлады',
        themes: [
            { text: 'Дельфин', emoji: '🐬', hint: 'Умный и весёлый' },
            { text: 'Кит', emoji: '🐋', hint: 'Огромный' },
            { text: 'Осьминог', emoji: '🐙', hint: 'Восемь ног' },
            { text: 'Морская звезда', emoji: '⭐️', hint: 'На дне' },
            { text: 'Краб', emoji: '🦀', hint: 'Идёт боком' },
            { text: 'Акула', emoji: '🦈', hint: 'Хищница' },
            { text: 'Черепаха морская', emoji: '🐢', hint: 'Плавает' },
            { text: 'Медуза', emoji: '🪼', hint: 'Полупрозрачная' },
            { text: 'Коралловый риф', emoji: '🪸', hint: 'Разноцветный' },
            { text: 'Рыбка', emoji: '🐠', hint: 'Яркая' },
            { text: 'Яхта', emoji: '⛵️', hint: 'В море' },
            { text: 'Волны', emoji: '🌊', hint: 'Плещутся' },
            { text: 'Маяк', emoji: '🗼', hint: 'Освещает путь' },
            { text: 'Пиратский корабль', emoji: '🏴‍☠️', hint: 'С флагом' },
            { text: 'Сокровище', emoji: '💰', hint: 'Сундук с золотом' },
            { text: 'Подводный город', emoji: '🏰', hint: 'Русалочий' },
            { text: 'Русалочка', emoji: '🧜‍♀️', hint: 'Сказка' },
            { text: 'Аквалангист', emoji: '🤿', hint: 'Под водой' },
            { text: 'Подводная лодка', emoji: '🚢', hint: 'Исследует дно' },
            { text: 'Морской конёк', emoji: '🐠', hint: 'Необычная форма' },
            { text: 'Дно океана', emoji: '🌊', hint: 'Загадочное' },
            { text: 'Ракушки', emoji: '🐚', hint: 'Коллекция' },
            { text: 'Пляж на закате', emoji: '🌅', hint: 'Романтика' },
            { text: 'Стая рыб', emoji: '🐟', hint: 'Много рыбок' },
            { text: 'Океан', emoji: '🌊', hint: 'Бескрайний' },
            { text: 'Морской пейзаж', emoji: '🏝', hint: 'Красиво' },
            { text: 'Остров', emoji: '🏝', hint: 'Необитаемый' },
            { text: 'Фрегат', emoji: '⛵️', hint: 'Старинный' },
            { text: 'Кораллы', emoji: '🪸', hint: 'Живые' },
            { text: 'Морской ёж', emoji: '🦔', hint: 'Колючий' },
            { text: 'Глубина', emoji: '🌊', hint: 'Тёмная и загадочная' }
        ]
    },
    7: { // Август
        name: 'Приключения',
        emoji: '🗺',
        description: 'Месяц открытий и путешествий',
        themes: [
            { text: 'Карта сокровищ', emoji: '🗺', hint: 'Старая' },
            { text: 'Компас', emoji: '🧭', hint: 'Указывает путь' },
            { text: 'Фонарик', emoji: '🔦', hint: 'Освещает тьму' },
            { text: 'Рюкзак', emoji: '🎒', hint: 'Собран в путь' },
            { text: 'Поход', emoji: '⛺️', hint: 'С палаткой' },
            { text: 'Костёр', emoji: '🔥', hint: 'Вечер у огня' },
            { text: 'Гитара', emoji: '🎸', hint: 'Песни у огня' },
            { text: 'Маршрут', emoji: '📍', hint: 'Куда идём?' },
            { text: 'Гора', emoji: '⛰', hint: 'Вершина' },
            { text: 'Водопад', emoji: '💦', hint: 'Шум воды' },
            { text: 'Озеро', emoji: '🏞', hint: 'Тихое' },
            { text: 'Лесная тропа', emoji: '🌲', hint: 'Через лес' },
            { text: 'Пещера', emoji: '🕳', hint: 'Загадочная' },
            { text: 'Клад', emoji: '💎', hint: 'Драгоценности' },
            { text: 'Древняя карта', emoji: '📜', hint: 'Свиток' },
            { text: 'Сундук', emoji: '🧰', hint: 'С секретом' },
            { text: 'Дневник путешественника', emoji: '📔', hint: 'Записи' },
            { text: 'Перо и чернила', emoji: '🖋', hint: 'Для записей' },
            { text: 'Подзорная труба', emoji: '🔭', hint: 'Видно далеко' },
            { text: 'Флаг', emoji: '🚩', hint: 'Найденное место' },
            { text: 'Развалины', emoji: '🏛', hint: 'Древние' },
            { text: 'Старый храм', emoji: '⛩', hint: 'Загадочный' },
            { text: 'Сфинкс', emoji: '🗿', hint: 'Загадка' },
            { text: 'Пирамида', emoji: '🔺', hint: 'Египет' },
            { text: 'Верблюд', emoji: '🐪', hint: 'В пустыне' },
            { text: 'Джунгли', emoji: '🌴', hint: 'Густые' },
            { text: 'Тигр', emoji: '🐯', hint: 'Хищник' },
            { text: 'Обезьяна', emoji: '🐒', hint: 'Ловкая' },
            { text: 'Попугай', emoji: '🦜', hint: 'Яркий' },
            { text: 'Приключение', emoji: '⚔️', hint: 'Начни своё' },
            { text: 'Компас и карта', emoji: '🧭', hint: 'Путь найден' }
        ]
    },
    8: { // Сентябрь
        name: 'Осень',
        emoji: '🍂',
        description: 'Месяц красок, дождей и уюта',
        themes: [
            { text: 'Осенний лист', emoji: '🍁', hint: 'Кленовый' },
            { text: 'Дождь', emoji: '🌧', hint: 'Тёплый' },
            { text: 'Зонт', emoji: '☂️', hint: 'Яркий' },
            { text: 'Лужа', emoji: '💧', hint: 'Отражение неба' },
            { text: 'Грибы', emoji: '🍄', hint: 'В лесу' },
            { text: 'Ёжик', emoji: '🦔', hint: 'Несёт листья' },
            { text: 'Туман', emoji: '🌫', hint: 'Утром' },
            { text: 'Рябина', emoji: '🍒', hint: 'Красные гроздья' },
            { text: 'Осенний парк', emoji: '🌳', hint: 'Золотая листва' },
            { text: 'Яблоки', emoji: '🍎', hint: 'Урожай' },
            { text: 'Букет из листьев', emoji: '💐', hint: 'Осенний' },
            { text: 'Тыква', emoji: '🎃', hint: 'Оранжевая' },
            { text: 'Кот у окна', emoji: '🐈', hint: 'Смотрит на дождь' },
            { text: 'Кофе', emoji: '☕️', hint: 'Тёплый' },
            { text: 'Шарф', emoji: '🧣', hint: 'Уже холодно' },
            { text: 'Осеннее небо', emoji: '☁️', hint: 'Серое' },
            { text: 'Дерево без листьев', emoji: '🌳', hint: 'Силуэт' },
            { text: 'Белка', emoji: '🐿', hint: 'Собирает орехи' },
            { text: 'Осенний закат', emoji: '🌅', hint: 'Яркий' },
            { text: 'Каштан', emoji: '🌰', hint: 'Блестящий' },
            { text: 'Листопад', emoji: '🍁', hint: 'Кружатся листья' },
            { text: 'Осенний лес', emoji: '🏞', hint: 'Краски осени' },
            { text: 'Птицы на юг', emoji: '🕊', hint: 'Улетают' },
            { text: 'Мокрый асфальт', emoji: '🌧', hint: 'Отражения' },
            { text: 'Осенние цветы', emoji: '🌺', hint: 'Последние' },
            { text: 'Астры', emoji: '💜', hint: 'Осенние' },
            { text: 'Хризантемы', emoji: '🌼', hint: 'Пышные' },
            { text: 'Яблоня в саду', emoji: '🍎', hint: 'Плоды' },
            { text: 'Урожай на столе', emoji: '🥕', hint: 'Дары осени' },
            { text: 'Осенний вечер', emoji: '🌆', hint: 'Тёплый свет' }
        ]
    },
    9: { // Октябрь
        name: 'Волшебство и тайны',
        emoji: '🔮',
        description: 'Месяц загадок, магии и добрых чудес',
        themes: [
            { text: 'Тыква-фонарик', emoji: '🎃', hint: 'Со светящейся улыбкой' },
            { text: 'Дружелюбное привидение', emoji: '👻', hint: 'Весёлое и доброе' },
            { text: 'Маленькая волшебница', emoji: '🧙‍♀️', hint: 'С добрыми чарами' },
            { text: 'Чёрный котик', emoji: '🐈‍⬛', hint: 'Пушистый и милый' },
            { text: 'Летучая мышь', emoji: '🦇', hint: 'Маленькая и смешная' },
            { text: 'Весёлый паучок', emoji: '🕷', hint: 'Добрый, с бантиком' },
            { text: 'Волшебная книга', emoji: '📖', hint: 'Книга с заклинаниями' },
            { text: 'Старинный замок', emoji: '🏰', hint: 'Красивый и загадочный' },
            { text: 'Зелье волшебника', emoji: '🧪', hint: 'Блестящее, разноцветное' },
            { text: 'Волшебный котёл', emoji: '🍯', hint: 'Из него идёт дым' },
            { text: 'Волшебная метла', emoji: '🧹', hint: 'На ней летают' },
            { text: 'Свечка в тыкве', emoji: '🕯', hint: 'Тёплое свечение' },
            { text: 'Тыква с улыбкой', emoji: '🎃', hint: 'Добрая улыбка' },
            { text: 'Сказочный лес', emoji: '🌲', hint: 'Волшебные деревья' },
            { text: 'Умный ворон', emoji: '🐦‍⬛', hint: 'Говорящий и мудрый' },
            { text: 'Волшебная маска', emoji: '🎭', hint: 'Для карнавала' },
            { text: 'Конфетка в обёртке', emoji: '🍬', hint: 'Вкусное угощение' },
            { text: 'Корзинка со сладостями', emoji: '🍭', hint: 'Полная конфет' },
            { text: 'Осенний туман', emoji: '🌫', hint: 'Загадочная дымка' },
            { text: 'Таинственный домик', emoji: '🏡', hint: 'Живёт кто-то добрый' },
            { text: 'Хоровод привидений', emoji: '👻', hint: 'Танцуют и веселятся' },
            { text: 'Волшебная палочка', emoji: '🪄', hint: 'Исполняет желания' },
            { text: 'Книга сказок', emoji: '📕', hint: 'Старинная и красивая' },
            { text: 'Хрустальный шар', emoji: '🔮', hint: 'Показывает будущее' },
            { text: 'Волшебный фонарик', emoji: '🔦', hint: 'Освещает путь' },
            { text: 'Мудрая сова', emoji: '🦉', hint: 'Ночная волшебница' },
            { text: 'Ёжик с грибочком', emoji: '🦔', hint: 'Готовится к зиме' },
            { text: 'Паутинка с росой', emoji: '🕸', hint: 'Красивая и блестящая' },
            { text: 'Звёздная ночь', emoji: '🌙', hint: 'Волшебное небо' },
            { text: 'Волшебная пыль', emoji: '✨', hint: 'Магия в воздухе' },
            { text: 'Карнавал', emoji: '🎉', hint: 'Весёлый праздник!' }
        ]
    },
    10: { // Ноябрь
        name: 'Уют и тепло',
        emoji: '🧣',
        description: 'Месяц пледов, чая и домашнего тепла',
        themes: [
            { text: 'Кот на батарее', emoji: '🐈', hint: 'Ищет тепло' },
            { text: 'Чашка чая', emoji: '☕️', hint: 'Горячий' },
            { text: 'Плед', emoji: '🛋', hint: 'Мягкий' },
            { text: 'Вязаные носки', emoji: '🧦', hint: 'Тёплые' },
            { text: 'Свеча', emoji: '🕯', hint: 'Уютная' },
            { text: 'Книга', emoji: '📖', hint: 'Интересная' },
            { text: 'Камин', emoji: '🔥', hint: 'Горит' },
            { text: 'Окно с дождём', emoji: '🌧', hint: 'Уютно дома' },
            { text: 'Пирог', emoji: '🥧', hint: 'Домашний' },
            { text: 'Печенье', emoji: '🍪', hint: 'С чаем' },
            { text: 'Мёд', emoji: '🍯', hint: 'В банке' },
            { text: 'Молоко', emoji: '🥛', hint: 'Тёплое' },
            { text: 'Хлеб', emoji: '🍞', hint: 'Свежий' },
            { text: 'Батарея', emoji: '♨️', hint: 'Горячая' },
            { text: 'Шарф', emoji: '🧣', hint: 'Уютный' },
            { text: 'Домашние тапочки', emoji: '🩴', hint: 'Мягкие' },
            { text: 'Гирлянда', emoji: '💡', hint: 'Скоро праздник' },
            { text: 'Тёплый свитер', emoji: '🧥', hint: 'С узором' },
            { text: 'Компот', emoji: '🍹', hint: 'Домашний' },
            { text: 'Варенье', emoji: '🍓', hint: 'Из ягод' },
            { text: 'Подоконник с цветами', emoji: '🪴', hint: 'Домашний сад' },
            { text: 'Семейный вечер', emoji: '👨‍👩‍👧', hint: 'Вместе' },
            { text: 'Настольная игра', emoji: '🎲', hint: 'Весело' },
            { text: 'Аквариум', emoji: '🐠', hint: 'Домашний' },
            { text: 'Облака за окном', emoji: '☁️', hint: 'Серое небо' },
            { text: 'Снег за окном', emoji: '❄️', hint: 'Первый' },
            { text: 'Ёлочные игрушки', emoji: '🎄', hint: 'Достаём' },
            { text: 'Какао с зефирками', emoji: '🍫', hint: 'Сладко' },
            { text: 'Уютный вечер', emoji: '🌙', hint: 'Дома' },
            { text: 'Счастье', emoji: '✨', hint: 'В мелочах' }
        ]
    },
    11: { // Декабрь
        name: 'Праздник и волшебство',
        emoji: '🎄',
        description: 'Месяц чудес и исполнения желаний',
        themes: [
            { text: 'Ёлка', emoji: '🎄', hint: 'Главный символ' },
            { text: 'Дед Мороз', emoji: '🎅', hint: 'Скоро придёт' },
            { text: 'Снегурочка', emoji: '❄️', hint: 'Внучка' },
            { text: 'Подарок', emoji: '🎁', hint: 'С бантом' },
            { text: 'Гирлянда', emoji: '💡', hint: 'Разноцветная' },
            { text: 'Снежинка', emoji: '❄️', hint: 'Рассмотри форму' },
            { text: 'Снеговик', emoji: '⛄️', hint: 'С морковкой' },
            { text: 'Ёлочная игрушка', emoji: '🔔', hint: 'Яркая' },
            { text: 'Пряник', emoji: '🍪', hint: 'Расписной' },
            { text: 'Мандарин', emoji: '🍊', hint: 'Запах праздника' },
            { text: 'Конфета', emoji: '🍬', hint: 'В фантике' },
            { text: 'Письмо Деду Морозу', emoji: '✉️', hint: 'Загадай желание' },
            { text: 'Новогодний стол', emoji: '🎉', hint: 'Семья вместе' },
            { text: 'Фейерверк', emoji: '🎆', hint: 'Салют' },
            { text: 'Ёлочный шар', emoji: '🎊', hint: 'Блестящий' },
            { text: 'Зимняя ночь', emoji: '🌙', hint: 'Тишина' },
            { text: 'Печенье с предсказанием', emoji: '🥠', hint: 'С секретом' },
            { text: 'Свечи', emoji: '🕯', hint: 'Романтика' },
            { text: 'Ёлка в снегу', emoji: '🎄', hint: 'Сказочно' },
            { text: 'Хоровод', emoji: '💃', hint: 'Вокруг ёлки' },
            { text: 'Мешок с подарками', emoji: '🎒', hint: 'Полный' },
            { text: 'Олень', emoji: '🦌', hint: 'Рождественский' },
            { text: 'Сани', emoji: '🛷', hint: 'С подарками' },
            { text: 'Рождественский венок', emoji: '🌿', hint: 'На двери' },
            { text: 'Рождественский носок', emoji: '🧦', hint: 'С подарками' },
            { text: 'Рождественская звезда', emoji: '⭐️', hint: 'Путеводная' },
            { text: 'Санта-Клаус', emoji: '🎅', hint: 'Английский дед' },
            { text: 'Камин', emoji: '🔥', hint: 'Горит' },
            { text: 'Тёплый плед', emoji: '🛋', hint: 'Уютно' },
            { text: 'Новогоднее желание', emoji: '✨', hint: 'Загадай!' },
            { text: 'Волшебство', emoji: '🌟', hint: 'Чудеса рядом' }
        ]
    }
};

// ========== МОДИФИКАТОРЫ (обновляются каждый месяц) ==========
const MONTHLY_MODIFIERS = {
    0: [ // Январь
        { text: 'акварелью', emoji: '💧', hint: 'Мягкие переходы' },
        { text: 'карандашом', emoji: '✏️', hint: 'Точность линий' },
        { text: 'в стиле аниме', emoji: '🌸', hint: 'Стилизация' },
        { text: 'ночью', emoji: '🌙', hint: 'Тёмный фон' },
        { text: 'в стиле Ghibli', emoji: '✨', hint: 'Волшебная атмосфера' },
        { text: 'пастелью', emoji: '🖍', hint: 'Мягкая текстура' },
        { text: 'как открытку', emoji: '💌', hint: 'Ярко и мило' }
    ],
    1: [ // Февраль
        { text: 'реалистично', emoji: '🎯', hint: 'Как в жизни' },
        { text: 'в стиле аниме', emoji: '🌸', hint: 'Стилизация' },
        { text: 'одной линией', emoji: '〰️', hint: 'Не отрывая руки' },
        { text: 'гуашью', emoji: '🎨', hint: 'Яркие цвета' },
        { text: 'мультяшно', emoji: '😊', hint: 'Весёлый стиль' },
        { text: 'пастелью', emoji: '🖍', hint: 'Мягкие тона' },
        { text: 'с сюрпризом', emoji: '🎁', hint: 'Спрятанный элемент' }
    ],
    2: [ // Март
        { text: 'акварелью', emoji: '💧', hint: 'Нежные переходы' },
        { text: 'ботанически', emoji: '🌿', hint: 'Точная наука' },
        { text: 'пастелью', emoji: '🖍', hint: 'Мягкая текстура' },
        { text: 'крупным планом', emoji: '🔍', hint: 'Детали' },
        { text: 'на закате', emoji: '🌅', hint: 'Тёплые цвета' },
        { text: 'одной линией', emoji: '〰️', hint: 'Минимализм' },
        { text: 'в стиле Ghibli', emoji: '✨', hint: 'Нежно и красиво' }
    ],
    3: [ // Апрель
        { text: 'акварелью', emoji: '💧', hint: 'Плавные переходы' },
        { text: 'неоном', emoji: '💡', hint: 'Светящиеся линии' },
        { text: 'карандашом', emoji: '✏️', hint: 'Графика' },
        { text: 'абстрактно', emoji: '🌀', hint: 'Формы и цвета' },
        { text: 'ночью', emoji: '🌙', hint: 'Космос' },
        { text: 'в стиле Ghibli', emoji: '✨', hint: 'Волшебно' },
        { text: 'в стиле аниме', emoji: '🌸', hint: 'Стилизация' }
    ],
    4: [ // Май
        { text: 'скетчингом', emoji: '✏️', hint: 'Быстро и точно' },
        { text: 'акварелью', emoji: '💧', hint: 'Прозрачно' },
        { text: 'ночью', emoji: '🌙', hint: 'Огни города' },
        { text: 'с высоты', emoji: '🏙', hint: 'Птичий полёт' },
        { text: 'пастелью', emoji: '🖍', hint: 'Мягкая атмосфера' },
        { text: 'в стиле Моне', emoji: '🌊', hint: 'Импрессионизм' },
        { text: 'одной линией', emoji: '〰️', hint: 'Минимализм' }
    ],
    5: [ // Июнь
        { text: 'ярко', emoji: '🌈', hint: 'Много цвета' },
        { text: 'пастелью', emoji: '🖍', hint: 'Мягкие тона' },
        { text: 'в стиле Моне', emoji: '🌊', hint: 'Импрессионизм' },
        { text: 'гуашью', emoji: '🎨', hint: 'Плотные цвета' },
        { text: 'с сюрпризом', emoji: '🎁', hint: 'Спрятанный элемент' },
        { text: 'акварелью', emoji: '💧', hint: 'Лёгкость' },
        { text: 'мультяшно', emoji: '😊', hint: 'Весело' }
    ],
    6: [ // Июль
        { text: 'акварелью', emoji: '💧', hint: 'Вода и краска' },
        { text: 'импрессионизм', emoji: '🌊', hint: 'Блики света' },
        { text: 'реалистично', emoji: '🎯', hint: 'Как в жизни' },
        { text: 'ночью', emoji: '🌙', hint: 'Лунная дорожка' },
        { text: 'в синих тонах', emoji: '💙', hint: 'Холодная гамма' },
        { text: 'с бликами', emoji: '✨', hint: 'Солнце на воде' },
        { text: 'в стиле аниме', emoji: '🌸', hint: 'Красиво' }
    ],
    7: [ // Август
        { text: 'скетчингом', emoji: '✏️', hint: 'Быстро' },
        { text: 'по памяти', emoji: '🧠', hint: 'Из головы' },
        { text: 'пастелью', emoji: '🖍', hint: 'Тёплые тона' },
        { text: 'в стиле открытки', emoji: '💌', hint: 'Путешествие' },
        { text: 'акварелью', emoji: '💧', hint: 'Лёгкость' },
        { text: 'с картой', emoji: '🗺', hint: 'Приключение' },
        { text: 'ночью', emoji: '🌙', hint: 'У костра' }
    ],
    8: [ // Сентябрь
        { text: 'акварелью', emoji: '💧', hint: 'Мягкие переходы' },
        { text: 'пастелью', emoji: '🖍', hint: 'Тёплые тона' },
        { text: 'маслом', emoji: '🖼', hint: 'Плотные мазки' },
        { text: 'в тёплых тонах', emoji: '🍁', hint: 'Краски осени' },
        { text: 'детально', emoji: '🔍', hint: 'Много деталей' },
        { text: 'в стиле Моне', emoji: '🌊', hint: 'Импрессионизм' },
        { text: 'карандашом', emoji: '✏️', hint: 'Графика' }
    ],
    9: [ // Октябрь
        { text: 'волшебно', emoji: '✨', hint: 'С магией' },
        { text: 'в стиле сказки', emoji: '📖', hint: 'Добрая история' },
        { text: 'карандашом', emoji: '✏️', hint: 'Графика' },
        { text: 'с туманом', emoji: '🌫', hint: 'Загадочно' },
        { text: 'вечером', emoji: '🌙', hint: 'Тёплый свет' },
        { text: 'акварелью', emoji: '💧', hint: 'Прозрачно' },
        { text: 'в стиле аниме', emoji: '🌸', hint: 'Волшебное аниме' }
    ],
    10: [ // Ноябрь
        { text: 'акварелью', emoji: '💧', hint: 'Мягко' },
        { text: 'пастелью', emoji: '🖍', hint: 'Тёплые тона' },
        { text: 'в тёплых тонах', emoji: '🧡', hint: 'Уют' },
        { text: 'крупным планом', emoji: '🔍', hint: 'Детали' },
        { text: 'карандашом', emoji: '✏️', hint: 'Нежно' },
        { text: 'в стиле Ghibli', emoji: '✨', hint: 'Атмосферно' },
        { text: 'детально', emoji: '🔍', hint: 'Много деталей' }
    ],
    11: [ // Декабрь
        { text: 'в стиле открытки', emoji: '💌', hint: 'Красиво' },
        { text: 'ярко', emoji: '🌈', hint: 'Много цвета' },
        { text: 'гуашью', emoji: '🎨', hint: 'Плотные цвета' },
        { text: 'с блёстками', emoji: '✨', hint: 'Блестит' },
        { text: 'ночью', emoji: '🌙', hint: 'Огни праздника' },
        { text: 'акварелью', emoji: '💧', hint: 'Нежно' },
        { text: 'мультяшно', emoji: '😊', hint: 'Сказочно' }
    ]
};

// ========== СИСТЕМА ПАМЯТИ ==========
const STORAGE_KEY = 'usedThemesV2';

function loadUsedThemes() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    } catch {
        return {};
    }
}

function saveUsedThemes(themes) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(themes));
    } catch (e) {
        console.warn('Не удалось сохранить');
    }
}

function wasUsedRecently(usedMap, key) {
    const lastUsed = usedMap[key];
    if (!lastUsed) return false;
    
    const oneYearAgo = Date.now() - 365 * 24 * 60 * 60 * 1000;
    return lastUsed > oneYearAgo;
}

// ========== ФИНАЛЬНАЯ ТЕМА ДНЯ ==========
function getTodayTheme() {
    const today = new Date();
    const month = today.getMonth();
    const dateKey = `${today.getFullYear()}-${month + 1}-${today.getDate()}`;
    
    const cacheKey = 'todayThemeV2_' + dateKey;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        try {
            return JSON.parse(cached);
        } catch {}
    }
    
    const monthData = MONTHLY_THEMES[month];
    const modifiers = MONTHLY_MODIFIERS[month];
    
    const usedThemes = loadUsedThemes();
    
    let themeIndex = -1;
    const monthKey = `m${month}`;
    const usedThisMonth = usedThemes[monthKey] || {};
    
    let attempts = 0;
    while (attempts < 100) {
        const randomIndex = Math.floor(Math.random() * monthData.themes.length);
        
        if (!wasUsedRecently(usedThisMonth, randomIndex)) {
            themeIndex = randomIndex;
            break;
        }
        attempts++;
    }
    
    if (themeIndex === -1) {
        let oldest = Infinity;
        for (let i = 0; i < monthData.themes.length; i++) {
            const lastUsed = usedThisMonth[i] || 0;
            if (lastUsed < oldest) {
                oldest = lastUsed;
                themeIndex = i;
            }
        }
    }
    
    usedThisMonth[themeIndex] = Date.now();
    usedThemes[monthKey] = usedThisMonth;
    saveUsedThemes(usedThemes);
    
    const modifierIndex = Math.floor(Math.random() * modifiers.length);
    const modifier = modifiers[modifierIndex];
    
    const baseTheme = monthData.themes[themeIndex];
    
    const result = {
        id: themeIndex,
        monthId: month,
        modifierId: modifierIndex,
        text: `${baseTheme.text} ${modifier.text}`,
        baseText: baseTheme.text,
        modifierText: modifier.text,
        emoji: baseTheme.emoji,
        modifierEmoji: modifier.emoji,
        hint: `${baseTheme.hint}. ${modifier.hint}`,
        monthName: monthData.name,
        monthEmoji: monthData.emoji,
        date: dateKey
    };
    
    localStorage.setItem(cacheKey, JSON.stringify(result));
    cleanOldCaches();
    
    console.log('🎨 Тема дня:', result.text);
    console.log('📅 Месяц:', monthData.name);
    
    return result;
}

function cleanOldCaches() {
    const threeDaysAgo = Date.now() - 3 * 24 * 60 * 60 * 1000;
    
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith('todayThemeV2_')) {
            const dateStr = key.replace('todayThemeV2_', '');
            const parts = dateStr.split('-');
            if (parts.length === 3) {
                const [year, month, day] = parts.map(Number);
                const date = new Date(year, month - 1, day).getTime();
                if (date < threeDaysAgo) {
                    localStorage.removeItem(key);
                }
            }
        }
    }
}

function getThemesStats() {
    const today = new Date();
    const month = today.getMonth();
    const monthData = MONTHLY_THEMES[month];
    const modifiers = MONTHLY_MODIFIERS[month];
    
    const used = loadUsedThemes();
    const usedThisMonth = used[`m${month}`] || {};
    
    return {
        month: monthData.name,
        monthEmoji: monthData.emoji,
        totalThemesInMonth: monthData.themes.length,
        usedThisMonth: Object.keys(usedThisMonth).length,
        remainingThisMonth: monthData.themes.length - Object.keys(usedThisMonth).length,
        modifiersCount: modifiers.length,
        currentModifiers: modifiers.map(m => m.text || '(без модификатора)')
    };
}

function resetThemesHistory() {
    if (confirm('Сбросить историю? Все темы станут доступны заново.')) {
        localStorage.removeItem(STORAGE_KEY);
        
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key && key.startsWith('todayThemeV2_')) {
                localStorage.removeItem(key);
            }
        }
        
        alert('✅ История сброшена!');
    }
}

if (typeof module !== 'undefined') {
    module.exports = { 
        MONTHLY_THEMES,
        MONTHLY_MODIFIERS,
        getTodayTheme,
        getThemesStats,
        resetThemesHistory
    };
}
