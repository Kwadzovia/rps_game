console.log("Rock Paper Scissors :)");

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

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    let user_input = prompt("rock, paper, scissors");
    return (user_input.toLowerCase());
}


function playGame() {

    function playRound(humanChoice, computerChoice) {
        console.log(`you chose: ${humanChoice}\ncpu chose: ${computerChoice}`);

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

    let humanChoice = null;
    let computerChoice = null;
    let humanScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        console.log("Round " + i);
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        switch (playRound(humanChoice, computerChoice)) {
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

        console.log(`Your score: ${humanScore}\nCpu Score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You WIN");
    }
    else if (humanScore < computerChoice) {
        console.log("You lost...");
    }
    else {
        console.log("Its a draw.");
    }
}

playGame();