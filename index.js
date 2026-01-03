
const header = document.getElementById("header");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

let counter = 0;
header.textContent = counter;

function increaseNumber() {
    counter++;
    header.textContent = counter;
}
function decreaseNumber() {
    counter--;
    header.textContent = counter;
}
function resetNumber() {
    counter = 0;
    header.textContent = counter;
}

increaseBtn.addEventListener("click", increaseNumber);
decreaseBtn.addEventListener("click", decreaseNumber);
resetBtn.addEventListener("click", resetNumber);