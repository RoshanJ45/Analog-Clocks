    function updateClock() {
const now = new Date();
const hours = now.getHours() % 12;
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const hourDeg = (hours * 30) + (0.5 * minutes);
const minuteDeg = (minutes * 6) + (0.1 * seconds);
const secondDeg = seconds * 6;
document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}
setInterval(updateClock, 1000);
