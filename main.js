/**
 * main.js — Система "КИНОСФЕРА" (Версия с расширенным баром и увеличенным залом)
 */

const moviesData = [
    { id: 1, title: "Майкл", poster: "Michael_(2026_film)_poster.jpg", genre: "Музыкальный, Байопик", age: "18+", description: "Грандиозный биографический эпос, погружающий зрителя в невероятную историю восхождения легендарного Короля поп-музыки. Фильм детально и без прикрас показывает не только величайшие триумфы на сцене, но и тяжелейшие личные драмы." },
    { id: 2, title: "День рождения", poster: "birthday.jpg", genre: "Триллер", age: "18+", description: "Напряженный психологический триллер, где рутинное празднование дня рождения оборачивается настоящим кошмаром." },
    { id: 3, title: "Богатыри", poster: "bogatyry.jpg", genre: "Фэнтези, Экшен", age: "16+", description: "Суровый исторический и фэнтезийный экшен 2026 года, кардинально переосмысляющий знакомые с детства былины." },
    { id: 4, title: "Братья Карамазовы", poster: "brothers-karamazovy.jpg", genre: "Драма", age: "16+", description: "Масштабная философская драма по бессмертному роману Федора Достоевского." },
    { id: 5, title: "Грязные деньги", poster: "gryznyedengi.jpg", genre: "Боевик", age: "18+", description: "Динамичный и жесткий криминальный боевик о подпольной империи, где одно неверное решение запускает цепную реакцию насилия." },
    { id: 6, title: "Ветры прошлого", poster: "images.jpg", genre: "Драма, Детектив", age: "16+", description: "Проникновенная драма о фотографе, который, проявляя старые семейные пленки, случайно обнаруживает ключ к разгадке исчезновения своего брата." },
    { id: 7, title: "Убить Билла", poster: "killbill.jpg", genre: "Боевик, Триллер", age: "18+", description: "Перевыпуск культового шедевра Квентина Тарантино на больших экранах." },
    { id: 8, title: "Коммерсант", poster: "komers.jpg", genre: "Бизнес-драма", age: "16+", description: "Холодная и расчетливая бизнес-драма о циничном мире высоких корпоративных ставок." },
    { id: 9, title: "Кощей", poster: "koshey.jpg", genre: "Темное фэнтези", age: "16+", description: "Мрачное фэнтези, рассказывающее историю становления самого известного злодея русских сказок." },
    { id: 10, title: "Лео и Тиг", poster: "leoandtig.jpg", genre: "Анимация, Семейный", age: "6+", description: "Яркая анимационная история для всей семьи." },
    { id: 11, title: "Момо", poster: "momo.jpg", genre: "Сказка, Фэнтези", age: "12+", description: "Экранизация всемирно известной сказки Михаэля Энде." },
    { id: 12, title: "Шевели перьями", poster: "moveyourwings.jpg", genre: "Анимация", age: "6+", description: "Вдохновляющий анимационный фильм о маленьком, но очень гордом воробье." },
    { id: 13, title: "Никто не верил", poster: "nbt.jpg", genre: "Спорт, Драма", age: "12+", description: "Спортивная драма, основанная на реальных и невероятных событиях." },
    { id: 14, title: "Не одна дома", poster: "neodnadoma.jpg", genre: "Комедия", age: "12+", description: "Искрометная российская комедия о находчивой пенсионерке." },
    { id: 15, title: "Закулисье: Новая глава", poster: "new-official-backrooms-poster.jpg", genre: "Хоррор", age: "18+", description: "Леденящий кровь хоррор, расширяющий вселенную лиминальных пространств." },
    { id: 16, title: "Обсессия", poster: "obessy.jpg", genre: "Триллер", age: "18+", description: "Пугающий триллер о гениальном композиторе, который в поисках идеального звука постепенно теряет связь с реальностью." },
    { id: 17, title: "Пропасть", poster: "propast.jpg", genre: "Катастрофа", age: "16+", description: "Масштабный фильм-катастрофа о выживании альпинистов." },
    { id: 18, title: "Чудесный мир", poster: "wondaryworld.jpg", genre: "Приключения", age: "12+", description: "Визуально ошеломляющее приключенческое фэнтези о портале в параллельную экосистему." },
    { id: 19, title: "Молодые и влюбленные", poster: "young-and-loved.jpg", genre: "Мелодрама", age: "16+", description: "Трогательная мелодрама о первой любви и сложном выборе взросления." }
];

