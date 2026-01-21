
const display = document.getElementById("display");
const buttons = document.getElementById("btns-container");


buttons.addEventListener("click", (event) => {
    const button = event.target;

    if(button.tagName !== "BUTTON") return;

    const value = button.textContent;
    if(value === "=") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "ERROR";
        }
    } else if (value === "C") {
        display.value = "";
    } else {
        display.value += value;
    }
})

