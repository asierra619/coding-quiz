var welcomeScreen = document.querySelector('#welcome-screen');
var index = 0

var questions = [
    {
        question: "Question?",
        choices: ["a","b","c","d"],
        answer: "d"
    },
    {
        question: "Question?",
        choices: ["a","b","c","d"],
        answer: "d"
    },
    {
        question: "Question?",
        choices: ["a","b","c","d"],
        answer: "d"
    },
    {
        question: "Question?",
        choices: ["a","b","c","d"],
        answer: "d"
    },
]

function renderQuestion() {
    var questionEl=document.createElement("h4")
    questionEl.textContent=questions[index].question
    document.querySelector('#quiz-container').append(questionEl)
    // use for loop for answer choices - ask bcs
}

function startQuiz() {
    welcomeScreen.style.display="none"
    renderQuestion()
}

document.querySelector("#start-btn").addEventListener('click', startQuiz);