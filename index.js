
function timer() {
    const time = new Date();
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

timer();

