/**
 * main.js — Система "КИНОСФЕРА" (Исправленная версия v15.0)
 */

const SYSTEM_TODAY = new Date();
SYSTEM_TODAY.setHours(0, 0, 0, 0);

let currentCity = "Москва";

const CINEMAS_BY_CITY = {
    "Москва": [
        "«Пионер» (Новоданиловская наб., 6, корп. 1)",
        "«Иллюзион» (Котельническая наб., 1/15)",
        "«Художественный» (Арбатская площадь, 14, стр. 1)",
        "«Киномакс» (Каширское шоссе, 61Г)",
        "«КАРО 10 София» (Сиреневый бульвар, 31)"
    ],
    "Санкт-Петербург": [
        "Невский проспект, 60",
        "набережная Обводного канала, 80",
        "улица Чайковского, 24",
        "Малый проспект В.О., 88, корп. 2"
    ],
    "Новосибирск": [
        "площадь Карла Маркса, 7",
        "Троллейная улица, 130А",
        "Военная улица, 5",
        "Красный проспект, 101",
        "проспект Дзержинского, 2/2"
    ],
    "Екатеринбург": [
        "улица 8 Марта, 46",
        "улица Луначарского, 137",
        "улица Репина, 94",
        "улица Щербакова, 2К",
        "улица 8 Марта, 149",
        "улица Халтурина, 55",
        "улица Малышева, 5"
    ],
    "Казань": [
        "улица Николая Ершова, 1А",
        "проспект Победы, 91",
        "проспект Ямашева, 46",
        "улица Достоевского, 30",
        "улица Хусаина Мавлютова, 45"
    ]
};

