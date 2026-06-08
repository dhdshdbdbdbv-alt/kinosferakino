// ==========================================
// 1. КОНФИГУРАЦИЯ И СЛОВАРИ ДАННЫХ (БАЗА ДАННЫХ)
// ==========================================
const TELEGRAM_SUPPORT = "@kinisferaHelp";

const SNACKS_DATABASE = {
    "popcorn-caramel-sm": { name: "Попкорн Карамельный (М)", price: 390 },
    "popcorn-caramel-md": { name: "Попкорн Карамельный (С)", price: 520 },
    "popcorn-caramel-lg": { name: "Попкорн Карамельный (Б)", price: 650 },
    "popcorn-cheese-sm": { name: "Попкорн Сырный (М)", price: 370 },
    "popcorn-cheese-md": { name: "Попкорн Сырный (С)", price: 490 },
    "popcorn-cheese-lg": { name: "Попкорн Сырный (Б)", price: 620 },
    "popcorn-crab-md": { name: "Попкорн Камчатский Краб (С)", price: 550 },
    "popcorn-crab-lg": { name: "Попкорн Камчатский Краб (Б)", price: 690 },
    "nachos-cheese": { name: "Начос с сырным соусом", price: 430 },
    "nachos-salsa": { name: "Начос с соусом сальса", price: 430 },
    "cola-05": { name: "Добрый Кола 0.5л", price: 250 },
    "cola-08": { name: "Добрый Кола 0.8л", price: 350 },
    "lime-05": { name: "Лемон-Лайм 0.5л", price: 250 },
    "lime-08": { name: "Лемон-Лайм 0.8л", price: 350 },
    "fanta-05": { name: "Добрый Апельсин 0.5л", price: 250 },
    "fanta-08": { name: "Добрый Апельсин 0.8л", price: 350 },
    "ice-tea-mango": { name: "Ice Tea Манго-Маракуйя 0.5л", price: 290 },
    "mojito-strawberry": { name: "Клубничный Мохито 0.5л", price: 320 },
    "water-still": { name: "Вода без газа 0.5л", price: 180 },
    "combo-standart": { name: "Комбо Классика (Попкорн С + Кола 0.5)", price: 690 },
    "combo-premium": { name: "VIP Комбо (Попкорн Б + Мохито)", price: 890 }
};

// Все ключи гарантированно обернуты в кавычки во избежание SyntaxError из-за дефисов
const MOVIES_DATABASE = {
    "birthday": { title: "День рождения", price: 550, img: "birthday.jpg" },
    "bogatyry": { title: "Три богатыря", price: 450, img: "bogatyry.jpg" },
    "brothers-karamazovy": { title: "Братья Карамазовы", price: 600, img: "brothers-karamazovy.jpg" },
    "gryznyedengi": { title: "Грязные деньги", price: 500, img: "gryznyedengi.jpg" },
    "images": { title: "Ветер (Images)", price: 480, img: "images.jpg" },
    "killbill": { title: "Убить Билла", price: 550, img: "killbill.jpg" },
    "komers": { title: "Коммерсант", price: 500, img: "komers.jpg" },
    "koshey": { title: "Кощей", price: 450, img: "koshey.jpg" },
    "leoandtig": { title: "Лео и Тиг", price: 400, img: "leoandtig.jpg" },
    "michael2026": { title: "Майкл (2026)", price: 750, img: "Michael_(2026_film)_poster.jpg" }, // Сверено со скришотом!
    "momo": { title: "Момо", price: 520, img: "momo.jpg" },
    "moveyourwings": { title: "Шевели перьями!", price: 450, img: "moveyourwings.jpg" }, // Исправлено!
    "nbt": { title: "Никто не верил, а они сделали", price: 500, img: "nbt.jpg" },
    "neodnadoma": { title: "Не одна дома 3", price: 480, img: "neodnadoma.jpg" },
    "backrooms": { title: "Закулисье реальности", price: 550, img: "new-official-backrooms-poster.jpg" }, // Сверено со скриншотом!
    "obessy": { title: "Обсессия", price: 580, img: "obessy.jpg" },
    "propast": { title: "Пропасть", price: 520, img: "propast.jpg" },
    "wondaryworld": { title: "Побег из волшебного мира", price: 450, img: "wondaryworld.jpg" },
    "young-loved": { title: "Молодые и влюбленные", price: 500, img: "young-and-loved.jpg" } // Исправлено под новое имя!
};

