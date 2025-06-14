const questions = [
  {
    question: "What is 7 + 5 ?",
    options: ["1", "12", "3", "4"],
    answer: "12",
  },
  {
    question: "What is 4 + 7 ?",
    options: ["11", "2", "3", "4"],
    answer: "11",
  },
];
const questionE1 = document.getElementById("question");
const optionlist = document.getElementById("option-list");
let currentQuestion = 0;

function LoadContent() {
  const q = questions[currentQuestion];
  questionE1.textContent = q.question;
  optionlist.innerHTML = "";
  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => Answer(li, q.answer);
    optionlist.appendChild(li);
  });
}



let score = 0;
function Answer(currentlist, answer) {
  const allOptions = optionlist.querySelectorAll("li");
  allOptions.forEach((li) => (li.style.pointerEvents = "none"));
  if (currentlist.textContent === answer) {
    currentlist.style.backgroundColor = "green";
    score++;
  } else {
    currentlist.style.backgroundColor = "red";
  }
}

const nextbtn = document.getElementById("Next-btn");
const scoretext = document.getElementById("score-card");
const scoresection = document.getElementById("score-section");

nextbtn.onclick = () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    LoadContent();
  } else {
    showScore();
  }
};



function showScore() {
  document.getElementById("quiz-section").classList.add("hidden");
  document.getElementById("Next-btn").classList.add("hidden");
  scoresection.classList.remove("hidden");
}

LoadContent();