

const rollDiceBtn = document.getElementById("rollDiceBtn");

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i=0; i<numOfDice; i++) {
        const pick = Math.floor(Math.random() * 6) + 1;
        values.push(pick);
        images.push(`<img src="dice_images/${pick}.png" alt="Dice ${pick}">`);
    }

    diceResult.textContent = `Rolled dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
}

rollDiceBtn.addEventListener("click", rollDice);


