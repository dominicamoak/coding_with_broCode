
function timer() {
    const time = new Date();
    let hours = time.getHours().toString().padStart(2, 0);
    const minutes = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);
    let timeframe = hours >= 12 ? "PM" : "AM";

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${timeframe}`;
}

timer();
setInterval(timer, 1000);

