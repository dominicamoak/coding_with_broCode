
const userTemp = document.getElementById("userTemp");
const toFehrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

function celToFahrenheit() {
    const userInput = Number(userTemp.value);
    if (Number.isNaN(userInput)) {
        return null;
    } else {
        return ((userInput * (9/5)) + 32).toFixed(2);
    }
}

function fahToCelcius() {
    const userInput = Number(userTemp.value);
    if (Number.isNaN(userInput)) {
        return null;
        result.textContent = `Please input a number`;
    } else {
        return ((userInput - 32) * (5/9)).toFixed(2);
    }
}

submitBtn.addEventListener("click", () => {
    if (userTemp.value == "") {
        result.textContent = `Please input a number`;
    } else if (celToFahrenheit() == null || fahToCelcius() == null) {
        result.textContent = `Please input an actual number`;
    } else {
        if (toFehrenheit.checked) {
            result.textContent = `${celToFahrenheit()} ℉`;
        } else if (toCelcius.checked) {
            result.textContent = `${fahToCelcius()} ℃`;
        } else {
            result.textContent = `Please check one of the above options`;
        }
    }
})


