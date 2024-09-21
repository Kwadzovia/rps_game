//#TODO ADD PLAY AGAIN
//#TODO ADD CPU Choice icons
//#TODO ADD WIN/Loss Message
//#TODO ADD ROUND NUMBER

const maxRounds = 5;

let humanChoice = null;
let computerChoice = null;
let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

let humanScoreSelector = document.querySelector("#user-info-sub");
let cpuScoreSelector = document.querySelector("#cpu-info-sub");

console.log("---------- Rock Paper Scissors :) ----------");

// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    let temp = Math.floor(Math.random() * 3);
    switch (temp) {
        default:
        // When Math.random() returns 1
        case 2:
            return ("rock");
        case 1:
            return ("paper");
        case (0):
            return ("scissors");
    }
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    console.log(`you chose: ${humanChoice}\ncpu chose: ${computerChoice}`);
    gameRound++;

    if (humanChoice === computerChoice) {
        return "draw";
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return "loss";
        }
        else {
            return "win";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return "loss";
        }
        else {
            return "win";
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            return "loss";
        }
        else {
            return "win";
        }
    }
    else {
        console.error("invalid choice");
        return "draw";
    }
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
        case "rock-img":
            humanChoice = "rock";
            break;
        case "paper-img":
            humanChoice = "paper";
            break;
        case "scissors-img":
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
                console.log("---------- You WIN ----------");
            }
            else if (humanScore < computerChoice) {
                console.log("---------- You lost... ----------");
            }
            else {
                console.log("---------- Its a draw. ----------");
            }
        }
    }
});
