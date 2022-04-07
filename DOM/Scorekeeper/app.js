
// Reset function clears the score
function reset(){
    player1score = document.querySelector(".player-1-score")
    player2score = document.querySelector(".player-2-score")
    player1score.innerHTML = 0
    player2score.innerHTML = 0
}

// Player 1 button listener
let player1button = document.querySelector(".player1-button");
player1button.addEventListener("click", function(evt){
    let maxScore = document.querySelector(".max-score")
    let playerScore = document.querySelector(".player-1-score")

    if(playerScore.innerHTML < maxScore.value){
        console.log("Player1")
        playerScore.innerHTML++
    }else {
    console.log("You're Winer!")
    alert("PLAYER 1 IS WINNER")
    reset()
    }
})

// Player 2 button listener
let player2button = document.querySelector(".player2-button");
player2button.addEventListener("click", function(evt){
    let maxScore = document.querySelector(".max-score")
    let playerScore = document.querySelector(".player-2-score")

    if(playerScore.innerHTML < maxScore.value){
        console.log("Player2")
        playerScore.innerHTML++
    }else {
    console.log("You're Winer!")
    alert("PLAYER 2 IS WINNER")
    reset()
    }
})

// Reset button listener
let resetButton = document.querySelector('.reset-button')
resetButton.addEventListener("click", reset)