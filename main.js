// ПОЛНАЯ БАЗА ДАННЫХ ФИЛЬМОВ (ВСЕ ПОСТЕРЫ СО СКРИНШОТА ИЗОБРАЖЕНИЕ_2.JPG)
const moviesDatabase = {
    "asyaklyachkina": { title: "История Аси Клячиной", poster: "asyaklyachkinasstory.jpg", age: "12+", rating: "7.9", genre: "драма, мелодрама", duration: "1 ч. 50 мин.", basePrice: 350, sessions: ["12:00", "16:30"] },
    "backrooms": { title: "Закулисье", poster: "backrooms.jpg", age: "16+", rating: "6.2", genre: "хоррор, триллер", duration: "1 ч. 35 мин.", basePrice: 400, sessions: ["19:00", "23:40"] },
    "birthday": { title: "День рождения", poster: "birthday.jpg", age: "18+", rating: "7.1", genre: "триллер, детектив", duration: "2 ч. 05 мин.", basePrice: 450, sessions: ["14:20", "21:30"] },
    "bogatiry": { title: "Три богатыря", poster: "bogatiry.jpg", age: "6+", rating: "8.2", genre: "мультфильм, приключения", duration: "1 ч. 25 min.", basePrice: 300, sessions: ["10:00", "13:40"] },
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

// БАЗА ДАННЫХ ПРЕМИУМ КИНОБАРА С КОЭФФИЦИЕНТАМИ ДЛЯ РАЗМЕРОВ S, M, L
const barItemsDatabase = [
    { id: "combo_premium", name: "Фирменный Комбо-Набор", desc: "Премиум попкорн на выбор и большой прохладительный напиток", basePrice: 450, mult: { S: 1.0, M: 1.25, L: 1.5 } },
    { id: "popcorn_salt", name: "Попкорн Соленый (Классика)", desc: "Традиционный горячий кукурузный попкорн на кокосовом масле", basePrice: 280, mult: { S: 1.0, M: 1.35, L: 1.7 } },
    { id: "popcorn_caramel", name: "Попкорн Французская Карамель", desc: "Хрустящий попкорн с добавлением натуральной карамельной глазури", basePrice: 320, mult: { S: 1.0, M: 1.35, L: 1.7 } },
    { id: "soda", name: "Элитная Газировка", desc: "Сильногазированный охлажденный напиток со льдом на выбор", basePrice: 180, mult: { S: 1.0, M: 1.3, L: 1.6 } },
    { id: "nachos", name: "Мексиканские Чипсы Начос", desc: "Хрустящие кукурузные начос с порционным сырным соусом или сальсой", basePrice: 300, mult: { S: 1.0, M: 1.3, L: 1.5 } }
];

// ГЛОБАЛЬНОЕ СОСТОЯНИЕ ТЕКУЩЕЙ СЕССИИ БРОНИРОВАНИЯ
let currentMovieKey = "";
let currentSessionTime = "";
let selectedSeats = [];
let isAuthVerified = false;

// АРХИТЕКТУРА И ГЕОМЕТРИЯ СХЕМЫ ЗАЛА (1 - кресло, 0 - проход)
const hallLayoutStructure = [
    [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1]
];

// ИНИЦИАЛИЗАЦИЯ И РЕНДЕРИНГ КАТАЛОГА ФИЛЬМОВ
function buildMovieCatalog() {
    const grid = document.getElementById('movies-grid');
    if (!grid) return;
    grid.innerHTML = '';

    Object.keys(moviesDatabase).forEach(key => {
        const movie = moviesDatabase[key];
        const card = document.createElement('div');
        card.className = 'movie-ultimate-card';
        card.dataset.movieKey = key;

        // Рендерим компактное расписание для отображения в оверлее карточки
        let sessionsHtml = '';
        movie.sessions.forEach(time => {
            sessionsHtml += `<span class="hover-session-badge">${time}</span>`;
        });

        card.innerHTML = `
            <img class="card-poster-img" src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/220x330/161626/ffffff?text=${encodeURIComponent(movie.title)}'">
            <div class="card-hover-overlay">
                <h3 class="hover-title">${movie.title}</h3>
                <div class="hover-meta">
                    <span class="hover-badge-age">${movie.age}</span>
                    <span>⭐ ${movie.rating}</span>
                </div>
                <div class="hover-genre">${movie.genre} · ${movie.duration}</div>
                <div class="hover-sessions-label">Сеансы на сегодня:</div>
                <div class="hover-sessions-list">${sessionsHtml}</div>
            </div>
        `;

        card.addEventListener('click', () => launchBookingOverlay(key));
        grid.appendChild(card);
    });
}

// ОТКРЫТИЕ МОДАЛЬНОГО ОКНА СБОРКИ ЗАКАЗА
function launchBookingOverlay(key) {
    currentMovieKey = key;
    const movie = moviesDatabase[key];
    const overlay = document.getElementById('booking-modal-overlay');
    
    if (!movie || !overlay) return;

    // Сброс всех шагов и состояния транзакции
    currentSessionTime = "";
    selectedSeats = [];
    isAuthVerified = false;
    document.getElementById('client-login-field').value = "";
    document.getElementById('client-pass-field').value = "";
    document.getElementById('account-validation-status').textContent = "Пройдите авторизацию для разблокировки бронирования";
    document.getElementById('account-validation-status').style.color = "#ef4444";
    document.getElementById('payment-receipt-block').classList.add('hidden');

    // Прячем последующие шаги до момента выбора времени
    document.getElementById('step-hall-container').classList.add('hidden');
    document.getElementById('step-bar-container').classList.add('hidden');
    document.getElementById('step-checkout-container').classList.add('hidden');

    // Наполнение метаданных в левом сайдбаре
    document.getElementById('modal-movie-poster').src = movie.poster;
    document.getElementById('modal-movie-title').textContent = movie.title;
    document.getElementById('modal-badge-age').textContent = movie.age;
    document.getElementById('modal-badge-rating').textContent = `⭐ ${movie.rating}`;
    document.getElementById('modal-text-genre').textContent = movie.genre;
    document.getElementById('modal-text-duration').textContent = movie.duration;

    // Динамическая сборка интерактивных тайм-слотов (Шаг 1)
    const sessionsGrid = document.getElementById('modal-sessions-grid');
    sessionsGrid.innerHTML = '';
    
    movie.sessions.forEach((time, index) => {
        const sessionBtn = document.createElement('button');
        sessionBtn.className = 'modal-session-card-btn';
        sessionBtn.innerHTML = `
            <span class="time">${time}</span>
            <span class="hall-type">${index === 0 ? 'Laser Premium' : 'VIP Реклайнер'}</span>
        `;
        
        sessionBtn.addEventListener('click', () => {
            document.querySelectorAll('.modal-session-card-btn').forEach(btn => btn.classList.remove('active'));
            sessionBtn.classList.add('active');
            currentSessionTime = time;

            // Каскадно открываем интерактивную рабочую область
            document.getElementById('step-hall-container').classList.remove('hidden');
            document.getElementById('step-bar-container').classList.remove('hidden');
            document.getElementById('step-checkout-container').classList.remove('hidden');
            
            buildInteractiveHallMap();
            buildBarMatrixMenu();
        });

        sessionsGrid.appendChild(sessionBtn);
    });

    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Локинг фонового скролла страницы
}

// ГЕНЕРАЦИЯ ИНТЕРФЕЙСА ЗАЛА И СИМУЛЯЦИЯ ЗАНЯТЫХ МЕСТ
function buildInteractiveHallMap() {
    const grid = document.getElementById('dynamic-hall-grid');
    if (!grid) return;
    grid.innerHTML = '';
    selectedSeats = [];

    const movie = moviesDatabase[currentMovieKey];

    hallLayoutStructure.forEach((rowArray, rowIndex) => {
        const rowNode = document.createElement('div');
        rowNode.className = 'hall-row';
        let seatCounterInRow = 1;

        rowArray.forEach(slotType => {
            if (slotType === 0) {
                // Рендерим физический проход между креслами
                const passageNode = document.createElement('div');
                passageNode.className = 'passage';
                rowNode.appendChild(passageNode);
            } else {
                // Рендерим кресло
                const seatNode = document.createElement('div');
                seatNode.className = 'seat';
                
                const displayRow = rowIndex + 1;
                const displaySeat = seatCounterInRow;
                seatNode.dataset.row = displayRow;
                seatNode.dataset.seat = displaySeat;

                // Симулируем случайную занятость мест в зале (примерно 30%)
                if (Math.random() < 0.3) {
                    seatNode.classList.add('occupied');
                }

                if (!seatNode.classList.contains('occupied')) {
                    seatNode.addEventListener('click', (e) => {
                        e.stopPropagation();
                        if (seatNode.classList.contains('selected')) {
                            seatNode.classList.remove('selected');
                            selectedSeats = selectedSeats.filter(s => !(s.row === displayRow && s.seat === displaySeat));
                        } else {
                            seatNode.classList.add('selected');
                            selectedSeats.push({ row: displayRow, seat: displaySeat, price: movie.basePrice });
                        }
                        executeOrderRecalculation();
                    });
                }

                rowNode.appendChild(seatNode);
                seatCounterInRow++;
            }
        });
        grid.appendChild(rowNode);
    });
    executeOrderRecalculation();
}

// ИНТЕРФЕЙС МАСШТАБИРОВАНИЯ (DOUBLE TAP ZOOM) ДЛЯ УДОБСТВА НА ТАЧ-УСТРОЙСТВАХ
const hallViewport = document.getElementById('hall-viewport');
const hallWrapper = document.getElementById('hall-wrapper');
if (hallViewport && hallWrapper) {
    let internalZoomFlag = false;
    hallViewport.addEventListener('dblclick', (e) => {
        e.preventDefault();
        if (!internalZoomFlag) {
            hallWrapper.style.transform = 'scale(1.4)';
            internalZoomFlag = true;
        } else {
            hallWrapper.style.transform = 'scale(1)';
            internalZoomFlag = false;
        }
    });
}

// СБОРКА ИНТЕРФЕЙСА ПРЕМИУМ КИНОБАРА С ТАРИФАМИ S, M, L
function buildBarMatrixMenu() {
    const container = document.getElementById('dynamic-bar-menu');
    if (!container) return;
    container.innerHTML = '';

    barItemsDatabase.forEach(item => {
        const rowNode = document.createElement('div');
        rowNode.className = 'bar-row-item';

        const descNode = document.createElement('div');
        descNode.className = 'bar-item-details';
        descNode.innerHTML = `<h4>${item.name}</h4><p>${item.desc}</p>`;
        rowNode.appendChild(descNode);

        const groupNode = document.createElement('div');
        groupNode.className = 'bar-size-selector-group';

        ['S', 'M', 'L'].forEach(size => {
            const sizePrice = Math.round(item.basePrice * item.mult[size]);
            const labelNode = document.createElement('label');
            labelNode.className = 'size-tab-label';
            
            labelNode.innerHTML = `
                <input type="radio" name="bar_item_group_${item.id}" value="${size}" data-item-name="${item.name}" data-price="${sizePrice}">
                <span>${size}</span>
                <span class="size-price">${sizePrice} ₽</span>
            `;

            // Умный сброс радио-кнопки при повторном клике для удаления позиции из корзины
            const inputRadio = labelNode.querySelector('input');
            inputRadio.addEventListener('click', function() {
                if (this.classList.contains('active-checked-state')) {
                    this.checked = false;
                    this.classList.remove('active-checked-state');
                } else {
                    document.querySelectorAll(`input[name="bar_item_group_${item.id}"]`).forEach(r => r.classList.remove('active-checked-state'));
                    this.classList.add('active-checked-state');
                }
                executeOrderRecalculation();
            });

            groupNode.appendChild(labelNode);
        });

        rowNode.appendChild(groupNode);
        container.appendChild(rowNode);
    });
}

// ЕДИНЫЙ МАТЕМАТИЧЕСКИЙ ФИНАНСОВЫЙ ДВИЖОК
function executeOrderRecalculation() {
    let ticketCostAccumulator = selectedSeats.reduce((sum, currentSeat) => sum + currentSeat.price, 0);
    let barCostAccumulator = 0;

    // Считываем все выбранные радио-кнопки размеров бара в DOM-дереве
    const activeBarRadios = document.querySelectorAll('.bar-size-selector-group input:checked');
    activeBarRadios.forEach(radio => {
        barCostAccumulator += parseInt(radio.dataset.price, 10);
    });

    const finalSum = ticketCostAccumulator + barCostAccumulator;

    // Синхронизация с UI элементами
    document.getElementById('summary-seats-count').textContent = selectedSeats.length;
    document.getElementById('summary-total-sum').textContent = finalSum;

    // Управление состоянием кнопки отправки транзакции
    const orderBtn = document.getElementById('final-checkout-btn');
    if (selectedSeats.length > 0 && isAuthVerified && currentSessionTime !== "") {
        orderBtn.disabled = false;
    } else {
        orderBtn.disabled = true;
    }
}

// ВАЛИДАЦИЯ АККАУНТА ПОЛЬЗОВАТЕЛЯ
const authSubmitBtn = document.getElementById('submit-account-btn');
if (authSubmitBtn) {
    authSubmitBtn.addEventListener('click', () => {
        const login = document.getElementById('client-login-field').value.trim();
        const pass = document.getElementById('client-pass-field').value.trim();
        const statusField = document.getElementById('account-validation-status');

        if (login.length >= 3 && pass.length >= 4) {
            isAuthVerified = true;
            statusField.textContent = `✅ Доступ разрешен. Аккаунт: ${login}`;
            statusField.style.color = "#00e676";
        } else {
            isAuthVerified = false;
            statusField.textContent = "❌ Ошибка: Логин должен быть >= 3 символов, пароль >= 4 символов.";
            statusField.style.color = "#ef4444";
        }
        executeOrderRecalculation();
    });
}

// КЛИК-ХЕНДЛЕР СЕЛЕКТОРА ГОРОДОВ
const cityBtn = document.getElementById('active-city-btn');
const cityWrapper = document.getElementById('city-dropdown-wrapper');
if (cityBtn && cityWrapper) {
    cityBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        cityWrapper.classList.toggle('open');
    });

    document.querySelectorAll('.city-option').forEach(option => {
        option.addEventListener('click', () => {
            document.getElementById('current-city-name').textContent = option.dataset.city;
            cityWrapper.classList.remove('open');
        });
    });

    document.addEventListener('click', () => cityWrapper.classList.remove('open'));
}

