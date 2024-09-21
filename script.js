const maxRounds = 5;

let humanChoice = null;
let computerChoice = null;
let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

let humanScoreSelector = document.querySelector("#user-info-sub");
let cpuScoreSelector = document.querySelector("#cpu-info-sub");
let roundSelector = document.querySelector("#round-number");
let gameStatusSelector = document.querySelector("#game-status");
let cpuImgSelector = null;

console.log("---------- Rock Paper Scissors :) ----------");

function getComputerChoice() {
    if (cpuImgSelector) {
        cpuImgSelector.style.backgroundColor = null;
    }
    let temp = Math.floor(Math.random() * 3);
    let tempChoice = null;
    switch (temp) {
        case 2:
            tempChoice = "rock";
            break;
        case 1:
            tempChoice = "paper";
            break;
        case (0):
            tempChoice = "scissors";
            break;
    }

    cpuImgSelector = document.querySelector("#cpu-" + tempChoice + "-img");
    cpuImgSelector.style.backgroundColor = "rgba(167, 70, 70, 0.2)";
    return tempChoice;
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    console.log(`you chose: ${humanChoice}\ncpu chose: ${computerChoice}`);
    gameRound++;
    roundSelector.textContent = `Round ${gameRound}`;
    let return_value = null;

    if (humanChoice === computerChoice) {
        return_value = "draw";
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return_value = "loss";
        }
        else {
            return_value = "win";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return_value = "loss";
        }
        else {
            return_value = "win";
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            return_value = "loss";
        }
        else {
            return_value = "win";
        }
    }
    else {
        console.error("invalid choice");
        return_value = "draw";
    }
    gameStatusSelector.textContent = return_value;
    return return_value;
}

let userInputSelector = document.querySelector("#userbox-id");

userInputSelector.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "rgba(0, 255, 153, 0.118)";
});

userInputSelector.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = null;
});

userInputSelector.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "rgba(0, 255, 153, 0.218)";

    switch (e.target.id) {
        case "user-rock-img":
            humanChoice = "rock";
            break;
        case "user-paper-img":
            humanChoice = "paper";
            break;
        case "user-scissors-img":
            humanChoice = "scissors";
            break;
        default:
            humanChoice = null;
    }

    if (gameRound < maxRounds) {

        // Round winner decision
        switch (playRound(humanChoice)) {
            default:
            case "draw":
                console.log("D");
                break;
            case "win":
                console.log("W");
                humanScore++;
                break;
            case "loss":
                console.log("L");
                computerScore++;
                break;
        }
        humanScoreSelector.textContent = humanScore;
        cpuScoreSelector.textContent = computerScore;


        // Game winner printout
        if (gameRound === maxRounds) {
            if (humanScore > computerScore) {
                gameStatusSelector.textContent = "You WIN";
                gameStatusSelector.style.backgroundColor = "rgba(72, 154, 79, 0.2)";

            }
            else if (humanScore < computerScore) {
                gameStatusSelector.textContent = "You lost...";
                gameStatusSelector.style.backgroundColor = "rgba(167, 70, 70, 0.2)";

            }
            else {
                gameStatusSelector.textContent = "It's a draw.";
                gameStatusSelector.style.backgroundColor = "rgba(110, 119, 68, 0.2)";
            }
        }
    }
});
