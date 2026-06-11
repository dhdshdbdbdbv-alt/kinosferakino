/**
 * main.js — Исправленная, защищенная от сбоев версия
 */

const moviesData = [
    { id: 1, title: "История Аси Клячиной", poster: "asyaklyachkinasstory.jpg", description: "Классическая драма о жизни, искренней любви и непростых решениях в декорациях советской деревни." },
    { id: 2, title: "Закулисье", poster: "backrooms.jpg", description: "Атмосферный хоррор, погружающий исследователей в бесконечные желтые лиминальные пространства и жуткие лабиринты." },
    { id: 3, title: "День рождения", poster: "birthday.jpg", description: "Психологический триллер, где праздничный вечер в кругу друзей оборачивается чередой неожиданных и опасных откровений." },
    { id: 4, title: "Богатыри", poster: "bogatyry.jpg", description: "Красочное и веселое анимационное приключение о легендарных защитниках земли русской и их новых подвигах." },
    { id: 5, title: "Братья Карамазовы", poster: "brothers-karamazovy.jpg", description: "Глубокая экранизация великого романа о семейных тайнах, вопросах веры, суде и загадках человеческой души." },
    { id: 6, title: "Преступление на третьем этаже", poster: "crimeonthethirdfloor.jpg", description: "Запутанный детективный неонуар, где под подозрением в таинственном преступлении оказывается каждый житель дома." },
    { id: 7, title: "Дени и Мэнни", poster: "danyandmany.jpg", description: "Трогательная и добрая семейная комедия о невероятной преданной дружбе и веселых приключениях." },
    { id: 8, title: "Драма!", poster: "dramma.jpg", description: "Ироничный и эксцентричный взгляд на скрытую закулисную жизнь актеров прямо во время главной премьеры года." },
    { id: 9, title: "Грязные деньги", poster: "gryznyedengi.jpg", description: "Криминальный остросюжетный боевик о дерзком ограблении, которое внезапно пошло совсем не по плану синдиката." },
    { id: 10, title: "Ветер времени", poster: "images.jpg", description: "Драматическая история о судьбоносных встречах, упущенных возможностях и неумолимом течении времени." },
    { id: 11, title: "Убить Билла", poster: "killbill.jpg", description: "Культовый стильный экшен о профессиональной мести и поиске справедливости, ставшей единственным смыслом жизни." },
    { id: 12, title: "Убийственная вечеринка", poster: "killingparty.jpg", description: "Черная комедия, где шумное праздничное мероприятие в особняке превращается в непредсказуемый квест на выживание." },
    { id: 13, title: "Коммерсант", poster: "komers.jpg", description: "Остросюжетная бизнес-драма о жестких, бескомпромиссных правилах игры в мире больших денег и корпоративных войн." },
    { id: 14, title: "Кощей", poster: "koshey.jpg", description: "Захватывающее фэнтези-приключение, раскрывающее древние тайны, истоки силы и молодость культового персонажа сказок." },
    { id: 15, title: "Лео и Тиг", poster: "leoandtig.jpg", description: "Доброе и познавательное анимационное путешествие верных пятнистых друзей по бескрайней и загадочной тайге." },
    { id: 16, title: "Майкл", poster: "MichaelL(2026_film)_poster.jpg", description: "Масштабный биографический фильм, раскрывающий историю жизни, грандиозных триумфов и личных тайн легендарного короля поп-музыки." },
    { id: 17, title: "Момо", poster: "momo.jpg", description: "Волшебная сказочная история о маленькой девочке, способной противостоять серым господам и вернуть людям украденное время." },
    { id: 18, title: "Монах из Борли: Возвращение", poster: "monkfromborleycomeback.jpg", description: "Мистический хоррор об исследовании самого паранормального и зловещего поместья в официальной истории." },
    { id: 19, title: "Шевели перьями", poster: "moveyourwings.jpg", description: "Вдохновляющая анимационная история о маленьком птенце, мечтающем преодолеть страхи ради больших полетов." },
    { id: 20, title: "Никто не верил", poster: "nbt.jpg", description: "Захватывающая спортивная драма, основанная на реальных событиях великой и волевой победы вопреки всем прогнозам." },
    { id: 21, title: "Закулисье: Новая глава", poster: "new-official-backrooms-poster.jpg", description: "Новое леденящее душу погружение в исследование пугающих пустых коридоров и скрытых уровней лиминального мира." },
    { id: 22, title: "Не одна дома 3", poster: "notaloneathome3.jpg", description: "Семейная новогодняя комедия о находчивом мальчике, который снова защищает свой дом от незадачливых грабителей." },
    { id: 23, title: "Обсессия", poster: "obessy.jpg", description: "Глубокий психологический триллер о тонкой грани между искренним творческим увлечением и пугающей одержимостью." },
    { id: 24, title: "Пропасть", poster: "propast.jpg", description: "Фильм-катастрофа о жестком выживании группы экстремалов в условиях смертельной опасности высоко в заснеженных горах." },
    { id: 25, title: "Школа волшебников", poster: "schollofmajicians.jpg", description: "Фэнтезийная история о подростках, случайно открывших в себе древние магические способности и попавших в скрытую академию." },
    { id: 26, title: "Семь вёрст до рассвета", poster: "sevenverstsbeforedawn.jpg", description: "Историческая военная драма о силе человеческого духа, верности долгу и непростом, опасном пути домой." },
    { id: 27, title: "Космическая Маша", poster: "spacymasha.jpg", description: "Фантастическое приключение обычной школьницы, неожиданно ставшей капитаном настоящего межгалактического корабля." },
    { id: 28, title: "Тролли: Возвращение", poster: "trolleyscomeback.jpg", description: "Яркое, безумно позитивное музыкальное приключение любимых героев, полное веселья, танцев и новых песен." },
    { id: 29, title: "На волшебном дереве", poster: "uponmajictree.jpg", description: "Сказочная приключенческая история о поиске чудесного артефакта, способного исполнить самое заветное желание." },
    { id: 30, title: "Ветер", poster: "Wind.jpg", description: "Глубокая драма о поиске своего места в мире, семейных узах и кардинальных переменах, которые приносит внезапная судьба." },
    { id: 31, title: "Чудесный мир", poster: "wondaryworld.jpg", description: "Захватывающее приключенческое фэнтези о скрытой от человеческих глаз, удивительной и опасной экосистеме." },
    { id: 32, title: "Молодые и влюбленные", poster: "young-and-loved.jpg", description: "Романтическая трогательная мелодрама о первой искренней любви, больших надеждах юности и взрослом жизненном выборе." }
];

