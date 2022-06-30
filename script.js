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

    checkScore(playerScore, computerScore);
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

    checkScore(playerScore, computerScore);
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

    checkScore(playerScore, computerScore);
});

function newGame()
{
    playerPaper.style.backgroundColor = '';
    playerRock.style.backgroundColor = '';
    playerScissors.style.backgroundColor = '';
    computerRock.style.backgroundColor = '';
    computerScissors.style.backgroundColor = '';
    computerPaper.style.backgroundColor = '';
    playerScoreElement.textContent = `SCORE: 0`;
    computerScoreElement.textContent = `SCORE: 0`;
    playerScore = 0;
    computerScore = 0;
}

function checkScore(playerScore, computerScore)
{
    if(computerScore == 5 || playerScore == 5)
    {
        //hides the game
        document.querySelector('.player').style.visibility = "hidden";
        document.querySelector('.computer').style.visibility = "hidden";

        const body = document.querySelector('body');
        const button = document.createElement('button');
        const container = document.createElement('div');
        const profile = document.createElement('img');
        const winner = document.createElement('p');

        body.appendChild(container);
        container.classList.add('winner');

        container.appendChild(profile);
        profile.setAttribute('id', 'winner-profile');
        container.appendChild(winner);
        winner.classList.add('winner-para');

        if(playerScore > computerScore)
        {
            profile.setAttribute('src', 'https://cdn1.iconfinder.com/data/icons/soccer-54/64/1-player-512.png');
            winner.textContent = `PLAYER WINS ${playerScore}:${computerScore}!`;
        }
        else if(computerScore > playerScore)
        {
            profile.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/1114/1114521.png?w=360');
            winner.textContent = `ROBOT WINS ${playerScore}:${computerScore}!`;
        }

        container.appendChild(button);
        button.textContent = 'PLAY AGAIN?';

        button.addEventListener('click', () => {
            body.removeChild(container);

            document.querySelector('.player').style.visibility = "visible";
            document.querySelector('.computer').style.visibility = "visible";

            newGame();
        });
    }
}