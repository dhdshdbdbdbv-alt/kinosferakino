// ПОЛНАЯ БАЗА ДАННЫХ ФИЛЬМОВ
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
    "komers": { title: "Коммерсант", poster: "komers.jpg", age: "16+", rating: "7.5", genre: "комедия, drama", duration: "1 ч. 42 мин.", basePrice: 370, sessions: ["12:10", "15:30"] },
    "koshey": { title: "Кощей", poster: "koshey.jpg", age: "6+", rating: "7.0", genre: "фэнтези, приключения", duration: "1 ч. 30 мин.", basePrice: 310, sessions: ["09:30", "11:40"] },
    "leo": { title: "Лео и Тиг", poster: "leoandtig.jpg", age: "0+", rating: "7.3", genre: "мультфильм, детский", duration: "1 ч. 12 мин.", basePrice: 280, sessions: ["09:00", "11:00"] },
    "michael": { title: "Майкл (2026)", poster: "Michael_(2026_film)_poster.jpg", age: "18+", rating: "9.4", genre: "биография, музыка", duration: "2 ч. 35 мин.", basePrice: 600, sessions: ["14:00", "20:00"] },
    "momo": { title: "Момо", poster: "momo.jpg", age: "18+", rating: "6.5", genre: "хоррор, мистика", duration: "1 ч. 36 мин.", basePrice: 400, sessions: ["21:15", "23:50"] },
    "monk": { title: "Монах: Возвращение", poster: "monkfromborleycomeback.jpg", age: "16+", rating: "6.7", genre: "ужасы, драма", duration: "1 ч. 55 мин.", basePrice: 380, sessions: ["18:40", "22:00"] },
    "movewings": { title: "Шевели перьями", poster: "moveyourwings.jpg", age: "0+", rating: "7.1", genre: "мультфильм, семейный", duration: "1 ч. 24 мин.", basePrice: 300, sessions: ["10:15", "12:45"] },
    "nbt": { title: "Никто не верил", poster: "nbt.jpg", age: "12+", rating: "8.3", genre: "документальный, спорт", duration: "1 ч. 46 мин.", basePrice: 340, sessions: ["14:10", "18:00"] },
    "backrooms_new": { title: "Закулисье: Официальный постер", poster: "new-official-backrooms-poster.jpg", age: "16+", rating: "6.4", genre: "триллер, фантастика", duration: "1 ч. 50 мин.", basePrice: 420, sessions: ["16:15", "21:15"] },
    "notalone": { title: "Один дома 3: Другая история", poster: "notaloneathome3.jpg", age: "6+", rating: "5.8", genre: "комедия, приключения", duration: "1 ч. 38 мин.", basePrice: 330, sessions: ["11:30", "15:15"] },
    "obessy": { title: "Обсессия", poster: "obessy.jpg", age: "16+", rating: "7.6", genre: "драма, триллер", duration: "2 ч. 02 мин.", basePrice: 430, sessions: ["13:30", "19:00"] },
    "propast": { title: "Пропасть", poster: "propast.jpg", age: "16+", rating: "7.9", genre: "детектив, триллер", duration: "2 ч. 05 мин.", basePrice: 440, sessions: ["15:20", "20:30"] },
    "schoolmag": { title: "Школа волшебников", poster: "schoolofmajicians.jpg", age: "6+", rating: "7.2", genre: "фэнтези, семейный", duration: "1 ч. 44 мин.", basePrice: 320, sessions: ["09:45", "13:10"] },
    "sevenversts": { title: "Семь верст до рассвета", poster: "sevenverstsbeforedawn.jpg", age: "12+", rating: "8.1", genre: "военная драма", duration: "2 ч. 10 мин.", basePrice: 360, sessions: ["11:00", "16:45"] },
    "spacymasha": { title: "Космическая Малука", poster: "spacymasha.jpg", age: "0+", rating: "6.8", genre: "мультфильм, фантастика", duration: "1 ч. 22 мин.", basePrice: 290, sessions: ["10:00", "12:30"] },
    "trolleys": { title: "Тролли возвращаются", poster: "trolleyscomeback.jpg", age: "6+", rating: "7.4", genre: "мультфильм, мюзикл", duration: "1 ч. 31 мин.", basePrice: 320, sessions: ["12:20", "15:00"] },
    "uponmagictree": { title: "У волшебного дерева", poster: "uponmajictree.jpg", age: "0+", rating: "7.0", genre: "сказка, детский", duration: "1 ч. 28 мин.", basePrice: 280, sessions: ["09:15", "14:30"] },
    "wind": { title: "Ветер", poster: "Wind.jpg", age: "16+", rating: "8.4", genre: "артхаус, драма", duration: "2 ч. 12 мин.", basePrice: 460, sessions: ["17:30", "21:40"] },
    "wondaryworld": { title: "Побег в сказку", poster: "wondaryworld.jpg", age: "6+", rating: "7.2", genre: "приключения, фэнтези", duration: "1 ч. 35 мин.", basePrice: 340, sessions: ["11:10", "15:40"] },
    "youngloved": { title: "Молодые и влюбленные", poster: "young-and-loved.jpg", age: "16+", rating: "7.7", genre: "мелодрама, драма", duration: "1 ч. 58 мин.", basePrice: 410, sessions: ["14:40", "19:50"] }
};

