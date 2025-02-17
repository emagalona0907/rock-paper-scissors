let playerButtons = document.querySelectorAll("#selection-btn");

function getComputerSelection() {
    return Math.round(Math.random() * (3 - 1) + 1);
}

function substituteSelectionToText(playerInput) {

    let selection;

    switch (playerInput) {
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

function compareSelections(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Tie";
    }

    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||

        (playerSelection === "Paper" && computerSelection === "Rock") ||

        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return "Player";
    }

    return "Computer";

}

let playerScore = 0;
let computerScore = 0;

const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');
const roundWinnerDisplay = document.getElementById('selection-result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById("gameWinner");
const restartBtn = document.getElementById('restart');

playerButtons.forEach((btn) => {

    btn.addEventListener("click", function() {

            let computerSelection = substituteSelectionToText(parseInt(getComputerSelection()));
            let playerSelection = substituteSelectionToText(parseInt(btn.value));
            let roundWinner = compareSelections(playerSelection, computerSelection);

            let gameWinner =  "";

            if (roundWinner == "Player") {
                playerScore++;
            }

            if (roundWinner == "Computer") {
                computerScore++;
            }

            if (playerScore == 5 || computerScore == 5) {
                gameWinner = playerScore == 5 ? "Player" : "Computer";
                resultDisplay.innerHTML = gameWinner + " wins!";

                playerButtons.forEach(button => button.disabled = true);
            }

            playerSelectionDisplay.innerHTML = playerSelection;
            computerSelectionDisplay.innerHTML = computerSelection;
            roundWinnerDisplay.innerHTML = roundWinner;
            playerScoreDisplay.innerHTML = playerScore;
            computerScoreDisplay.innerHTML = computerScore;
    });

});

restartBtn.addEventListener("click", function () {

    playerScore = 0;
    computerScore = 0;

    playerSelectionDisplay.innerHTML = "";
    computerSelectionDisplay.innerHTML = "";
    roundWinnerDisplay.innerHTML = "";
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML = "";

    playerButtons.forEach(button => button.disabled = false);
});
/*let playerSelections = [];
let computerSelections = [];







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

    
}*/



//playGame();

//console.log(playerSelections)
//console.log(computerSelections);
//let playerInfoR1 = document.getElementById("playerR1");

//playerInfoR1.append(playerSelections[0]);