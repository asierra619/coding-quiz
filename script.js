var welcomeScreen = document.querySelector('#welcome-screen');
var index = 0

var questions = [
    {
        question: "Which of the following is not a JavaScript Alert Pop-up?",
        choices: ["Alert","Confirm","Question","Prompt"],
        answer: "Question"
    },
    {
        question: "?",
        choices: ["a","b","c","d"],
        answer: "b"
    },
    {
        question: "Question?",
        choices: ["a","b","c","d"],
        answer: "c"
    },
    {
        question: "Question?",
        choices: ["a","b","c","d"],
        answer: "d"
    },
    {
        question: "What is the purpose of JavaScript?",
        choices: ["Design the layout of web pages","Program web pages' behavior","Define the content on a web page","Store, manipulate, and retrieve data from databases"],
        answer: "Program web pages' behavior"
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