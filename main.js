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

// Топология зала под твою сетку: 6 мест, проход, 10 мест, проход, 6 мест
const structureTemplate = [
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

// Селекторы DOM
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
    gridHallElement.innerHTML = '';
    chosenSeatsList = [];
    systemBarCheckboxes.forEach(box => box.checked = false);
    blockBillReceipt.classList.add('hidden');
    refreshCalculations();

    const currentMovieInfo = moviesCatalog[activeMovieKey];
    textMovieTitle.textContent = `Выбор мест: Сеанс «${currentMovieInfo.title}»`;

    structureTemplate.forEach((rowPattern, lineIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('hall-row'); // Твой класс из css.css
        let calculatedSeatNum = 1;

        rowPattern.forEach((slotType) => {
            if (slotType === 0) {
                const spacer = document.createElement('div');
                spacer.classList.add('passage'); // Твой класс из css.css
                rowDiv.appendChild(spacer);
            } else {
                const nodeSeat = document.createElement('div');
                nodeSeat.classList.add('seat'); // Твой класс из css.css
                
                const virtualRow = lineIndex + 1;
                const uniquelyId = `${virtualRow}-${calculatedSeatNum}`;
                let finalSeatCost = currentMovieInfo.basePrice;

                // Рандомное заполнение 1 к 5 (ровно 20% занятых мест)
                if (Math.random() < 0.2) {
                    nodeSeat.classList.add('occupied');
                }

                nodeSeat.dataset.price = finalSeatCost;
                nodeSeat.dataset.id = uniquelyId;

                if (!nodeSeat.classList.contains('occupied')) {
                    nodeSeat.addEventListener('click', () => {
                        if (nodeSeat.classList.contains('selected')) {
                            nodeSeat.classList.remove('selected');
                            chosenSeatsList = chosenSeatsList.filter(item => item.id !== uniquelyId);
                        } else {
                            nodeSeat.classList.add('selected');
                            chosenSeatsList.push({ id: uniquelyId, price: finalSeatCost, row: virtualRow, num: calculatedSeatNum });
                        }
                        refreshCalculations();
                    });
                }

                rowDiv.appendChild(nodeSeat);
                calculatedSeatNum++;
            }
        });
        gridHallElement.appendChild(rowDiv);
    });
}

function refreshCalculations() {
    const totalSelectedTickets = chosenSeatsList.length;
    let computedMoneySum = chosenSeatsList.reduce((acc, current) => acc + current.price, 0);

    systemBarCheckboxes.forEach(box => {
        if (box.checked) computedMoneySum += parseInt(box.dataset.price);
    });

    counterSeatsElement.textContent = totalSelectedTickets;
    counterSumElement.textContent = computedMoneySum;
    
    evaluateGatewayUnlock();
}

// Слушатель для физической кнопки верификации аккаунта
buttonVerifyAccount.addEventListener('click', () => {
    const rawLogin = fieldUserLogin.value.trim();
    const rawPass = fieldUserPass.value.trim();

    if (rawLogin.length >= 3 && rawPass.length >= 4) {
        accountVerified = true;
        labelValidationStatus.textContent = `✅ Успешный вход! Клиент: ${rawLogin}`;
        labelValidationStatus.style.color = "#00e676";
        evaluateGatewayUnlock();
    } else {
        accountVerified = false;
        labelValidationStatus.textContent = "❌ Ошибка: Логин от 3 симв., Пароль от 4 симв.";
        labelValidationStatus.style.color = "#ff5252";
        evaluateGatewayUnlock();
    }
});

function evaluateGatewayUnlock() {
    if (chosenSeatsList.length > 0 && accountVerified) {
        checkoutButton.disabled = false;
    } else {
        checkoutButton.disabled = true;
    }
}

systemBarCheckboxes.forEach(box => box.addEventListener('change', refreshCalculations));

function bindCatalogClicks() {
    const allMovieNodes = document.querySelectorAll('.movie-premium-card');
    allMovieNodes.forEach(node => {
        node.addEventListener('click', () => {
            allMovieNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            
            activeMovieKey = node.dataset.movie;
            workspaceSection.classList.remove('hidden');
            generateHallLayout();

            workspaceSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

checkoutButton.addEventListener('click', () => {
    const pickedMovie = moviesCatalog[activeMovieKey];
    let sumTickets = chosenSeatsList.reduce((acc, current) => acc + current.price, 0);
    let sumGoods = 0;
    let selectedProductsReport = [];

    systemBarCheckboxes.forEach(box => {
        if (box.checked) {
            sumGoods += parseInt(box.dataset.price);
            selectedProductsReport.push(`• ${box.parentElement.querySelector('span').textContent}`);
        }
    });

    let paperLayout = `========================================\n`;
    paperLayout += `        СЕТЬ КИНОТЕАТРОВ "КИНОСФЕРА"       \n`;
    paperLayout += `             ЭЛЕКТРОННЫЙ ЧЕК            \n`;
    paperLayout += `========================================\n`;
    paperLayout += `Аккаунт покупателя: ${fieldUserLogin.value.trim()}\n`;
    paperLayout += `Фильм: ${pickedMovie.title}\n`;
    paperLayout += `Билеты (${chosenSeatsList.length} шт.):\n`;
    chosenSeatsList.forEach(ticket => {
        paperLayout += `  - Ряд ${ticket.row}, Место ${ticket.num} (${ticket.price} ₽)\n`;
    });
    if (selectedProductsReport.length > 0) {
        paperLayout += `Продукция кинобара:\n${selectedProductsReport.join('\n')}\n`;
    }
    paperLayout += `----------------------------------------\n`;
    paperLayout += `Стоимость билетов: ${sumTickets} ₽\n`;
    paperLayout += `Стоимость товаров: ${sumGoods} ₽\n`;
    paperLayout += `ИТОГО К ОПЛАТЕ: ${sumTickets + sumGoods} ₽\n`;
    paperLayout += `========================================`;

    textReceiptDetails.textContent = paperLayout;
    blockBillReceipt.classList.remove('hidden'); 
    blockBillReceipt.scrollIntoView({ behavior: 'smooth' });
});

// Инициализация кликов по карточкам при загрузке
bindCatalogClicks();
