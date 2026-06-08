const moviesCatalog = {
    "bogatiry": { title: "Три богатыря", basePrice: 350 },
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

let activeMovieKey = "";
let chosenSeatsList = [];
let accountVerified = false;

// Схема ряда: 6 мест (1), 1 проход (0), 10 мест (1), 1 проход (0), 6 мест (1)
const rowTemplate = [1,1,1,1,1,1, 0, 1,1,1,1,1,1,1,1,1,1, 0, 1,1,1,1,1,1];
const totalRows = 10;

const workspaceSection = document.getElementById('booking-workspace');
const textMovieTitle = document.getElementById('current-movie-title');
const gridHallElement = document.getElementById('dynamic-hall-grid');
const counterSeatsElement = document.getElementById('display-seats-count');
const counterSumElement = document.getElementById('display-total-sum');
const checkoutButton = document.getElementById('final-checkout-btn');
const systemBarCheckboxes = document.querySelectorAll('.bar-item-checkbox');

const fieldUserLogin = document.getElementById('client-login-field');
const fieldUserPass = document.getElementById('client-pass-field');
const buttonVerifyAccount = document.getElementById('submit-account-btn');
const labelValidationStatus = document.getElementById('account-validation-status');

const blockBillReceipt = document.getElementById('payment-receipt-block');
const textReceiptDetails = document.getElementById('receipt-text-container');

function generateHallLayout() {
    if (!gridHallElement) return;
    gridHallElement.innerHTML = '';
    chosenSeatsList = [];
    systemBarCheckboxes.forEach(box => box.checked = false);
    if (blockBillReceipt) blockBillReceipt.classList.add('hidden');
    refreshCalculations();

    const movieInfo = moviesCatalog[activeMovieKey];
    if (textMovieTitle && movieInfo) textMovieTitle.textContent = `Выбор мест: Сеанс «${movieInfo.title}»`;

    for (let r = 0; r < totalRows; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('hall-row');
        
        let seatNum = 1;

        rowTemplate.forEach((slot) => {
            if (slot === 0) {
                const passage = document.createElement('div');
                passage.classList.add('passage');
                rowDiv.appendChild(passage);
            } else {
                const seatDiv = document.createElement('div');
                seatDiv.classList.add('seat');
                
                const rowNum = r + 1;
                const seatId = `${rowNum}-${seatNum}`;
                const price = movieInfo ? movieInfo.basePrice : 350;

                if (Math.random() < 0.2) {
                    seatDiv.classList.add('occupied');
                }

                seatDiv.dataset.id = seatId;

                if (!seatDiv.classList.contains('occupied')) {
                    seatDiv.addEventListener('click', () => {
                        if (seatDiv.classList.contains('selected')) {
                            seatDiv.classList.remove('selected');
                            chosenSeatsList = chosenSeatsList.filter(item => item.id !== seatId);
                        } else {
                            seatDiv.classList.add('selected');
                            chosenSeatsList.push({ id: seatId, price: price, row: rowNum, num: seatNum });
                        }
                        refreshCalculations();
                    });
                }

                rowDiv.appendChild(seatDiv);
                seatNum++;
            }
        });
        gridHallElement.appendChild(rowDiv);
    }
}

function refreshCalculations() {
    const totalSelected = chosenSeatsList.length;
    let totalSum = chosenSeatsList.reduce((sum, item) => sum + item.price, 0);

    systemBarCheckboxes.forEach(box => {
        if (box.checked) totalSum += parseInt(box.dataset.price || 0);
    });

    if (counterSeatsElement) counterSeatsElement.textContent = totalSelected;
    if (counterSumElement) counterSumElement.textContent = totalSum;

    evaluateGatewayUnlock();
}

if (buttonVerifyAccount) {
    buttonVerifyAccount.addEventListener('click', () => {
        const login = fieldUserLogin ? fieldUserLogin.value.trim() : "";
        const pass = fieldUserPass ? fieldUserPass.value.trim() : "";

        if (login.length >= 3 && pass.length >= 4) {
            accountVerified = true;
            if (labelValidationStatus) {
                labelValidationStatus.textContent = `✅ Успешный вход! Клиент: ${login}`;
                labelValidationStatus.style.color = "#00e676";
            }
        } else {
            accountVerified = false;
            if (labelValidationStatus) {
                labelValidationStatus.textContent = "❌ Ошибка: Логин от 3 симв., Пароль от 4 симв.";
                labelValidationStatus.style.color = "#ff5252";
            }
        }
        evaluateGatewayUnlock();
    });
}

function evaluateGatewayUnlock() {
    if (!checkoutButton) return;
    checkoutButton.disabled = !(chosenSeatsList.length > 0 && accountVerified);
}

systemBarCheckboxes.forEach(box => box.addEventListener('change', refreshCalculations));

function initCatalog() {
    const cards = document.querySelectorAll('.movie-premium-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            activeMovieKey = card.dataset.movie;
            if (workspaceSection) {
                workspaceSection.classList.remove('hidden');
                generateHallLayout();
                workspaceSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
        const movie = moviesCatalog[activeMovieKey];
        if (!movie) return;

        let ticketsSum = chosenSeatsList.reduce((sum, item) => sum + item.price, 0);
        let barSum = 0;
        let barItems = [];

        systemBarCheckboxes.forEach(box => {
            if (box.checked) {
                barSum += parseInt(box.dataset.price || 0);
                const span = box.parentElement.querySelector('span');
                if (span) barItems.push(`• ${span.textContent}`);
            }
        });

        let receipt = `========================================\n`;
        receipt += `        СЕТЬ КИНОТЕАТРОВ "КИНОСФЕРА"       \n`;
        receipt += `             ЭЛЕКТРОННЫЙ ЧЕК            \n`;
        receipt += `========================================\n`;
        receipt += `Покупатель: ${fieldUserLogin ? fieldUserLogin.value.trim() : 'Аноним'}\n`;
        receipt += `Фильм: ${movie.title}\n`;
        receipt += `Места (${chosenSeatsList.length} шт.):\n`;
        chosenSeatsList.forEach(item => {
            receipt += `  - Ряд ${item.row}, Место ${item.num} (${item.price} ₽)\n`;
        });
        if (barItems.length > 0) {
            receipt += `Кинобар:\n${barItems.join('\n')}\n`;
        }
        receipt += `----------------------------------------\n`;
        receipt += `Билеты: ${ticketsSum} ₽\n`;
        receipt += `Бар: ${barSum} ₽\n`;
        receipt += `ИТОГО: ${ticketsSum + barSum} ₽\n`;
        receipt += `========================================`;

        if (textReceiptDetails) textReceiptDetails.textContent = receipt;
        if (blockBillReceipt) {
            blockBillReceipt.classList.remove('hidden');
            blockBillReceipt.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

document.addEventListener('DOMContentLoaded', initCatalog);
if (document.readyState !== 'loading') initCatalog();