// Цены актуализированы под суровые реалии
const TICKET_PRICE = 850;

// Расширенное меню бара
const BAR_MENU = [
    {
        category: "🔥 Выгодные Комбо",
        items: [
            { id: "combo_max", name: "Комбо «Киносфера MAX»", desc: "Ведро попкорна (L) + 2 Напитка (0.8л) + Начос", price: 2150 },
            { id: "combo_duo", name: "Комбо на двоих", desc: "Попкорн (M) + 2 Напитка (0.5л)", price: 1450 },
            { id: "combo_solo", name: "Комбо Эгоист", desc: "Попкорн (S) + 1 Напиток (0.5л)", price: 890 }
        ]
    },
    {
        category: "🍿 Попкорн",
        items: [
            { id: "pop_l", name: "Попкорн Гигант (L)", desc: "Соленый / Сладкий / Сырный / Карамель", price: 850 },
            { id: "pop_m", name: "Попкорн Стандарт (M)", desc: "Соленый / Сладкий", price: 650 },
            { id: "pop_s", name: "Попкорн Малый (S)", desc: "Соленый / Сладкий", price: 450 }
        ]
    },
    {
        category: "🥤 Напитки",
        items: [
            { id: "drink_cola_l", name: "Кола Разливная (0.8л)", desc: "Со льдом", price: 350 },
            { id: "drink_cola_m", name: "Кола Разливная (0.5л)", desc: "Со льдом", price: 250 },
            { id: "drink_water", name: "Вода минеральная (0.5л)", desc: "Газ / Без газа", price: 200 },
            { id: "drink_juice", name: "Сок Rich (0.33л)", desc: "Яблоко / Апельсин / Вишня", price: 300 }
        ]
    },
    {
        category: "🍫 Снеки и Закуски",
        items: [
            { id: "snack_nachos", name: "Начос с сырным соусом", desc: "Большая порция", price: 550 },
            { id: "snack_nuts", name: "Арахис жареный", desc: "Соленый", price: 300 },
            { id: "snack_mms", name: "Драже M&M's", desc: "С арахисом / Шоколадные", price: 280 }
        ]
    }
];

// Состояние заказа
let currentOrder = { 
    movieId: null, 
    selectedSeats: [], 
    services: {} // id: quantity
};

window.goToStep = goToStep;
window.updateService = updateService;

document.addEventListener('DOMContentLoaded', () => {
    try {
        renderCatalog();
        initGlobalModals();
        initStaticEventListeners();
        renderBarMenu();
    } catch (error) {
        console.error("Критическая ошибка инициализации:", error);
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
        
        card.innerHTML = `
            <div class="movie-card-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450/2a2a35/fff?text=Нет+постера'">
                <div class="movie-badges-overlay">
                    <span class="badge">${movie.age}</span>
                </div>
            </div>
            <h3>${movie.title}</h3>
            <div class="movie-genre">${movie.genre}</div>
        `;
        grid.appendChild(card);
    });
}

function initGlobalModals() {
    // Город
    const cityBtn = document.getElementById('btn-city-select');
    const cityModal = document.getElementById('modal-city');
    cityBtn?.addEventListener('click', () => cityModal.classList.remove('hidden'));
    
    document.querySelectorAll('.city-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(cityBtn) cityBtn.textContent = `г. ${e.target.dataset.city} ▼`;
            cityModal.classList.add('hidden');
        });
    });

    // Логин
    const loginBtn = document.getElementById('btn-profile-login');
    const loginModal = document.getElementById('modal-login');
    loginBtn?.addEventListener('click', () => loginModal.classList.remove('hidden'));
    
    document.getElementById('global-submit-login')?.addEventListener('click', () => {
        const field = document.getElementById('global-login-field');
        if(field && field.value.length > 2) {
            if(loginBtn) loginBtn.textContent = "Профиль";
            loginModal.classList.add('hidden');
        } else {
            alert('Введите корректные данные');
        }
    });

    // Закрытие мини-модалок
    document.querySelectorAll('.close-mini-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.overlay-modal').classList.add('hidden');
        });
    });
}

