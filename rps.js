let Choices = {
    rock: {LosesTo: "paper"},
    paper: {LosesTo: "scissors"},
    scissors: {LosesTo: "rock"},
}

let Score = {
    userScore: 0,
    pcScore: 0,
}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * 3)]
}

function playARound(userChoice, compChoice) {
    const lowerChoice = userChoice.toLowerCase()

    switch(true) {
        case !(userChoice in Choices):
            return "You must choose Rock, Paper or Scissors."
        case lowerChoice == compChoice:
            return "It's a Draw!"
        case lowerChoice == Choices[compChoice].LosesTo:
            Score.userScore++
            return `You Win! ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`
        case Choices[lowerChoice].LosesTo == compChoice:
            Score.pcScore++
            return `You Lose! ${compChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`
        default:
            return
    }   
}

function getWinner() {
    switch(true) {
        case Score.userScore == Score.pcScore:
            return "It's a Draw!"
        case Score.userScore > Score.pcScore:            
            return `You won ${Score.userScore} out of 5 games, you are the winner!`
        case Score.userScore < Score.pcScore:
            return `You won ${Score.userScore} out of 5 games, you are the loser.`
        default:
            return
    } 
}

function game() {
    for (let i = 0;i <= 5;i++) {
        const playerChoice = prompt("Rock, Paper or Scissors?")
        const pcChoice = getComputerChoice()
        console.log(playARound(playerChoice, pcChoice))
    }

    console.log(getWinner())
}

game()