// Старый ассортимент и цены из твоей прошлой версии
const moviesData = {
    "bogatiry": { title: "Богатыри", basePrice: 350, occupied: ["1-3", "1-4", "2-5"] },
    "karamazovy": { title: "Братья Карамазовы", basePrice: 400, occupied: ["3-2", "3-3"] },
    "dengi": { title: "Грязные деньги", basePrice: 380, occupied: ["1-1", "8-5"] },
    "bill": { title: "Убить Билла", basePrice: 450, occupied: ["4-4", "4-5"] },
    "komers": { title: "Комерс", basePrice: 350, occupied: ["2-1"] },
    "koshey": { title: "Кощей", basePrice: 380, occupied: [] },
    "leo": { title: "Лео и Тиг", basePrice: 300, occupied: ["1-1", "1-2"] },
    "michael": { title: "Майкл (2026)", basePrice: 500, occupied: ["5-5"] },
    "momo": { title: "Момо", basePrice: 420, occupied: [] },
    "propast": { title: "Пропасть", basePrice: 390, occupied: ["3-12"] }
};

let currentMovieKey = "";
let selectedSeats = []; // Хранение нескольких выбранных мест одновременно

const hallTopology = [
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    ['VIP', 'VIP', 'VIP', 0, 'VIP', 'VIP', 'VIP', 'VIP', 'VIP', 0, 'VIP', 'VIP', 'VIP'],
    ['VIP', 'VIP', 'VIP', 0, 'VIP', 'VIP', 'VIP', 'VIP', 'VIP', 0, 'VIP', 'VIP', 'VIP']
];

const bookingWindow = document.getElementById('booking-window');
const bookingTitle = document.getElementById('booking-title');
const hallContainer = document.getElementById('cinema-hall');
const selectedCountEl = document.getElementById('selected-count');
const totalPriceEl = document.getElementById('total-price');
const bookBtn = document.getElementById('book-btn');
const comboCheckboxes = document.querySelectorAll('.combo-checkbox');
const invoiceBlock = document.getElementById('invoice-block');
const invoiceDetails = document.getElementById('invoice-details');

function renderHall() {
    hallContainer.innerHTML = '';
    selectedSeats = [];
    comboCheckboxes.forEach(cb => cb.checked = false);
    invoiceBlock.classList.add('hidden');
    updateSummary();

    const activeMovie = moviesData[currentMovieKey];
    bookingTitle.textContent = `Выбор мест и услуг: Фильм «${activeMovie.title}»`;

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

                seatElement.dataset.price = currentPrice;
                seatElement.dataset.id = seatId;
                seatElement.setAttribute('title', `Ряд ${currentRow}, Место ${seatNumber}`);

                if (!seatElement.classList.contains('occupied')) {
                    seatElement.addEventListener('click', () => {
                        // СОХРАНЕНО: Старый функционал мультивыбора мест
                        if (seatElement.classList.contains('selected')) {
                            seatElement.classList.remove('selected');
                            selectedSeats = selectedSeats.filter(item => item.id !== seatId);
                        } else {
                            seatElement.classList.add('selected');
                            selectedSeats.push({ id: seatId, price: currentPrice, row: currentRow, num: seatNumber });
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
    let total = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

    comboCheckboxes.forEach(cb => {
        if (cb.checked) total += parseInt(cb.dataset.price);
    });

    selectedCountEl.textContent = count;
    totalPriceEl.textContent = total;
    bookBtn.disabled = count === 0;
}

comboCheckboxes.forEach(cb => cb.addEventListener('change', updateSummary));

// ВЫБОР ФИЛЬМА: Открывает окно бронирования снизу
function initMoviesSelection() {
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            movieCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            currentMovieKey = card.dataset.movie;
            
            // Показываем скрытое окно бронирования
            bookingWindow.classList.remove('hidden');
            renderHall();

            bookingWindow.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ОФОРМЛЕНИЕ ЗАКАЗА: Генерация чека + вывод ошибки оплаты
bookBtn.addEventListener('click', () => {
    const activeMovie = moviesData[currentMovieKey];
    let ticketSum = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
    let comboSum = 0;
    let comboList = [];

    comboCheckboxes.forEach(cb => {
        if (cb.checked) {
            comboSum += parseInt(cb.dataset.price);
            comboList.push(`• ${cb.parentElement.querySelector('span').textContent}`);
        }
    });

    // Формируем чек текстом
    let invoiceText = `========================================\n`;
    invoiceText += `        ООО "КИНОСФЕРА" — ЭЛЕКТРОННЫЙ ЧЕК       \n`;
    invoiceText += `========================================\n`;
    invoiceText += `Фильм: ${activeMovie.title}\n`;
    invoiceText += `Выбранные места (${selectedSeats.length} шт.):\n`;
    selectedSeats.forEach(s => {
        invoiceText += `  - Ряд ${s.row}, Место ${s.num} (${s.price} ₽)\n`;
    });
    if (comboList.length > 0) {
        invoiceText += `Продукция бара:\n${comboList.join('\n')}\n`;
    }
    invoiceText += `----------------------------------------\n`;
    invoiceText += `Стоимость билетов: ${ticketSum} ₽\n`;
    invoiceText += `Стоимость комбо: ${comboSum} ₽\n`;
    invoiceText += `ИТОГО К ОПЛАТЕ: ${ticketSum + comboSum} ₽\n`;
    invoiceText += `========================================`;

    invoiceDetails.textContent = invoiceText;
    invoiceBlock.classList.remove('hidden'); // Показываем чек и блок ошибки

    invoiceBlock.scrollIntoView({ behavior: 'smooth' });
});

initMoviesSelection();