const moviesData = [
    { id: 20, title: "Звероэволюция", poster: "zveroevolution.jpg", genre: "Боевик", age: "18+", price: 650, isUpcoming: false, country: "Франция", director: "Жан-Люк Мартель", cast: "Венсан Кассель", desc: "Секретная лаборатория создает новый вид хищников." },
    { id: 21, title: "Холоп 3", poster: "holop3.jpg", genre: "Комедия", age: "12+", price: 550, isUpcoming: false, country: "Россия", director: "Клим Шипенко", cast: "Милош Бикович", desc: "Новые герои, совершенно неожиданная историческая эпоха." },
    { id: 1, title: "Майкл", poster: "Michael_(2026_film)_poster.jpg", genre: "Байопик", age: "18+", price: 700, isUpcoming: false, country: "США", director: "Антуан Фукуа", cast: "Джаафар Джексон", desc: "История восхождения легендарного Короля поп-музыки." },
    { id: 2, title: "День рождения", poster: "birthday.jpg", genre: "Триллер", age: "18+", price: 450, isUpcoming: false, country: "Россия", director: "Алексей Смирнов", cast: "Юра Борисов", desc: "Празднование дня рождения оборачивается кошмаром." },
    { id: 3, title: "Богатыри", poster: "bogatyry.jpg", genre: "Фэнтези", age: "16+", price: 500, isUpcoming: false, country: "Россия", director: "Рустам Мосафир", cast: "Александр Паль", desc: "Суровый исторический экшен, переосмысляющий былины." },
    { id: 4, title: "Братья Карамазовы", poster: "brothers-karamazovy.jpg", genre: "Драма", age: "16+", price: 400, isUpcoming: false, country: "Россия", director: "Юрий Быков", cast: "Константин Хабенский", desc: "Философская драма по бессмертному роману." },
    { id: 5, title: "Грязные деньги", poster: "gryznyedengi.jpg", genre: "Боевик", age: "18+", price: 600, isUpcoming: false, country: "США", director: "Майкл Бэй", cast: "Джейк Джилленхол", desc: "Криминальный боевик о подпольной империи." },
    { id: 6, title: "Ветры прошлого", poster: "images.jpg", genre: "Детектив", age: "16+", price: 450, isUpcoming: false, country: "Франция", director: "Франсуа Озон", cast: "Марион Котийяр", desc: "Фотограф случайно обнаруживает ключ к разгадке старой тайны." },
    { id: 7, title: "Убить Билла", poster: "killbill.jpg", genre: "Боевик", age: "18+", price: 650, isUpcoming: false, country: "США", director: "Квентин Тарантино", cast: "Ума Турман", desc: "Культовый шедевр Квентина Тарантино на больших экранах." },
    { id: 8, title: "Коммерсант", poster: "komers.jpg", genre: "Бизнес-драма", age: "16+", price: 500, isUpcoming: false, country: "Великобритания", director: "Гай Ричи", cast: "Чарли Ханнэм", desc: "Холодная и расчетливая бизнес-драма о циничном мире." },
    { id: 9, title: "Кощей", poster: "koshey.jpg", genre: "Фэнтези", age: "16+", price: 450, isUpcoming: false, country: "Россия", director: "Олег Трофим", cast: "Тихон Жизневский", desc: "История становления злодея русских сказок." },
    { id: 10, title: "Лео и Тиг", poster: "leoandtig.jpg", genre: "Анимация", age: "6+", price: 400, isUpcoming: false, country: "Россия", director: "Александр Люткевич", cast: "Озвучка: Дмитрий Назаров", desc: "Анимационная история для всей семьи." },
    { id: 11, title: "Момо", poster: "momo.jpg", genre: "Сказка, Фэнтези", age: "12+", price: 400, isUpcoming: false, country: "Германия", director: "Кристиан Диттер", cast: "Мартина Гдек", desc: "Экранизация всемирно известной сказки." },
    { id: 12, title: "Шевели перьями", poster: "moveyourwings.jpg", genre: "Анимация", age: "6+", price: 400, isUpcoming: false, country: "США", director: "Крис Рено", cast: "Озвучка: Стив Карелл", desc: "Вдохновляющий анимационный фильм о воробье." },
    { id: 13, title: "Никто не верил", poster: "nbt.jpg", genre: "Спорт, Драма", age: "12+", price: 450, isUpcoming: false, country: "США", director: "Бен Аффлек", cast: "Мэтт Дэймон", desc: "Спортивная драма о тренере-аутсайдере." },
    { id: 14, title: "Не одна дома", poster: "neodnadoma.jpg", genre: "Комедия", age: "12+", price: 400, isUpcoming: false, country: "Россия", director: "Александр Бойков", cast: "Марина Неелова", desc: "Искрометная комедия о находчивой пенсионерке." },
    { id: 15, title: "Закулисье", poster: "new-official-backrooms-poster.jpg", genre: "Хоррор", age: "18+", price: 550, isUpcoming: false, country: "США", director: "Джеймс Ван", cast: "Патрик Уилсон", desc: "Леденящий кровь хоррор о лиминальных пространствах." },
    { id: 16, title: "Обсессия", poster: "obessy.jpg", genre: "Триллер", age: "18+", price: 600, isUpcoming: false, country: "Великобритания", director: "Кристофер Нолан", cast: "Киллиан Мерфи", desc: "Пугающий триллер о гениальном композиторе." },
    { id: 17, title: "Пропасть", poster: "propast.jpg", genre: "Катастрофа", age: "16+", price: 550, isUpcoming: false, country: "Норвегия", director: "Роар Утхауг", cast: "Кристоффер Йонер", desc: "Альпинисты оказываются заперты в расщелине после лавины." },
    { id: 18, title: "Чудесный мир", poster: "wondaryworld.jpg", genre: "Приключения", age: "12+", price: 500, isUpcoming: false, country: "США", director: "Стивен Спилберг", cast: "Том Холланд", desc: "Подростки находят портал в параллельную экосистему." },
    { id: 19, title: "Молодые и влюбленные", poster: "young-and-loved.jpg", genre: "Мелодрама", age: "16+", price: 450, isUpcoming: false, country: "Франция", director: "Селин Сьямма", cast: "Адель Энель", desc: "Трогательная мелодрама о первой любви." },

    { id: 101, title: "Бизнес ночью", poster: "buisnesatnight.jpg", genre: "Триллер", age: "18+", price: 600, isUpcoming: true, releaseDate: "2026-06-25", country: "США", director: "Дэвид Финчер", cast: "Кристиан Бэйл", desc: "Когда закон засыпает, просыпаются настоящие деньги." },
    { id: 102, title: "Цыпленок: Пух и прах", poster: "chickenpuhandprah.jpg", genre: "Анимация", age: "6+", price: 450, isUpcoming: true, releaseDate: "2026-06-18", country: "Великобритания", director: "Питер Лорд", cast: "Саймон Пегг", desc: "Самое дерзкое ограбление курятника века." },
    { id: 103, title: "Колония", poster: "colony(2026).jpg", genre: "Фантастика", age: "16+", price: 700, isUpcoming: true, releaseDate: "2026-07-02", country: "США", director: "Дени Вильнев", cast: "Оскар Айзек", desc: "Экспедиция на Марс находит то, что лучше было не тревожить." },
    { id: 104, title: "Хранитель камфорного дерева", poster: "hranytelkamfornogodereva.jpg", genre: "Фэнтези", age: "12+", price: 500, isUpcoming: true, releaseDate: "2026-07-15", country: "Япония", director: "Макото Синкай", cast: "Аниме", desc: "Визуально потрясающая сказка о связи миров." },
    { id: 105, title: "Оно приходит снизу", poster: "itcomesfromdown.jpg", genre: "Хоррор", age: "18+", price: 550, isUpcoming: true, releaseDate: "2026-06-20", country: "Испания", director: "Андре Овредал", cast: "Хавьер Бардем", desc: "Глубоко под землей спит древнее зло." },
    { id: 106, title: "Убийственная иллюзия", poster: "killingilussion.jpg", genre: "Детектив", age: "16+", price: 600, isUpcoming: true, releaseDate: "2026-06-30", country: "США", director: "Райан Джонсон", cast: "Дэниел Крэйг", desc: "Знаменитый фокусник погибает во время собственного трюка." },
    { id: 107, title: "Алфавит Манджаротти", poster: "manjarottysalphabet.jpg", genre: "Драма", age: "16+", price: 500, isUpcoming: true, releaseDate: "2026-07-10", country: "Италия", director: "Паоло Соррентино", cast: "Тони Сервилло", desc: "Тонкая итальянская история о любви, искусстве и потере." },
    { id: 108, title: "Давление", poster: "preassure.jpg", genre: "Триллер", age: "16+", price: 650, isUpcoming: true, releaseDate: "2026-07-05", country: "США", director: "Джон Красински", cast: "Том Харди", desc: "Подводная лодка теряет управление на рекордной глубине." },
    { id: 109, title: "Робоняня", poster: "robonyanya.jpg", genre: "Комедия", age: "6+", price: 400, isUpcoming: true, releaseDate: "2026-06-28", country: "Россия", director: "Илья Куликов", cast: "Сергей Гармаш", desc: "Ультрасовременный робот попадает в многодетную семью." },
    { id: 110, title: "Мастер Карате", poster: "theboywhoknowskarate.jpg", genre: "Спорт", age: "12+", price: 500, isUpcoming: true, releaseDate: "2026-07-12", country: "США", director: "Джастин Лин", cast: "Ральф Маччио", desc: "Классическая история становления чемпиона в новом прочтении." },
    { id: 111, title: "Три богатыря 3", poster: "trybogatyryanidnyabezbodviga3.jpg", genre: "Анимация", age: "6+", price: 450, isUpcoming: true, releaseDate: "2026-06-15", country: "Россия", director: "Константин Феоктистов", cast: "Олег Куликович", desc: "Любимые герои возвращаются, чтобы спасти Киев." }
];

