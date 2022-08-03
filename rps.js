let Choices = {
    rock: {LosesTo: "paper"},
    paper: {LosesTo: "scissors"},
    scissors: {LosesTo: "rock"},
}

let Score = {
    userScore: 0,
    pcScore: 0,
}

let round = 1

function reset() {
    Score.pcScore = 0;
    Score.userScore = 0;
    round = 1;
    document.querySelector('.message').innerHTML = ""
    document.querySelector('.userScore').innerHTML = `User Score: ${Score.userScore}`
    document.querySelector('.compScore').innerHTML = `PC Score: ${Score.pcScore}`
    document.querySelector('.message').innerHTML = ""
    document.querySelector('.round').innerHTML = `Round ${round}`;
    document.querySelector('.tally').innerHTML = `Tally: ${Score.userScore}-${Score.userScore}`
}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * 3)]
}

function getWinner() {
    let msg  = ""

    switch(true) {
        case Score.userScore == Score.pcScore:
            msg = "It's a Draw!"
            break
        case Score.userScore > Score.pcScore:            
            msg = `You won 5 games, you are the winner!`
            break
        case Score.userScore < Score.pcScore:
            msg = `The PC won 5 games, you are the loser.`
            break
        default:
            break
    } 

    document.querySelector('.message').innerHTML = msg
    setTimeout(() => {
        reset()
    }, 5000)
}

function updateScore(winner) {
    if (winner === "user") {
        Score.userScore++
        document.querySelector('.userScore').innerHTML = `User Score: ${Score.userScore}`
    } else if (winner === "comp") {
        Score.pcScore++
        document.querySelector('.compScore').innerHTML = `PC Score: ${Score.pcScore}`
    }

    document.querySelector('.tally').innerHTML = `Tally: ${Score.userScore}-${Score.pcScore}`
}

function playARound(e) {
    const userChoice = e.target.getAttribute('class')
    const compChoice = getComputerChoice()
    const lowerChoice = userChoice.toLowerCase()
    const messageElement = document.querySelector('.message')

    switch(true) {
        case lowerChoice == compChoice:
            messageElement.innerHTML = "It's a Draw!"
            break
        case lowerChoice == Choices[compChoice].LosesTo:
            updateScore("user")
            messageElement.innerHTML = `You Win! ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`
            break
        case Choices[lowerChoice].LosesTo == compChoice:
            updateScore("comp")
            messageElement.innerHTML = `You Lose! ${compChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`
            break
        default:
            break
    }   

    round++;
    document.querySelector('.round').innerHTML = `Round ${round}`;
    if (Score.userScore === 5 || Score.pcScore === 5) {
        getWinner()
        return
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', playARound));

// function game() {
//     for (let i = 0;i <= 5;i++) {
//         const playerChoice = prompt("Rock, Paper or Scissors?")
//         const pcChoice = getComputerChoice()
//         console.log(playARound(playerChoice, pcChoice))
//     }

//     console.log(getWinner())
// }

// game()