function openBookingModal(id) {
    const movie = moviesData.find(m => m.id === id);
    if (!movie) return;

    currentOrder.movieId = movie.id;
    currentOrder.selectedSeats = [];
    currentOrder.services = {}; 
    
    // Сброс UI бара
    document.querySelectorAll('.service-qty').forEach(el => el.textContent = '0');

    document.getElementById('modal-movie-title').textContent = movie.title;
    document.getElementById('modal-movie-poster').src = movie.poster;
    document.getElementById('modal-text-description').textContent = movie.description;
    
    document.querySelector('.badge-age').textContent = movie.age;
    document.querySelector('.modal-meta-row').textContent = `Жанр: ${movie.genre}`;

    document.querySelectorAll('.step-container').forEach(el => el.classList.add('hidden'));
    document.getElementById('step-sessions-container').classList.remove('hidden');
    document.getElementById('payment-receipt-block').classList.add('hidden');
    
    renderSeats();
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
}

// Увеличенный зал: 10 рядов x 18 мест
function renderSeats() {
    const container = document.getElementById('dynamic-hall-grid');
    if (!container) return;
    container.innerHTML = '';
    
    let seatNumber = 1;
    const rows = 10;
    const cols = 18;
    
    for (let r = 0; r < rows; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'seat-row';
        
        const rowNum = document.createElement('div');
        rowNum.className = 'row-number';
        rowNum.textContent = r + 1;
        rowDiv.appendChild(rowNum);

        for (let c = 0; c < cols; c++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = c + 1;
            const currentSeat = seatNumber; 
            
            // Проход по центру
            if (c === 9) seat.style.marginLeft = '30px';

            if (Math.random() < 0.25) {
                seat.classList.add('occupied');
            } else {
                seat.onclick = () => handleSeatClick(seat, currentSeat, r+1, c+1);
            }
            
            rowDiv.appendChild(seat);
            seatNumber++;
        }
        container.appendChild(rowDiv);
    }
}

function handleSeatClick(seatElement, globalId, row, col) {
    if (seatElement.classList.contains('occupied')) return;
    
    seatElement.classList.toggle('selected');
    const seatObj = { id: globalId, row, col };
    
    if (seatElement.classList.contains('selected')) {
        currentOrder.selectedSeats.push(seatObj);
    } else {
        currentOrder.selectedSeats = currentOrder.selectedSeats.filter(s => s.id !== globalId);
    }
    
    updateCheckoutSummary();
}

function renderBarMenu() {
    const container = document.getElementById('dynamic-services-list');
    if (!container) return;
    container.innerHTML = '';

    BAR_MENU.forEach(category => {
        const catDiv = document.createElement('div');
        catDiv.className = 'service-category';
        
        const catTitle = document.createElement('h3');
        catTitle.className = 'category-title';
        catTitle.textContent = category.category;
        catDiv.appendChild(catTitle);

        category.items.forEach(item => {
            currentOrder.services[item.id] = 0; // Инициализируем в стейте

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
                    <span id="qty-${item.id}" class="service-qty">0</span>
                    <button class="control-btn" onclick="updateService('${item.id}', 1)">+</button>
                </div>
            `;
            catDiv.appendChild(itemDiv);
        });
        
        container.appendChild(catDiv);
    });
}

function updateService(id, change) {
    let currentQty = currentOrder.services[id] || 0;
    let newQty = currentQty + change;
    
    if (newQty < 0) newQty = 0;
    if (newQty > 10) newQty = 10;
    
    currentOrder.services[id] = newQty;
    document.getElementById(`qty-${id}`).textContent = newQty;
    
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    const ticketsCount = currentOrder.selectedSeats.length;
    const ticketsSum = ticketsCount * TICKET_PRICE;
    
    let servicesSum = 0;
    let servicesDetails = [];

    // Считаем бар
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
    
    document.getElementById('summary-seats-count').textContent = ticketsCount;
    document.getElementById('summary-tickets-sum').textContent = ticketsSum;
    document.getElementById('summary-services-sum').textContent = servicesSum;
    document.getElementById('summary-total-sum').textContent = totalSum;
    
    const seatsListEl = document.getElementById('summary-seats-list');
    if (seatsListEl) {
        seatsListEl.textContent = ticketsCount > 0 
            ? currentOrder.selectedSeats.map(s => `Ряд ${s.row} Место ${s.col}`).join(', ') 
            : 'Места не выбраны';
    }

    const servicesListEl = document.getElementById('summary-services-list');
    if (servicesListEl) {
        servicesListEl.textContent = servicesDetails.length > 0 ? servicesDetails.join(', ') : '';
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
            receiptBlock.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    });
}
