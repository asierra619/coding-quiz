var welcomeScreen = document.querySelector('#welcome-screen');
var index = 0
var secLeft = 100
var timerEl = document.querySelector('#time-left');
var questionEl = document.querySelector('#quiz-container');

function timePenalty() {
    secLeft = secLeft - 15;
};

var questions = [
    {
        question: "Which of the following is not a JavaScript Alert Pop-up?",
        choices: ["Alert","Confirm","Question","Prompt"],
        answer: "Question"
    },
    {
        question: "Where does Append add a value/string?",
        choices: ["At the start of an array","At the end of an array","In a new array","On the next line of code"],
        answer: "At the end of an array"
    },
    {
        question: "In what measurement of time is setInterval() called at?",
        choices: ["Milliseconds","Seconds","Minutes","Decades"],
        answer: "Milliseconds"
    },
    {
        question: "After git add -A, you must git _____ -m <>.",
        choices: ["comet","comment","commit","cement"],
        answer: "commit"
    },
    {
        question: "What is the purpose of JavaScript?",
        choices: ["Design the layout of web pages","Program web pages' behavior","Define the content on a web page","Store, manipulate, and retrieve data from databases"],
        answer: "Program web pages' behavior"
    },
]

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
    var correctAnswer = questions[index].answer;
    var questionEl=document.createElement("h4")
    questionEl.textContent=questions[index].question
    document.querySelector('#quiz-container').append(questionEl)
    // use for loop for answer choices - ask bcs (Jerromy - BIG HELP)
    for (var i = 0; i <questions[index].choices.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = questions[index].choices[i];
        questionEl.append(btn);

        btn.addEventListener('click', function() {
            console.log("clicked");
            var selectedAnswer = event.target.textContent;
            console.log(selectedAnswer, correctAnswer);
            if (selectedAnswer !== correctAnswer) {
                // remove time from clock as penalty for wrong answer
                timePenalty();
            } else { index ++ ;
                questionEl.textContent = '';
            // check whether our index is greater than or equal to the length of questions
            if (index >= questions.length) {
                alert("Completed! Your score is " + secLeft);
            }
            // if yes, return and dont call renderQuestion() again
            renderQuestion();
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