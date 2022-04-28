function computerPlay(){
    const choice = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * choice.length);
    return(choice[random]);
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerPlay));

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
        } else if (playerSelection == "paper") {
            if (computerSelection == "rock"){
                console.log("");
            }
        }
    }

// function playerSelection(){
//    ask player for choice with prompt
// }




