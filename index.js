
/// DOM ELEMENTS
const choiceBoard = document.getElementById("choiceBoard")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const endGameBtn = document.getElementById("endGame")

let playerChoice = document.getElementById("playerChoice")
let computerChoice = document.getElementById("computerChoice")

const results = document.getElementById("results")

const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")

/// UNIVERSAL VARIABLES
let userChoice = "";
let aiChoice = "";
let playerWin = false;
let userScore = 0;
let aiScore = 0;

results.style.visibility = "hidden";
playerScore.textContent += ` ${userScore}`;
computerScore.textContent += ` ${aiScore}`;

/// RULES
// rock beats scissors
// scissors beats paper
// paper beats rock

/// LOGIC
// 1. Player selects choice
// 2. Compuetr choice is made exactly when the player choice is made
// 3. Register both choices in the finalChoices div
// 4. Check the rules for approapriate results using choices
// 5. Display result in results h1
// 6. Update the scoreboard

/// CODE
choiceBoard.addEventListener("click", (event) => {
    function clearChoices() {
        userChoice = "";
        aiChoice = "";
        playerWin = false;

        playerChoice.textContent = "Player: "
        computerChoice.textContent = "Computer: "
    }

    clearChoices();

    if (event.target.classList.value === "rockClass") {
        userChoice = "Rock";
    } else if (event.target.classList.value === "paperClass") {
        userChoice = "Paper";
    } else if (event.target.classList.value === "scissorsClass") {
        userChoice = "Scissors";
    }

    function computerLogic() {
        let picker = Math.floor(Math.random() * 3) + 1;
        switch (picker) {
            case 1:
                aiChoice = "Rock";
                break;
            case 2:
                aiChoice = "Paper";
                break;
            case 3:
                aiChoice = "Scissors";
                break;
        }
    }

    computerLogic();

    playerChoice.textContent += ` ${userChoice}`;
    computerChoice.textContent += ` ${aiChoice}`;

    function winningLogic() {
        if (userChoice === "Rock" && aiChoice === "Scissors") {
            results.textContent = "YOU WIN!";
            playerWin = true;
        } else if (aiChoice === "Rock" && userChoice === "Scissors") {
            results.textContent = "YOU LOSE!";
            playerWin = false;
        } else if (userChoice === "Scissors" && aiChoice === "Paper") {
            results.textContent = "YOU WIN!";
            playerWin = true;
        } else if (aiChoice === "Scissors" && userChoice === "Paper") {
            results.textContent = "YOU LOSE!";
            playerWin = false;
        } else if (userChoice === "Paper" && aiChoice === "Rock") {
            results.textContent = "YOU WIN!";
            playerWin = true;
        } else if (aiChoice === "Paper" && userChoice === "Rock") {
            results.textContent = "YOU LOSE!";
            playerWin = false;
        } else if (userChoice === aiChoice) {
            results.textContent = "IT'S A TIE";
            playerWin = "";
        }

        results.style.visibility = "visible";
    }

    winningLogic();

    function scoringLogic() {
        if (playerWin === true) {
            userScore++;
            playerScore.textContent = `Player Score: ${userScore}`;
        } else if (playerWin === false) {
            aiScore++;
            computerScore.textContent = `Computer Score: ${aiScore}`;
        }
    }

    scoringLogic();

    endGameBtn.addEventListener("click", () => {
        userChoice = "";
        aiChoice = "";
        playerWin = false;
        userScore = 0;
        aiScore = 0;

        playerChoice.textContent = `Player: ${userChoice}`;
        computerChoice.textContent = `Computer: ${aiChoice}`;
        results.style.visibility = "hidden";
        playerScore.textContent = `Player Score: ${userScore}`;
        computerScore.textContent = `Computer Score: ${aiScore}`;
    })
})




