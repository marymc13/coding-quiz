const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerContainer = document.createElement("answer-container")
const resultsContainer = document.getElementById("results-container")
const nextButton = document.getElementById('next-btn')
const answerButtonsElement = document.getElementById("answer-buttons")
const userAnswer = '';
const submitButton = document.getElementById("submit-btn")
const questionCount = document.querySelector(".number-of-questions")
const numCorrect = 0
const answers = [];
const output = [];

let shuffledQuestions, currentQuestionIndex

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

//Start Game on click
startButton.addEventListener("click", startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - 5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
//Show question one at a time
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
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
// Answer Select
 function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) { 
  nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
} 

//for each question
for (var i = 0; i < questions.length; i++) {
    saveAnswers()
    loadAnswers()
    console.log("answer saved")

}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
//C0rrect answer
    if (correct) {
        element.classList.add('correct')
//Incorrect answer
    }  else{
        element.classList.add('wrong')
    }
}
//Results
function showResults(quizContainer) {
    var answerContainers = quizContainer.querySelectorAll('.answers')
    console.log(answerContainers)
}

//on submit, show results
submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer)
}
//Remove correct/incorrect for next question
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

var saveAnswers = function() {
    localStorage.setItem("answers", JSON.stringify(answers));
};

var loadAnswers = function() {
    var trueAnswers = localStorage.getItem("answers");
   
   if (!trueAnswers) {
       return false
   }
   console.log("true answers found");
// Convert tasks from the string format back into an array of objects
trueAnswers = JSON.parse(trueAnswers);

for (var i = 0; i < trueAnswers.length; i++) {
   createTaskEl(trueAnswers[i]);
   console.log(trueAnswers[i]);
}
};