// ==========================================
// 2. ГЛОБАЛЬНОЕ СОСТОЯНИЕ (STATE)
// ==========================================
let localUser = { login: "", password: "" };
let isRegistered = false;
let isCurrentLoggedIn = false;
let isRegisterMode = false;

let currentMovie = { title: "", price: 0 };
let selectedSeat = null;
let selectedSnackIds = new Set();

// ==========================================
// 3. УПРАВЛЕНИЕ АВТОРИЗАЦИЕЙ
// ==========================================
function openAuthModal() { document.getElementById('auth-modal').style.display = 'flex'; }
function closeAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
    document.getElementById('username-input').value = "";
    document.getElementById('password-input').value = "";
}

function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    const title = document.getElementById('modal-title');
    const submitBtn = document.getElementById('main-auth-submit');
    const toggleLink = document.getElementById('auth-toggle-link');

    if (title && submitBtn && toggleLink) {
        if (isRegisterMode) {
            title.innerText = "Регистрация";
            submitBtn.innerText = "Зарегистрироваться";
            toggleLink.innerText = "Уже есть аккаунт? Войти";
        } else {
            title.innerText = "Вход в аккаунт";
            submitBtn.innerText = "Войти";
            toggleLink.innerText = "У меня еще нет аккаунта (Регистрация)";
        }
    }
}

function handleAuth() {
    const loginInp = document.getElementById('username-input').value.trim();
    const passInp = document.getElementById('password-input').value.trim();

    if (!loginInp || !passInp) { alert("Заполните все поля!"); return; }

    if (isRegisterMode) {
        localUser.login = loginInp;
        localUser.password = passInp;
        isRegistered = true;
        alert("Аккаунт создан! Переключаемся на Вход.");
        toggleAuthMode();
    } else {
        if (isRegistered && loginInp === localUser.login && passInp === localUser.password) {
            isCurrentLoggedIn = true;
            const authBtn = document.getElementById('auth-btn');
            if (authBtn) authBtn.innerText = `👤 ${loginInp}`;
            alert(`Добро пожаловать, ${loginInp}!`);
            closeAuthModal();
        } else if (!isRegistered) {
            alert("Пользователей нет. Сначала зарегистрируйтесь!");
        } else {
            alert("Неверный логин или пароль!");
        }
    }
}

// ==========================================
// 4. ФИЛЬТРАЦИЯ (ПОИСК)
// ==========================================
function filterMovies() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.movie-card');
    let hasResults = false;

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    const noResultsEl = document.getElementById('no-results');
    if (noResultsEl) noResultsEl.style.display = hasResults ? 'none' : 'block';
}

// ==========================================
// 5. БИЗНЕС-ЛОГИКА БРОНИРОВАНИЯ И ЗАЛА
// ==========================================
function selectMovie(movieId) {
    const movieData = MOVIES_DATABASE[movieId];
    if (!movieData) {
        console.error("Ошибка: Фильм с ID '" + movieId + "' не найден в базе данных!");
        return;
    }

    currentMovie.title = movieData.title;
    currentMovie.price = movieData.price;
    selectedSeat = null;
    selectedSnackIds.clear();

    document.querySelectorAll('.order-panel input[type="checkbox"]').forEach(i => i.checked = false);

    document.getElementById('catalog-section').style.display = 'none';
    document.getElementById('booking-section').style.display = 'block';

    const movieTitleEl = document.getElementById('current-movie-title');
    if (movieTitleEl) movieTitleEl.innerText = `Фильм: "${movieData.title}"`;

    generateHall();
    updateTotal();
}

function goBackToMenu() {
    document.getElementById('catalog-section').style.display = 'block';
    document.getElementById('booking-section').style.display = 'none';
}

