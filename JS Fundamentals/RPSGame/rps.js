const choices = ["rock", "paper", "scissor"]
let pScore = 0;
let cScore = 0;

function game() {
    console.log("Let's play a best out of 5 game of Rock, Paper, Scissors!");
    for (let i = 0; i < 5; i++) {
        playRound(i);
    }
}

function playerPlay( ){
    let input = prompt("Rock, Paper, or Scissor? ");
    while (input == null) {
        input = prompt("Rock, Paper, or Scissors");
    }
    input = input.trim().toLowerCase();
    
    if (input == "scissors") {
        input = input.slice(0,-1);
    }
    console.log(input);
    return input;
    }

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    const pSelection = playerPlay();
    const cSelection = computerPlay();
    if (pSelection === cSelection) {
        console.log("Tie game!\nPlayer: " + pSelection + "\nComputer: " + cSelection);
    } else if ((pSelection === "paper" && cSelection  === "rock") ||  
                (pSelection === "rock" && cSelection === "scissor") || 
                (pSelection === "scissor" && cSelection=== "paper")) {
        console.log("You win!\nPlayer: " + pSelection + "\nComputer: " + cSelection);
        pScore++;
    } else {
        console.log("You Lose!\nPlayer: " + pSelection+ "\nComputer: " + cSelection);
        cScore++;
    }
    }

function fScore() {
    console.log(pScore);
    if (pScore > 3) {
        console.log("You win with a score of " + pScore + "!");
    } else {
        console.log("You lose with a score of " + pScore + "!");
    }
}

    console.log(game(),fScore());

    






