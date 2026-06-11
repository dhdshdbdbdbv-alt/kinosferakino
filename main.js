/**
 * main.js — Система "КИНОСФЕРА" (С расширенными фильмами и доп. услугами)
 */

const moviesData = [
    { id: 1, title: "Майкл", poster: "Michael_(2026_film)_poster.jpg", description: "Грандиозный биографический эпос, погружающий зрителя в невероятную историю восхождения легендарного Короля поп-музыки. Фильм детально и без прикрас показывает не только величайшие триумфы на сцене, но и тяжелейшие личные драмы, судебные разбирательства и бремя мировой славы, которое пришлось нести Майклу." },
    { id: 2, title: "День рождения", poster: "birthday.jpg", description: "Напряженный психологический триллер, где рутинное празднование дня рождения оборачивается настоящим кошмаром. Старые друзья собираются в загородном доме, но безобидные игры и воспоминания внезапно вскрывают мрачные тайны прошлого, превращая праздник в жестокую игру на выживание." },
    { id: 3, title: "Богатыри", poster: "bogatyry.jpg", description: "Суровый исторический и фэнтезийный экшен 2026 года, кардинально переосмысляющий знакомые с детства былины. Никаких детских шуток и ярких красок — только грязь, сталь, кровь и тяжелый путь воинов, защищающих свои земли от хтонического, первобытного зла, пришедшего из-за северных гор." },
    { id: 4, title: "Братья Карамазовы", poster: "brothers-karamazovy.jpg", description: "Масштабная философская драма по бессмертному роману Федора Достоевского. Глубокое и бескомпромиссное исследование темной стороны человеческой души, вопросов веры, вседозволенности и рокового стечения обстоятельств, приводящего к неотвратимой семейной трагедии." },
    { id: 5, title: "Грязные деньги", poster: "gryznyedengi.jpg", description: "Динамичный и жесткий криминальный боевик о подпольной империи, где одно неверное решение запускает цепную реакцию насилия. Главный герой решает выйти из игры, сорвав последний куш, но криминальный синдикат не прощает предательства, открывая на него безжалостную охоту в каменных джунглях." },
    { id: 6, title: "Ветры прошлого", poster: "images.jpg", description: "Проникновенная драма о фотографе, который, проявляя старые семейные пленки, случайно обнаруживает ключ к разгадке исчезновения своего брата 20 лет назад. Это путешествие по волнам памяти заставит его переосмыслить всю свою жизнь и столкнуться с горькой правдой." },
    { id: 7, title: "Убить Билла", poster: "killbill.jpg", description: "Перевыпуск культового шедевра Квентина Тарантино на больших экранах. Эстетика боевых искусств, литры крови, самурайские мечи и непревзойденная история мести Черной Мамбы, которая пробуждается после комы, чтобы методично уничтожить отряд наемных убийц и их лидера." },
    { id: 8, title: "Коммерсант", poster: "komers.jpg", description: "Холодная и расчетливая бизнес-драма о циничном мире высоких корпоративных ставок. Молодой и амбициозный аналитик бросает вызов опытным акулам бизнеса в попытке провести рейдерский захват крупнейшей компании, не подозревая, что на кону стоят не только деньги, но и его собственная жизнь." },
    { id: 9, title: "Кощей", poster: "koshey.jpg", description: "Мрачное фэнтези, рассказывающее историю становления самого известного злодея русских сказок. Как молодой и благородный воин проклял свою душу ради спасения возлюбленной и превратился в бессмертного, бездушного владыку темного царства, скрывающего свою смерть на конце иглы." },
    { id: 10, title: "Лео и Тиг: Большое приключение", poster: "leoandtig.jpg", description: "Яркая анимационная история для всей семьи. Неразлучные друзья, леопард Лео и тигренок Тиг, покидают родные леса Дальнего Востока, чтобы отправиться в грандиозное путешествие к неизведанным землям, где им предстоит спасти редких животных от коварных браконьеров." },
    { id: 11, title: "Момо", poster: "momo.jpg", description: "Экранизация всемирно известной сказки Михаэля Энде. Удивительная история о девочке в безразмерном пиджаке, обладающей уникальным даром — умением слушать людей. Ей предстоит вступить в неравную схватку с Серыми Господами, ворующими у человечества их драгоценное время." },
    { id: 12, title: "Шевели перьями", poster: "moveyourwings.jpg", description: "Вдохновляющий анимационный фильм о маленьком, но очень гордом воробье, который решает доказать всем, что он способен пересечь океан наравне с великими мигрирующими птицами. История о преодолении себя, поиске внутренней силы и настоящей дружбе." },
    { id: 13, title: "Никто не верил", poster: "nbt.jpg", description: "Спортивная драма, основанная на реальных и невероятных событиях. История тренера-аутсайдера, который собирает команду из проблемных подростков с улиц и, вопреки насмешкам профессиональной лиги, ведет их к победе на национальном чемпионате, меняя их судьбы навсегда." },
    { id: 14, title: "Не одна дома", poster: "neodnadoma.jpg", description: "Искрометная российская комедия о находчивой пенсионерке, которая остается одна в огромном загородном особняке на праздники. Когда в дом проникают грабители-неудачники, она устраивает им настоящий квест на выживание, используя советскую смекалку и садовый инвентарь." },
    { id: 15, title: "Закулисье: Новая глава", poster: "new-official-backrooms-poster.jpg", description: "Леденящий кровь хоррор, расширяющий вселенную лиминальных пространств. Группа документалистов спускается на неизведанные нижние уровни 'Закулисья', где законы физики перестают работать, а желтые монотонные коридоры сменяются сюрреалистичными и смертельно опасными лабиринтами." },
    { id: 16, title: "Обсессия", poster: "obessy.jpg", description: "Пугающий триллер о гениальном композиторе, который в поисках идеального звука для своей новой симфонии постепенно теряет связь с реальностью. Его одержимость творчеством перерастает в паранойю, ставя под угрозу жизни всех, кто находится с ним рядом." },
    { id: 17, title: "Пропасть", poster: "propast.jpg", description: "Масштабный фильм-катастрофа. Группа профессиональных альпинистов оказывается заперта в глубокой расщелине после схода мощной лавины. У них нет связи, запасы кислорода на исходе, а температура стремительно падает. Начинается безжалостная борьба за выживание." },
    { id: 18, title: "Чудесный мир", poster: "wondaryworld.jpg", description: "Визуально ошеломляющее приключенческое фэнтези. Трое подростков случайно находят портал в параллельную экосистему, скрытую глубоко под землей. Этот мир населен невиданными существами, но его гармония нарушена, и только герои могут восстановить хрупкий баланс." },
    { id: 19, title: "Молодые и влюбленные", poster: "young-and-loved.jpg", description: "Трогательная, честная и светлая мелодрама о первой любви, разбитых надеждах и сложном выборе взросления. Двое студентов из совершенно разных миров случайно встречаются в дождливом Петербурге, и эта встреча навсегда меняет траекторию их жизней." }
];

