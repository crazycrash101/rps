console.log("Hello World")

function computerPlay() {
    let a = Math.floor(Math.random() * 3 );
    if (a == 0) {return "Rock"}
    else if (a==1) {return "Paper"}
    else if (a==2) {return "Scissors"}
}

function playRound(playerSelection,computerSelection) {
    let result = "";
    
    if (computerSelection === "Rock") {
        if (playerSelection === "Rock"){
            result = "Draw";
        } else if (playerSelection === "Paper") {
            result = "Won";
        } else if (playerSelection === "Scissors") {
            result = "Lose";
        }
    } else if (computerSelection === "Paper") {
        if (playerSelection === "Rock"){
            result = "Lose";
        } else if (playerSelection === "Paper") {
            result = "Draw"
        } else if (playerSelection === "Scissors") {
            result = "Won";
        }
    } else if (computerSelection === "Scissors") {
        if (playerSelection === "Rock"){
            result = "Won";
        } else if (playerSelection === "Paper") {
            result = "Lose";
        } else if (playerSelection === "Scissors") {
            result = "Draw";
        }
    }
    return result;
}

function inputProcessing() {
    playerInput = prompt("Rock,Paper or Scissors?");
    playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    return playerInput
}



function game () {
    let playerScore = 0; let computerScore = 0;
    while(true){
        let input = inputProcessing();
        let result = playRound(input,computerPlay());
        if (result === "Won"){
            playerScore++
            console.log(`The current score is Player ${playerScore} vs Computer ${computerScore}`)
        } else if (result === "Lose") {
            computerScore++
            console.log(`the current score is Player ${playerScore} vs Computer ${computerScore}`)
        }

        if ((playerScore === 5)||(computerScore === 5)){
            console.log(`The game is over final score is Player - ${playerScore} vs Computer ${computerScore}`)
            break;
        }
    }
}

game();

