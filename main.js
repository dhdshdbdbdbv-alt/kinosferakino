/**
 * main.js — Логика кинотеатра "КИНОСФЕРА"
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

let currentOrder = { movie: null, selectedSeats: [], ticketPrice: 500 };

document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    initEventListeners();
});

// 1. Отрисовка каталога
function renderCatalog() {
    const grid = document.getElementById('movies-grid');
    grid.innerHTML = '';
    moviesData.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `<img src="${movie.poster}" alt="${movie.title}"><h3>${movie.title}</h3>`;
        card.onclick = () => openModal(movie);
        grid.appendChild(card);
    });
}

// 2. Открытие модального окна
function openModal(movie) {
    currentOrder.movie = movie;
    currentOrder.selectedSeats = [];
    
    document.getElementById('modal-movie-title').textContent = movie.title;
    document.getElementById('modal-movie-poster').src = movie.poster;
    document.getElementById('modal-text-description').textContent = movie.description;
    
    document.getElementById('booking-modal-overlay').classList.remove('hidden');
    goToStep('step-sessions-container');
    renderSeats();
    updateSummary();
}

// 3. Управление шагами
window.goToStep = function(stepId) {
    document.querySelectorAll('.step-container').forEach(el => el.classList.add('hidden'));
    document.getElementById(stepId).classList.remove('hidden');
};

// 4. Логика кресел
function renderSeats() {
    const container = document.getElementById('dynamic-hall-grid');
    container.innerHTML = '';
    let seatCount = 1;
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 10; c++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = seatCount;
            if (Math.random() < 0.2) seat.classList.add('occupied');
            seat.onclick = () => toggleSeat(seat, parseInt(seat.textContent));
            container.appendChild(seat);
            seatCount++;
        }
        container.appendChild(document.createElement('br'));
    }
}

function toggleSeat(el, number) {
    if (el.classList.contains('occupied')) return;
    el.classList.toggle('selected');
    if (el.classList.contains('selected')) {
        currentOrder.selectedSeats.push(number);
    } else {
        currentOrder.selectedSeats = currentOrder.selectedSeats.filter(s => s !== number);
    }
    updateSummary();
}

// 5. Итоги и оплата
function updateSummary() {
    const count = currentOrder.selectedSeats.length;
    document.getElementById('summary-seats-count').textContent = count;
    document.getElementById('summary-total-sum').textContent = count * currentOrder.ticketPrice;
    document.getElementById('final-checkout-btn').disabled = count === 0;
}

function initEventListeners() {
    document.getElementById('close-modal-btn').onclick = () => document.getElementById('booking-modal-overlay').classList.add('hidden');
    
    document.getElementById('submit-account-btn').onclick = () => {
        const login = document.getElementById('client-login-field').value;
        if (login.length >= 3) {
            document.getElementById('account-validation-status').textContent = '✅ Данные подтверждены';
            document.getElementById('account-validation-status').style.color = '#28a745';
        }
    };

    document.getElementById('final-checkout-btn').onclick = () => {
        document.getElementById('payment-receipt-block').classList.remove('hidden');
    };
}
