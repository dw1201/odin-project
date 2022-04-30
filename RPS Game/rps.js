function game(playerScore) {
    console.log("Let's play a best out of 5 game of Rock, Paper, Scissors!");
    for (let i = 0; i < 5; i++) {
        playerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (playerScore > 3) {
            console.log("You win with a score of " + playerScore + "!");
        } else {
            console.log("You lose with a score of " + playerScore + "!");
        }
    }
}

function playerPlay(){
    let playerChoice = prompt("Rock, Paper, or Scissors? ").trim().toLowerCase();
    }

function computerPlay(){
    const compChoice = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * compChoice.length);
    return compChoice[random];
}

function playRound(playerSelection, computerSelection, playerScore) {
    if (playerSelection === computerSelection) {
        console.log("Tie game!");
    }
    if (playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "rock" && computerSelection === "scissor" || 
        playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You win!");
        playerScore++;
    } else {
        console.log("you lose!");
    }
  
    }
     
    let playerScore = 0;
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(game());

    