// ЗАКРЫТИЕ ОКНА БРОНИРОВАНИЯ И ВОЗВРАТ К КАТАЛОГУ
const closeModalBtn = document.getElementById('close-modal-btn');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        document.getElementById('booking-modal-overlay').classList.add('hidden');
        document.body.style.overflow = 'auto'; // Разлочиваем скролл родительского окна
    });
}

// СБОРКА ТЕКСТОВОГО ЧЕКА И ИНИЦИАЛИЗАЦИЯ ШЛЮЗА ОПЛАТЫ
const finalCheckoutBtn = document.getElementById('final-checkout-btn');
if (finalCheckoutBtn) {
    finalCheckoutBtn.addEventListener('click', () => {
        const movie = moviesDatabase[currentMovieKey];
        const userLogin = document.getElementById('client-login-field').value.trim();
        
        let seatsCost = selectedSeats.reduce((sum, s) => sum + s.price, 0);
        let barCost = 0;
        let barReceiptLines = [];

        document.querySelectorAll('.bar-size-selector-group input:checked').forEach(radio => {
            const price = parseInt(radio.dataset.price, 10);
            barCost += price;
            barReceiptLines.push(`  • ${radio.dataset.itemName} [Размер: ${radio.value}] — ${price} ₽`);
        });

        // Формирование текстового фискального лога
        let checkLayout = `========================================\n`;
        checkLayout += `        СЕТЬ КИНОТЕАТРОВ "КИНОСФЕРА"      \n`;
        checkLayout += `          ПРЕМИУМ ПОС-ТЕРМИНАЛ v4.1       \n`;
        checkLayout += `========================================\n`;
        checkLayout += `ID Сессии клиента: ${Math.floor(Math.random() * 900000 + 100000)}\n`;
        checkLayout += `Авторизованный аккаунт: ${userLogin}\n`;
        checkLayout += `Фильм: ${movie.title} (${movie.age})\n`;
        checkLayout += `Время сеанса: Сегодня в ${currentSessionTime}\n`;
        checkLayout += `Выбранные места в зале:\n`;
        selectedSeats.forEach(s => {
            checkLayout += `  - Ряд ${s.row}, Место ${s.seat} [Premium] — ${s.price} ₽\n`;
        });
        if (barReceiptLines.length > 0) {
            checkLayout += `Выбранные позиции кинобара:\n${barReceiptLines.join('\n')}\n`;
        }
        checkLayout += `----------------------------------------\n`;
        checkLayout += `Сумма по билетам:  ${seatsCost} ₽\n`;
        checkLayout += `Сумма по кинобару: ${barCost} ₽\n`;
        checkLayout += `ИТОГО К ОПЛАТЕ:    ${seatsCost + barCost} ₽\n`;
        checkLayout += `========================================`;

        document.getElementById('receipt-text-container').textContent = checkLayout;
        document.getElementById('payment-receipt-block').classList.remove('hidden');
        
        // Плавная прокрутка к блоку ошибки эквайринга
        document.getElementById('payment-receipt-block').scrollIntoView({ behavior: 'smooth' });
    });
}

// ТОЧКА ВХОДА: СТАРТ ПОСЛЕ ЗАГРУЗКИ DOM-СТРУКТУРЫ
document.addEventListener('DOMContentLoaded', buildMovieCatalog);
if (document.readyState !== 'loading') {
    buildMovieCatalog();
}