// Цены на доп услуги
const PRICING = {
    ticket: 650,
    popcorn: 450,
    drink: 200,
    glasses: 150
};

// Состояние заказа (теперь с доп. услугами)
let currentOrder = { 
    movieId: null, 
    selectedSeats: [], 
    services: { popcorn: 0, drink: 0, glasses: 0 }
};

window.goToStep = goToStep;
window.openBookingModal = openBookingModal;
window.updateService = updateService; // Для кнопок +/- в HTML

document.addEventListener('DOMContentLoaded', () => {
    try {
        renderCatalog();
        initStaticEventListeners();
    } catch (error) {
        console.error("Критическая ошибка:", error);
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
            <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450/333/fff?text=Нет+постера'">
            <h3>${movie.title}</h3>
        `;
        grid.appendChild(card);
    });
}

function openBookingModal(id) {
    const movie = moviesData.find(m => m.id === id);
    if (!movie) return;

    // Сброс заказа
    currentOrder.movieId = movie.id;
    currentOrder.selectedSeats = [];
    currentOrder.services = { popcorn: 0, drink: 0, glasses: 0 };
    
    const titleEl = document.getElementById('modal-movie-title');
    const posterEl = document.getElementById('modal-movie-poster');
    const descEl = document.getElementById('modal-text-description');

    if (titleEl) titleEl.textContent = movie.title;
    if (posterEl) posterEl.src = movie.poster;
    if (descEl) descEl.textContent = movie.description;
    
    // Сбрасываем UI доп услуг
    document.getElementById('qty-popcorn').textContent = '0';
    document.getElementById('qty-drink').textContent = '0';
    document.getElementById('qty-glasses').textContent = '0';

    document.querySelectorAll('.step-container').forEach(el => el.classList.add('hidden'));
    document.getElementById('step-sessions-container').classList.remove('hidden');
    document.getElementById('payment-receipt-block').classList.add('hidden');
    
    renderSeats();
    updateCheckoutSummary();
    
    document.getElementById('booking-modal-overlay').classList.remove('hidden');
}

function goToStep(stepId) {
    // Проверка при переходе с мест на услуги
    if (stepId === 'step-services-container') {
        if (currentOrder.selectedSeats.length === 0) {
            alert('Сначала выберите хотя бы одно место в зале!');
            return;
        }
    }

    // Блокировка кнопки оплаты при переходе на финальный шаг
    if (stepId === 'step-checkout-container') {
        const btn = document.getElementById('final-checkout-btn');
        const status = document.getElementById('account-validation-status');
        if (btn) btn.disabled = true;
        if (status) {
            status.textContent = 'Пройдите авторизацию для разблокировки бронирования';
            status.style.color = '#ffc107';
        }
        document.getElementById('client-login-field').value = '';
        document.getElementById('client-pass-field').value = '';
    }

    document.querySelectorAll('.step-container').forEach(el => el.classList.add('hidden'));
    const targetStep = document.getElementById(stepId);
    if (targetStep) targetStep.classList.remove('hidden');
}

// Увеличенный зал (старый визуал) - 7 рядов по 14 мест
function renderSeats() {
    const container = document.getElementById('dynamic-hall-grid');
    if (!container) return;
    
    container.innerHTML = '';
    let seatNumber = 1;
    const rows = 7;
    const cols = 14;
    
    for (let r = 0; r < rows; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'seat-row';
        for (let c = 0; c < cols; c++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = seatNumber;
            const currentSeat = seatNumber; 
            
            // Проходы (визуальное разделение по центру)
            if (c === 7) seat.style.marginLeft = '20px';

            if (Math.random() < 0.18) {
                seat.classList.add('occupied');
            } else {
                seat.onclick = () => handleSeatClick(seat, currentSeat);
            }
            
            rowDiv.appendChild(seat);
            seatNumber++;
        }
        container.appendChild(rowDiv);
    }
}

function handleSeatClick(seatElement, seatNumber) {
    if (seatElement.classList.contains('occupied')) return;
    
    seatElement.classList.toggle('selected');
    
    if (seatElement.classList.contains('selected')) {
        currentOrder.selectedSeats.push(seatNumber);
    } else {
        currentOrder.selectedSeats = currentOrder.selectedSeats.filter(num => num !== seatNumber);
    }
    
    currentOrder.selectedSeats.sort((a, b) => a - b);
    updateCheckoutSummary();
}

// Логика добавления/убавления услуг
function updateService(type, change) {
    let newValue = currentOrder.services[type] + change;
    if (newValue < 0) newValue = 0; // Нельзя меньше нуля
    if (newValue > 10) newValue = 10; // Ограничение на 10 шт
    
    currentOrder.services[type] = newValue;
    document.getElementById(`qty-${type}`).textContent = newValue;
    
    updateCheckoutSummary();
}

// Подсчет полной корзины
function updateCheckoutSummary() {
    const ticketsCount = currentOrder.selectedSeats.length;
    const ticketsSum = ticketsCount * PRICING.ticket;
    
    const servicesSum = 
        (currentOrder.services.popcorn * PRICING.popcorn) +
        (currentOrder.services.drink * PRICING.drink) +
        (currentOrder.services.glasses * PRICING.glasses);

    const totalSum = ticketsSum + servicesSum;
    
    // Обновляем HTML
    document.getElementById('summary-seats-count').textContent = ticketsCount;
    document.getElementById('summary-tickets-sum').textContent = ticketsSum;
    document.getElementById('summary-services-sum').textContent = servicesSum;
    document.getElementById('summary-total-sum').textContent = totalSum;
    
    const listEl = document.getElementById('summary-seats-list');
    if (listEl) {
        listEl.textContent = ticketsCount > 0 ? `Места: ${currentOrder.selectedSeats.join(', ')}` : '';
    }
}

function initStaticEventListeners() {
    document.getElementById('close-modal-btn')?.addEventListener('click', () => {
        document.getElementById('booking-modal-overlay').classList.add('hidden');
    });

    document.getElementById('submit-account-btn')?.addEventListener('click', () => {
        const login = document.getElementById('client-login-field')?.value || '';
        const pass = document.getElementById('client-pass-field')?.value || '';
        
        if (login.length >= 3 && pass.length >= 4) {
            const statusEl = document.getElementById('account-validation-status');
            statusEl.textContent = '✅ Авторизация успешна. Доступ открыт.';
            statusEl.style.color = '#28a745';
            document.getElementById('final-checkout-btn').disabled = false;
        } else {
            alert('Ошибка: Логин должен быть от 3 символов, пароль от 4.');
        }
    });

    document.getElementById('final-checkout-btn')?.addEventListener('click', () => {
        const receiptBlock = document.getElementById('payment-receipt-block');
        receiptBlock.classList.remove('hidden');
        receiptBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}
