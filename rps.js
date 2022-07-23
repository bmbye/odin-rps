let Choices = {
    rock: {LosesTo: "paper"},
    paper: {LosesTo: "scissors"},
    scissors: {LosesTo: "rock"},
}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.random() * 3]
}

function playARound(userChoice, compChoice) {
    const lowerChoice = userChoice.toLowerCase()
    switch(true) {
        case lowerChoice == compChoice:
            return "It's a Draw!"
        case lowerChoice == Choices[compChoice].LosesTo:
            return `You Win! ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`
        case Choices[lowerChoice].LosesTo == compChoice:
            return `You Lose! ${compChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`
        default:
            return
    }   
}

const playerChoice = "rock"
const pcChoice = getComputerChoice()
console.log(playARound(playerChoice, pcChoice))