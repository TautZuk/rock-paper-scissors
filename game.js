function computerPlay() {

    const array = ["rock","paper","scissors"];

    const randomIndex = Math.floor(Math.random() * array.length);

    const item = array[randomIndex];

    return item;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        winner.textContent = "Computer Wins!";
        win.appendChild(winner);
        return computerScore += 1;

    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        winner.textContent = "Player Wins!";
        win.appendChild(winner);
        return playerScore += 1;

    } else if (playerSelection == "paper" && computerSelection == "rock"){
        winner.textContent = "Player Wins!";
        win.appendChild(winner);
        return playerScore += 1;

    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        winner.textContent = "Computer Wins!";
        win.appendChild(winner);
        return computerScore += 1;

    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        winner.textContent = "Player Wins!";
        win.appendChild(winner);
        return playerScore += 1;

    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        winner.textContent = "Computer Wins!";
        win.appendChild(winner);
        return computerScore += 1;

    } else {
        winner.textContent = "It's a tie!";
        win.appendChild(winner);;
    }
    

}
//add event listeners to buttons
const rock = document.querySelector('#rock');
rock.addEventListener('click', game)
const paper = document.querySelector('#paper');
paper.addEventListener('click', game)
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', game)

// set score variables
let computerScore = 0;
let playerScore = 0;

// results
const result = document.createElement('div');
const results = document.querySelector('#results');
const win = document.querySelector('#win');
const winner = document.createElement('p');

result.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
results.appendChild(result);

// game function
 function game() {
        computerSelection = computerPlay();
        let playerSelection = this.id;
        playRound(playerSelection, computerSelection);
        result.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
        if (playerScore == 5) {
            winner.textContent = "Player is Winner!";
            win.appendChild(winner);
            computerScore = 0;
            playerScore = 0;
        };
        if (computerScore == 5) {
            winner.textContent = "Computer is Winner!";
            win.appendChild(winner);
            playerScore = 0;
            computerScore = 0;
        };
}


