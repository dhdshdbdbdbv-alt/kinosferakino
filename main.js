// ПОЛНАЯ СИНХРОНИЗИРОВАННАЯ БАЗА ДАННЫХ ИЗ 10 ФИЛЬМОВ
const moviesCatalog = {
    "bogatiry": { title: "Три богатыря", basePrice: 350, duration: "1 ч. 25 мин.", rating: "8.2", genre: "мультфильм", age: "6+", sessions: ["10:20", "12:10", "14:00", "16:40", "18:30"] },
    "karamazovy": { title: "Братья Карамазовы", basePrice: 400, duration: "3 ч. 10 мин.", rating: "9.1", genre: "драма", age: "16+", sessions: ["13:00", "17:30", "21:00"] },
    "dengi": { title: "Грязные деньги", basePrice: 380, duration: "1 ч. 52 мин.", rating: "7.8", genre: "криминал", age: "18+", sessions: ["11:00", "14:50", "19:20", "22:00"] },
    "bill": { title: "Убить Билла", basePrice: 450, duration: "1 ч. 51 мин.", rating: "8.6", genre: "боевик", age: "18+", sessions: ["12:40", "16:00", "19:40", "23:10"] },
    "komers": { title: "Комерс", basePrice: 350, duration: "1 ч. 40 мин.", rating: "7.4", genre: "комедия", age: "16+", sessions: ["10:00", "13:40", "17:00", "20:30"] },
    "koshey": { title: "Кощей", basePrice: 380, duration: "1 ч. 30 мин.", rating: "6.9", genre: "фэнтези", age: "6+", sessions: ["09:30", "11:50", "14:10", "16:30"] },
    "leo": { title: "Лео и Тиг", basePrice: 300, duration: "1 ч. 10 мин.", rating: "7.2", genre: "мультфильм", age: "0+", sessions: ["09:00", "10:40", "12:20"] },
    "michael": { title: "Майкл (2026)", basePrice: 500, duration: "2 ч. 35 мин.", rating: "9.4", genre: "байопик", age: "18+", sessions: ["11:30", "14:30", "17:40", "20:50", "23:50"] },
    "momo": { title: "Момо", basePrice: 420, duration: "1 ч. 36 мин.", rating: "6.5", genre: "хоррор", age: "18+", sessions: ["15:10", "18:00", "21:15", "00:10"] },
    "propast": { title: "Пропасть", basePrice: 390, duration: "2 ч. 05 мин.", rating: "7.9", genre: "триллер", age: "16+", sessions: ["13:15", "16:15", "19:00", "22:15"] }
};

// ГЛОБАЛЬНОЕ СОСТОЯНИЕ СИСТЕМЫ
let activeMovieKey = "";
let activeSessionTime = "";
let chosenSeatsList = [];
let accountVerified = false;

// Конфигурация геометрии зала (22 столбца с учетом двух проходов)
const rowTemplate = [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1];
const totalRows = 10;

// ПОИСК ЭЛЕМЕНТОВ ИНТЕРФЕЙСА В DOM
const workspaceSection = document.getElementById('booking-workspace');
const seatsAndBarArea = document.getElementById('seats-and-bar-area');
const textMovieTitle = document.getElementById('current-movie-title');
const gridHallElement = document.getElementById('dynamic-hall-grid');
const counterSeatsElement = document.getElementById('display-seats-count');
const counterSumElement = document.getElementById('display-total-sum');
const checkoutButton = document.getElementById('final-checkout-btn');
const systemBarCheckboxes = document.querySelectorAll('.bar-item-checkbox');

const fieldUserLogin = document.getElementById('client-login-field');
const fieldUserPass = document.getElementById('client-pass-field');
const buttonVerifyAccount = document.getElementById('submit-account-btn');
const labelValidationStatus = document.getElementById('account-validation-status');

const blockBillReceipt = document.getElementById('payment-receipt-block');
const textReceiptDetails = document.getElementById('receipt-text-container');