let currentOrder = { 
    movieId: null, 
    selectedSeats: [], 
    ticketPrice: 650 
};

// Жестко привязываем функции к window, чтобы HTML их точно видел
window.goToStep = goToStep;
window.openBookingModal = openBookingModal;

document.addEventListener('DOMContentLoaded', () => {
    try {
        renderCatalog();
        initStaticEventListeners();
    } catch (error) {
        console.error("Критическая ошибка при загрузке:", error);
    }
});

function renderCatalog() {
    const grid = document.getElementById('movies-grid');
    if (!grid) {
        console.error("Ошибка: Элемент id='movies-grid' не найден в HTML!");
        return;
    }
    
    grid.innerHTML = ''; 
    
    moviesData.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => openBookingModal(movie.id);
        
        // Добавил onerror для картинок. Если картинка не загрузится, она хотя бы не сломает дизайн
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

    currentOrder.movieId = movie.id;
    currentOrder.selectedSeats = [];
    
    // Безопасное заполнение сайдбара
    const titleEl = document.getElementById('modal-movie-title');
    const posterEl = document.getElementById('modal-movie-poster');
    const descEl = document.getElementById('modal-text-description');
    const overlayEl = document.getElementById('booking-modal-overlay');

    if (titleEl) titleEl.textContent = movie.title;
    if (posterEl) posterEl.src = movie.poster;
    if (descEl) descEl.textContent = movie.description;
    
    // Скрываем все шаги
    document.querySelectorAll('.step-container').forEach(el => el.classList.add('hidden'));
    
    // Показываем первый шаг
    const step1 = document.getElementById('step-sessions-container');
    if (step1) step1.classList.remove('hidden');
    
    // Скрываем чек
    const receipt = document.getElementById('payment-receipt-block');
    if (receipt) receipt.classList.add('hidden');
    
    renderSeats();
    updateCheckoutSummary();
    
    if (overlayEl) overlayEl.classList.remove('hidden');
}