const BAR_MENU = [
    {
        id: "cat_combo", name: "🔥 Комбо",
        items: [
            {
                id: "combo", name: "Кино Комбо", hasFlavor: true, flavors: ["Карамель", "Сырный", "Соленый", "Микс"], options: [
                { id: "combo_l", name: "Размер L (Для двоих)", price: 1100, img: "comboLfortwins.jpg" },
                { id: "combo_m", name: "Размер M (Соло)", price: 800, img: "cjmboforalone.jpg" },
                { id: "combo_s", name: "Детский Набор", price: 550, img: "comboforkids.jpg" }
            ]}
        ]
    },
    {
        id: "cat_popcorn", name: "🍿 Попкорн",
        items: [
            {
                id: "popcorn", name: "Попкорн", hasFlavor: true, flavors: [ { name: "Карамель", img: "caramelpop.jpg" }, { name: "Сырный", img: "chesypop.jpg" }, { name: "Соленый", img: "saltypop.jpg" } ], options: [
                { id: "pop_l", name: "Ведро L", price: 500 },
                { id: "pop_m", name: "Ведро M", price: 350 },
                { id: "pop_s", name: "Ведро S", price: 200 }
            ]}
        ]
    },
    {
        id: "cat_drinks", name: "🥤 Напитки",
        items: [
            { id: "cola", name: "Добрый Cola", hasFlavor: false, options: [ { id: "cola_08", name: "Стакан 0.8л", price: 200, img: "dobrycola.jpg" }, { id: "cola_05", name: "Стакан 0.5л", price: 150, img: "dobrycola.jpg" } ] },
            { id: "orange", name: "Добрый Апельсин", hasFlavor: false, options: [ { id: "orange_08", name: "Стакан 0.8л", price: 200, img: "orangedobry.jpg" }, { id: "orange_05", name: "Стакан 0.5л", price: 150, img: "orangedobry.jpg" } ] },
            { id: "water", name: "Вода", hasFlavor: false, options: [ { id: "water_05", name: "Бутылка 0.5л", price: 100, img: "bonaquawater.jpg" } ] }
        ]
    }
];

