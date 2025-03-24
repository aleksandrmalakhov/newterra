// Обратный отсчет (существующий код)
const countDownDate = new Date("May 1, 2025 00:00:00").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Время вышло!";
    }
}, 1000);

// Логика для пожеланий
const wishForm = document.getElementById("wish-form");
const nameInput = document.getElementById("name-input");
const cityInput = document.getElementById("city-input");
const wishInput = document.getElementById("wish-input");
const wishesList = document.getElementById("wishes-list");

// Загрузка пожеланий из localStorage
let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

// Функция для форматирования даты и времени
function formatDateTime(date) {
    const optionsDate = {day: '2-digit', month: '2-digit', year: 'numeric'};
    const optionsTime = {hour: '2-digit', minute: '2-digit', hour12: false};
    const formattedDate = date.toLocaleDateString('ru-RU', optionsDate); // Дата в формате ДД.ММ.ГГГГ
    const formattedTime = date.toLocaleTimeString('ru-RU', optionsTime); // Время в формате ЧЧ:ММ
    return `${formattedDate}, ${formattedTime}`;
}

// Отображение пожеланий
function displayWishes() {
    wishesList.innerHTML = "";
    wishes.forEach((wish, index) => {
        const wishItem = document.createElement("div");
        wishItem.classList.add("wish-item", "animate__animated", "animate__fadeIn");

        wishItem.innerHTML = `
            <div class="wish-header">
                <span>${wish.name}</span>
                <span>${wish.city}</span>
            </div>
            <div class="wish-text">${wish.text}</div>
            <div class="wish-footer">${wish.date}</div>`
        // <button onclick="deleteWish(${index})">Удалить</button>
        ;
        wishesList.appendChild(wishItem);
    });
}

// Добавление пожелания
wishForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const city = cityInput.value.trim();
    const text = wishInput.value.trim();

    if (name && city && text) {
        const date = formatDateTime(new Date()); // Форматированная дата и время
        wishes.push({name, city, text, date});
        localStorage.setItem("wishes", JSON.stringify(wishes));
        nameInput.value = "";
        cityInput.value = "";
        wishInput.value = "";
        displayWishes();
    }
});

//Удаление пожелания
function deleteWish(index) {
    const wishItem = document.querySelectorAll(".wish-item")[index];
    wishItem.classList.add("animate__animated", "animate__fadeOut");

//Удаляем элемент после завершения анимации
    wishItem.addEventListener("animationend", () => {
        wishes.splice(index, 1);
        localStorage.setItem("wishes", JSON.stringify(wishes));
        displayWishes();
    });
}

// Инициализация
displayWishes();