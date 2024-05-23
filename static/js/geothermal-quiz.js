const quizData = [
  {
    question: "How much does a kWh of geothermal energy cost?",
    options: ["0¢", "1-4¢", "5-9¢", "10-13¢"],
    answer: "5-9¢"
  },
  {
    question: "Assuming no repairs, how many days of the year can a geothermal power plant run if weather conditions change?",
    options: ["100", "200", "300", "365"],
    answer: "365"
  },
  {
    question: "How does geothermal energy generate electricity?",
    options: ["Using the sun's heat", "Using the Earth's heat", "Using the wind's heat", "Using the ocean's heat"],
    answer: "Using the Earth's heat"
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