let currentOrder = { movieId: null, movieTitle: "", ticketPrice: 0, selectedDate: null, selectedCinema: null, selectedTime: null, selectedSeats: [], services: {} };
let currentHallZoom = 1;
let activeBarTab = "cat_combo";
let generatedOrderNumber = "0000";

// Привязка функций к window для HTML onclick
window.goToStep = goToStep;
window.zoomHall = zoomHall;
window.switchBarTab = switchBarTab;
window.updateServiceUI = updateServiceUI;
window.updateServiceFromSelect = updateServiceFromSelect;
window.selectDate = selectDate;
window.selectCinema = selectCinema;
window.selectTime = selectTime;
window.openAcquiring = openAcquiring;
window.copyPhone = copyPhone;
window.finishOrder = finishOrder;

document.addEventListener('DOMContentLoaded', () => {
    try {
        renderCatalog();
        renderPromoBanners();
        initGlobalModals();
        initStaticEventListeners();
    } catch (error) {
        console.error("Ошибка при инициализации:", error);
    }
});

// ФУНКЦИЯ ПРОВЕРКИ СТАНДАРТА МОБИЛЬНОГО ТЕЛЕФОНА РФ
function validateRussianPhone(phone) {
    const regex = /^(\+7|8)?[\s\-]?\(?[9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(phone);
}

function renderCatalog() {
    const todayGrid = document.getElementById('movies-grid');
    const upcomingGrid = document.getElementById('upcoming-movies-grid');
    if (!todayGrid || !upcomingGrid) return;
    
    todayGrid.innerHTML = ''; upcomingGrid.innerHTML = '';

    moviesData.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.addEventListener('click', () => openBookingModal(movie.id));
        
        let badgeHTML = '';
        if (movie.isUpcoming) {
            let releaseDateObj = new Date(movie.releaseDate);
            if (releaseDateObj > SYSTEM_TODAY) {
                badgeHTML = `<span class="badge-coming-soon">С ${formatDateShort(releaseDateObj)}</span>`;
            } else {
                movie.isUpcoming = false; 
            }
        }

        card.innerHTML = `
            <div class="movie-card-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450/2a2535/fff?text=Нет+постера'">
                ${badgeHTML}
            </div>
            <div class="movie-meta-bottom">
                <span class="badge-outline">${movie.age || '16+'}</span>
                <span class="movie-genre-text">${movie.genre || 'Кино'}</span>
            </div>
            <h3 class="movie-title-bottom">${movie.title}</h3>
        `;

        if (movie.isUpcoming) { upcomingGrid.appendChild(card); } 
        else { todayGrid.appendChild(card); }
    });
}

function renderPromoBanners() {
    const slider = document.getElementById('promo-banner-slider');
    if(!slider) return;
    slider.innerHTML = '';
    const shuffled = [...moviesData].sort(() => 0.5 - Math.random());
    const promos = shuffled.slice(0, 5);

    promos.forEach(movie => {
        const banner = document.createElement('div');
        banner.className = 'promo-banner';
        banner.onclick = () => openBookingModal(movie.id);
        banner.innerHTML = `
            <div class="promo-bg" style="background-image: url('${movie.poster}')"></div>
            <div class="promo-content">
                <img src="${movie.poster}" class="promo-poster" onerror="this.style.display='none'">
                <div class="promo-info">
                    <h2>${movie.title}</h2>
                    <p>${movie.desc}</p>
                    <button class="promo-btn">Купить билет</button>
                </div>
            </div>
        `;
        slider.appendChild(banner);
    });
}

