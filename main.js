/**
 * main.js — Система "КИНОСФЕРА" (С защитой от сбоев рендера)
 */

const moviesData = [
    { id: 1, title: "Майкл", poster: "Michael_(2026_film)_poster.jpg", genre: "Музыкальный, Байопик", age: "18+", price: 850, sessions: ["16:40", "19:20", "22:15"] },
    { id: 2, title: "День рождения", poster: "birthday.jpg", genre: "Триллер", age: "18+", price: 650, sessions: ["20:00", "22:30", "00:15"] },
    { id: 3, title: "Богатыри", poster: "bogatyry.jpg", genre: "Фэнтези, Экшен", age: "16+", price: 700, sessions: ["12:15", "15:30", "18:45", "21:00"] },
    { id: 4, title: "Братья Карамазовы", poster: "brothers-karamazovy.jpg", genre: "Драма", age: "16+", price: 550, sessions: ["14:00", "17:20", "20:30"] },
    { id: 5, title: "Грязные деньги", poster: "gryznyedengi.jpg", genre: "Боевик", age: "18+", price: 750, sessions: ["18:15", "21:10", "23:40"] },
    { id: 6, title: "Ветры прошлого", poster: "images.jpg", genre: "Драма, Детектив", age: "16+", price: 600, sessions: ["13:45", "16:20", "19:00"] },
    { id: 7, title: "Убить Билла", poster: "killbill.jpg", genre: "Боевик, Триллер", age: "18+", price: 900, sessions: ["19:30", "22:00"] },
    { id: 8, title: "Коммерсант", poster: "komers.jpg", genre: "Бизнес-драма", age: "16+", price: 650, sessions: ["15:00", "18:20", "21:40"] },
    { id: 9, title: "Кощей", poster: "koshey.jpg", genre: "Темное фэнтези", age: "16+", price: 600, sessions: ["11:30", "14:15", "17:00"] },
    { id: 10, title: "Лео и Тиг", poster: "leoandtig.jpg", genre: "Анимация, Семейный", age: "6+", price: 450, sessions: ["09:30", "11:45", "14:00"] },
    { id: 11, title: "Момо", poster: "momo.jpg", genre: "Сказка, Фэнтези", age: "12+", price: 500, sessions: ["10:00", "12:30", "15:15"] },
    { id: 12, title: "Шевели перьями", poster: "moveyourwings.jpg", genre: "Анимация", age: "6+", price: 450, sessions: ["10:15", "13:00"] },
    { id: 13, title: "Никто не верил", poster: "nbt.jpg", genre: "Спорт, Драма", age: "12+", price: 550, sessions: ["14:30", "17:45"] },
    { id: 14, title: "Не одна дома", poster: "neodnadoma.jpg", genre: "Комедия", age: "12+", price: 500, sessions: ["12:00", "15:40", "18:10"] },
    { id: 15, title: "Закулисье", poster: "new-official-backrooms-poster.jpg", genre: "Хоррор", age: "18+", price: 700, sessions: ["21:30", "23:55"] },
    { id: 16, title: "Обсессия", poster: "obessy.jpg", genre: "Триллер", age: "18+", price: 750, sessions: ["19:40", "22:15"] },
    { id: 17, title: "Пропасть", poster: "propast.jpg", genre: "Катастрофа", age: "16+", price: 800, sessions: ["16:00", "19:10", "21:45"] },
    { id: 18, title: "Чудесный мир", poster: "wondaryworld.jpg", genre: "Приключения", age: "12+", price: 650, sessions: ["11:00", "13:30", "16:15"] },
    { id: 19, title: "Молодые и влюбленные", poster: "young-and-loved.jpg", genre: "Мелодрама", age: "16+", price: 550, sessions: ["14:15", "17:00", "19:45"] }
];

