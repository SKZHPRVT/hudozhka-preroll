// ========== СИСТЕМА ХРАНЕНИЯ РИСУНКОВ ==========
const Storage = {
    // Ключи
    KEYS: {
        BALANCE: 'balance',
        DRAWINGS: 'drawings',
        STREAK: 'streak',
        LAST_DRAW: 'lastDrawDate',
        ARCHETYPE: 'archetype',
        USED_REWARDS: 'usedRewards',
        QUIZ_DONE: 'quizCompleted'
    },
    
    // ========== БАЗОВЫЕ МЕТОДЫ ==========
    get(key, defaultValue = null) {
        try {
            const val = localStorage.getItem(key);
            if (val === null) return defaultValue;
            // Пробуем распарсить как JSON
            try {
                return JSON.parse(val);
            } catch {
                return val;
            }
        } catch (e) {
            console.error('Storage.get error:', e);
            return defaultValue;
        }
    },
    
    set(key, value) {
        try {
            if (typeof value === 'object') {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                localStorage.setItem(key, String(value));
            }
            // Синхронизируем в облако Telegram
            this.syncToCloud(key, value);
            return true;
        } catch (e) {
            console.error('Storage.set error:', e);
            return false;
        }
    },
    
    // ========== РИСУНКИ ==========
    saveDrawing(drawingData) {
        const drawings = this.get(this.KEYS.DRAWINGS, []);
        
        const drawing = {
            id: Date.now(),
            theme: drawingData.theme,
            themeEmoji: drawingData.themeEmoji || '🎨',
            date: new Date().toISOString(),
            dateFormatted: new Date().toLocaleDateString('ru-RU'),
            image: drawingData.image, // base64
            teacherGrade: null,
            teacherComment: null,
            submitted: false
        };
        
        drawings.push(drawing);
        
        // Храним только последние 50 рисунков (чтобы не переполнить localStorage)
        const trimmed = drawings.slice(-50);
        this.set(this.KEYS.DRAWINGS, trimmed);
        
        return drawing;
    },
    
    getDrawings() {
        return this.get(this.KEYS.DRAWINGS, []);
    },
    
    getDrawing(id) {
        return this.getDrawings().find(d => d.id === id);
    },
    
    updateDrawing(id, updates) {
        const drawings = this.getDrawings();
        const idx = drawings.findIndex(d => d.id === id);
        if (idx === -1) return null;
        
        drawings[idx] = { ...drawings[idx], ...updates };
        this.set(this.KEYS.DRAWINGS, drawings);
        return drawings[idx];
    },
    
    deleteDrawing(id) {
        const drawings = this.getDrawings().filter(d => d.id !== id);
        this.set(this.KEYS.DRAWINGS, drawings);
    },
    
    // ========== БАЛАНС ==========
    getBalance() {
        return parseInt(this.get(this.KEYS.BALANCE, 0)) || 0;
    },
    
    addBalance(amount) {
        const newBalance = this.getBalance() + amount;
        this.set(this.KEYS.BALANCE, newBalance);
        return newBalance;
    },
    
    spendBalance(amount) {
        const balance = this.getBalance();
        if (balance < amount) return false;
        this.set(this.KEYS.BALANCE, balance - amount);
        return true;
    },
    
    // ========== СТРИК ==========
    getStreak() {
        return parseInt(this.get(this.KEYS.STREAK, 0)) || 0;
    },
    
    updateStreak() {
        const today = new Date().toDateString();
        const lastDraw = this.get(this.KEYS.LAST_DRAW, '');
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        let streak = this.getStreak();
        
        if (lastDraw === today) {
            // Уже рисовали сегодня — стрик не растёт
            return streak;
        }
        
        if (lastDraw === yesterday.toDateString()) {
            // Рисовали вчера — стрик растёт
            streak++;
        } else {
            // Пропустили день — начинаем заново
            streak = 1;
        }
        
        this.set(this.KEYS.STREAK, streak);
        this.set(this.KEYS.LAST_DRAW, today);
        return streak;
    },
    
    // ========== ОТПРАВКА ПРЕПОДАВАТЕЛЮ ==========
    submitToTeacher(drawingId) {
        const drawing = this.getDrawing(drawingId);
        if (!drawing) return false;
        
        const tg = window.Telegram?.WebApp;
        
        // Отправляем данные в чат-бот
        if (tg) {
            try {
                tg.sendData(JSON.stringify({
                    action: 'submit_drawing',
                    drawingId: drawing.id,
                    theme: drawing.theme,
                    date: drawing.dateFormatted,
                    imageSize: drawing.image.length
                }));
                
                // Помечаем как отправленный
                this.updateDrawing(drawingId, { 
                    submitted: true,
                    submittedAt: new Date().toISOString()
                });
                
                return true;
            } catch (e) {
                console.error('Submit error:', e);
                return false;
            }
        }
        
        return false;
    },
    
    // ========== СИНХРОНИЗАЦИЯ С ОБЛАКОМ TELEGRAM ==========
    syncToCloud(key, value) {
        const tg = window.Telegram?.WebApp;
        if (!tg || !tg.CloudStorage) return;
        
        try {
            const valueStr = typeof value === 'object' ? JSON.stringify(value) : String(value);
            
            // Ограничение CloudStorage — 4096 байт на ключ
            // Для больших данных (рисунков) сохраняем только метаданные
            if (valueStr.length > 4000) {
                console.log('Data too large for cloud storage:', key);
                return;
            }
            
            tg.CloudStorage.setItem(key, valueStr, (err) => {
                if (err) console.warn('CloudStorage set error:', err);
            });
        } catch (e) {
            console.warn('CloudStorage sync failed:', e);
        }
    },
    
    // Загрузка из облака при старте
    async loadFromCloud() {
        const tg = window.Telegram?.WebApp;
        if (!tg || !tg.CloudStorage) return;
        
        return new Promise((resolve) => {
            const keys = Object.values(this.KEYS);
            
            tg.CloudStorage.getItems(keys, (err, values) => {
                if (err || !values) {
                    resolve();
                    return;
                }
                
                // Синхронизируем только если локально пусто
                keys.forEach(key => {
                    const localVal = localStorage.getItem(key);
                    const cloudVal = values[key];
                    
                    if (!localVal && cloudVal) {
                        try {
                            // Пробуем распарсить
                            try {
                                JSON.parse(cloudVal);
                                localStorage.setItem(key, cloudVal);
                            } catch {
                                localStorage.setItem(key, cloudVal);
                            }
                        } catch (e) {
                            console.warn('Cloud load error:', key, e);
                        }
                    }
                });
                
                resolve();
            });
        });
    }
};

// Автозагрузка из облака
if (typeof window !== 'undefined') {
    window.Storage = Storage;
    // Загружаем данные при старте
    if (window.Telegram?.WebApp?.CloudStorage) {
        Storage.loadFromCloud();
    }
}
