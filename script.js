const colorsList = ["blue", "red", "green", "yellow"];
const ranQuotes = [
  "For a man to conquer himself is the first and noblest of all victories" + "<br>" + "- Plato",
  "Always bear in mind that your own resolution to succeed is more important than any other" + "<br>" + "- Abraham Lincoln",
  "Be alone, that is the secret of invention. Be alone, that is when ideas are born" + "<br>" + "- Nikola Tesla",
  "A person who never made a mistake never tried anything new" + "<br>" + "- Albert Einstein",
  "Dignity does not consist in possessing honours, but in deserving them" + "<br>" + "- Aristotle",
  "No one is hated more than he who speaks the truth" + "<br>" + "- Plato",
  "What does not destroy me, makes me strong" + "<br>" + "- Friedrich Nietzsche",
  "There is nothing impossible to him who will try" + "<br>" + "- Alexander the Great",
  "If you don't like someone's story, write your own" + "<br>" + "- Chinua Achebe",
  "Do not pray for an easy life, pray for the strength to endure a difficult one" + "<br>" + "- Bruce Lee"
  ];
let randomQuote;
const startBtn = document.getElementById('startBtn');
const gameTab = document.getElementById('gameTab');
const next = document.getElementById('nextBtn');
const shuffleImg = document.getElementById('shuffleImg');
const grid = document.querySelector(".grid");
//colors
const blue = document.querySelector(".blue"), 
red = document.querySelector(".red"),
green = document.querySelector(".green"),
yellow = document.querySelector(".yellow");
let color = document.getElementById('color');
let gameNumber = document.getElementById('gameNumber');
let grade = document.getElementById('grade');
let number = 0;
let score = 0;
let randomColor;
let remark = document.getElementById('remark');
let showScore = document.getElementById('showScore');
//saved highest score
let bestScoreDisplay = document.getElementById('bestScore');
let bestScore = localStorage.getItem("bestScore");
bestScoreDisplay.innerHTML = bestScore;
//result modal
const resultModal = document.getElementById('myModal2');

function startGame(){
  startBtn.style.display = "none";
  gameTab.style.display = "block"
  shuffle();
}
function nextBtn(){
  if (number == 10) {
    if (score > bestScore) {
      localStorage.setItem("bestScore", score)
    }
   resultModal.style.display = "block";
   showScore.innerHTML = score;
randomQuote = ranQuotes[Math.floor(Math.random() * ranQuotes.length)];
quoteText.innerHTML = randomQuote;
   remark.style.display = "none";
  }
  else {
    shuffle()
  }
}
function genColor(){
 randomColor = colorsList[Math.floor(Math.random() * colorsList.length)];
  next.style.display = "none";
  color.innerHTML = "Pick the " + randomColor + " card";
  if (randomColor == "red") {
    color.style.color = "red";
    color.style.textShadow = "-1px 1px 0 white, 1px 1px 0 white, 1px -1px 0 white, -1px -1px 0 white";
  } else if (randomColor == "blue") {
    color.style.color = "blue";
    color.style.textShadow = "-1px 1px 0 white, 1px 1px 0 white, 1px -1px 0 white, -1px -1px 0 white";
  } else if (randomColor == "green") {
    color.style.color = "green";
    color.style.textShadow = "-1px 1px 0 white, 1px 1px 0 white, 1px -1px 0 white, -1px -1px 0 white";
  } else {
    color.style.color = "yellow";
    color.style.textShadow = "-1px 1px 0 purple, 1px 1px 0 purple, 1px -1px 0 purple, -1px -1px 0 purple";
  }
}

function chooseColor(e) {
if (next.style.display == "none") {
  remark.style.display = "block";
 let key = e.toLowerCase();
 //keys for picking colors
    if (key == randomColor) {
   score++;
   grade.innerHTML = score;
   remark.innerHTML = "✓ got it";
   remark.style.backgroundColor = "rgba(0,128,0,0.5)"
    } else {
   remark.innerHTML = "❌ missed it";
   remark.style.backgroundColor = "rgba(220,20,60,0.5)"
    }
 blue.style.backgroundColor = "blue";
 green.style.backgroundColor = "green";
 red.style.backgroundColor = "red";
 yellow.style.backgroundColor = "yellow";
 next.style.display = "block";
}
}

function shuffle(){
  setTimeout(function() {
    shuffleImg.style.left = "5em";
  }, 100);
  setTimeout(function() {
    shuffleImg.style.left = "-20em";
  }, 800);
  setTimeout(function() {
      genColor();
 number ++;
 if (number == 10) {
   next.innerHTML = "VIEW SCORE!"
 }
 gameNumber.innerHTML = number;
 remark.style.display = "none";
 blue.style.backgroundColor = "purple";
 green.style.backgroundColor = "purple";
 red.style.backgroundColor = "purple";
 yellow.style.backgroundColor = "purple";
  for (var i = grid.children.length; i >= 0; i--) {
    grid.appendChild(grid.children[Math.random() * i | 0]);
    }
  }, 1000);
}
function reset(){
  location.reload()
}