const BAR_MENU = [
    {
        id: "cat_combo", name: "🔥 Комбо",
        items: [
            { id: "combo_max", name: "Комбо «MAX»", desc: "Ведро попкорна (L) + 2 Напитка + Начос", price: 2150 },
            { id: "combo_duo", name: "Комбо на двоих", desc: "Попкорн (M) + 2 Напитка", price: 1350 },
            { id: "combo_solo", name: "Комбо Эгоист", desc: "Попкорн (S) + 1 Напиток", price: 850 }
        ]
    },
    {
        id: "cat_popcorn", name: "🍿 Попкорн",
        items: [
            { id: "pop_l", name: "Гигант (L)", desc: "Соленый / Сладкий / Сырный", price: 800 },
            { id: "pop_m", name: "Стандарт (M)", desc: "Соленый / Сладкий", price: 600 },
            { id: "pop_s", name: "Малый (S)", desc: "Соленый / Сладкий", price: 450 }
        ]
    },
    {
        id: "cat_drinks", name: "🥤 Напитки",
        items: [
            { id: "drink_cola_l", name: "Кола (0.8л)", desc: "Со льдом", price: 350 },
            { id: "drink_cola_m", name: "Кола (0.5л)", desc: "Со льдом", price: 250 },
            { id: "drink_water", name: "Вода (0.5л)", desc: "Газ / Без газа", price: 150 }
        ]
    },
    {
        id: "cat_snacks", name: "🍫 Снеки",
        items: [
            { id: "snack_nachos", name: "Начос", desc: "С сырным соусом", price: 500 },
            { id: "snack_nuts", name: "Арахис", desc: "Соленый", price: 250 }
        ]
    }
];

let currentOrder = { movieId: null, ticketPrice: 0, selectedSeats: [], services: {} };
let currentHallZoom = 1;
let activeBarTab = "cat_combo";

window.goToStep = goToStep;
window.updateService = updateService;
window.zoomHall = zoomHall;
window.switchBarTab = switchBarTab;

document.addEventListener('DOMContentLoaded', () => {
    try {
        renderCatalog();
        initGlobalModals();
        initStaticEventListeners();
    } catch (error) {
        // Если JS упадет, мы увидим ошибку, а не пустой экран
        const grid = document.getElementById('movies-grid');
        if (grid) grid.innerHTML = `<div style="color:red; font-size:20px; padding:20px;">Системная ошибка JS: ${error.message}</div>`;
        console.error(error);
    }
});

function renderCatalog() {
    const grid = document.getElementById('movies-grid');
    if (!grid) return;
    grid.innerHTML = ''; 
    
    moviesData.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => openBookingModal(movie.id);
        
        // НОВЫЙ ДИЗАЙН КАРТОЧКИ (как на скриншоте Kinoteatr.ru)
        card.innerHTML = `
            <div class="movie-card-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450/2a2535/fff?text=Нет+постера'">
            </div>
            <div class="movie-meta-bottom">
                <span class="badge-outline">${movie.age}</span>
                <span class="movie-genre-text">${movie.genre}</span>
            </div>
            <h3 class="movie-title-bottom">${movie.title}</h3>
        `;
        grid.appendChild(card);
    });
}

function initGlobalModals() {
    const cityBtn = document.getElementById('btn-city-select');
    const cityModal = document.getElementById('modal-city');
    cityBtn?.addEventListener('click', () => cityModal.classList.remove('hidden'));
    document.querySelectorAll('.city-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(cityBtn) cityBtn.textContent = `г. ${e.target.dataset.city} ▼`;
            cityModal.classList.add('hidden');
        });
    });

    const loginBtn = document.getElementById('btn-profile-login');
    const loginModal = document.getElementById('modal-login');
    loginBtn?.addEventListener('click', () => loginModal.classList.remove('hidden'));
    document.getElementById('global-submit-login')?.addEventListener('click', () => {
        const field = document.getElementById('global-login-field');
        if(field && field.value.length > 2) {
            if(loginBtn) loginBtn.textContent = "Профиль";
            loginModal.classList.add('hidden');
        } else { alert('Введите корректные данные'); }
    });
    document.querySelectorAll('.close-mini-modal').forEach(btn => {
        btn.addEventListener('click', (e) => e.target.closest('.overlay-modal').classList.add('hidden'));
    });
}