// ЭТАП 2: ОТРИСОВКА ИНТЕРАКТИВНОГО ЗАЛА (Срабатывает ТОЛЬКО после клика на сеанс)
function generateHallLayout() {
    if (!gridHallElement) return;
    
    gridHallElement.innerHTML = '';
    chosenSeatsList = [];
    systemBarCheckboxes.forEach(box => box.checked = false);
    if (blockBillReceipt) blockBillReceipt.classList.add('hidden');
    refreshCalculations();

    const movieInfo = moviesCatalog[activeMovieKey];

    // Циклический рендеринг схемы зала
    for (let r = 0; r < totalRows; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('hall-row');
        let seatNum = 1;

        rowTemplate.forEach((slot) => {
            if (slot === 0) {
                const passage = document.createElement('div');
                passage.classList.add('passage');
                rowDiv.appendChild(passage);
            } else {
                const seatDiv = document.createElement('div');
                seatDiv.classList.add('seat');
                const rowNum = r + 1;
                const seatId = `${rowNum}-${seatNum}`;
                const price = movieInfo ? movieInfo.basePrice : 350;

                // Генерация реалистично распределенных занятых мест (20% вероятность)
                if (Math.random() < 0.2) {
                    seatDiv.classList.add('occupied');
                }
                seatDiv.dataset.id = seatId;

                if (!seatDiv.classList.contains('occupied')) {
                    seatDiv.addEventListener('click', () => {
                        if (seatDiv.classList.contains('selected')) {
                            seatDiv.classList.remove('selected');
                            chosenSeatsList = chosenSeatsList.filter(item => item.id !== seatId);
                        } else {
                            seatDiv.classList.add('selected');
                            chosenSeatsList.push({ id: seatId, price: price, row: rowNum, num: seatNum });
                        }
                        refreshCalculations();
                    });
                }
                rowDiv.appendChild(seatDiv);
                seatNum++;
            }
        });
        gridHallElement.appendChild(rowDiv);
    }
}

// МАТЕМАТИЧЕСКИЙ РАСЧЕТ ИТОГОВОЙ СТОИМОСТИ (Билеты + Доп. товары бара)
function refreshCalculations() {
    const totalSelected = chosenSeatsList.length;
    let totalSum = chosenSeatsList.reduce((sum, item) => sum + item.price, 0);

    systemBarCheckboxes.forEach(box => {
        if (box.checked) totalSum += parseInt(box.dataset.price || 0);
    });

    if (counterSeatsElement) counterSeatsElement.textContent = totalSelected;
    if (counterSumElement) counterSumElement.textContent = totalSum;

    evaluateGatewayUnlock();
}

// СТРОГАЯ АВТОРИЗАЦИЯ КЛИЕНТА (Проверка длины данных)
if (buttonVerifyAccount) {
    buttonVerifyAccount.addEventListener('click', () => {
        const login = fieldUserLogin ? fieldUserLogin.value.trim() : "";
        const pass = fieldUserPass ? fieldUserPass.value.trim() : "";

        if (login.length >= 3 && pass.length >= 4) {
            accountVerified = true;
            if (labelValidationStatus) {
                labelValidationStatus.textContent = `✅ Успешный вход! Клиент: ${login}`;
                labelValidationStatus.style.color = "#00e676";
            }
        } else {
            accountVerified = false;
            if (labelValidationStatus) {
                labelValidationStatus.textContent = "❌ Ошибка: Логин от 3 симв., Пароль от 4 симв.";
                labelValidationStatus.style.color = "#ff5252";
            }
        }
        evaluateGatewayUnlock();
    });
}

// ШЛЮЗ БЛОКИРОВКИ: Кнопка активна ТОЛЬКО при выполнении всех 3 условий
function evaluateGatewayUnlock() {
    if (!checkoutButton) return;
    checkoutButton.disabled = !(chosenSeatsList.length > 0 && accountVerified && activeSessionTime !== "");
}

systemBarCheckboxes.forEach(box => box.addEventListener('change', refreshCalculations));

