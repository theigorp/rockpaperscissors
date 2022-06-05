function computerPlay()
{
    const choice = ["Rock", "Paper", "Scissors"];

    //generate a random index 0-2 using math.floor(returns largest int less than or equal to given number),
    //and math.radnom which generates a num from 0-1(not including 1)
    let randomIndex = Math.floor(Math.random() * 3);

    return choice[randomIndex];
}

let playerSelection = prompt("Rock, paper or scissors?");
let computerSelection = computerPlay();

function singleRound(playerSelection, computerSelection)
{
    if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Scissors') return "Player wins - rock beats scissors";
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Paper') return "Player loses - paper beats rock";
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'Rock') return "Draw";
    else if (playerSelection.toUpperCase() == 'Paper' && computerSelection == 'Rock') return "Player wins - paper beats rock";
    else if (playerSelection.toUpperCase() == 'Paper' && computerSelection == 'Scissors') return "Player loses - scissors beat paper";
    else if (playerSelection.toUpperCase() == 'Paper' && computerSelection == 'Paper') return "Draw";
    else if (playerSelection.toUpperCase() == 'Scissors' && computerSelection == 'Scissors') return "Draw";
    else if (playerSelection.toUpperCase() == 'Scissors' && computerSelection == 'Rock') return "Player loses - scissors beat rock";
    else if (playerSelection.toUpperCase() == 'Scissors' && computerSelection == 'Paper') return "Player wins - scissors beat paper";
    else return "error";
}