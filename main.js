// База данных фильмов с актуальными рыночными ценами на начало июня 2026 года
const moviesData = {
    "bogatiry": { title: "Три богатыря", basePrice: 380, occupied: ["1-3", "1-4", "2-5"] },
    "karamazovy": { title: "Братья Карамазовы", basePrice: 450, occupied: ["3-2", "3-3", "5-10"] },
    "dengi": { title: "Грязные деньги", basePrice: 420, occupied: ["1-1", "1-2", "8-5"] },
    "bill": { title: "Убить Билла", basePrice: 500, occupied: ["4-4", "4-5", "4-6"] },
    "komers": { title: "Комерс", basePrice: 400, occupied: ["2-1", "2-2"] },
    "koshey": { title: "Кощей", basePrice: 420, occupied: [] },
    "leo": { title: "Лео и Тиг", basePrice: 350, occupied: ["1-1", "1-2"] },
    "michael": { title: "Майкл (2026)", basePrice: 650, occupied: ["5-5", "5-6", "6-6"] },
    "momo": { title: "Момо", basePrice: 480, occupied: ["7-7"] },
    "propast": { title: "Пропасть", basePrice: 450, occupied: ["3-12", "3-13"] }
};

let currentMovieKey = "bogatiry";
let selectedSeats = []; 

// ИСПРАВЛЕНО: Убраны все VIP элементы из топологии зала, оставлены только проходы и обычные места
const hallTopology = [
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1],
    [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1]
];

const hallContainer = document.getElementById('cinema-hall');
const selectedCountEl = document.getElementById('selected-count');
const totalPriceEl = document.getElementById('total-price');
const bookBtn = document.getElementById('book-btn');

const loginInput = document.getElementById('auth-login');
const passwordInput = document.getElementById('auth-password');
const statusMsg = document.getElementById('auth-status-msg');
const serviceCheckboxes = document.querySelectorAll('.service-checkbox');

function renderHall() {
    hallContainer.innerHTML = ''; 
    selectedSeats = []; 
    
    // Сбрасываем чекбоксы услуг при переключении сеанса фильма
    serviceCheckboxes.forEach(cb => cb.checked = false);
    
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
                
                // ИСПРАВЛЕНО: Расчет идет строго по базовой цене фильма без VIP модификаторов
                let currentPrice = activeMovie.basePrice;

                if (activeMovie.occupied.includes(seatId)) {
                    seatElement.classList.add('occupied');
                }

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

// Изменение логики подсчета: учитываются билеты + отмеченные чекбоксы услуг
function updateSummary() {
    const seatsCount = selectedSeats.length;
    let total = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
    
    // Считаем стоимость доп. услуг
    serviceCheckboxes.forEach(cb => {
        if (cb.checked) {
            total += parseInt(cb.dataset.price);
        }
    });

    selectedCountEl.textContent = seatsCount;
    totalPriceEl.textContent = total;
    
    validateForm();
}

// Проверка: заполнены ли поля регистрации и выбраны ли билеты
function validateForm() {
    const isAuthValid = loginInput.value.trim().length > 2 && passwordInput.value.trim().length > 3;
    const hasTickets = selectedSeats.length > 0;
    
    if (!hasTickets) {
        statusMsg.textContent = "Выберите хотя бы одно место в зале";
        statusMsg.style.color = "#a0a0b8";
        bookBtn.disabled = true;
    } else if (!isAuthValid) {
        statusMsg.textContent = "Для покупки билетов введите логин (от 3 симв.) и пароль (от 4 симв.)";
        statusMsg.style.color = "#e74c3c";
        bookBtn.disabled = true;
    } else {
        statusMsg.textContent = "Данные успешно заполнены. Можно переходить к оплате!";
        statusMsg.style.color = "#2ecc71";
        bookBtn.disabled = false;
    }
}

// Привязка слушателей к форме регистрации и чекбоксам
loginInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
serviceCheckboxes.forEach(cb => cb.addEventListener('change', updateSummary));

function initMoviesSelection() {
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            movieCards.forEach(c => c.classList.remove('active'));
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
    alert(`Уважаемый ${loginInput.value}! Бронирование успешно подтверждено.\nИтоговая сумма к оплате: ${totalPriceEl.textContent}₽.\nКод брони отправлен на указанный аккаунт.`);
    
    selectedSeats.forEach(seat => {
        moviesData[currentMovieKey].occupied.push(seat.id);
    });
    
    // Очищаем форму авторизации после успешной покупки
    loginInput.value = '';
    passwordInput.value = '';
    
    renderHall();
});

// Первичный старт скрипта
initMoviesSelection();
renderHall();
