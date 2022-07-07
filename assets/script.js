const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

//Start Game  on click
startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - 5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer() {

}

function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer =>{
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
})
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }


}

//Question and Answer Set
const questions = [
    {
     question: "If I wish to align an element to the top of it's container, which css property should I use?",
    answers: [
        {text: "text-align: top", correct: false},
        {text: "margin-align: top", correct: false},
        {text: "margin-align: top", correct: false},
        {text: "vertical-align: top", correct: true}
    ] 
    },
    {
     question: "What is a pseudo-class?",
    answers: [
        {text: "A CSS rule that contains no declarations", correct: false},
        {text: "A CSS declaration that hides the element", correct: false},
        {text: "An element that has more than one class", correct: false},
        {text: "A CSS keyword to target an element's state", correct: true}
    ]
    },
    {
     question: "What does the z-index property do?",
     answers: [
        {text: "removes an element from the DOM", correct: false},
        {text: "changes the stacking order of elements", correct: true},
        {text: "changes the opacity of an element", correct: false},
        {text: "forces an element to be positioned relatively", correct: false}
     ]
    },
    {
     question: "Which of these values is NOT considered false?",
     answers: [
        {text: "0", correct: false},
        {text: "'0'", correct: true},
        {text: "null", correct: false},
        {text: "''", correct: false}
     ]
    },
    {
       question: "What does the browser event submit allow us to do?",
        answers: [
            {text:"Submit a form using a button", correct: false},
            {text: "Submit a form using the enter key", correct: false},
            {text: "Submit a form using the space bar", correct: false},
            {text: "Submit a form using both a button and the enter key", correct: true}
        ]
    }

]