function formatDateShort(d) {
    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    return `${d.getDate()} ${months[d.getMonth()]}`;
}

function getNextDates(startDate, count) {
    let dates = [];
    if (startDate < SYSTEM_TODAY) { startDate = SYSTEM_TODAY; }
    
    for (let i = 0; i < count; i++) {
        let d = new Date(startDate);
        d.setDate(d.getDate() + i);
        const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        dates.push({ 
            formattedText: `${d.getDate()} ${['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'][d.getMonth()]}`, 
            dayName: days[d.getDay()] 
        });
    }
    return dates;
}

function initGlobalModals() {
    const cityBtn = document.getElementById('btn-city-select');
    const cityModal = document.getElementById('modal-city');
    cityBtn?.addEventListener('click', () => cityModal.classList.remove('hidden'));
    document.querySelectorAll('.city-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentCity = e.target.dataset.city;
            if(cityBtn) cityBtn.textContent = `г. ${currentCity} ▼`;
            cityModal.classList.add('hidden');
            if (!document.getElementById('booking-modal-overlay').classList.contains('hidden')) {
                renderCinemas();
            }
        });
    });

    const loginBtn = document.getElementById('btn-profile-login');
    const loginModal = document.getElementById('modal-login');
    loginBtn?.addEventListener('click', () => loginModal.classList.remove('hidden'));
    
    // ВХОД С ПРОВЕРКОЙ ТЕЛЕФОНА И ПАРОЛЯ
    document.getElementById('global-submit-login')?.addEventListener('click', () => {
        const phoneField = document.getElementById('global-login-phone');
        const passField = document.getElementById('global-pass-field');
        
        const phoneVal = phoneField ? phoneField.value.trim() : "";
        const passVal = passField ? passField.value.trim() : "";

        if(!phoneVal || !passVal) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }
        if (!validateRussianPhone(phoneVal)) {
            alert('Неверный формат номера телефона для входа!');
            return;
        }
        if (passVal.length < 4) {
            alert('Пароль должен быть не короче 4 символов!');
            return;
        }

        if(loginBtn) loginBtn.textContent = "Профиль";
        loginModal.classList.add('hidden');
    });

    document.querySelectorAll('.close-mini-modal').forEach(btn => {
        btn.addEventListener('click', (e) => e.target.closest('.overlay-modal').classList.add('hidden'));
    });
}

function openBookingModal(id) {
    const movie = moviesData.find(m => m.id === id);
    if (!movie) return;

    currentOrder = { movieId: movie.id, movieTitle: movie.title, ticketPrice: movie.price, selectedDate: null, selectedCinema: null, selectedTime: null, selectedSeats: [], services: {} };
    
    document.getElementById('detail-title').textContent = movie.title || 'Неизвестно';
    document.getElementById('detail-poster').src = movie.poster;
    document.getElementById('detail-age').textContent = movie.age || '16+';
    document.getElementById('detail-genre').textContent = movie.genre || 'Кино';
    document.getElementById('detail-country').textContent = movie.country || 'Не указана';
    document.getElementById('detail-director').textContent = movie.director || 'Не указан';
    document.getElementById('detail-cast').textContent = movie.cast || 'Не указано';
    document.getElementById('detail-desc').textContent = movie.desc || 'Описание отсутствует.';
    document.getElementById('detail-price').textContent = `Билет: ${movie.price || 500} ₽`;
    
    const releaseEl = document.getElementById('detail-release');
    if(movie.isUpcoming) {
        releaseEl.textContent = `В кино с ${formatDateShort(new Date(movie.releaseDate))}`;
        releaseEl.style.color = "var(--accent-red)";
    } else {
        releaseEl.textContent = "Уже в кино";
        releaseEl.style.color = "var(--accent-red)";
    }

    document.getElementById('context-title-sessions').textContent = `Фильм: ${movie.title}`;
    document.getElementById('context-title-hall').textContent = `Фильм: ${movie.title}`;
    document.getElementById('receipt-movie').textContent = movie.title;

    const dateContainer = document.getElementById('date-tabs-container');
    if (dateContainer) {
        dateContainer.innerHTML = '';
        let startDate = movie.isUpcoming ? new Date(movie.releaseDate) : SYSTEM_TODAY;
        let dates = getNextDates(startDate, 7);
        dates.forEach((dEl, i) => {
            const btn = document.createElement('button');
            btn.className = `bar-tab date-tab ${i === 0 ? 'active' : ''}`;
            btn.innerHTML = `${dEl.formattedText} <span class="day-name">${dEl.dayName}</span>`;
            btn.onclick = () => selectDate(dEl.formattedText, btn);
            dateContainer.appendChild(btn);
        });
        currentOrder.selectedDate = dates[0].formattedText;
    }

    renderCinemas();

    document.getElementById('checkout-main-content').classList.remove('hidden');
    document.getElementById('final-success-block').classList.add('hidden');
    
    const payBlock = document.getElementById('payment-instruction-block');
    if(payBlock) payBlock.classList.add('hidden');
    
    document.getElementById('initial-pay-btn-container').classList.remove('hidden');
    
    const phoneInput = document.getElementById('checkout-phone');
    if(phoneInput) phoneInput.value = ""; // Очищаем инпут телефона при новом открытии

    document.querySelectorAll('.step-container').forEach(el => el.classList.add('hidden'));
    document.getElementById('step-details-container').classList.remove('hidden');
    
    renderSeats(); renderBarTabs(); switchBarTab('cat_combo'); updateCheckoutSummary();
    
    document.getElementById('booking-modal-overlay').classList.remove('hidden');
}

