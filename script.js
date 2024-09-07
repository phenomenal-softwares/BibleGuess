const colorsList = ["blue", "red", "green", "yellow"];
const gameTab = document.getElementById('gameTab');
const next = document.getElementById('nextBtn');
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
function loadHighestScore() {
let bestScore = localStorage.getItem("bestScore");
return parseInt(bestScore) || 0;
}
bestScoreDisplay.innerHTML = loadHighestScore();
//result modal
const resultModal = document.getElementById('myModal2');

shuffle();
function nextBtn(){
  if (number == 10) {
    if (score > loadHighestScore()) {
      localStorage.setItem("bestScore", score)
    }
   resultModal.style.display = "flex";
   showScore.innerHTML = score;
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

function chooseColor(key) {
if (next.style.display == "none") {
  remark.style.display = "block";
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
    grid.style.opacity = "0"
  }, 50);
  setTimeout(function() {
    grid.style.opacity = "1"
  }, 500);
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
  }, 500);
}
function reset(){
  location.reload()
}
