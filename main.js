// ================= МАССИВНАЯ БАЗА ДАННЫХ ИЗ СКРИНШОТА =================
// Имена файлов строго соответствуют тем, что на картинке!
const moviesData = [
    {
        id: 1, title: "Убить Билла", poster: "killbill.jpg",
        age: "18+", rating: "8.5", genre: "Боевик / Триллер", country: "США", duration: "111 мин.",
        desc: "Беременная наемная убийца по кличке Черная Мамба получает пулю в голову во время собственного бракосочетания. Пролежав в коме четыре года, она приходит в себя и решает отомстить.",
        sessions: ["10:00 (2D)", "14:30 (IMAX)", "21:00 (VIP)"]
    },
    {
        id: 2, title: "Майкл", poster: "Michael_(2026_film)_poster.jpg",
        age: "16+", rating: "8.0", genre: "Биография / Музыка", country: "США", duration: "135 мин.",
        desc: "Глубокий и честный взгляд на сложную жизнь легендарного Майкла Джексона, от его первых шагов в Jackson 5 до статуса мировой поп-иконы.",
        sessions: ["12:15 (2D)", "16:45 (IMAX)", "19:30 (2D)"]
    },
    {
        id: 3, title: "Братья Карамазовы", poster: "brothers-karamazovy.jpg",
        age: "16+", rating: "8.2", genre: "Драма / Экранизация", country: "Россия", duration: "140 мин.",
        desc: "История сложных отношений в семье Карамазовы. Страсть, алчность, духовные искания и детективная интрига вокруг убийства главы семейства.",
        sessions: ["11:00 (2D)", "18:00 (VIP)"]
    },
    {
        id: 4, title: "Закулисье", poster: "backrooms.jpg",
        age: "16+", rating: "7.1", genre: "Ужасы / Фантастика", country: "США", duration: "95 мин.",
        desc: "Случайный шаг сквозь реальность переносит героев в бесконечные монотонные желтые коридоры. Им предстоит выжить там, где обитают жуткие сущности.",
        sessions: ["13:00 (2D)", "23:50 (IMAX)"]
    },
    {
        id: 5, title: "Кощей. Начало", poster: "koshey.jpg",
        age: "6+", rating: "7.5", genre: "Мультфильм / Приключения", country: "Россия", duration: "90 мин.",
        desc: "История молодого Кощея, который еще не стал Бессмертным злодеем, а был доблестным воином, ищущим свою любовь и спасающим мир от монстров.",
        sessions: ["09:30 (3D)", "12:00 (2D)", "14:15 (2D)"]
    },
    {
        id: 6, title: "Лео и Тиг", poster: "leoandtig.jpg",
        age: "0+", rating: "8.1", genre: "Мультфильм", country: "Россия", duration: "85 мин.",
        desc: "Новые приключения леопарда Лео и тигренка Тига в сказочной тайге, где они исследуют природу и помогают друзьям.",
        sessions: ["10:15 (2D)", "13:45 (2D)"]
    },
    {
        id: 7, title: "История Аси Клячиной...", poster: "asyaklyachkinasstory.jpg",
        age: "12+", rating: "7.8", genre: "Драма / Мелодрама", country: "СССР", duration: "99 мин.",
        desc: "Классика кинематографа. Пронзительная история любви, гордости и сложного выбора простой деревенской женщины.",
        sessions: ["15:00 (VIP)"]
    },
    {
        id: 8, title: "Тролли возвращаются", poster: "trolleyscomeback.jpg",
        age: "6+", rating: "6.9", genre: "Мультфильм / Комедия", country: "США", duration: "92 мин.",
        desc: "Музыкальные и вечно веселые тролли сталкиваются с новой угрозой, которая заставит их объединиться с давними врагами ради спасения музыки.",
        sessions: ["11:30 (3D)", "16:00 (2D)"]
    },
    {
        id: 9, title: "Одержимость", poster: "obessy.jpg",
        age: "18+", rating: "8.5", genre: "Триллер / Драма", country: "США", duration: "106 мин.",
        desc: "Молодой барабанщик попадает под руководство деспотичного дирижера, готового выжать из него гениальность любой ценой.",
        sessions: ["19:15 (IMAX)", "22:00 (VIP)"]
    },
    {
        id: 10, title: "Пропасть", poster: "propast.jpg",
        age: "16+", rating: "6.5", genre: "Триллер / Выживание", country: "США", duration: "100 мин.",
        desc: "Группа альпинистов оказывается в смертельной ловушке на отвесной скале. Чтобы выжить, им придется принимать жестокие решения.",
        sessions: ["17:30 (2D)", "20:45 (IMAX)"]
    },
    {
        id: 11, title: "Преступление на 3 этаже", poster: "crimeonthethirdfloor.jpg",
        age: "16+", rating: "7.2", genre: "Детектив / Триллер", country: "Россия", duration: "110 мин.",
        desc: "В элитном ЖК происходит загадочное убийство. У каждого из жильцов есть мотив, а детективу предстоит распутать клубок лжи.",
        sessions: ["18:20 (2D)", "21:40 (VIP)"]
    },
    {
        id: 12, title: "Шевели крыльями", poster: "moveyourwings.jpg",
        age: "6+", rating: "7.0", genre: "Мультфильм", country: "Европа", duration: "88 мин.",
        desc: "Забавные пернатые герои отправляются в большое путешествие на юг, но сбиваются с курса и попадают в невероятные переделки.",
        sessions: ["09:45 (3D)", "14:00 (2D)"]
    }
];

