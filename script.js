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
        if (playerSelection === "rock"){
            result = "Draw";
        } else if (playerSelection === "paper") {
            result = "Won";
        } else if (playerSelection === "scissors") {
            result = "Lose";
        }
    } else if (computerSelection === "Paper") {
        if (playerSelection === "rock"){
            result = "Lose";
        } else if (playerSelection === "paper") {
            result = "Draw"
        } else if (playerSelection === "scissors") {
            result = "Won";
        }
    } else if (computerSelection === "Scissors") {
        if (playerSelection === "rock"){
            result = "Won";
        } else if (playerSelection === "paper") {
            result = "Lose";
        } else if (playerSelection === "scissors") {
            result = "Draw";
        }
    }

    if (result === "Draw") {
        return ("Its a Draw!");
    } else if (result === "Won"){
        return (`You ${result}! ${playerSelection} beats ${computerSelection}`)
    } else if (result === "Lose") {
        return (`You ${result}! ${computerSelection} beats ${playerSelection}`)
    }
}

function game() {
    let count = 0;
    for (let i=0;i<5;i++){
        let playerInput = prompt(`(Round ${count + 1}) Rock,Paper or Scissors?`);
        play
    }
}

