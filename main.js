/**
 * main.js — Система "КИНОСФЕРА" (Фикс кликов с защитой от сбоев)
 */

const moviesData = [
    { id: 20, title: "Звероэволюция", poster: "zveroevolution.jpg", genre: "Боевик, Фантастика", age: "18+", price: 850, sessions: ["16:40", "19:20", "22:15"], country: "Франция", director: "Жан-Люк Мартель", cast: "Венсан Кассель, Леа Сейду", desc: "В недалеком будущем генетические эксперименты выходят из-под контроля. Секретная лаборатория создает новый вид хищников, превосходящих человека во всем. Когда система безопасности дает сбой, элитный отряд наемников отправляется в закрытую зону, чтобы предотвратить глобальную катастрофу." },
    { id: 21, title: "Холоп 3", poster: "holop3.jpg", genre: "Комедия", age: "12+", price: 700, sessions: ["11:30", "14:15", "17:00"], country: "Россия", director: "Клим Шипенко", cast: "Милош Бикович, Аглая Тарасова", desc: "Продолжение самого кассового комедийного хита. На этот раз масштабная программа перевоспитания выходит на международный уровень. Смогут ли избалованные мажоры выжить без смартфонов и кредиток?" },
    { id: 1, title: "Майкл", poster: "Michael_(2026_film)_poster.jpg", genre: "Байопик", age: "18+", price: 850, sessions: ["16:40", "19:20", "22:15"], country: "США", director: "Антуан Фукуа", cast: "Джаафар Джексон", desc: "Грандиозный биографический эпос, погружающий зрителя в невероятную историю восхождения легендарного Короля поп-музыки." },
    { id: 2, title: "День рождения", poster: "birthday.jpg", genre: "Триллер", age: "18+", price: 650, sessions: ["20:00", "22:30", "00:15"], country: "Россия", director: "Алексей Смирнов", cast: "Юра Борисов, Анна Чиповская", desc: "Напряженный психологический триллер, где рутинное празднование дня рождения оборачивается настоящим кошмаром." },
    { id: 3, title: "Богатыри", poster: "bogatyry.jpg", genre: "Фэнтези, Экшен", age: "16+", price: 700, sessions: ["12:15", "15:30", "18:45"], country: "Россия", director: "Рустам Мосафир", cast: "Александр Паль", desc: "Суровый исторический экшен, кардинально переосмысляющий былины. Никаких детских шуток — только сталь, кровь и тяжелый путь воинов." },
    { id: 4, title: "Братья Карамазовы", poster: "brothers-karamazovy.jpg", genre: "Драма", age: "16+", price: 550, sessions: ["14:00", "17:20", "20:30"], country: "Россия", director: "Юрий Быков", cast: "Константин Хабенский", desc: "Масштабная философская драма по бессмертному роману Федора Достоевского." },
    { id: 5, title: "Грязные деньги", poster: "gryznyedengi.jpg", genre: "Боевик", age: "18+", price: 750, sessions: ["18:15", "21:10", "23:40"], country: "США", director: "Майкл Бэй", cast: "Джейк Джилленхол", desc: "Динамичный криминальный боевик о подпольной империи. Главный герой решает выйти из игры, сорвав последний куш." },
    { id: 6, title: "Ветры прошлого", poster: "images.jpg", genre: "Детектив", age: "16+", price: 600, sessions: ["13:45", "16:20"], country: "Франция", director: "Франсуа Озон", cast: "Марион Котийяр", desc: "Проникновенная драма о фотографе, который случайно обнаруживает ключ к разгадке исчезновения своего брата." },
    { id: 7, title: "Убить Билла", poster: "killbill.jpg", genre: "Боевик, Триллер", age: "18+", price: 900, sessions: ["19:30", "22:00"], country: "США", director: "Квентин Тарантино", cast: "Ума Турман", desc: "Эстетика боевых искусств, литры крови, самурайские мечи и непревзойденная история мести Невесты." },
    { id: 8, title: "Коммерсант", poster: "komers.jpg", genre: "Бизнес-драма", age: "16+", price: 650, sessions: ["15:00", "18:20", "21:40"], country: "Великобритания", director: "Гай Ричи", cast: "Чарли Ханнэм", desc: "Холодная и расчетливая бизнес-драма о циничном мире высоких корпоративных ставок." },
    { id: 9, title: "Кощей", poster: "koshey.jpg", genre: "Темное фэнтези", age: "16+", price: 600, sessions: ["11:30", "14:15", "17:00"], country: "Россия", director: "Олег Трофим", cast: "Тихон Жизневский", desc: "Мрачное фэнтези, рассказывающее историю становления самого известного злодея." },
    { id: 10, title: "Лео и Тиг", poster: "leoandtig.jpg", genre: "Анимация", age: "6+", price: 450, sessions: ["09:30", "11:45", "14:00"], country: "Россия", director: "Александр Люткевич", cast: "Озвучка: Дмитрий Назаров", desc: "Яркая анимационная история. Неразлучные друзья покидают родные леса, чтобы отправиться в грандиозное путешествие." },
    { id: 11, title: "Момо", poster: "momo.jpg", genre: "Сказка, Фэнтези", age: "12+", price: 500, sessions: ["10:00", "12:30"], country: "Германия", director: "Кристиан Диттер", cast: "Мартина Гдек", desc: "Экранизация всемирно известной сказки. Удивительная история о девочке, обладающей уникальным даром." },
    { id: 12, title: "Шевели перьями", poster: "moveyourwings.jpg", genre: "Анимация", age: "6+", price: 450, sessions: ["10:15", "13:00"], country: "США", director: "Крис Рено", cast: "Озвучка: Стив Карелл", desc: "Вдохновляющий анимационный фильм о маленьком, но очень гордом воробье." },
    { id: 13, title: "Никто не верил", poster: "nbt.jpg", genre: "Спорт, Драма", age: "12+", price: 550, sessions: ["14:30", "17:45"], country: "США", director: "Бен Аффлек", cast: "Мэтт Дэймон", desc: "Спортивная драма о тренере-аутсайдере, который собирает команду из проблемных подростков с улиц." },
    { id: 14, title: "Не одна дома", poster: "neodnadoma.jpg", genre: "Комедия", age: "12+", price: 500, sessions: ["12:00", "15:40", "18:10"], country: "Россия", director: "Александр Бойков", cast: "Марина Неелова", desc: "Искрометная комедия о находчивой пенсионерке, которая устраивает грабителям настоящий квест на выживание." },
    { id: 15, title: "Закулисье", poster: "new-official-backrooms-poster.jpg", genre: "Хоррор", age: "18+", price: 700, sessions: ["21:30", "23:55"], country: "США", director: "Джеймс Ван", cast: "Патрик Уилсон", desc: "Леденящий кровь хоррор о лиминальных пространствах и неизведанных нижних уровнях." },
    { id: 16, title: "Обсессия", poster: "obessy.jpg", genre: "Триллер", age: "18+", price: 750, sessions: ["19:40", "22:15"], country: "Великобритания", director: "Кристофер Нолан", cast: "Киллиан Мерфи", desc: "Пугающий триллер о гениальном композиторе, который в поисках идеального звука теряет связь с реальностью." },
    { id: 17, title: "Пропасть", poster: "propast.jpg", genre: "Катастрофа", age: "16+", price: 800, sessions: ["16:00", "19:10"], country: "Норвегия", director: "Роар Утхауг", cast: "Кристоффер Йонер", desc: "Группа профессиональных альпинистов оказывается заперта в глубокой расщелине после схода мощной лавины." },
    { id: 18, title: "Чудесный мир", poster: "wondaryworld.jpg", genre: "Приключения", age: "12+", price: 650, sessions: ["11:00", "13:30", "16:15"], country: "США", director: "Стивен Спилберг", cast: "Том Холланд", desc: "Трое подростков находят портал в параллельную экосистему глубоко под землей." },
    { id: 19, title: "Молодые и влюбленные", poster: "young-and-loved.jpg", genre: "Мелодрама", age: "16+", price: 550, sessions: ["14:15", "17:00", "19:45"], country: "Франция", director: "Селин Сьямма", cast: "Адель Энель", desc: "Трогательная мелодрама о первой любви, разбитых надеждах и сложном выборе взросления." }
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
            { id: "pop_l", name: "Гигант (L)", desc: "Соленый / Сладкий", price: 800 },
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
    }
];

