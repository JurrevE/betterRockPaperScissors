//Kies hier wat je wilt gebruiken!
let spelersKeuze = window.prompt("Choose: Rock, Paper or Scissors!");






let playerScore = 0
let computerScore = 0
let ties = 0
let playerSelection = spelersKeuze.toLowerCase();

let getComputerChoice = function() {
  let keuze = Math.floor(Math.random() * 3 )
  if (keuze === 0) {
    return "rock"
   }
   else if (keuze === 1) {
    return "paper"
   }
   else {
    return "scissors"
   }
}

function checkWinner(getComputerChoice, playerSelection) {
    if (getComputerChoice === playerSelection) {
        ties++
        return "its a tie!"
    }
    else if( 
        (playerSelection == "rock" && getComputerChoice == "scissors") ||
        (playerSelection == "paper" && getComputerChoice == "rock") ||
        (playerSelection == "scissors" && getComputerChoice == "paper"))
        {
            playerScore++
        return "Player wins this round!"
    }
    
    else {
            computerScore++
        return "Computer wins this round!"
    }
}

function playSingleRound(playerSelection, getComputerChoice) {
    const result = checkWinner(playerSelection, getComputerChoice);
    if (result == "its a tie!") {
        return "its a tie!"
    }
    else if (result == "Player wins this round!") {
        return "Player wins this round!"
    }
    else {
        return "Computer wins this round"
    }
}

let game = function(playSingleRound) {
    for (let i = 0; i < 5; i++) {
        console.log(playSingleRound(getComputerChoice(), playerSelection))
        console.log(`Times player has won: ${playerScore} Times computer has won: ${computerScore} and the amount of ties: ${ties}`)
       
    }
    console.log("Game over!")
     if (playerScore > computerScore) {
        console.log("Player was the winner!");
    } else if (playerScore < computerScore) {
        console.log("Computer was the winner!");
    } else {
        console.log("We have a tie!");
    }
}
 
game(playSingleRound)