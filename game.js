function computerPlay() {

    const array = ["rock","paper","scissors"];

    const randomIndex = Math.floor(Math.random() * array.length);

    const item = array[randomIndex];

    return item;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        winner.textContent = "Computer Wins!";
        results.appendChild(winner);
        return computerScore += 1;

    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        winner.textContent = "Player Wins!";
        results.appendChild(winner);
        return playerScore += 1;

    } else if (playerSelection == "paper" && computerSelection == "rock"){
        winner.textContent = "Player Wins!";
        results.appendChild(winner);
        return playerScore += 1;

    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        winner.textContent = "Computer Wins!";
        results.appendChild(winner);
        return computerScore += 1;

    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        winner.textContent = "Player Wins!";
        results.appendChild(winner);
        return playerScore += 1;

    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        winner.textContent = "Computer Wins!";
        results.appendChild(winner);
        return computerScore += 1;

    } else {
        winner.textContent = "It's a tie!";
        results.appendChild(winner);;
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
let winner = document.createElement('p');
winner.textContent = ""
results.appendChild(result);
 function game() {
    computerSelection = computerPlay();
    let playerSelection = this.id;
    playRound(playerSelection, computerSelection);
    result.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
    
}


