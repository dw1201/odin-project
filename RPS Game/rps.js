function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        let playerScore = 0;
        if (playerScore > 3) {
            console.log("You win with a score of " + score + "!");
        } else {
            console.log("You lose with a score of " + score + "!");
        }
    }
    
}

function playerPlay(){
    console.log("Let's play a best out of 5 game of Rock, Paper, Scissors!");
    // const playerChoice = prompt("What would you like to play? ");
    playerChoice.toLowerCase();
    return playerChoice;
    }


function computerPlay(){
    const compChoice = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * compChoice.length);
    return(compChoice[random]);
}

function playRound(playerSelection, computerSelection, playerScore) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("Tie! Both players chose rock!");
        } else if (computerSelection == "paper") {
            console.log("You Lose! Rock loses to paper!");
        } else {
            console.log("You Win! Rock beats scissor!");
            playerScore++;
        }
    }
        
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You Win! Paper beats rock!");
            playerScore++;
        } else if (computerSelection == "paper") {
            console.log("Tie! Both players chose paper!");
        } else {
            console.log("You lose! Paper loses to scissor!");
        }
    }
    
    if (playerSelection == "scissor") {
        if (computerSelection == "rock") {
            console.log("You lose! Scissor loses to rock!");
        } else if (computerSelection == "paper") {
            console.log("You win! Scissor beats paper!");
            playerScore++;
        } else {
            console.log("Tie! Both players chose scissors");
        }
    }
    return playerScore;
    }
     
    let playerScore = 0;
    const playerSelection = "rock";//playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    