const barItemsData = [
    { id: 'b1', name: 'Карамельный Попкорн', prices: { S: 350, M: 450, L: 550 } },
    { id: 'b2', name: 'Сырный Попкорн', prices: { S: 380, M: 480, L: 580 } },
    { id: 'b3', name: 'Начос с соусом', prices: { S: 400, M: 500, L: 600 } },
    { id: 'b4', name: 'Coca-Cola (Разлив)', prices: { S: 150, M: 200, L: 280 } },
    { id: 'b5', name: 'Комбо "Свидание"', prices: { S: 800, M: 1000, L: 1300 } },
    { id: 'b6', name: 'Мармеладные мишки', prices: { S: 200, M: 300, L: 400 } }
];

// ================= СОСТОЯНИЯ =================
let currentUser = null;
let currentMovie = null;
let selectedSession = null;
let selectedSeats = [];
let cartBar = []; 
const SEAT_PRICE = 450;

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
    renderCatalog();
});

// ================= ШАПКА И ГОРОДА =================
function toggleCityDropdown() {
    document.getElementById("city-menu").classList.toggle("show");
}

function selectCity(city) {
    document.getElementById("current-city-name").innerText = city;
    toggleCityDropdown();
}

function handleAuth() {
    if (currentUser) {
        alert("Вы уже авторизованы как: " + currentUser);
        return;
    }
    const username = prompt("Создание локального аккаунта.\nВведите ваше имя:");
    if (username && username.trim().length > 2) {
        currentUser = username.trim();
        document.getElementById("top-bar-auth-btn").innerText = "Выйти";
        const greeting = document.getElementById("user-greeting");
        greeting.innerText = "Привет, " + currentUser;
        greeting.classList.remove("hidden");
    }
}