// БАЗА ДАННЫХ КИНОБАРА С КОЭФФИЦИЕНТАМИ ДЛЯ РАЗМЕРОВ S, M, L
const barItemsDatabase = [
    { id: "combo_premium", name: "Фирменный Комбо-Набор", desc: "Премиум попкорн на выбор и большой прохладительный напиток", basePrice: 450, mult: { S: 1.0, M: 1.25, L: 1.5 } },
    { id: "popcorn_salt", name: "Попкорн Соленый (Классика)", desc: "Традиционный горячий кукурузный попкорн на кокосовом масле", basePrice: 280, mult: { S: 1.0, M: 1.35, L: 1.7 } },
    { id: "popcorn_caramel", name: "Попкорн Французская Карамель", desc: "Хрустящий попкорн с добавлением натуральной карамельной глазури", basePrice: 320, mult: { S: 1.0, M: 1.35, L: 1.7 } },
    { id: "soda", name: "Элитная Газировка", desc: "Сильногазированный охлажденный напиток со льдом на выбор", basePrice: 180, mult: { S: 1.0, M: 1.3, L: 1.6 } },
    { id: "nachos", name: "Мексиканские Чипсы Начос", desc: "Хрустящие кукурузные начос с порционным сырным соусом или сальсой", basePrice: 300, mult: { S: 1.0, M: 1.3, L: 1.5 } }
];

// ГЛОБАЛЬНОЕ СОСТОЯНИЕ СЕССИИ БРОНИРОВАНИЯ
let currentMovieKey = null;
let selectedSession = null;
let selectedSeats = []; // Массив объектов { row, seat }
let selectedBarItems = {}; // Формат: { "item_id_size": количество }
let isAuthorized = false;

// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
document.addEventListener("DOMContentLoaded", () => {
    renderMoviesCatalog();
    setupCitySelector();
    setupModalEvents();
    setupAuthLogic();
    setupCheckoutLogic(); // Инициализация слушателя чекаут-кнопки
});

// 1. РЕНДЕР КАТАЛОГА ФИЛЬМОВ НА ГЛАВНУЮ СТРАНИЦУ
function renderMoviesCatalog() {
    const grid = document.getElementById("movies-grid");
    if (!grid) return;
    grid.innerHTML = "";

    Object.keys(moviesDatabase).forEach(key => {
        const movie = moviesDatabase[key];
        
        // Создаем листы сеансов для превью в ховере
        let sessionsHtml = "";
        movie.sessions.forEach(s => {
            sessionsHtml += `<span class="hover-session-badge">${s}</span>`;
        });

        const card = document.createElement("div");
        card.className = "movie-ultimate-card";
        card.innerHTML = `
            <img class="card-poster-img" src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/220x330/0f0f1a/ffffff?text=Постер'">
            <div class="card-hover-overlay">
                <h4 class="hover-title">${movie.title}</h4>
                <div class="hover-meta">
                    <span class="hover-badge-age">${movie.age}</span>
                    <span style="color:#00e676; font-weight:bold;">★ ${movie.rating}</span>
                </div>
                <div class="hover-genre">${movie.genre}</div>
                <div class="hover-sessions-label">Сеансы сегодня:</div>
                <div class="hover-sessions-list">${sessionsHtml}</div>
            </div>
        `;
        
        card.addEventListener("click", () => openBookingModal(key));
        grid.appendChild(card);
    });
}

