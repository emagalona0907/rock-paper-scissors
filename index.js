let playerSelections = [];
let computerSelections = [];

function getComputerSelection(){
    return Math.round(Math.random() * (3 - 1) + 1);
}

function getPlayerSelection(){
    let playerInput = prompt("Select from rock, paper, scissors. Please input 1 for Rock, 2 for Paper, 3 for scissors.");

    return parseInt(playerInput);
}

function substituteSelectionToText(playerInput){

    let selection;
   
    switch(playerInput){
        case 1:
            selection = "Rock";
            break;
        case 2:
            selection = "Paper";
            break;
        case 3:
            selection = "Scissors";
            break;
        default:
            selection = "not available";
    }
    
    return selection;
}

function compareSelections(playerSelection, computerSelection){

    let winner;

   switch(playerSelection) {
        case "Rock": 
            switch(computerSelection) {
                case "Rock":
                    winner = "tie";
                    break;
                case "Paper":
                    winner = "computer";
                    break;
                case "Scissors":
                    winner = "player";
                    break;
            }
        case "Paper":
            switch(computerSelection){
                case "Rock":
                    winner = "player";
                    break;
                case "Paper":
                    winner = "tie";
                    break;
                case "Scissors":
                    winner = "computer";
                    break;
            }
        case "Scissors":
            switch(computerSelection){
                case "Rock":
                    winner = "computer";
                    break;
                case "Paper":
                    winner = "player";
                    break;
                case "Scissors":
                    winner = "tie";
                    break;
            }
   }

   return winner;

}

function playRound(){
    let computer = getComputerSelection();
    let player = getPlayerSelection();

    playerSelections.push(substituteSelectionToText(player));
    computerSelections.push(substituteSelectionToText(computer));


    let roundWinner = compareSelections(substituteSelectionToText(player), substituteSelectionToText(computer));

    return roundWinner;
}

function displayResults(score1, score2){

    console.log("Game Status");
    console.log(`Player Score: ${score1}`);
    console.log(`Computer Score Score: ${score2}`);

    
    alert(`Game Status ---Player Score: ${score1} ---Computer Score Score: ${score2}`);
   
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore != 5 || computerScore != 5){
        
        
        if (playerScore == 5 || computerScore == 5){
            if (playerScore == 5) {
                alert("Player Won this game!");
            } else {
                alert("Computer Won the game!");
            }
            
            break;
        } else {
            let winner = playRound();

            switch(winner){
                case "player":
                    playerScore++;
                    alert("Player Wins!");
                    displayResults(playerScore, computerScore);
                    break;
                case "computer":
                    computerScore++;
                    alert("Computer Wins!")
                    displayResults(playerScore, computerScore);
                    break;
                case "tie":
                    playerScore++;
                    computerScore++;
                    alert("It's a tie!");
                    displayResults(playerScore, computerScore);
                    break;
            }
        }
    }

    
}


playGame();

console.log(playerSelections)
console.log(computerSelections);
let playerInfoR1 = document.getElementById("playerR1");

playerInfoR1.append(playerSelections[0]);