// ЭТАП 1: ОБРАБОТКА ВЫБОРА ФИЛЬМА И ПОДГРУЗКА МЕТАДАННЫХ С СЕАНСАМИ
function initCatalog() {
    const cards = document.querySelectorAll('.movie-premium-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            activeMovieKey = card.dataset.movie;
            const movieInfo = moviesCatalog[activeMovieKey];
            
            if (!movieInfo) return;

            // Сброс и отображение рабочей области (Второй этап принудительно скрывается)
            activeSessionTime = "";
            if (seatsAndBarArea) seatsAndBarArea.classList.add('hidden');
            if (workspaceSection) workspaceSection.classList.remove('hidden');

            // Вывод метаданных в DOM
            if (textMovieTitle) textMovieTitle.textContent = movieInfo.title;
            document.getElementById('curr-genre').textContent = movieInfo.genre;
            document.getElementById('curr-age').textContent = movieInfo.age;
            document.getElementById('curr-duration').textContent = movieInfo.duration;
            document.getElementById('curr-rating').textContent = movieInfo.rating;

            // Генерация капсул времени (Сеансы)
            const slotsContainer = document.getElementById('session-time-slots');
            if (slotsContainer) {
                slotsContainer.innerHTML = '';
                movieInfo.sessions.forEach(time => {
                    const btn = document.createElement('button');
                    btn.classList.add('time-slot-btn');
                    btn.textContent = time;
                    
                    btn.addEventListener('click', () => {
                        document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        
                        // Сохраняем время и открываем СЛЕДУЮЩИЙ этап (схему зала и бар)
                        activeSessionTime = time;
                        if (seatsAndBarArea) {
                            seatsAndBarArea.classList.remove('hidden');
                            generateHallLayout();
                            seatsAndBarArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                    slotsContainer.appendChild(btn);
                });
            }

            workspaceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ВЫПАДАЮЩИЙ СПИСОК ВЫБОРА ГОРОДОВ
function initCityDropdown() {
    const wrapper = document.getElementById('city-dropdown-wrapper');
    const btn = document.getElementById('active-city-btn');
    const cityNameSpan = document.getElementById('current-city-name');
    const options = document.querySelectorAll('.city-option');

    if (!wrapper || !btn || !cityNameSpan) return;

    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        wrapper.classList.toggle('open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            const selectedCity = option.dataset.city;
            cityNameSpan.textContent = selectedCity;
            wrapper.classList.remove('open');
        });
    });

    document.addEventListener('click', (event) => {
        if (!wrapper.contains(event.target)) {
            wrapper.classList.remove('open');
        }
    });
}

// ГЕНЕРАЦИЯ СТРУКТУРИРОВАННОГО КАССОВОГО ЧЕКА
if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
        const movie = moviesCatalog[activeMovieKey];
        if (!movie) return;

        let ticketsSum = chosenSeatsList.reduce((sum, item) => sum + item.price, 0);
        let barSum = 0;
        let barItems = [];

        systemBarCheckboxes.forEach(box => {
            if (box.checked) {
                barSum += parseInt(box.dataset.price || 0);
                barItems.push(`  • ${box.dataset.name} — ${box.dataset.price} ₽`);
            }
        });

        let receipt = `========================================\n`;
        receipt += `        СЕТЬ КИНОТЕАТРОВ "КИНОСФЕРА"       \n`;
        receipt += `             ЭЛЕКТРОННЫЙ ЧЕК            \n`;
        receipt += `========================================\n`;
        receipt += `Покупатель: ${fieldUserLogin ? fieldUserLogin.value.trim() : 'Аноним'}\n`;
        receipt += `Фильм: ${movie.title} (${movie.age})\n`;
        receipt += `Начало сеанса: ${activeSessionTime} | Хронометраж: ${movie.duration}\n`;
        receipt += `Места (${chosenSeatsList.length} шт.):\n`;
        chosenSeatsList.forEach(item => {
            receipt += `  - Ряд ${item.row}, Место ${item.num} (${item.price} ₽)\n`;
        });
        if (barItems.length > 0) {
            receipt += `Продукция кинобара:\n${barItems.join('\n')}\n`;
        }
        receipt += `----------------------------------------\n`;
        receipt += `Стоимость билетов: ${ticketsSum} ₽\n`;
        receipt += `Стоимость бара:    ${barSum} ₽\n`;
        receipt += `ИТОГОВАЯ СУММА:    ${ticketsSum + barSum} ₽\n`;
        receipt += `========================================`;

        if (textReceiptDetails) textReceiptDetails.textContent = receipt;
        if (blockBillReceipt) {
            blockBillReceipt.classList.remove('hidden');
            blockBillReceipt.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// РЕЗЕРВНАЯ ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ DOM
document.addEventListener('DOMContentLoaded', () => {
    initCatalog();
    initCityDropdown();
});
if (document.readyState !== 'loading') {
    initCatalog();
    initCityDropdown();
}
