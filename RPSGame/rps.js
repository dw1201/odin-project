function game(playerSelection,computerSelection, playerScore) {
    console.log("Let's play a best out of 5 game of Rock, Paper, Scissors!");
    
    for (let i = 0; i < 5; i++) {
        playerPlay();
        playRound(playerSelection, computerSelection);
        if (playerScore > 3) {
            console.log("You win with a score of " + playerScore + "!");
        } else {
            console.log("You lose with a score of " + playerScore + "!");
        }
    }
}

function playerPlay(){
    let playerChoice = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * playerChoice.length);
    //playerChoice = prompt("Rock, Paper, or Scissor? ").trim().toLowerCase();
    return playerChoice[random];
    }

function computerPlay(){
    let compChoice = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * compChoice.length);
    return compChoice[random];
}

function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    if (playerSelection === computerSelection) {
        console.log("Tie game!\nPlayer: " + playerSelection + "\nComputer: " + computerSelection);
    } else if ((playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "rock" && computerSelection === "scissor") || 
        (playerSelection === "scissor" && computerSelection === "paper")) {
        console.log("You win!\nPlayer: " + playerSelection + "\nComputer: " + computerSelection);
        playerScore+1;
    } else {
        console.log("You Lose!\nPlayer: " + playerSelection + "\nComputer: " + computerSelection);
    }
    return playerScore;
    }
    
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
   // console.log(playRound(playerSelection,computerSelection));
    console.log(game(playerSelection, computerSelection));

    






