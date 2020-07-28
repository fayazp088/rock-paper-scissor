let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userLabel_id = document.getElementById("userLable");
const compLabel_id = document.getElementById("computerLabel");


function computerMadeChoice() {
  arr = ['r', 'p', 's']
  choiceMade = Math.floor(Math.random() * 3);
  return arr[choiceMade];
}

function convertToWord(l) {
  if (l == 'r') return "Rock";
  if (l == 'p') return "Paper";
  if(l == 's') return "Scissors"
}

function win(s1, s2) {
  ++userScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(s1)}${smallUserWord} beats ${convertToWord(s2)}${smallCompWord} You Win!!!! `; 

  document.getElementById(s1).classList.add('greenGlow');
  userLabel_id.classList.add('greenGlow');
  compLabel_id.classList.add('redGlow');

  setTimeout(function () {
    document.getElementById(s1).classList.remove('greenGlow');
    userLabel_id.classList.remove('greenGlow');
    compLabel_id.classList.remove('redGlow');
   }, 1000);
}

function lose(s1, s2) {
  ++computerScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(s2)}${smallCompWord} beats ${convertToWord(s1)}${smallUserWord} You Lost!!!! `; 
  document.getElementById(s1).classList.add('redGlow');
  compLabel_id.classList.add('greenGlow');
  userLabel_id.classList.add('redGlow');

  setTimeout(function () {
    document.getElementById(s1).classList.remove('redGlow');
    compLabel_id.classList.remove('greenGlow');
    userLabel_id.classList.remove('redGlow');
   }, 1000);
}

function draw(s1, s2) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(s1)}${smallUserWord} Same as ${convertToWord(s2)}${smallCompWord} Draw!!!! `; 

  document.getElementById(s1).classList.add('greyGlow');

  setTimeout(function () {
    document.getElementById(s1).classList.remove('greyGlow');
   }, 1000);
}

function game(userChoice) {
  computerChoice = computerMadeChoice();
  switch (userChoice + computerChoice) {
    case "sp":
    case "rs":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "ps":
    case "sr":
    case "rp":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "rr":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function resetMe() {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = 0;
  computerScore_span.innerHTML = 0;
}

function main() {
  rock_div.addEventListener('click', function () {
    game("r");
  })
  
  paper_div.addEventListener('click', function () {
    game("p");
  })
  
  scissors_div.addEventListener('click', function () {
    game("s");
  })
}

main();