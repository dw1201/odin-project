function computerPlay(){
    const choice = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * choice.length);
    return(choice[random]);
}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection(computerPlay));
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            console.log("Tie! Both players chose rock!");
        } else if (computerSelection === "paper") {
            console.log("You Lose! Rock loses to paper!");
        } else if(computerSelection === "scissor") {
            console.log("You Win! Rock beats scissor!");
        }
        }
    }

    const playerSelection = "rock";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerPlay));
    

// function playerSelection(){
//    ask player for choice with prompt
//    change to lower case
//    return player selection
// }




