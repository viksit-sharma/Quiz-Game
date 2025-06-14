
const questions = [
  {
    question: "What does CSS stand for?",
    options: ["Color Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Computer Style Syntax"],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "What is the correct syntax to change the background color in CSS?",
    options: ["color: background red;", "bgcolor = red;", "background-color: red;", "background = color red;"],
    answer: "background-color: red;",
  },
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    options: ["string", "number", "float", "boolean"],
    answer: "float",
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["<!-- This is a comment -->", "# This is a comment", "// This is a comment", "** This is a comment **"],
    answer: "// This is a comment",
  },
  {
    question: "Which attribute is used in HTML to specify inline styles?",
    options: ["class", "style", "id", "font"],
    answer: "style",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onhover", "onmouseclick", "onchange", "onclick"],
    answer: "onclick",
  },
  {
    question: "In CSS, how do you select an element with id 'header'?",
    options: ["#header", ".header", "header", "*header"],
    answer: "#header",
  },
  {
    question: "Which method is used to output text in JavaScript?",
    options: ["print()", "console.log()", "echo()", "output()"],
    answer: "console.log()",
  },
  {
    question: "What does the 'display: flex;' property do in CSS?",
    options: [
      "Applies a shadow effect to elements",
      "Centers the text of elements",
      "Makes a container a flex container",
      "Floats the element to the right"
    ],
    answer: "Makes a container a flex container",
  }
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
  
    scoretext.textContent = `Your Score is ${score} out of ${questions.length}`
};

const startbtn = document.getElementById("start-btn");
const quizUi = document.getElementById("quiz-ui");
startbtn.onclick = () => {
  document.getElementById("starting").classList.add("hidden");
  quizUi.classList.remove("hidden");
  LoadContent();
};
