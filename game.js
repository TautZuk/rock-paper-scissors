function computerPlay() {

    const array = ["rock","paper","scissors"];

    const randomIndex = Math.floor(Math.random() * array.length);

    const item = array[randomIndex];

    return item;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        console.log("You lose! Paper beats rock!")
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        console.log("You win! Rock beats Scissors!")
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1;
        console.log("You win! Paper beats Rock!")
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        console.log("You Lose! Scissors beats Paper!")
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        console.log("You win! Scissors beats Paper!")
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1;
        console.log("You Lose! Rock beats Scissors!")
    } else {
        console.log("It's a tie!")
    }

}

function game() {
    computerSelection = computerPlay();

    playerSelection = prompt("Choose: Rock, Paper or Scissors!")
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Player Score:" + playerScore + " Computer Score:" + computerScore)

    playerSelection = prompt("Choose: Rock, Paper or Scissors!")
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Player Score:" + playerScore + " Computer Score:" + computerScore)

    playerSelection = prompt("Choose: Rock, Paper or Scissors!")
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Player Score:" + playerScore + " Computer Score:" + computerScore)

    playerSelection = prompt("Choose: Rock, Paper or Scissors!")
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Player Score:" + playerScore + " Computer Score:" + computerScore)

    playerSelection = prompt("Choose: Rock, Paper or Scissors!")
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log("Player Score:" + playerScore + " Computer Score:" + computerScore)

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