// 2. УПРАВЛЕНИЕ ВЫБОРОМ ГОРОДА
function setupCitySelector() {
    const wrapper = document.getElementById("city-dropdown-wrapper");
    const btn = document.getElementById("active-city-btn");
    const nameSpan = document.getElementById("current-city-name");

    if (!btn || !wrapper) return;

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        wrapper.classList.toggle("open");
    });

    document.querySelectorAll(".city-option").forEach(option => {
        option.addEventListener("click", (e) => {
            const cityName = e.target.getAttribute("data-city");
            nameSpan.textContent = cityName;
            wrapper.classList.remove("open");
        });
    });

    document.addEventListener("click", () => wrapper.classList.remove("open"));
}

// 3. ЛОГИКА ОТКРЫТИЯ МОДАЛЬНОГО ОКНА БРОНИРОВАНИЯ
function openBookingModal(movieKey) {
    currentMovieKey = movieKey;
    const movie = moviesDatabase[movieKey];
    
    // Сброс состояния
    selectedSession = null;
    selectedSeats = [];
    selectedBarItems = {};
    
    // Заполнение мета-данных фильма
    document.getElementById("modal-movie-poster").src = movie.poster;
    document.getElementById("modal-movie-title").textContent = movie.title;
    document.getElementById("modal-badge-age").textContent = movie.age;
    document.getElementById("modal-badge-rating").textContent = `★ ${movie.rating}`;
    document.getElementById("modal-text-genre").textContent = movie.genre;
    document.getElementById("modal-text-duration").textContent = movie.duration;

    // Рендер сеансов (Шаг 1)
    const sessionsGrid = document.getElementById("modal-sessions-grid");
    sessionsGrid.innerHTML = "";
    movie.sessions.forEach(sessionTime => {
        const btn = document.createElement("button");
        btn.className = "modal-session-card-btn";
        btn.innerHTML = `<span class="time">${sessionTime}</span><span class="hall-type">Laser Premium</span>`;
        btn.addEventListener("click", () => selectSessionTime(btn, sessionTime));
        sessionsGrid.appendChild(btn);
    });

    // Скрываем последующие шаги до выбора сеанса
    document.getElementById("step-hall-container").classList.add("hidden");
    document.getElementById("step-bar-container").classList.add("hidden");
    document.getElementById("step-checkout-container").classList.add("hidden");
    document.getElementById("payment-receipt-block").classList.add("hidden");

    // Показываем оверлей
    document.getElementById("booking-modal-overlay").classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Запрет прокрутки заднего фона
    
    updateOrderSummary();
}

// СЛУШАТЕЛИ ЗАКРЫТИЯ МОДАЛКИ
function setupModalEvents() {
    const closeBtn = document.getElementById("close-modal-btn");
    const overlay = document.getElementById("booking-modal-overlay");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            overlay.classList.add("hidden");
            document.body.style.overflow = "";
        });
    }
}

// ВЫБОР СЕАНСА -> ОТКРЫТИЕ ЗАЛА
function selectSessionTime(clickedBtn, time) {
    document.querySelectorAll(".modal-session-card-btn").forEach(btn => btn.classList.remove("active"));
    clickedBtn.classList.add("active");
    
    selectedSession = time;
    selectedSeats = []; // Сброс выбранных мест при смене сеанса
    
    // Открываем зал и бар
    document.getElementById("step-hall-container").classList.remove("hidden");
    document.getElementById("step-bar-container").classList.remove("hidden");
    document.getElementById("step-checkout-container").classList.remove("hidden");

    generateInteractiveHall();
    renderBarMenu();
    updateOrderSummary();
}

