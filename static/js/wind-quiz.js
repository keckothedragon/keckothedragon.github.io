const quizData = [
  {
    question: "Approximately how many homes can a wind turbine power in a year?",
    options: ["1", "14", "140", "1400"],
    answer: "1400"
  },
  {
    question: "About how much does it cost to install a large, 100 kW wind turbine?",
    options: ["$80,000", "$500,000", "$800,000", "$1,000,000"],
    answer: "$80,000"
  },
  {
    question: "Which of the following can be a disadvantage of wind power?",
    options: ["Noise pollution", "High cost", "Inconsistency", "All of the above"],
    answer: "All of the above"
  }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  selectAnswerRunning = false;

  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

var selectAnswerRunning = false;

function selectAnswer(e) {

  if (selectAnswerRunning) {
    return;
  }

  selectAnswerRunning = true;

  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    // set the button color to green
    selectedButton.style.backgroundColor = "green";
    score++;
  } else {
    // set the button color to red
    selectedButton.style.backgroundColor = "red";
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(showResult, 1000);
  }
}

function showResult() {
  selectAnswerRunning = false;

  quiz.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p style="margin-bottom: 20px; font-size: 20px; font-weight: bold;">Your score: ${score}/${quizData.length}</p>
    <button onclick="location.reload()">Play Again</button>
  `;
}

showQuestion();