function selectDate(dateStr, btnElement) {
    currentOrder.selectedDate = dateStr;
    document.querySelectorAll('.date-tab').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    if (currentOrder.selectedCinema) { generateRealisticSessions(); }
}

function renderCinemas() {
    const container = document.getElementById('cinemas-list-container');
    if(!container) return;
    container.innerHTML = '';
    document.getElementById('current-city-display').textContent = currentCity;
    const cinemas = CINEMAS_BY_CITY[currentCity] || CINEMAS_BY_CITY["Москва"];
    
    cinemas.forEach(address => {
        const btn = document.createElement('button');
        btn.className = 'cinema-select-btn';
        btn.textContent = address;
        btn.onclick = () => selectCinema(address, btn);
        container.appendChild(btn);
    });
    
    document.getElementById('sessions-block').classList.add('hidden');
    currentOrder.selectedCinema = null;
    currentOrder.selectedTime = null;
}

function selectCinema(address, btn) {
    currentOrder.selectedCinema = address;
    document.querySelectorAll('.cinema-select-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    generateRealisticSessions();
    document.getElementById('sessions-block').classList.remove('hidden');
    document.getElementById('sessions-block').scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// ВОТ ТУТ БЫЛА ОШИБКА, ИЗ-ЗА КОТОРОЙ ЛОМАЛСЯ ВЕСЬ КОД - СЕЙЧАС ИСПРАВЛЕНО
function generateRealisticSessions() {
    const sessionsGrid = document.getElementById('dynamic-sessions-grid');
    if (!sessionsGrid) return;
    sessionsGrid.innerHTML = '';
    
    const count = Math.floor(Math.random() * 4) + 3;
    let startHour = 9; 
    
    for(let i = 0; i < count; i++) {
        startHour += Math.floor(Math.random() * 2) + 1;
        if (startHour > 23) break;
        let mins = Math.random() > 0.5 ? "00" : (Math.random() > 0.5 ? "15" : "45");
        const timeStr = `${startHour}:${mins}`;
        
        const btn = document.createElement('button');
        btn.className = 'session-btn';
        btn.textContent = timeStr;
        btn.onclick = () => selectTime(timeStr);
        sessionsGrid.appendChild(btn);
    }
}

function selectTime(timeStr) {
    if (!currentOrder.selectedDate) { alert("Пожалуйста, сначала выберите дату!"); return; }
    currentOrder.selectedTime = timeStr;
    goToStep('step-hall-container');
}

function goToStep(stepId) {
    if (stepId === 'step-services-container' && currentOrder.selectedSeats.length === 0) { alert('Сначала выберите хотя бы одно место в зале!'); return; }

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
        document.getElementById('receipt-datetime').textContent = `${currentOrder.selectedDate} / ${currentOrder.selectedTime}`;
        document.getElementById('receipt-cinema').textContent = `${currentCity}, ${currentOrder.selectedCinema}`;
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
            if (Math.random() < 0.20) { seat.classList.add('occupied'); } 
            else { seat.onclick = () => handleSeatClick(seat, currentSeatId, r+1, c+1); }
            rowDiv.appendChild(seat);
        }
        container.appendChild(rowDiv);
    }
}

