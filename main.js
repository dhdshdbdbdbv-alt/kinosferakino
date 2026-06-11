// ПОЛНАЯ БАЗА ДАННЫХ ФИЛЬМОВ ДО КОНЦА
const moviesDatabase = {
    "asyaklyachkina": { title: "История Аси Клячиной", poster: "asyaklyachkinasstory.jpg", age: "12+", rating: "7.9", genre: "драма, мелодрама", duration: "1 ч. 50 мин.", basePrice: 350, sessions: ["12:00", "16:30"] },
    "backrooms": { title: "Закулисье", poster: "backrooms.jpg", age: "16+", rating: "6.2", genre: "хоррор, триллер", duration: "1 ч. 35 мин.", basePrice: 400, sessions: ["19:00", "23:40"] },
    "birthday": { title: "День рождения", poster: "birthday.jpg", age: "18+", rating: "7.1", genre: "триллер, детектив", duration: "2 ч. 05 мин.", basePrice: 450, sessions: ["14:20", "21:30"] },
    "bogatiry": { title: "Три богатыря", poster: "bogatiry.jpg", age: "6+", rating: "8.2", genre: "мультфильм, приключения", duration: "1 ч. 25 мин.", basePrice: 300, sessions: ["10:00", "13:40"] },
    "karamazovy": { title: "Братья Карамазовы", poster: "brothers-karamazovy.jpg", age: "16+", rating: "9.1", genre: "драма, классика", duration: "3 ч. 10 мин.", basePrice: 500, sessions: ["15:00", "19:30"] },
    "crimeonfloor3": { title: "Преступление на 3 этаже", poster: "crimeonthethirdfloor.jpg", age: "16+", rating: "6.8", genre: "детектив, криминал", duration: "1 ч. 48 мин.", basePrice: 380, sessions: ["11:15", "17:45"] },
    "danyandmany": { title: "Дани и Мэни", poster: "danyandmany.jpg", age: "0+", rating: "7.4", genre: "семейная комедия", duration: "1 ч. 32 мин.", basePrice: 320, sessions: ["10:30", "13:00"] },
    "dramma": { title: "ДРАМА!", poster: "dramma.jpg", age: "16+", rating: "8.0", genre: "драма, искусство", duration: "2 ч. 15 мин.", basePrice: 420, sessions: ["16:00", "20:45"] },
    "dengi": { title: "Грязные деньги", poster: "gryznyedengi.jpg", age: "18+", rating: "7.8", genre: "криминал, экшен", duration: "1 ч. 52 мин.", basePrice: 440, sessions: ["18:20", "22:10"] },
    "images": { title: "Отражения", poster: "images.jpg", age: "16+", rating: "6.9", genre: "психологический триллер", duration: "1 ч. 44 мин.", basePrice: 390, sessions: ["13:50", "19:10"] },
    "bill": { title: "Убить Билла", poster: "killbill.jpg", age: "18+", rating: "8.6", genre: "боевик, триллер", duration: "1 ч. 51 мин.", basePrice: 450, sessions: ["17:00", "22:30"] },
    "killingparty": { title: "Убийственная вечеринка", poster: "killingparty.jpg", age: "18+", rating: "7.3", genre: "черная комедия", duration: "1 ч. 40 мин.", basePrice: 410, sessions: ["20:00", "00:15"] },
    "komers": { title: "Коммерсант", poster: "komers.jpg", age: "16+", rating: "7.5", genre: "комедия, драма", duration: "1 ч. 42 мин.", basePrice: 370, sessions: ["12:10", "15:30"] },
    "koshey": { title: "Кощей", poster: "koshey.jpg", age: "6+", rating: "7.0", genre: "фэнтези, приключения", duration: "1 ч. 30 мин.", basePrice: 310, sessions: ["09:30", "11:40"] },
    "leo": { title: "Лео и Тиг", poster: "leoandtig.jpg", age: "0+", rating: "7.3", genre: "мультфильм, детский", duration: "1 ч. 12 мин.", basePrice: 280, sessions: ["09:00", "11:00"] },
    "michael": { title: "Майкл (2026)", poster: "Michael_(2026_film)_poster.jpg", age: "18+", rating: "9.4", genre: "биография, музыка", duration: "2 ч. 35 мин.", basePrice: 600, sessions: ["14:00", "20:00"] },
    "momo": { title: "Момо", poster: "momo.jpg", age: "18+", rating: "6.5", genre: "хоррор, мистика", duration: "1 ч. 36 мин.", basePrice: 400, sessions: ["21:15", "23:50"] },
    "monk": { title: "Монах: Возвращение", poster: "monkfromborleycomeback.jpg", age: "16+", rating: "6.7", genre: "ужасы, драма", duration: "1 ч. 55 мин.", basePrice: 380, sessions: ["18:40", "22:00"] },
    "movewings": { title: "Шевели перьями", poster: "moveyourwings.jpg", age: "0+", rating: "7.1", genre: "мультфильм, семейный", duration: "1 ч. 24 мин.", basePrice: 300, sessions: ["10:15", "12:45"] },
    "nbt": { title: "Никто не верил", poster: "nbt.jpg", age: "12+", rating: "8.3", genre: "документальный, спорт", duration: "1 ч. 46 мин.", basePrice: 340, sessions: ["14:10", "18:00"] },
    "backrooms_new": { title: "Закулисье: Официальный", poster: "new-official-backrooms-poster.jpg", age: "16+", rating: "6.4", genre: "триллер, фантастика", duration: "1 ч. 50 мин.", basePrice: 420, sessions: ["16:15", "21:15"] },
    "notalone": { title: "Один дома 3: Другая история", poster: "notaloneathome3.jpg", age: "6+", rating: "5.8", genre: "комедия, приключения", duration: "1 ч. 38 мин.", basePrice: 330, sessions: ["11:30", "15:15"] },
    "obessy": { title: "Обсессия", poster: "obessy.jpg", age: "16+", rating: "7.6", genre: "драма, триллер", duration: "2 ч. 02 мин.", basePrice: 430, sessions: ["13:30", "19:00"] },
    "propast": { title: "Пропасть", poster: "propast.jpg", age: "16+", rating: "7.9", genre: "детектив, триллер", duration: "2 ч. 05 мин.", basePrice: 440, sessions: ["15:20", "20:30"] },
    "schoolmag": { title: "Школа волшебников", poster: "schoolofmajicians.jpg", age: "6+", rating: "7.2", genre: "фэнтези, семейный", duration: "1 ч. 44 мин.", basePrice: 320, sessions: ["09:45", "13:10"] },
    "sevenversts": { title: "Семь верст до рассвета", poster: "sevenverstsbeforedawn.jpg", age: "12+", rating: "8.1", genre: "военная драма", duration: "2 ч. 10 мин.", basePrice: 360, sessions: ["11:00", "16:45"] },
    "spacymasha": { title: "Космическая Малука", poster: "spacymasha.jpg", age: "0+", rating: "6.8", genre: "мультфильм, фантастика", duration: "1 ч. 22 мин.", basePrice: 290, sessions: ["10:00", "12:30"] },
    "trolleys": { title: "Тролли возвращаются", poster: "trolleyscomeback.jpg", age: "6+", rating: "7.4", genre: "мультфильм, мюзикл", duration: "1 ч. 31 мин.", basePrice: 320, sessions: ["12:20", "15:00"] },
    "uponmagictree": { title: "У волшебного дерева", poster: "uponmajictree.jpg", age: "0+", rating: "7.0", genre: "сказка, детский", duration: "1 ч. 28 мин.", basePrice: 280, sessions: ["09:15", "14:30"] },
    "wind": { title: "Ветер", poster: "Wind.jpg", age: "16+", rating: "8.4", genre: "артхаус, драма", duration: "1 ч. 55 мин.", basePrice: 400, sessions: ["17:30", "21:00"] }
};

