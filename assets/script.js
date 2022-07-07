const startButton = document.getElementbyId("start-btn")
const questionContainerElement = document.getElementById("question-container")


//Start Game 

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    setNextQuestion()
}
//Next question automatically appears after button hit
function setNextQuestion() {

}
//Show corrent answer
function selectAnswer() {

}

//List of questions
const questions = [
    {
     prompt: "If I wish to align an element to the top of it's container, which css property should I use?\n(a) text-align: top; \n(b) margin-align: top; \n(c) overflow: top; \n(d) vertical-align: top;",
    answer: "d"
    }
    {
     prompt: "WHat is a pseudo-class? \n(a) a CSS rule that contains no declarations \n(b) A CSS declaration that hides the element \n(c) an element that has more than one class \n(d) a CSS keyword to target an element's state",
    answer: "d"
    }
    {
     prompt: "What does the z-index property do? \n(a) remove an element form the DOM \n(b) change the stacking order of elements \n(c) changes the opacity of an element \n(d) forces an element to be positioned relatively",
     answer: "b"
    }
    {
     prompt: "Which of these values is NOT considered false? \n(a) 0 \n(b) '0' \n(c) null \n(d) '' ",
     answer: "b"
    }

]