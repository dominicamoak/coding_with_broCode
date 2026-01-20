
const display = document.getElementById("display");
const buttons = document.getElementById("btns-container");

//function calculatorDisplay() {
//    switch(buttons) {
//        case "+":
//            display.textContent += "+";
//            break;
//    }
//}



buttons.addEventListener("click", (event) => {
    const button = event.target;

    if(button.tagName !== "BUTTON") return;

    if(button === "=") {
        let result = Number(display.value);
        display.value = result;
    } else if(button !== "=") {
        display.value += button.textContent;
    } 

    

    function calculate() {
        Math.floor(Numbers(display.value));
    }
})

