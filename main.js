const moviesCatalog = {
    "bogatiry": { title: "Три богатыря", rating: 8.2, genre: "Мультфильм", duration: "1ч 25м", sessions: ["10:00", "14:00"], price: 350 },
    "karamazovy": { title: "Братья Карамазовы", rating: 9.1, genre: "Драма", duration: "3ч 10м", sessions: ["13:00", "18:00"], price: 400 }
};

let activeMovieKey = "";

document.addEventListener('DOMContentLoaded', () => {
    // Выбор города
    document.getElementById('active-city-btn').onclick = (e) => {
        document.querySelector('.city-dropdown-menu').classList.toggle('hidden');
    };

    // Выбор фильма
    document.querySelectorAll('.movie-premium-card').forEach(card => {
        card.onclick = () => {
            activeMovieKey = card.dataset.movie;
            const movie = moviesCatalog[activeMovieKey];
            document.getElementById('booking-workspace').classList.remove('hidden');
            document.getElementById('movie-details').innerHTML = `Жанр: ${movie.genre} | Рейтинг: ${movie.rating} | Длит: ${movie.duration}`;
            
            const slots = document.getElementById('session-time-slots');
            slots.innerHTML = '';
            movie.sessions.forEach(time => {
                const btn = document.createElement('button');
                btn.className = 'time-slot-btn';
                btn.textContent = time;
                btn.onclick = () => {
                    document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    document.getElementById('seats-and-bar-area').classList.remove('hidden');
                    generateHall();
                };
                slots.appendChild(btn);
            });
        };
    });
});

function generateHall() {
    const grid = document.getElementById('dynamic-hall-grid');
    grid.innerHTML = '';
    for(let r=0; r<5; r++) {
        const row = document.createElement('div'); row.className = 'hall-row';
        for(let s=0; s<8; s++) {
            const seat = document.createElement('div'); seat.className = 'seat';
            seat.onclick = () => { seat.classList.toggle('selected'); calculateTotal(); };
            row.appendChild(seat);
        }
        grid.appendChild(row);
    }
}

function calculateTotal() {
    let seatSum = document.querySelectorAll('.seat.selected').length * moviesCatalog[activeMovieKey].price;
    let barSum = 0;
    document.querySelectorAll('.bar-item:checked').forEach(i => barSum += parseInt(i.dataset.price));
    document.getElementById('display-total-sum').textContent = seatSum + barSum;
}