let currentOrder = { movieId: null, movieTitle: "", ticketPrice: 0, selectedSeats: [], services: {} };
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
        // ИСПОЛЬЗУЕМ НАДЕЖНЫЙ ОБРАБОТЧИК КЛИКОВ (вместо onclick)
        card.addEventListener('click', () => openBookingModal(movie.id));
        
        card.innerHTML = `
            <div class="movie-card-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450/2a2535/fff?text=Нет+постера'">
            </div>
            <div class="movie-meta-bottom">
                <span class="badge-outline">${movie.age || '16+'}</span>
                <span class="movie-genre-text">${movie.genre || 'Кино'}</span>
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
        } else { alert('Введите данные'); }
    });
    document.querySelectorAll('.close-mini-modal').forEach(btn => {
        btn.addEventListener('click', (e) => e.target.closest('.overlay-modal').classList.add('hidden'));
    });
}

function openBookingModal(id) {
    const movie = moviesData.find(m => m.id === id);
    if (!movie) return;

    currentOrder = { movieId: movie.id, movieTitle: movie.title, ticketPrice: movie.price, selectedSeats: [], services: {} };
    
    // ЗАЩИТА ОТ ПАДЕНИЙ (Fallback)
    document.getElementById('detail-title').textContent = movie.title || 'Неизвестно';
    document.getElementById('detail-poster').src = movie.poster;
    document.getElementById('detail-age').textContent = movie.age || '16+';
    document.getElementById('detail-genre').textContent = movie.genre || 'Кино';
    document.getElementById('detail-country').textContent = movie.country || 'Не указана';
    document.getElementById('detail-director').textContent = movie.director || 'Не указан';
    document.getElementById('detail-cast').textContent = movie.cast || 'Не указано';
    document.getElementById('detail-desc').textContent = movie.desc || 'Описание отсутствует.';
    document.getElementById('detail-price').textContent = `Билет: ${movie.price || 500} ₽`;

    document.getElementById('context-title-sessions').textContent = `Фильм: ${movie.title}`;
    document.getElementById('context-title-hall').textContent = `Фильм: ${movie.title}`;
    document.getElementById('receipt-movie').textContent = movie.title;

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
    document.getElementById('step-details-container').classList.remove('hidden');
    document.getElementById('payment-receipt-block').classList.add('hidden');
    
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

    if (stepId === 'step-hall-container') {
        currentHallZoom = window.innerWidth < 600 ? 0.6 : 1; 
        applyZoom();
        const vp = document.getElementById('hall-viewport');
        const wr = document.getElementById('hall-wrapper');
        if(vp && wr) vp.scrollLeft = (wr.offsetWidth * currentHallZoom - vp.offsetWidth) / 2;
    }

    if (stepId === 'step-checkout-container') {
        document.getElementById('payment-receipt-block').classList.remove('hidden');
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
                servicesDetails.push(`${item.name} (x${qty}) - ${qty * item.price} ₽`);
            }
        });
    });

    const totalSum = ticketsSum + servicesSum;
    
    document.getElementById('hall-badge-sum').textContent = totalSum;
    document.getElementById('bar-badge-sum').textContent = totalSum;

    document.getElementById('receipt-seats-count').textContent = ticketsCount;
    document.getElementById('receipt-total-sum').textContent = `${totalSum} ₽`;
    
    const seatsListEl = document.getElementById('receipt-seats-list');
    if (seatsListEl) {
        seatsListEl.innerHTML = ticketsCount > 0 
            ? currentOrder.selectedSeats.map(s => `<div>Ряд ${s.row}, Место ${s.col} ....... ${currentOrder.ticketPrice} ₽</div>`).join('') 
            : '<div>Нет билетов</div>';
    }

    const servicesListEl = document.getElementById('receipt-services-list');
    if (servicesListEl) {
        servicesListEl.innerHTML = servicesDetails.length > 0 
            ? servicesDetails.map(item => `<div>${item}</div>`).join('') 
            : '<div>Не выбрана</div>';
    }
}

function initStaticEventListeners() {
    document.getElementById('close-modal-btn')?.addEventListener('click', () => {
        document.getElementById('booking-modal-overlay').classList.add('hidden');
    });
}
