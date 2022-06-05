function computerPlay()
{
    const choice = ["Rock", "Paper", "Scissors"];

    //generate a random index 0-2 using math.floor(returns largest int less than or equal to given number),
    //and math.radnom which generates a num from 0-1(not including 1)
    let randomIndex = Math.floor(Math.random() * 3);

    return choice[randomIndex];
}

let playerSelection = prompt("Make a choice:\n1. Rock\n2. Paper\n3.Scissors");
let computerSelection = computerPlay();

function singleRound(playerSelection, computerSelection)
{
    if (playerSelection == 1 && computerSelection == 'Scissors') return "Player wins - rock beats scissors";
    else if (playerSelection == 1 && computerSelection == 'Paper') return "Player loses - paper beats rock";
    else if (playerSelection == 1 && computerSelection == 'Rock') return "Draw";
    else if (playerSelection == 2 && computerSelection == 'Rock') return "Player wins - paper beats rock";
    else if (playerSelection == 2 && computerSelection == 'Scissors') return "Player loses - scissors beat paper";
    else if (playerSelection == 2 && computerSelection == 'Paper') return "Draw";
    else if (playerSelection == 3 && computerSelection == 'Scissors') return "Draw";
    else if (playerSelection == 3 && computerSelection == 'Rock') return "Player loses - scissors beat rock";
    else if (playerSelection == 3 && computerSelection == 'Paper') return "Player wins - scissors beat paper";
    else return "error";
}

function game(playerSelection, computerSelection)
{
    for(let i = 0; i < 5; i++)
    {
        singleRound(playerSelection, computerSelection);
    }
}

game();