function handleSeatClick(el, id, row, col) {
    if (el.classList.contains('occupied')) return;
    el.classList.toggle('selected');
    if (el.classList.contains('selected')) { currentOrder.selectedSeats.push({ id, row, col }); } 
    else { currentOrder.selectedSeats = currentOrder.selectedSeats.filter(s => s.id !== id); }
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
        const itemDiv = document.createElement('div');
        itemDiv.className = 'service-item';
        let selectSizeHtml = `<select id="select-size-${item.id}" class="service-select" onchange="updateServiceUI('${item.id}')">`;
        item.options.forEach((opt, i) => { selectSizeHtml += `<option value="${opt.id}" data-price="${opt.price}" data-img="${opt.img || ''}" ${i===0?'selected':''}>${opt.name} - ${opt.price} ₽</option>`; });
        selectSizeHtml += `</select>`;

        let selectFlavorHtml = "";
        if (item.hasFlavor) {
            selectFlavorHtml = `<select id="select-flavor-${item.id}" class="service-select" onchange="updateServiceUI('${item.id}')">`;
            item.flavors.forEach(fl => { selectFlavorHtml += `<option value="${typeof fl === 'object' ? fl.name : fl}" data-img="${typeof fl === 'object' ? fl.img : ''}">${typeof fl === 'object' ? fl.name : fl}</option>`; });
            selectFlavorHtml += `</select>`;
        }

        let defaultImg = item.options[0].img || (item.flavors && typeof item.flavors[0] === 'object' ? item.flavors[0].img : '');

        itemDiv.innerHTML = `
            <div class="service-img-box"><img id="img-${item.id}" src="${defaultImg}" alt="${item.name}"></div>
            <div class="service-info"><h4>${item.name}</h4><div class="service-selects">${selectSizeHtml}${selectFlavorHtml}</div></div>
            <div class="service-controls">
                <button class="control-btn" onclick="updateServiceFromSelect('${item.id}', -1)">-</button>
                <span id="qty-${item.id}" class="service-qty">0</span>
                <button class="control-btn" onclick="updateServiceFromSelect('${item.id}', 1)">+</button>
            </div>
        `;
        listContainer.appendChild(itemDiv);
        updateServiceUI(item.id);
    });
}

function updateServiceUI(itemId) {
    const sizeSelect = document.getElementById(`select-size-${itemId}`);
    if (!sizeSelect) return;
    const sizeOption = sizeSelect.options[sizeSelect.selectedIndex];
    let imgUrl = sizeOption.getAttribute('data-img');
    const flavorSelect = document.getElementById(`select-flavor-${itemId}`);
    let flavorVal = "";
    if (flavorSelect) {
        flavorVal = flavorSelect.options[flavorSelect.selectedIndex].value;
        if (!imgUrl) imgUrl = flavorSelect.options[flavorSelect.selectedIndex].getAttribute('data-img'); 
    }
    const imgEl = document.getElementById(`img-${itemId}`);
    if (imgEl && imgUrl) imgEl.src = imgUrl;

    const fullId = `${sizeSelect.value}${flavorVal ? '_' + flavorVal : ''}`;
    const qty = currentOrder.services[fullId]?.qty || 0;
    document.getElementById(`qty-${itemId}`).textContent = qty;
}