function openBookingModal(id) {
    const movie = moviesData.find(m => m.id === id);
    if (!movie) return;

    currentOrder = { movieId: movie.id, ticketPrice: movie.price, selectedSeats: [], services: {} };
    
    document.getElementById('modal-movie-title').textContent = movie.title;
    document.getElementById('modal-movie-poster').src = movie.poster;
    document.querySelector('.badge-age').textContent = movie.age;
    document.getElementById('modal-movie-genre').textContent = `Жанр: ${movie.genre}`;
    document.getElementById('modal-movie-price').textContent = `Билет: ${movie.price} ₽`;

    // Генерация сеансов
    const sessionsGrid = document.getElementById('dynamic-sessions-grid');
    if (sessionsGrid) {
        sessionsGrid.innerHTML = '';
        const sessionsToRender = movie.sessions || ["12:00", "16:00", "20:00"];
        
        sessionsToRender.forEach(time => {
            const btn = document.createElement('button');
            btn.className = 'session-btn';
            btn.textContent = time;
            btn.onclick = () => goToStep('step-hall-container');
            sessionsGrid.appendChild(btn);
        });
    }

    document.querySelectorAll('.step-container').forEach(el => el.classList.add('hidden'));
    document.getElementById('step-sessions-container').classList.remove('hidden');
    document.getElementById('payment-receipt-block').classList.add('hidden');
    document.getElementById('global-total-badge').classList.add('hidden');
    
    renderSeats();
    renderBarTabs();
    switchBarTab('cat_combo'); 
    updateCheckoutSummary();
    
    document.getElementById('booking-modal-overlay').classList.remove('hidden');
}

function goToStep(stepId) {
    if (stepId === 'step-services-container' && currentOrder.selectedSeats.length === 0) {
        alert('Сначала выберите хотя бы одно место в зале!');
        return;
    }

    document.querySelectorAll('.step-container').forEach(el => el.classList.add('hidden'));
    const targetStep = document.getElementById(stepId);
    if (targetStep) targetStep.classList.remove('hidden');

    const badge = document.getElementById('global-total-badge');
    if (stepId === 'step-sessions-container') {
        badge.classList.add('hidden');
    } else {
        badge.classList.remove('hidden');
    }

    if (stepId === 'step-hall-container') {
        currentHallZoom = window.innerWidth < 600 ? 0.6 : 1; 
        applyZoom();
        const vp = document.getElementById('hall-viewport');
        const wr = document.getElementById('hall-wrapper');
        if(vp && wr) vp.scrollLeft = (wr.offsetWidth * currentHallZoom - vp.offsetWidth) / 2;
    }
}

function renderSeats() {
    const container = document.getElementById('dynamic-hall-grid');
    if (!container) return;
    container.innerHTML = '';
    
    let seatNumber = 1;
    for (let r = 0; r < 10; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'seat-row';
        rowDiv.innerHTML = `<div class="row-number">${r + 1}</div>`;

        for (let c = 0; c < 18; c++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = c + 1;
            const currentSeatId = seatNumber++; 

            if (c === 9) seat.style.marginLeft = '20px'; 
            
            if (Math.random() < 0.20) {
                seat.classList.add('occupied');
            } else {
                seat.onclick = () => handleSeatClick(seat, currentSeatId, r+1, c+1);
            }
            rowDiv.appendChild(seat);
        }
        container.appendChild(rowDiv);
    }
}

function handleSeatClick(el, id, row, col) {
    if (el.classList.contains('occupied')) return;
    el.classList.toggle('selected');
    
    if (el.classList.contains('selected')) {
        currentOrder.selectedSeats.push({ id, row, col });
    } else {
        currentOrder.selectedSeats = currentOrder.selectedSeats.filter(s => s.id !== id);
    }
    updateCheckoutSummary();
}