// БАЗА ТОВАРОВ КИНОБАРА
const barCatalog = [
    { id: 'popcorn_caramel', name: 'Попкорн Карамель', prices: { S: 300, M: 450, L: 600 } },
    { id: 'popcorn_salt', name: 'Попкорн Соленый', prices: { S: 250, M: 400, L: 550 } },
    { id: 'soda_cola', name: 'Газировка Cola', prices: { S: 150, M: 220, L: 280 } },
    { id: 'nachos_cheese', name: 'Начос сырный', prices: { S: 350, M: 500, L: 650 } }
];

// СОСТОЯНИЕ ТЕКУЩЕЙ СЕССИИ
let appState = {
    currentPrice: 0,
    selectedSeats: 0,
    barCart: {} // Формат: { item_id: { S: 0, M: 0, L: 0 } }
};

// 1. РЕНДЕРИНГ ГЛАВНОГО КАТАЛОГА (С ПЕРЕРАБОТКОЙ ПОД CSS)
function initApp() {
    const grid = document.getElementById('movies-grid');
    grid.innerHTML = ''; // Очистка перед рендером
    
    for (const [key, movie] of Object.entries(moviesDatabase)) {
        const card = document.createElement('div');
        card.className = 'movie-ultimate-card';
        card.onclick = () => openBookingModal(key);
        
        card.innerHTML = `
            <img class="card-poster-img" src="${movie.poster}" alt="${movie.title}">
            <div class="card-hover-overlay">
                <h3 class="hover-title">${movie.title}</h3>
                <div class="hover-meta">
                    <span class="hover-badge-age">${movie.age}</span>
                    <span>★ ${movie.rating}</span>
                </div>
                <div class="hover-genre">${movie.genre}</div>
                <div class="hover-sessions-list">
                    ${movie.sessions.map(time => `<span class="hover-session-badge">${time}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    }
}