function updateServiceFromSelect(itemId, change) {
    const sizeSelect = document.getElementById(`select-size-${itemId}`);
    const sizeOption = sizeSelect.options[sizeSelect.selectedIndex];
    const sizeId = sizeOption.value;
    const price = parseInt(sizeOption.getAttribute('data-price'));
    const flavorSelect = document.getElementById(`select-flavor-${itemId}`);
    let flavorName = flavorSelect ? flavorSelect.value : "";

    const fullId = `${sizeId}${flavorName ? '_' + flavorName : ''}`;
    let baseName = ""; BAR_MENU.forEach(cat => cat.items.forEach(i => { if(i.id === itemId) baseName = i.name; }));

    let newQty = (currentOrder.services[fullId]?.qty || 0) + change;
    if (newQty < 0) newQty = 0; if (newQty > 10) newQty = 10; 

    if (newQty === 0) { delete currentOrder.services[fullId]; } 
    else { currentOrder.services[fullId] = { qty: newQty, price: price, name: `${baseName} ${sizeOption.text.split(' - ')[0]} ${flavorName ? '('+flavorName+')' : ''}`.trim() }; }

    document.getElementById(`qty-${itemId}`).textContent = newQty;
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    const ticketsCount = currentOrder.selectedSeats.length;
    const ticketsSum = ticketsCount * currentOrder.ticketPrice;
    let servicesSum = 0; let servicesDetails = [];

    Object.values(currentOrder.services).forEach(srv => {
        if(srv.qty > 0) {
            servicesSum += srv.price * srv.qty;
            servicesDetails.push(`<div>${srv.name} (x${srv.qty}) ....... ${srv.price * srv.qty} ₽</div>`);
        }
    });

    const totalSum = ticketsSum + servicesSum;
    
    const hBadge = document.getElementById('hall-badge-sum'); if (hBadge) hBadge.textContent = totalSum;
    const bBadge = document.getElementById('bar-badge-sum'); if (bBadge) bBadge.textContent = totalSum;

    document.getElementById('receipt-seats-count').textContent = ticketsCount;
    document.getElementById('receipt-total-sum').textContent = `${totalSum} ₽`;
    
    const sbpTotal = document.getElementById('sbp-total-sum');
    if (sbpTotal) sbpTotal.textContent = totalSum; 
    
    const seatsListEl = document.getElementById('receipt-seats-list');
    if (seatsListEl) {
        seatsListEl.innerHTML = ticketsCount > 0 
            ? currentOrder.selectedSeats.map(s => `<div>Ряд ${s.row}, Место ${s.col} ....... ${currentOrder.ticketPrice} ₽</div>`).join('') 
            : '<div>Нет билетов</div>';
    }

    const servicesListEl = document.getElementById('receipt-services-list');
    if (servicesListEl) {
        servicesListEl.innerHTML = servicesDetails.length > 0 ? servicesDetails.join('') : '<div>Не выбрана</div>';
    }
}

// ОБЯЗАТЕЛЬНАЯ ВАЛИДАЦИЯ НОМЕРА ПЕРЕД ОПЛАТОЙ ПО СБП
function openAcquiring() {
    const phoneInput = document.getElementById('checkout-phone');
    const phoneValue = phoneInput ? phoneInput.value.trim() : "";

    if (!phoneValue) {
        alert("Пожалуйста, введите номер телефона для отправки электронных билетов!");
        if (phoneInput) phoneInput.focus();
        return;
    }

    if (!validateRussianPhone(phoneValue)) {
        alert("Неверный формат номера мобильного телефона! Введите номер в российском стандарте (например: +79991234567 или 89991234567).");
        if (phoneInput) phoneInput.focus();
        return;
    }

    currentOrder.userPhone = phoneValue;

    // Генерируем номер заказа и показываем блок с инструкцией СБП
    generatedOrderNumber = Math.floor(1000 + Math.random() * 9000);
    const numDisplay = document.getElementById('order-number-display');
    const numComment = document.getElementById('order-number-comment');
    const finalNum = document.getElementById('final-order-number');
    
    if(numDisplay) numDisplay.textContent = `#${generatedOrderNumber}`;
    if(numComment) numComment.textContent = generatedOrderNumber;
    if(finalNum) finalNum.textContent = `#${generatedOrderNumber}`;
    
    document.getElementById('initial-pay-btn-container').classList.add('hidden');
    
    const payBlock = document.getElementById('payment-instruction-block');
    if(payBlock) {
        payBlock.classList.remove('hidden');
        payBlock.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}

function copyPhone() {
    const phone = "+79196382853";
    navigator.clipboard.writeText(phone).then(() => {
        const btn = document.getElementById('copy-btn-icon');
        if(btn) {
            btn.textContent = "✅";
            setTimeout(() => btn.textContent = "📋", 2000);
        }
    }).catch(err => console.error('Ошибка копирования', err));
}

function finishOrder() {
    document.getElementById('checkout-main-content').classList.add('hidden');
    document.getElementById('final-success-block').classList.remove('hidden');
}

function initStaticEventListeners() {
    document.getElementById('close-modal-btn')?.addEventListener('click', () => {
        document.getElementById('booking-modal-overlay').classList.add('hidden');
    });
}
