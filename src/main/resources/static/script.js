// Установите дату, до которой идет отсчет
const countDownDate = new Date("May 1, 2025 00:00:00").getTime();

const x = setInterval(function() {

    // Получите текущую дату и время
    const now = new Date().getTime();

    // Найдите разницу между текущей датой и датой отсчета
    const distance = countDownDate - now;

    // Расчет времени для дней, часов, минут и секунд
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Выведите результат в элементы с соответствующими id
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Если отсчет завершен, выведите сообщение
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Время вышло!";
    }
}, 1000);