// 2. ОТКРЫТИЕ МОДАЛЬНОГО ОКНА БРОНИРОВАНИЯ
function openBookingModal(movieKey) {
    const movie = moviesDatabase[movieKey];
    appState.currentPrice = movie.basePrice;
    appState.selectedSeats = 0;
    appState.barCart = {}; // Обнуляем бар при новом заказе

    // Обновляем левый блок инфо
    document.getElementById('modal-movie-poster').src = movie.poster;
    document.getElementById('modal-movie-title').textContent = movie.title;
    document.getElementById('modal-badge-age').textContent = movie.age;
    document.getElementById('modal-badge-rating').textContent = `★ ${movie.rating}`;
    document.getElementById('modal-text-genre').textContent = movie.genre;
    document.getElementById('modal-text-duration').textContent = movie.duration;

    renderSessions(movie.sessions);
    renderHall();
    renderBar();
    recalculateTotals();

    // Сбрасываем видимость шагов
    document.getElementById('step-hall-container').classList.add('hidden');
    document.getElementById('step-bar-container').classList.add('hidden');
    document.getElementById('step-checkout-container').classList.add('hidden');
    
    // Показываем модалку
    document.getElementById('booking-modal-overlay').classList.remove('hidden');
}

// 3. РЕНДЕРИНГ СЕАНСОВ
function renderSessions(sessions) {
    const container = document.getElementById('modal-sessions-grid');
    container.innerHTML = '';
    
    sessions.forEach(time => {
        const btn = document.createElement('button');
        btn.className = 'modal-session-card-btn';
        btn.innerHTML = `
            <span class="time">${time}</span>
            <span class="hall-type">LUX ATMOS</span>
        `;
        btn.onclick = () => {
            document.querySelectorAll('.modal-session-card-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('step-hall-container').classList.remove('hidden'); // Открываем зал
        };
        container.appendChild(btn);
    });
}

// 4. РЕНДЕРИНГ ЗАЛА
function renderHall() {
    const grid = document.getElementById('dynamic-hall-grid');
    grid.innerHTML = '';
    
    const rows = 8;
    const seatsPerRow = 12;

    for (let r = 1; r <= rows; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'hall-row';
        rowDiv.innerHTML = `<div class="row-label">Ряд ${r}</div>`;
        
        for (let s = 1; s <= seatsPerRow; s++) {
            if (s === 7) rowDiv.innerHTML += `<div class="passage"></div>`; // Проход по центру
            
            const isOccupied = Math.random() < 0.15; // 15% мест занято
            const seat = document.createElement('div');
            seat.className = `seat ${isOccupied ? 'occupied' : ''}`;
            
            if (!isOccupied) {
                seat.onclick = function() {
                    this.classList.toggle('selected');
                    appState.selectedSeats += this.classList.contains('selected') ? 1 : -1;
                    checkFlowProgression();
                    recalculateTotals();
                };
            }
            rowDiv.appendChild(seat);
        }
        grid.appendChild(rowDiv);
    }
}

// 5. РЕНДЕРИНГ КИНОБАРА С ЛОГИКОЙ МУЛЬТИРАЗМЕРОВ И СЧЕТЧИКОВ
function renderBar() {
    const container = document.getElementById('dynamic-bar-menu');
    container.innerHTML = '';

    barCatalog.forEach(item => {
        // Инициализируем стейт для каждого товара
        appState.barCart[item.id] = { S: 0, M: 0, L: 0 };

        const row = document.createElement('div');
        row.className = 'bar-row-item';

        let sizesHtml = '';
        ['S', 'M', 'L'].forEach(size => {
            sizesHtml += `
                <div class="bar-size-card">
                    <span class="size-title">Размер ${size}</span>
                    <span class="size-price-label">${item.prices[size]} ₽</span>
                    <div class="size-counter-controls">
                        <button class="cnt-btn" onclick="updateBarCounter('${item.id}', '${size}', -1)">-</button>
                        <span class="cnt-value" id="count-${item.id}-${size}">0</span>
                        <button class="cnt-btn" onclick="updateBarCounter('${item.id}', '${size}', 1)">+</button>
                    </div>
                </div>
            `;
        });

        row.innerHTML = `
            <div class="bar-item-details">
                <h4>${item.name}</h4>
                <p>Хрустящее дополнение к фильму</p>
            </div>
            <div class="bar-sizes-container">
                ${sizesHtml}
            </div>
        `;
        container.appendChild(row);
    });
}

// 6. ГЛОБАЛЬНАЯ ФУНКЦИЯ ДЛЯ КНОПОК БАРА (Внедряется в Window для onClick)
window.updateBarCounter = function(itemId, size, delta) {
    let currentCount = appState.barCart[itemId][size];
    let newCount = currentCount + delta;
    
    if (newCount >= 0 && newCount <= 10) { // Лимит 10 штук одного размера
        appState.barCart[itemId][size] = newCount;
        document.getElementById(`count-${itemId}-${size}`).textContent = newCount;
        recalculateTotals();
    }
};

// 7. ЛОГИКА ПРОДВИЖЕНИЯ ПО ШАГАМ (Если выбрано место, показываем бар и оплату)
function checkFlowProgression() {
    const barStep = document.getElementById('step-bar-container');
    const checkoutStep = document.getElementById('step-checkout-container');
    const submitBtn = document.getElementById('final-checkout-btn');

    if (appState.selectedSeats > 0) {
        barStep.classList.remove('hidden');
        checkoutStep.classList.remove('hidden');
        submitBtn.disabled = false;
    } else {
        barStep.classList.add('hidden');
        checkoutStep.classList.add('hidden');
        submitBtn.disabled = true;
    }
}

// 8. ПЕРЕСЧЕТ ИТОГОВ (Билеты + Бар)
function recalculateTotals() {
    let totalTicketsSum = appState.selectedSeats * appState.currentPrice;
    let totalBarSum = 0;
    let totalBarItems = 0;

    for (let itemId in appState.barCart) {
        for (let size in appState.barCart[itemId]) {
            let qty = appState.barCart[itemId][size];
            if (qty > 0) {
                totalBarItems += qty;
                // Ищем цену в каталоге
                const itemData = barCatalog.find(i => i.id === itemId);
                totalBarSum += qty * itemData.prices[size];
            }
        }
    }

    const grandTotal = totalTicketsSum + totalBarSum;

    document.getElementById('summary-seats-count').textContent = appState.selectedSeats;
    document.getElementById('summary-bar-count').textContent = totalBarItems;
    document.getElementById('summary-total-sum').textContent = grandTotal;
}

// 9. АВТОРИЗАЦИЯ И ОШИБКИ БАНКА (Заглушка для UI)
document.getElementById('submit-account-btn').onclick = () => {
    const status = document.getElementById('account-validation-status');
    const login = document.getElementById('client-login-field').value;
    const pass = document.getElementById('client-pass-field').value;

    if (login.length >= 3 && pass.length >= 4) {
        status.style.color = "#00e676";
        status.textContent = "✅ Авторизация успешна. Вы можете оформить заказ.";
    } else {
        status.style.color = "#ef4444";
        status.textContent = "⚠️ Логин или пароль слишком короткие!";
    }
};

document.getElementById('final-checkout-btn').onclick = () => {
    const receiptBlock = document.getElementById('payment-receipt-block');
    const receiptText = document.getElementById('receipt-text-container');
    
    receiptText.textContent = `
===== ЧЕК ОПЛАТЫ =====
ТРАНЗАКЦИЯ: TXN-${Math.floor(Math.random() * 1000000)}
БИЛЕТЫ: ${appState.selectedSeats} шт.
БАР: ${document.getElementById('summary-bar-count').textContent} позиций
ИТОГО К СПИСАНИЮ: ${document.getElementById('summary-total-sum').textContent} RUB
======================
ПОПЫТКА СОЕДИНЕНИЯ СО ШЛЮЗОМ...
    `;
    receiptBlock.classList.remove('hidden');
};

// 10. ЗАКРЫТИЕ МОДАЛКИ И ИНИЦИАЛИЗАЦИЯ
document.getElementById('close-modal-btn').onclick = () => {
    document.getElementById('booking-modal-overlay').classList.add('hidden');
};

// Запуск при загрузке страницы
initApp();