// 4. ДИНАМИЧЕСКАЯ ГЕНЕРАЦИЯ ЗАЛА С УВЕЛИЧЕННЫМИ КНОПКАМИ ПОД МОБИЛЬНЫЕ
function generateInteractiveHall() {
    const grid = document.getElementById("dynamic-hall-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const rowsCount = 5;
    const seatsCount = 8;

    for (let r = 1; r <= rowsCount; r++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "hall-row";

        // Добавляем маркер ряда слева
        const label = document.createElement("div");
        label.className = "row-label";
        label.textContent = `Ряд ${r}`;
        rowDiv.appendChild(label);

        for (let s = 1; s <= seatsCount; s++) {
            // Добавление прохода посередине зала
            if (s === 5) {
                const passage = document.createElement("div");
                passage.className = "passage";
                rowDiv.appendChild(passage);
            }

            const seatElement = document.createElement("div");
            seatElement.className = "seat";
            
            // Симуляция занятых мест (генерация на основе времени и номера места)
            const isOccupied = (r * s + parseInt(selectedSession)) % 4 === 0;
            if (isOccupied) {
                seatElement.classList.add("occupied");
            } else {
                seatElement.addEventListener("click", () => toggleSeatSelection(seatElement, r, s));
            }

            rowDiv.appendChild(seatElement);
        }
        grid.appendChild(rowDiv);
    }
}

function toggleSeatSelection(seatElement, row, seat) {
    const index = selectedSeats.findIndex(item => item.row === row && item.seat === seat);
    
    if (index > -1) {
        selectedSeats.splice(index, 1);
        seatElement.classList.remove("selected");
    } else {
        selectedSeats.push({ row, seat });
        seatElement.classList.add("selected");
    }
    updateOrderSummary();
}

// 5. РЕНДЕР ПРЕМИУМ КИНОБАРА (ОДНОВРЕМЕННЫЙ ВЫБОР ВСЕХ РАЗМЕРОВ ДЛЯ КАЖДОГО ТОВАРА)
function renderBarMenu() {
    const container = document.getElementById("dynamic-bar-menu");
    if (!container) return;
    container.innerHTML = "";

    barItemsDatabase.forEach(item => {
        const row = document.createElement("div");
        row.className = "bar-row-item";
        
        // Левая часть: Описание товара
        let itemInfoHtml = `
            <div class="bar-item-details">
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
            </div>
        `;
        
        // Правая часть: Блоки со всеми размерами S, M, L одновременно
        let sizesHtml = `<div class="bar-sizes-container">`;
        
        ["S", "M", "L"].forEach(size => {
            const price = Math.round(item.basePrice * item.mult[size]);
            const storageKey = `${item.id}_${size}`;
            const currentCount = selectedBarItems[storageKey] || 0;

            sizesHtml += `
                <div class="bar-size-card">
                    <span class="size-title">Размер ${size}</span>
                    <span class="size-price-label">${price} ₽</span>
                    <div class="size-counter-controls">
                        <button class="cnt-btn" onclick="changeBarItemQty('${storageKey}', -1, ${price})">-</button>
                        <span class="cnt-value" id="cnt-${storageKey}">${currentCount}</span>
                        <button class="cnt-btn" onclick="changeBarItemQty('${storageKey}', 1, ${price})">+</button>
                    </div>
                </div>
            `;
        });
        
        sizesHtml += `</div>`;
        
        row.innerHTML = itemInfoHtml + sizesHtml;
        container.appendChild(row);
    });
}

// ИЗМЕНЕНИЕ КОЛИЧЕСТВА НАПИТКОВ ИЛИ ПОПКОРНА ИЗ КАРТОЧКИ РАЗМЕРА
window.changeBarItemQty = function(storageKey, change) {
    if (!selectedBarItems[storageKey]) {
        selectedBarItems[storageKey] = 0;
    }
    
    selectedBarItems[storageKey] += change;
    
    if (selectedBarItems[storageKey] < 0) {
        selectedBarItems[storageKey] = 0;
    }
    
    document.getElementById(`cnt-${storageKey}`).textContent = selectedBarItems[storageKey];
    updateOrderSummary();
};

// 6. УПРАВЛЕНИЕ АВТОРИЗАЦИЕЙ (ВАЛИДАЦИЯ ХОСТИНГА И АККАУНТОВ)
function setupAuthLogic() {
    const loginField = document.getElementById("client-login-field");
    const passField = document.getElementById("client-pass-field");
    const submitBtn = document.getElementById("submit-account-btn");
    const statusText = document.getElementById("account-validation-status");
    const topBarBtn = document.getElementById("top-bar-auth-btn");

    if (!submitBtn) return;

    submitBtn.addEventListener("click", () => {
        const login = loginField.value.trim();
        const pass = passField.value.trim();

        if (login.length >= 3 && pass.length >= 4) {
            isAuthorized = true;
            statusText.textContent = "✓ Авторизация успешно пройдена. Доступ к кассе открыт.";
            statusText.style.color = "#00e676";
            if (topBarBtn) topBarBtn.textContent = login;
        } else {
            isAuthorized = false;
            statusText.textContent = "❌ Ошибка: Логин от 3 символов, Пароль от 4 символов!";
            statusText.style.color = "#ef4444";
        }
        updateOrderSummary();
    });
}

// 7. ПОЛНЫЙ ДИНАМИЧЕСКИЙ ПЕРЕСЧЕТ СТОИМОСТИ (КОМБИНИРОВАННЫЙ UI STATE)
function updateOrderSummary() {
    if (!currentMovieKey) return;
    
    const movie = moviesDatabase[currentMovieKey];
    
    // Расчет за билеты
    const ticketsCount = selectedSeats.length;
    const ticketsTotal = ticketsCount * movie.basePrice;
    
    // Расчет за бар
    let barTotal = 0;
    barItemsDatabase.forEach(item => {
        ["S", "M", "L"].forEach(size => {
            const storageKey = `${item.id}_${size}`;
            const count = selectedBarItems[storageKey] || 0;
            const price = Math.round(item.basePrice * item.mult[size]);
            barTotal += count * price;
        });
    });

    const grandTotal = ticketsTotal + barTotal;

    // Обновление DOM элементов
    document.getElementById("summary-seats-count").textContent = ticketsCount;
    document.getElementById("summary-total-sum").textContent = grandTotal;

    // Кнопка финального заказа
    const checkoutBtn = document.getElementById("final-checkout-btn");
    if (checkoutBtn) {
        if (ticketsCount > 0 && isAuthorized) {
            checkoutBtn.removeAttribute("disabled");
        } else {
            checkoutBtn.setAttribute("disabled", "true");
        }
    }
}

// 8. ОФОРМЛЕНИЕ ЗАКАЗА, ГЕНЕРАЦИЯ ЧЕКА И ИМИТАЦИЯ СБОЯ ТРАНЗАКЦИИ
function setupCheckoutLogic() {
    const checkoutBtn = document.getElementById("final-checkout-btn");
    if (!checkoutBtn) return;

    checkoutBtn.addEventListener("click", () => {
        const receiptBlock = document.getElementById("payment-receipt-block");
        const container = document.getElementById("receipt-text-container");
        const movie = moviesDatabase[currentMovieKey];
        
        let barItemsLines = "";
        barItemsDatabase.forEach(item => {
            ["S", "M", "L"].forEach(size => {
                const storageKey = `${item.id}_${size}`;
                const count = selectedBarItems[storageKey] || 0;
                if (count > 0) {
                    const price = Math.round(item.basePrice * item.mult[size]);
                    barItemsLines += `${item.name} (${size}) x${count} .. ${price * count} ₽\n`;
                }
            });
        });

        if (barItemsLines === "") {
            barItemsLines = "Позиций кинобара не выбрано\n";
        }

        let seatsLines = "";
        selectedSeats.forEach(s => {
            seatsLines += `[Ряд ${s.row}, Место ${s.seat}] `;
        });

        const totalSum = document.getElementById("summary-total-sum").textContent;

        // Генерация фискального текста электронного чека
        container.textContent = `
========================================
     СЕТЬ КИНОТЕАТРОВ «КИНОСФЕРА»       
          ЭЛЕКТРОННЫЙ ЧЕК               
========================================
Фильм: ${movie.title} (${movie.age})
Сеанс: Сегодня, ${selectedSession}
Зал: Laser Premium
Билетов: ${selectedSeats.length} шт.
Места: ${seatsLines}
----------------------------------------
ДЕТАЛИЗАЦИЯ ПРЕМИУМ-КИНОБАРА:
${barItemsLines}
----------------------------------------
ИТОГО К ОПЛАТЕ: ${totalSum} ₽
СТАТУС: Ожидание транзакции...
========================================
`;
        
        receiptBlock.classList.remove("hidden");
        // Плавный скролл вниз к чеку ошибки
        receiptBlock.scrollIntoView({ behavior: 'smooth' });
    });
}
