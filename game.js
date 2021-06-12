function computerPlay() {

    const array = ["rock","paper","scissors"];

    const randomIndex = Math.floor(Math.random() * array.length);

    const item = array[randomIndex];

    return item;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return computerScore += 1;

    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return playerScore += 1;

    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return playerScore += 1;

    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        return computerScore += 1;

    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return playerScore += 1;

    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        return computerScore += 1;

    } else {
        console.log("It's a tie!");
    }

}

function game() {
    
    computerSelection = computerPlay();
    playerSelection = prompt("Choose: Rock, Paper or Scissors!");
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Player Score:" + playerScore + " Computer Score:" + computerScore);

    computerSelection = computerPlay();
    playerSelection = prompt("Choose: Rock, Paper or Scissors!");
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Player Score:" + playerScore + " Computer Score:" + computerScore);

    computerSelection = computerPlay();
    playerSelection = prompt("Choose: Rock, Paper or Scissors!");
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Player Score:" + playerScore + " Computer Score:" + computerScore);

    computerSelection = computerPlay();
    playerSelection = prompt("Choose: Rock, Paper or Scissors!");
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Player Score:" + playerScore + " Computer Score:" + computerScore);

    computerSelection = computerPlay();
    playerSelection = prompt("Choose: Rock, Paper or Scissors!");
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Player Score:" + playerScore + " Computer Score:" + computerScore);

    if (playerScore > computerScore) {
        console.log ("Player wins!");
    }else if (playerScore < computerScore) {
        console.log ("Computer wins!");
    }else {
        console.log ("It's a tie!");
    }
}
let playerScore = 0;
let computerScore = 0;