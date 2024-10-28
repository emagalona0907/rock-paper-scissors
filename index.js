function getComputerSelection(){
    return Math.random() * (3 - 1) + 1;
}

function getPlayerSelection(){
    let playerInput = prompt("Select from rock, paper, scissors. Please input 1 for Rock, 2 for Paper, 3 for scissors.");

    return playerInput;
}

function substituteSelectionToText(playerInput){

    let selection;
   
    switch(playerInput){
        case "1":
            selection = "Rock";
            break;
        case "2":
            selection = "Paper";
            break;
        case "3":
            selection = "Scissors";
            break;
        default:
            selection = "not available"
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

    let roundWinner = compareSelections(substituteSelectionToText(player), substituteSelectionToText(computer));

    return roundWinner;
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore !== 5 || computerScore !== 5){
        let winner = playRound();

        switch(winner){
            case "player":
                incrementScore(playerScore);
                break;
            case "computer":
                incrementScore(computerScore);
                break;
        }

    }
}