
const display = document.getElementById("display");
const buttons = document.getElementById("btns-container");

// First Calculator Logic
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


// Second Calculator Logic
// let firstValue = null;
// let operand = null;
// let waitingForSecondValue = false;

// buttons.addEventListener("click", (event) => {
//     const button = event.target;
//     const value = button.textContent;

//     if(!button) return;

//     if(!isNaN(value) || value===".") {
//         handleNumber(value);
//     } else if(value==="C") {
//         clearCalculator();
//     } else if(value==="=") {
//         calculate();
//     } else {
//         handleOperator(value);
//     }
// });

// function handleNumber(number) {
//     if(waitingForSecondValue) {
//         display.value += number;
//         waitingForSecondValue = false;
//     } else {
//         display.value += number;
//     }
// }

// function clearCalculator() {
//     display.value = "";
//     firstValue = null;
//     operand = null;
//     waitingForSecondValue = false;
// }

// function handleOperator(operator) {
//     if(operand !== null) {
//         calculate();
//     }

//     firstValue = Number(display.value);
//     operand = operator;
//     waitingForSecondValue = true;

//     display.value = `${firstValue} ${operator}`;
// }

// function calculate() {
//     if(operand === null || waitingForSecondValue) return;

//     const parts = display.value.split(" ");
//     let secondValue = Number(parts[2]);
//     let result;

//     switch(operand) {
//         case "+":
//             result = firstValue + secondValue;
//             break;
//         case "-":
//             result = firstValue - secondValue;
//             break;
//         case "*":
//             result = firstValue * secondValue;
//             break;
//         case "/":
//             result = secondValue===0 ? "ERROR" : firstValue / secondValue;
//             break;
//         default:
//             return;
//     }

//     display.value = result;
//     firstValue = result;
//     operand = null;
//     waitingForSecondValue = false;
// }