function zoomHall(delta) {
    currentHallZoom += delta;
    if (currentHallZoom < 0.4) currentHallZoom = 0.4;
    if (currentHallZoom > 1.5) currentHallZoom = 1.5;
    applyZoom();
}

function applyZoom() {
    const wrapper = document.getElementById('hall-wrapper');
    if (wrapper) wrapper.style.transform = `scale(${currentHallZoom})`;
}

function renderBarTabs() {
    const tabsContainer = document.getElementById('bar-category-tabs');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    BAR_MENU.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `bar-tab ${activeBarTab === cat.id ? 'active' : ''}`;
        btn.textContent = cat.name;
        btn.onclick = () => switchBarTab(cat.id);
        tabsContainer.appendChild(btn);
    });
}

function switchBarTab(catId) {
    activeBarTab = catId;
    renderBarTabs(); 
    
    const listContainer = document.getElementById('dynamic-services-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    const category = BAR_MENU.find(c => c.id === catId);
    if(!category) return;

    category.items.forEach(item => {
        if (currentOrder.services[item.id] === undefined) currentOrder.services[item.id] = 0;
        const currentQty = currentOrder.services[item.id];

        const itemDiv = document.createElement('div');
        itemDiv.className = 'service-item';
        itemDiv.innerHTML = `
            <div class="service-info">
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
                <div class="service-price">${item.price} ₽</div>
            </div>
            <div class="service-controls">
                <button class="control-btn" onclick="updateService('${item.id}', -1)">-</button>
                <span id="qty-${item.id}" class="service-qty">${currentQty}</span>
                <button class="control-btn" onclick="updateService('${item.id}', 1)">+</button>
            </div>
        `;
        listContainer.appendChild(itemDiv);
    });
}

function updateService(id, change) {
    let newQty = (currentOrder.services[id] || 0) + change;
    if (newQty < 0) newQty = 0;
    if (newQty > 10) newQty = 10;
    
    currentOrder.services[id] = newQty;
    const qtyEl = document.getElementById(`qty-${id}`);
    if(qtyEl) qtyEl.textContent = newQty;
    
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    const ticketsCount = currentOrder.selectedSeats.length;
    const ticketsSum = ticketsCount * currentOrder.ticketPrice;
    
    let servicesSum = 0;
    let servicesDetails = [];

    BAR_MENU.forEach(cat => {
        cat.items.forEach(item => {
            const qty = currentOrder.services[item.id] || 0;
            if (qty > 0) {
                servicesSum += qty * item.price;
                servicesDetails.push(`${item.name} (x${qty})`);
            }
        });
    });

    const totalSum = ticketsSum + servicesSum;
    
    document.getElementById('global-badge-sum').textContent = totalSum;
    document.getElementById('summary-seats-count').textContent = ticketsCount;
    document.getElementById('summary-total-sum').textContent = `${totalSum} ₽`;
    
    const seatsListEl = document.getElementById('summary-seats-list');
    if (seatsListEl) {
        seatsListEl.textContent = ticketsCount > 0 
            ? currentOrder.selectedSeats.map(s => `Ряд ${s.row} Место ${s.col}`).join(', ') 
            : 'Места не выбраны';
    }

    const servicesListEl = document.getElementById('summary-services-list');
    if (servicesListEl) {
        servicesListEl.textContent = servicesDetails.length > 0 ? servicesDetails.join(', ') : 'Не выбрана';
    }
}

function initStaticEventListeners() {
    document.getElementById('close-modal-btn')?.addEventListener('click', () => {
        document.getElementById('booking-modal-overlay').classList.add('hidden');
    });

    document.getElementById('final-checkout-btn')?.addEventListener('click', () => {
        const receiptBlock = document.getElementById('payment-receipt-block');
        if(receiptBlock) {
            receiptBlock.classList.remove('hidden');
            receiptBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}
