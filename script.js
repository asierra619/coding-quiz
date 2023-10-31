var welcomeScreen = document.querySelector('#welcome-screen');
var index = 0
var secLeft = 100
var timerEl = document.querySelector('#time-left');

function timePenalty() {
    secLeft - 15
};

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
var correctAnswer = choices[index].answer;

function startTimer () {
    var timerInterval = setInterval(function() {
        secLeft--;
        timerEl.textContent = "Current Score = " + secLeft;

        if (secLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function renderQuestion() {
    var questionEl=document.createElement("h4")
    questionEl.textContent=questions[index].question
    document.querySelector('#quiz-container').append(questionEl)
    // use for loop for answer choices - ask bcs (Jerromy - BIG HELP)
    for (var i = 0; i <questions[index].choices.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = questions[index].choices[i];
        questionEl.append(btn);

        btn.addEventListener('click', function() {
            var selectedAnswer = event.target.textContent;

            if (selectedAnswer !== correctAnswer) {
                // remove time from clock as penalty for wrong answer
                timePenalty()
            }
        });
    }
}

function startQuiz() {
    welcomeScreen.style.display="none"
    startTimer()
    renderQuestion()
}

document.querySelector("#start-btn").addEventListener('click', startQuiz);