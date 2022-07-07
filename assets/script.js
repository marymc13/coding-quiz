const startButton = document.getElementbyId("start-btn")
const questionContainerElement = document.getElementById("question-container")


//Start Game 

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {}
]