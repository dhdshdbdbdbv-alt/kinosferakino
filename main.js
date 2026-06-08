const moviesData = {
    "bogatiry": { title: "Богатыри", basePrice: 350 },
    "karamazovy": { title: "Братья Карамазовы", basePrice: 400 },
    "dengi": { title: "Грязные деньги", basePrice: 380 },
    "bill": { title: "Убить Билла", basePrice: 450 },
    "komers": { title: "Комерс", basePrice: 350 },
    "koshey": { title: "Кощей", basePrice: 380 },
    "leo": { title: "Лео и Тиг", basePrice: 300 },
    "michael": { title: "Майкл (2026)", basePrice: 500 },
    "momo": { title: "Момо", basePrice: 420 },
    "propast": { title: "Пропасть", basePrice: 390 }
};

let currentMovieKey = "";
let selectedSeats = [];

// Последние два ряда содержат сдвоенные кресла (по 2 единицы вместо одного старого VIP-дивана)
const hallTopology = [
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    ['D', 'D', 'D', 0, 'D', 'D', 'D', 'D', 'D', 0, 'D', 'D', 'D'],
    ['D', 'D', 'D', 0, 'D', 'D', 'D', 'D', 'D', 0, 'D', 'D', 'D']
];

const bookingWindow = document.getElementById('booking-window');
const bookingTitle = document.getElementById('booking-title');
const hallContainer = document.getElementById('cinema-hall');
const selectedCountEl = document.getElementById('selected-count');
const totalPriceEl = document.getElementById('total-price');
const bookBtn = document.getElementById('book-btn');
const barCheckboxes = document.querySelectorAll('.bar-checkbox');
const invoiceBlock = document.getElementById('invoice-block');
const invoiceDetails = document.getElementById('invoice-details');

const loginInput = document.getElementById('auth-login');
const passwordInput = document.getElementById('auth-password');
const statusMsg = document.getElementById('auth-status-msg');

function renderHall() {
    hallContainer.innerHTML = '';
    selectedSeats = [];
    barCheckboxes.forEach(cb => cb.checked = false);
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
                let currentPrice = activeMovie.basePrice;

                if (cellType === 'D') {
                    seatElement.classList.add('double-seat');
                }

                // Срабатывание вероятностной генерации 1 к 5 (20%)
                if (Math.random() < 0.2) {
                    seatElement.classList.add('occupied');
                }

                seatElement.dataset.price = currentPrice;
                seatElement.dataset.id = seatId;
                seatElement.setAttribute('title', `Ряд ${currentRow}, Место ${seatNumber}`);

                if (!seatElement.classList.contains('occupied')) {
                    seatElement.addEventListener('click', () => {
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

    barCheckboxes.forEach(cb => {
        if (cb.checked) total += parseInt(cb.dataset.price);
    });

    selectedCountEl.textContent = count;
    totalPriceEl.textContent = total;
    
    validateRegistration();
}

function validateRegistration() {
    const isFormFilled = loginInput.value.trim().length >= 3 && passwordInput.value.trim().length >= 4;
    const hasSeats = selectedSeats.length > 0;

    if (!hasSeats) {
        statusMsg.textContent = "Выберите места на схеме зала";
        statusMsg.style.color = "#ff7675";
        bookBtn.disabled = true;
    } else if (!isFormFilled) {
        statusMsg.textContent = "Заполните личный кабинет (Логин от 3 симв., Пароль от 4 симв.)";
        statusMsg.style.color = "#ff7675";
        bookBtn.disabled = true;
    } else {
        statusMsg.textContent = "Аккаунт готов к регистрации. Можно оформлять заказ!";
        statusMsg.style.color = "#2ecc71";
        bookBtn.disabled = false;
    }
}

loginInput.addEventListener('input', validateRegistration);
passwordInput.addEventListener('input', validateRegistration);
barCheckboxes.forEach(cb => cb.addEventListener('change', updateSummary));

function initMoviesSelection() {
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            movieCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            currentMovieKey = card.dataset.movie;
            
            bookingWindow.classList.remove('hidden');
            renderHall();

            bookingWindow.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

bookBtn.addEventListener('click', () => {
    const activeMovie = moviesData[currentMovieKey];
    let ticketSum = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
    let barSum = 0;
    let barList = [];

    barCheckboxes.forEach(cb => {
        if (cb.checked) {
            barSum += parseInt(cb.dataset.price);
            barList.push(`• ${cb.parentElement.querySelector('span').textContent}`);
        }
    });

    let invoiceText = `========================================\n`;
    invoiceText += `        ООО "КИНОСФЕРА" — ЭЛЕКТРОННЫЙ ЧЕК       \n`;
    invoiceText += `========================================\n`;
    invoiceText += `Пользователь: ${loginInput.value.trim()}\n`;
    invoiceText += `Фильм: ${activeMovie.title}\n`;
    invoiceText += `Места (${selectedSeats.length} шт.):\n`;
    selectedSeats.forEach(s => {
        invoiceText += `  - Ряд ${s.row}, Место ${s.num} (${s.price} ₽)\n`;
    });
    if (barList.length > 0) {
        invoiceText += `Продукция кинобара:\n${barList.join('\n')}\n`;
    }
    invoiceText += `----------------------------------------\n`;
    invoiceText += `Стоимость билетов: ${ticketSum} ₽\n`;
    invoiceText += `Стоимость товаров: ${barSum} ₽\n`;
    invoiceText += `ИТОГО К ОПЛАТЕ: ${ticketSum + barSum} ₽\n`;
    invoiceText += `========================================`;

    invoiceDetails.textContent = invoiceText;
    invoiceBlock.classList.remove('hidden'); 

    invoiceBlock.scrollIntoView({ behavior: 'smooth' });
});

initMoviesSelection();