// ================= КАТАЛОГ =================
function renderCatalog() {
    const grid = document.getElementById("movies-grid");
    grid.innerHTML = "";
    moviesData.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.onclick = () => openModal(movie.id);
        
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/200x300?text=Нет+постера'">
            <div class="movie-card-info">
                <h3>${movie.title}</h3>
                <div class="movie-card-meta">
                    <span>${movie.genre.split(' / ')[0]}</span>
                    <span class="mc-age">${movie.age}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ================= МОДАЛЬНОЕ ОКНО И ШАГИ =================
function openModal(movieId) {
    currentMovie = moviesData.find(m => m.id === movieId);
    if (!currentMovie) return;

    // Сброс старых данных
    selectedSession = null;
    selectedSeats = [];
    cartBar = [];
    
    // Скрытие шагов
    document.getElementById("step-hall-container").classList.add("hidden");
    document.getElementById("step-bar-container").classList.add("hidden");
    document.getElementById("step-checkout-container").classList.add("hidden");
    document.getElementById("payment-receipt-block").classList.add("hidden");
    document.getElementById("final-checkout-btn").classList.remove("hidden");

    // Инфо о фильме
    document.getElementById("modal-movie-poster").src = currentMovie.poster;
    document.getElementById("modal-movie-title").innerText = currentMovie.title;
    document.getElementById("modal-badge-age").innerText = currentMovie.age;
    document.getElementById("modal-badge-rating").innerText = "КП: " + currentMovie.rating;
    document.getElementById("modal-text-genre").innerText = currentMovie.genre;
    document.getElementById("modal-text-country").innerText = currentMovie.country;
    document.getElementById("modal-text-duration").innerText = currentMovie.duration;
    document.getElementById("modal-text-description").innerText = currentMovie.desc;

    // Рендер сеансов
    const sessGrid = document.getElementById("modal-sessions-grid");
    sessGrid.innerHTML = "";
    currentMovie.sessions.forEach(time => {
        const btn = document.createElement("button");
        btn.className = "session-btn";
        btn.innerText = time;
        btn.onclick = () => {
            document.querySelectorAll(".session-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedSession = time;
            goToStep('step-hall-container');
            generateHugeHall();
            renderBar();
        };
        sessGrid.appendChild(btn);
    });

    document.getElementById("booking-modal-overlay").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("booking-modal-overlay").classList.add("hidden");
}

function goToStep(stepId) {
    if(stepId === 'step-hall-container' && !selectedSession) return;
    
    const step = document.getElementById(stepId);
    step.classList.remove("hidden");
    updateCheckout();
    
    // Плавный скролл к шагу внутри модалки
    step.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ================= ОГРОМНЫЙ ЗАЛ =================
function generateHugeHall() {
    const grid = document.getElementById("dynamic-hall-grid");
    grid.innerHTML = "";
    selectedSeats = [];

    const rows = 15;      // Огромное количество рядов
    const seatsPerRow = 30; // Огромное количество мест

    for (let r = 1; r <= rows; r++) {
        const rowDiv = document.createElement("div");
        rowDiv.style.marginBottom = "3px";
        for (let s = 1; s <= seatsPerRow; s++) {
            const seat = document.createElement("div");
            seat.className = "seat";
            seat.innerText = s;
            
            // Генерация занятых мест (соотношение 1 к 5 = 20%)
            if (Math.random() < 0.20) {
                seat.classList.add("occupied");
            } else {
                seat.onclick = () => toggleSeat(seat, r, s);
            }
            rowDiv.appendChild(seat);
        }
        grid.appendChild(rowDiv);
    }
}

function toggleSeat(element, row, seatNum) {
    const seatId = `Ряд ${row} Место ${seatNum}`;
    const exists = selectedSeats.findIndex(s => s.id === seatId);

    if (exists !== -1) {
        selectedSeats.splice(exists, 1);
        element.classList.remove("selected");
    } else {
        selectedSeats.push({ id: seatId });
        element.classList.add("selected");
    }
    updateCheckout();
}

// ================= БАР =================
function renderBar() {
    const grid = document.getElementById("dynamic-bar-menu");
    if(grid.innerHTML !== "") return; 

    barItemsData.forEach(item => {
        const card = document.createElement("div");
        card.className = "bar-item-card";
        
        let selectedSize = 'M';

        card.innerHTML = `
            <h4>${item.name}</h4>
            <div class="size-options" id="sizes-${item.id}">
                <button class="size-btn" data-size="S">S (${item.prices.S}₽)</button>
                <button class="size-btn active" data-size="M">M (${item.prices.M}₽)</button>
                <button class="size-btn" data-size="L">L (${item.prices.L}₽)</button>
            </div>
            <button class="add-bar-btn" id="add-${item.id}">Добавить</button>
        `;
        grid.appendChild(card);

        const sizeBtns = card.querySelectorAll('.size-btn');
        sizeBtns.forEach(btn => {
            btn.onclick = () => {
                sizeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedSize = btn.getAttribute('data-size');
            };
        });

        card.querySelector(`#add-${item.id}`).onclick = () => {
            const price = item.prices[selectedSize];
            const nameWithSize = `${item.name} (${selectedSize})`;
            
            const existing = cartBar.find(i => i.name === nameWithSize);
            if (existing) {
                existing.qty++;
            } else {
                cartBar.push({ name: nameWithSize, price: price, qty: 1 });
            }
            updateCheckout();
        };
    });
}

// ================= ОФОРМЛЕНИЕ =================
function updateCheckout() {
    const seatsList = document.getElementById("summary-seats-list");
    const barList = document.getElementById("summary-bar-list");
    const totalEl = document.getElementById("summary-total-sum");

    let total = 0;

    if (selectedSeats.length > 0) {
        seatsList.innerHTML = selectedSeats.map(s => `${s.id}`).join(", ");
        total += selectedSeats.length * SEAT_PRICE;
    } else {
        seatsList.innerText = "Ничего не выбрано";
    }

    if (cartBar.length > 0) {
        barList.innerHTML = cartBar.map(b => `${b.name} x${b.qty} (${b.price * b.qty}₽)`).join("<br>");
        cartBar.forEach(b => total += (b.price * b.qty));
    } else {
        barList.innerText = "Ничего не выбрано";
    }

    totalEl.innerText = total;

    const btn = document.getElementById("final-checkout-btn");
    btn.disabled = (selectedSeats.length === 0 && cartBar.length === 0);
}

function processCheckout() {
    if (!currentUser) {
        alert("Пожалуйста, нажмите 'Вход / Регистрация' в шапке сайта для оформления заказа.");
        return;
    }

    const date = new Date().toLocaleString("ru-RU");
    let receiptText = `=== КИНОСФЕРА: ФИСКАЛЬНЫЙ ЧЕК ===\n`;
    receiptText += `Покупатель: ${currentUser}\n`;
    receiptText += `Дата: ${date}\n`;
    receiptText += `Фильм: ${currentMovie.title}\n`;
    receiptText += `Сеанс: ${selectedSession}\n`;
    receiptText += `---------------------------------\n`;
    
    if (selectedSeats.length > 0) {
        receiptText += `БИЛЕТЫ (по ${SEAT_PRICE} ₽):\n`;
        selectedSeats.forEach(s => receiptText += `- ${s.id}\n`);
    }

    if (cartBar.length > 0) {
        receiptText += `\nБАР:\n`;
        cartBar.forEach(b => receiptText += `- ${b.name} x${b.qty} = ${b.price * b.qty} ₽\n`);
    }

    const total = document.getElementById("summary-total-sum").innerText;
    receiptText += `---------------------------------\n`;
    receiptText += `ИТОГО К ОПЛАТЕ: ${total} ₽\n`;

    document.getElementById("receipt-text-container").innerText = receiptText;
    document.getElementById("payment-receipt-block").classList.remove("hidden");
    document.getElementById("final-checkout-btn").classList.add("hidden");
    
    document.getElementById("payment-receipt-block").scrollIntoView({ behavior: "smooth", block: "end" });
}
