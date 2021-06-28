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
        return;
    }

}
const rock = document.querySelector('#rock');
rock.addEventListener('click', game)
const paper = document.querySelector('#paper');
paper.addEventListener('click', game)
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', game)
let computerScore = 0;
let playerScore = 0;
const results = document.querySelector('#results')
const result = document.createElement('div');
result.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
results.appendChild(result);
 function game() {
    computerSelection = computerPlay();
    let playerSelection = this.id;
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playerScore);
    console.log(computerScore);
    
    result.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;

    

}


