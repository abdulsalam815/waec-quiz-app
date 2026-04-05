const questions = [

{level:1,question:"What is the SI unit of force?",options:["Newton","Joule","Pascal","Watt"],answer:"Newton"},
{level:1,question:"What gas do plants absorb?",options:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],answer:"Carbon dioxide"},
{level:1,question:"What is H2O?",options:["Water","Salt","Oxygen","Hydrogen"],answer:"Water"},
{level:1,question:"Which organ pumps blood?",options:["Heart","Liver","Kidney","Lung"],answer:"Heart"},
{level:1,question:"What is the boiling point of water?",options:["90C","100C","80C","70C"],answer:"100C"},
{level:1,question:"Which planet is closest to the sun?",options:["Earth","Mars","Mercury","Venus"],answer:"Mercury"},
{level:1,question:"What is the symbol for Oxygen?",options:["O","Ox","Og","On"],answer:"O"},
{level:1,question:"Which force opposes motion?",options:["Gravity","Friction","Magnetism","Energy"],answer:"Friction"},
{level:1,question:"What part of plant makes food?",options:["Root","Stem","Leaf","Flower"],answer:"Leaf"},
{level:1,question:"Which blood cells fight infection?",options:["Red","White","Platelets","Plasma"],answer:"White"}

];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentIndex];

  document.getElementById("quiz").innerHTML = `
    <h3>${q.question}</h3>
    ${q.options.map(opt => 
      `<button onclick="checkAnswer('${opt}')">${opt}</button>`
    ).join("")}
  `;
}

function checkAnswer(answer) {
  if (answer === questions[currentIndex].answer) {
    score++;
  }
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML =
      `<h2>Your score: ${score}</h2>`;
  }
}

loadQuestion();
