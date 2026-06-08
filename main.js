// База данных фильмов и состояния их залов
const moviesData = {
    "bogatiry": { title: "Три богатыря", basePrice: 350, occupied: ["1-3", "1-4", "2-5"] },
    "karamazovy": { title: "Братья Карамазовы", basePrice: 400, occupied: ["3-2", "3-3", "5-10", "5-11"] },
    "dengi": { title: "Грязные деньги", basePrice: 380, occupied: ["1-1", "1-2", "8-5"] },
    "bill": { title: "Убить Билла", basePrice: 450, occupied: ["4-4", "4-5", "4-6", "9-2"] },
    "komers": { title: "Комерс", basePrice: 350, occupied: ["2-1", "2-2", "10-5"] },
    "koshey": { title: "Кощей", basePrice: 380, occupied: [] },
    "leo": { title: "Лео и Тиг", basePrice: 300, occupied: ["1-1", "1-2", "1-3", "1-4"] },
    "michael": { title: "Майкл (2026)", basePrice: 500, occupied: ["5-5", "5-6", "6-6", "9-4", "9-5"] },
    "momo": { title: "Момо", basePrice: 420, occupied: ["7-7"] },
    "propast": { title: "Пропасть", basePrice: 390, occupied: ["3-12", "3-13"] }
};

// Храним системное имя выбранного фильма (по умолчанию - первый)
let currentMovieKey = "bogatiry";
let selectedSeats = [];

// Топология: 1 = обычное место, 0 = проход, 'VIP' = диван
const hallTopology = [
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    ['VIP', 'VIP', 'VIP', 0, 'VIP', 'VIP', 'VIP', 'VIP', 'VIP', 0, 'VIP', 'VIP', 'VIP'],
    ['VIP', 'VIP', 'VIP', 0, 'VIP', 'VIP', 'VIP', 'VIP', 'VIP', 0, 'VIP', 'VIP', 'VIP']
];

const hallContainer = document.getElementById('cinema-hall');
const selectedCountEl = document.getElementById('selected-count');
const totalPriceEl = document.getElementById('total-price');
const bookBtn = document.getElementById('book-btn');

// ИСПРАВЛЕНО: Функция теперь гарантированно зачищает старое состояние перед рендером
function renderHall() {
    hallContainer.innerHTML = '';
    selectedSeats = [];
    updateSummary();

    const activeMovie = moviesData[currentMovieKey];

    hallTopology.forEach((rowPattern, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('hall-row');

        let seatNumber = 1;

        rowPattern.forEach((cellType) => {
            if (cellType === 0) {
                const passage = document.createElement('div');
                passage.classList.add('passage');
                rowElement.appendChild(passage);
            } else {
                const seatElement = document.createElement('div');
                seatElement.classList.add('seat');

                const currentRow = rowIndex + 1;
                const seatId = `${currentRow}-${seatNumber}`;

                let currentPrice = cellType === 'VIP' ? activeMovie.basePrice * 2 : activeMovie.basePrice;

                if (activeMovie.occupied.includes(seatId)) {
                    seatElement.classList.add('occupied');
                }

                if (cellType === 'VIP') seatElement.classList.add('vip');

                seatElement.setAttribute('title', `Ряд ${currentRow}, Место ${seatNumber} (${currentPrice}₽)`);
                seatElement.dataset.price = currentPrice;
                seatElement.dataset.id = seatId;

                if (!seatElement.classList.contains('occupied')) {
                    seatElement.addEventListener('click', () => {
                        if (seatElement.classList.contains('selected')) {
                            seatElement.classList.remove('selected');
                            selectedSeats = selectedSeats.filter(item => item.id !== seatId);
                        } else {
                            seatElement.classList.add('selected');
                            selectedSeats.push({ id: seatId, price: currentPrice });
                        }
                        updateSummary();
                    });
                }

                rowElement.appendChild(seatElement);
                seatNumber++;
            }
        });
        hallContainer.appendChild(rowElement);
    });
}

function updateSummary() {
    const count = selectedSeats.length;
    const total = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
    selectedCountEl.textContent = count;
    totalPriceEl.textContent = total;
    bookBtn.disabled = count === 0;
}

// ИСПРАВЛЕНО: Переключение фильмов переведено на архитектуру безопасных CSS-классов
function initMoviesSelection() {
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            // Удаляем класс у старого активного фильма
            movieCards.forEach(c => c.classList.remove('active'));

            // Вешаем класс на новый выбранный фильм
            card.classList.add('active');

            currentMovieKey = card.dataset.movie;

            renderHall();

            document.querySelector('.booking-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

bookBtn.addEventListener('click', () => {
    alert(`Билеты успешно оформлены! Сумма: ${totalPriceEl.textContent}₽.`);

    selectedSeats.forEach(seat => {
        moviesData[currentMovieKey].occupied.push(seat.id);
    });

    renderHall();
});

// Полный запуск экосистемы сайта
initMoviesSelection();
renderHall();