function generateHall() {
    const hall = document.getElementById('hall-grid');
    if (!hall) return;
    hall.innerHTML = '';

    for (let r = 1; r <= 6; r++) {
        const row = document.createElement('div');
        row.className = 'hall-row';

        for (let s = 1; s <= 10; s++) {
            const seat = document.createElement('div');
            seat.className = 'seat';

            // Фиксируем сид (seed) генерации через r и s, чтобы при повторном открытии 
            // экрана занятые места не менялись хаотично на глазах у заказчика
            const isOccupied = ((r * s * 7) % 10) < 2;

            if (isOccupied) {
                seat.classList.add('occupied');
            } else {
                seat.classList.add('available');
                seat.onclick = () => {
                    // Если кликнули на уже выбранное место — снимаем выбор
                    if (seat.classList.contains('selected')) {
                        seat.classList.remove('selected');
                        selectedSeat = null;
                    } else {
                        // Иначе снимаем выбор с прошлого и выбираем новое
                        const prev = document.querySelector('.seat.selected');
                        if (prev) prev.classList.remove('selected');

                        seat.classList.add('selected');
                        selectedSeat = { row: r, seat: s };
                    }
                    updateTotal();
                };
            }
            row.appendChild(seat);
        }
        hall.appendChild(row);
    }
}

function handleSnackChange(snackId, isChecked) {
    if (isChecked) {
        selectedSnackIds.add(snackId);
    } else {
        selectedSnackIds.delete(snackId);
    }
    updateTotal();
}

function updateTotal() {
    let total = 0;
    if (selectedSeat) total += currentMovie.price;

    selectedSnackIds.forEach(id => {
        if (SNACKS_DATABASE[id]) total += SNACKS_DATABASE[id].price;
    });

    const priceTextEl = document.getElementById('total-price-text');
    if (priceTextEl) priceTextEl.innerText = `Итого: ${total} ₽`;
}

// ==========================================
// 6. ОФОРМЛЕНИЕ ЗАКАЗА
// ==========================================
function checkoutOrder() {
    if (!selectedSeat) {
        alert('Пожалуйста, выберите свободное место в зале!');
        return;
    }

    let chosenSnacks = [];
    selectedSnackIds.forEach(id => {
        if (SNACKS_DATABASE[id]) chosenSnacks.push(SNACKS_DATABASE[id].name);
    });

    let snacksListHtml = chosenSnacks.length > 0
        ? chosenSnacks.map(snack => `<li>🔹 ${snack}</li>`).join('')
        : '<li>🔹 Без дополнительных услуг</li>';

    const priceTextEl = document.getElementById('total-price-text');
    let finalPriceText = priceTextEl ? priceTextEl.innerText : '0 ₽';
    let userDisplay = isCurrentLoggedIn ? localUser.login : "Гость (Быстрое оформление)";

    const summaryBox = document.getElementById('order-summary-box');
    if (summaryBox) {
        summaryBox.innerHTML = `
            <h4>Ваш предзаказ:</h4>
            <p>👤 <strong>Покупатель:</strong> ${userDisplay}</p>
            <p>🎬 <strong>Фильм:</strong> ${currentMovie.title}</p>
            <p>💺 <strong>Место:</strong> Ряд ${selectedSeat.row}, Место ${selectedSeat.seat}</p>
            <ul style="list-style:none; padding:0; margin: 5px 0; color:#a5a3b4; font-size:0.85rem;">
                ${snacksListHtml}
            </ul>
            <p style="color:#ff9f43; font-weight:bold; margin-top:5px; margin-bottom:15px;">${finalPriceText}</p>
            
            <div style="border-top: 1px solid #342f52; padding-top: 10px; margin-top: 10px; font-size: 0.85rem; color: #ff4d4d;">
                К нашему глубочайшему сожалению автоматическая оплата временно недоступна, возможен ТОЛЬКО перевод.Реквизиты: +79196382853, приносим глубочайшие извинения.При возникновении вопросов отправьте этот чек нашему менеджеру в Telegram: <strong>${TELEGRAM_SUPPORT}</strong>
            </div>
        `;
    }

    const tgBtn = document.querySelector('.btn-telegram span');
    if (tgBtn) {
        tgBtn.innerText = `💬 Написать в Telegram: ${TELEGRAM_SUPPORT}`;
    }

    const modal = document.getElementById('tech-work-modal');
    if (modal) modal.style.display = 'flex';
}

function closeTechModal() {
    const modal = document.getElementById('tech-work-modal');
    if (modal) modal.style.display = 'none';
}