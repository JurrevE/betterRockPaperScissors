//Query selectors to use buttons and play a single round of the game.
const rockBtn = document.querySelector(".rockbutton");
rockBtn.addEventListener("click", (event) => {
    let playerSelection = event.target.value
    
    console.log(playSingleRound(getComputerChoice(), playerSelection))
    console.log(playerScore, computerScore, ties)
    
})

const paperBtn = document.querySelector(".paperbutton");
paperBtn.addEventListener("click", (event) => {
    let playerSelection = event.target.value
    
    console.log(playSingleRound(getComputerChoice(), playerSelection))
    console.log(playerScore, computerScore, ties)
    
})

const scissorsBtn = document.querySelector(".scissorsbutton");
scissorsBtn.addEventListener("click", (event) => {
    let playerSelection = event.target.value
    
    console.log(playSingleRound(getComputerChoice(), playerSelection))
    console.log(playerScore, computerScore, ties)

})


       
let playerScore = 0
let computerScore = 0
let ties = 0

//computer choice, working properly
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
//game logic, working properly
function checkWinner(getComputerChoice, playerSelection) {
    if (getComputerChoice === playerSelection) {
        ties++
        const winmessage = document.querySelector(".winmessage")
        winmessage.innerHTML = "This round was a tie!"
        return "its a tie!"
    }
    else if( 
        (playerSelection == "rock" && getComputerChoice == "scissors") ||
        (playerSelection == "paper" && getComputerChoice == "rock") ||
        (playerSelection == "scissors" && getComputerChoice == "paper"))
        {
            playerScore++
            const playerwinsnummer = document.querySelector(".playerwinsnummer")
            playerwinsnummer.innerHTML ++
            
            const winmessage = document.querySelector(".winmessage")
            winmessage.innerHTML = "Player wins this round!"
            //Line under here for console
            if (playerScore == 5) {
                const totalwinner = document.querySelector(".ikbendegoat")
                 totalwinner.innerHTML = "Player was the first to reach 5 and wins!"
              }
            
    }
    
    else {
            computerScore++
            const computerwinsnummer = document.querySelector(".computerwinsnummer")
            computerwinsnummer.innerHTML ++
            
            const winmessage = document.querySelector(".winmessage")
            winmessage.innerHTML = "Computer wins this round!"
            //Line under here for console
            if ( computerScore == 5) {
                const totalwinner = document.querySelector(".ikbendegoat")
                 totalwinner.innerHTML = "Computer was the first to reach 5 and wins!"
                
            }
            return "Computer wins this round!"
    }
}
//working function to play 1 single round
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



    
        
 