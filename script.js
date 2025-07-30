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

/* Do not need this anymore

function getHumanChoice() {

    let choice = prompt("Please enter your choice: ");
    return choice.toLowerCase()
}

*/

function displayMessage(msg) {

    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML += `<p>${msg}</p>`;
}

function playRound(humanChoice, computerChoice) {

    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";

    displayMessage("You chose: " + humanChoice);
    displayMessage("Computer chose: " + computerChoice);

    /* human choice is rock */
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        displayMessage("You Win! rock beats scissors");
    }
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        displayMessage("You Loose! paper beats rock");
    }
    if (humanChoice == "rock" && computerChoice == "rock") {
        displayMessage("Nobody Wins, both put rock!");
    }
    /* human choice is paper */
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        displayMessage("You Win! paper beats rock");
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        displayMessage("You Loose! scissors beats paper");
    }
    if (humanChoice == "paper" && computerChoice == "paper") {
        displayMessage("Nobody Wins, both put paper!");
    }
    /* human choice is scissors */
    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        displayMessage("You Win! scissors beat paper");
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        displayMessage("You Loose! rock beats scissors");
    }
    if (humanChoice == "scissors" && computerChoice == "scissors") {
        displayMessage("Nobody Wins, both put scissors!");
    }
}

function disableButtons() {

    document.querySelector(".rockBtn").disabled = true;
    document.querySelector(".paperBtn").disabled = true;
    document.querySelector(".scissorBtn").disabled = true;
}

function choseRock() {

    let humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
    if (humanScore === 5) {
        displayMessage("You Win!");
        disableButtons();
    }
    else if (computerScore === 5) {
        displayMessage("You Lose!");
        disableButtons();
    }
    else {
    displayMessage(`Score — You: ${humanScore} | Computer: ${computerScore}`);
    }
}

function chosePaper() {

    let humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
       if (humanScore === 5) {
        displayMessage("You Win!");
        disableButtons();
    }
    else if (computerScore === 5) {
        displayMessage("You Lose!");
        disableButtons();
    }
    else {
    displayMessage(`Score — You: ${humanScore} | Computer: ${computerScore}`);
    }
}

function choseScissors() {

    let humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice());
       if (humanScore === 5) {
        displayMessage("You Win!");
        disableButtons();
    }
    else if (computerScore === 5) {
        displayMessage("You Lose!");
        disableButtons();
    }
    else {
    displayMessage(`Score — You: ${humanScore} | Computer: ${computerScore}`);
    }
}

const rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener("click", choseRock);

const paperBtn = document.querySelector(".paperBtn");
paperBtn.addEventListener("click", chosePaper)

const scissorBtn = document.querySelector(".scissorBtn");
scissorBtn.addEventListener("click", choseScissors);

/* Do not need this anymore

function playGame() {

    let count = 0;
    while (computerScore){
        count += 1; 
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log("Round number: " + count)
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You Won!")
    } else {
        console.log("You Lost!")
    }
}
console.log(playGame());

*/