function goToStep(stepId) {
    if (stepId === 'step-checkout-container') {
        if (currentOrder.selectedSeats.length === 0) {
            alert('Пожалуйста, выберите хотя бы одно место в зале для продолжения.');
            return;
        }
        const btn = document.getElementById('final-checkout-btn');
        const status = document.getElementById('account-validation-status');
        const loginF = document.getElementById('client-login-field');
        const passF = document.getElementById('client-pass-field');

        if (btn) btn.disabled = true;
        if (status) {
            status.textContent = 'Пройдите авторизацию для разблокировки бронирования';
            status.style.color = '#ffc107';
        }
        if (loginF) loginF.value = '';
        if (passF) passF.value = '';
    }

    document.querySelectorAll('.step-container').forEach(el => el.classList.add('hidden'));
    
    const targetStep = document.getElementById(stepId);
    if (targetStep) {
        targetStep.classList.remove('hidden');
    } else {
        console.error("Не найден шаг:", stepId);
    }
}

function renderSeats() {
    const container = document.getElementById('dynamic-hall-grid');
    if (!container) return;
    
    container.innerHTML = '';
    let seatNumber = 1;
    
    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 10; c++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = seatNumber;
            const currentSeat = seatNumber; 
            
            if (Math.random() < 0.15) {
                seat.classList.add('occupied');
            } else {
                seat.onclick = () => handleSeatClick(seat, currentSeat);
            }
            
            container.appendChild(seat);
            seatNumber++;
        }
        container.appendChild(document.createElement('br'));
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

function updateCheckoutSummary() {
    const count = currentOrder.selectedSeats.length;
    const sum = count * currentOrder.ticketPrice;
    
    const countEl = document.getElementById('summary-seats-count');
    const sumEl = document.getElementById('summary-total-sum');
    const listEl = document.getElementById('summary-seats-list');

    if (countEl) countEl.textContent = count;
    if (sumEl) sumEl.textContent = sum;
    
    if (listEl) {
        listEl.textContent = count > 0 ? `Выбранные места: ${currentOrder.selectedSeats.join(', ')}` : '';
    }
}

function initStaticEventListeners() {
    const closeBtn = document.getElementById('close-modal-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const overlay = document.getElementById('booking-modal-overlay');
            if (overlay) overlay.classList.add('hidden');
        });
    }

    const authBtn = document.getElementById('submit-account-btn');
    if (authBtn) {
        authBtn.addEventListener('click', () => {
            const login = document.getElementById('client-login-field')?.value || '';
            const pass = document.getElementById('client-pass-field')?.value || '';
            
            if (login.length >= 3 && pass.length >= 4) {
                const statusEl = document.getElementById('account-validation-status');
                if (statusEl) {
                    statusEl.textContent = '✅ Авторизация успешна. Доступ к шлюзу открыт.';
                    statusEl.style.color = '#28a745';
                }
                const checkoutBtn = document.getElementById('final-checkout-btn');
                if (checkoutBtn) checkoutBtn.disabled = false;
            } else {
                alert('Ошибка: Логин должен быть от 3 символов, пароль от 4.');
            }
        });
    }

    const finalBtn = document.getElementById('final-checkout-btn');
    if (finalBtn) {
        finalBtn.addEventListener('click', () => {
            const receiptBlock = document.getElementById('payment-receipt-block');
            if (receiptBlock) {
                receiptBlock.classList.remove('hidden');
                receiptBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
}
