function computerPlay()
{
    const choice = ["Rock", "Paper", "Scissors"];

    //generate a random index 0-2 using math.floor(returns largest int less than or equal to given number),
    //and math.radnom which generates a num from 0-1(not including 1)
    let randomIndex = Math.floor(Math.random() * 3);

    return choice[randomIndex];
}

let playerSelection;
let computerSelection;
let rounds=0;

//singleRound == playRound
function singleRound(playerSelection, computerSelection)
{
    //1 is rock, 2 is paper, 3 is scissors
    if (playerSelection == 1 && computerSelection == 'Scissors') return "Player wins";
    else if (playerSelection == 1 && computerSelection == 'Paper') return "Player loses";
    else if (playerSelection == 1 && computerSelection == 'Rock') return "Draw";
    else if (playerSelection == 2 && computerSelection == 'Rock') return "Player wins";
    else if (playerSelection == 2 && computerSelection == 'Scissors') return "Player loses";
    else if (playerSelection == 2 && computerSelection == 'Paper') return "Draw";
    else if (playerSelection == 3 && computerSelection == 'Scissors') return "Draw";
    else if (playerSelection == 3 && computerSelection == 'Rock') return "Player loses";
    else if (playerSelection == 3 && computerSelection == 'Paper') return "Player wins";
    else return "error";
}

const playerRock = document.querySelector('.player-rock');
const playerPaper = document.querySelector('.player-paper');
const playerScissors = document.querySelector('.player-scissors');
const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissors = document.querySelector('.computer-scissors');

const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');

let playerScore = 0;
let computerScore = 0;

playerRock.addEventListener('click', () => {
    playerScissors.style.backgroundColor = '';
    playerPaper.style.backgroundColor = '';
    computerRock.style.backgroundColor = '';
    computerScissors.style.backgroundColor = '';
    computerPaper.style.backgroundColor = '';

    playerSelection = 1;
    computerSelection = computerPlay();

    switch(singleRound(playerSelection, computerSelection))
    {
        case 'Player wins':
            playerRock.style.backgroundColor = 'green';
            computerScissors.style.backgroundColor = 'red';
            playerScore++;
            playerScoreElement.textContent = `SCORE: ${playerScore}`;
            break;
        case 'Player loses':
            playerRock.style.backgroundColor = 'red';
            computerPaper.style.backgroundColor = 'green';
            computerScore++;
            computerScoreElement.textContent = `SCORE: ${computerScore}`;
            break;
        case 'Draw':
            playerRock.style.backgroundColor = 'blue';
            computerRock.style.backgroundColor = 'blue';
    }
});

playerPaper.addEventListener('click', () => {
    playerScissors.style.backgroundColor = '';
    playerRock.style.backgroundColor = '';
    computerRock.style.backgroundColor = '';
    computerScissors.style.backgroundColor = '';
    computerPaper.style.backgroundColor = '';

    playerSelection = 2;
    computerSelection = computerPlay();

    switch(singleRound(playerSelection, computerSelection))
    {
        case 'Player wins':
            playerPaper.style.backgroundColor = 'green';
            computerRock.style.backgroundColor = 'red';
            playerScore++;
            playerScoreElement.textContent = `SCORE: ${playerScore}`;
            break;
        case 'Player loses':
            playerPaper.style.backgroundColor = 'red';
            computerScissors.style.backgroundColor = 'green';
            computerScore++;
            computerScoreElement.textContent = `SCORE: ${computerScore}`;
            break;
        case 'Draw':
            playerPaper.style.backgroundColor = 'blue';
            computerPaper.style.backgroundColor = 'blue';
    }
});

playerScissors.addEventListener('click', () => {
    playerPaper.style.backgroundColor = '';
    playerRock.style.backgroundColor = '';
    computerRock.style.backgroundColor = '';
    computerScissors.style.backgroundColor = '';
    computerPaper.style.backgroundColor = '';

    playerSelection = 3;
    computerSelection = computerPlay();

    switch(singleRound(playerSelection, computerSelection))
    {
        case 'Player wins':
            playerScissors.style.backgroundColor = 'green';
            computerPaper.style.backgroundColor = 'red';
            playerScore++;
            playerScoreElement.textContent = `SCORE: ${playerScore}`;
            break;
        case 'Player loses':
            playerScissors.style.backgroundColor = 'red';
            computerRock.style.backgroundColor = 'green';
            computerScore++;
            computerScoreElement.textContent = `SCORE: ${computerScore}`;
            break;
        case 'Draw':
            playerScissors.style.backgroundColor = 'blue';
            computerScissors.style.backgroundColor = 'blue';
    }
});