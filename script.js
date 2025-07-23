let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter your choice: ");
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    /* human choice is rock */
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return "You Win! rock beats scissors"
    }
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        return "You Loose! paper beats rock"
    }
    if (humanChoice == "rock" && computerChoice == "rock") {
        return "Nobody Wins, both put rock!"
    }
    /* human choice is paper */
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return "You Win! paper beats rock"
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        return "You Loose! scissors beats paper"
    }
    if (humanChoice == "paper" && computerChoice == "paper") {
        return "Nobody Wins, both put paper!"
    }
    /* human choice is scissors */
    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return "You Win! scissors beat paper"
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        return "You Loose! rock beats scissors"
    }
    if (humanChoice == "scissors" && computerChoice == "scissors") {
        return "Nobody Wins, both put scissors!"
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
