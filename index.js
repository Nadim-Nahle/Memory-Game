var sequence = [];
var playerSequence = [];
var counter;
var playerTurn;
var good;
var selectLevel;
var computerTurn;
var intervalId;
var audio = true;
var gameRunning = true;
var win = false;

const green = document.getElementById("green");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const level = document.getElementById("level");
var diff = document.getElementById("diff");
const changeColor =document.getElementById("color");
const chooseLevel = document.getElementById("chooseLevel");





chooseLevel.innerHTML="Press Any Key To Start The Game";
if (!win){
  pressAnyKey();
}


function pressAnyKey(){
  document.addEventListener('keypress', (event) => {
    neww();
    

})
}

function neww(){
  chooseLevel.innerHTML="press a number between 1 & 9 to choose max level";
  SelectLevel();
}
//this function let the user choose the level
function SelectLevel(){
  document.addEventListener('keypress', (event) =>{
    if (event.key ==="1"){
      alert("you chose level 1");
      selectLevel = 1;
      startGame();
    }
    if (event.key ==="2"){
      alert("you chose level 2");
      selectLevel = 2;
      startGame();
    }
    if (event.key ==="3"){
      alert("you chose level 3");
      selectLevel = 3;
      startGame();
    }
    if (event.key ==="4"){
      alert("you chose level 4");
      selectLevel = 4;
      startGame();
    }
    if (event.key ==="5"){
      alert("you chose level 5");
      selectLevel = 5;
      startGame();
    }
    if (event.key ==="6"){
      alert("you chose level 6");
      selectLevel = 6;
      startGame();
    }
    if (event.key ==="7"){
      alert("you chose level 7");
      selectLevel = 7;
      startGame();
    }
    if (event.key ==="8"){
      alert("you chose level 8");
      selectLevel = 8;
      startGame();
    }
  })
}


//when this function is called the game begins
function startGame() {
  chooseLevel.innerHTML="";
  clearBackgroundColor();
  win = false;
  sequence = [];
  playerSequence = [];
  counter = 0;
  intervalId = 0;
  playerTurn = 1;
  good = true;
  level.innerHTML = 1;
  for (var i = 0; i < 20; i++) {
    
    sequence.push(Math.floor(Math.random() * 4) + 1);
    
  }
  computerTurn = true;

  intervalId = setInterval(gameTurn, 800);
  
}

// this function determine if it is the cpu or user turn
function gameTurn() {
  gameRunning = false;

  if (counter == playerTurn) {
    clearInterval(intervalId);
    computerTurn = false;
    clearColor();
    gameRunning = true;
  }

  if (computerTurn) {
    clearColor();
    setTimeout(() => {
      if (sequence[counter] == 1) sound1();
      if (sequence[counter] == 2) sound2();
      if (sequence[counter] == 3) sound3();
      if (sequence[counter] == 4) sound4();
      counter++;
    }, 200);
  }
}
// these function play the sudio files for each block
function sound1() {
  if (audio) {
    let audio = document.getElementById("clip4");
    audio.play();
  }
  audio = true;
  green.style.backgroundColor = "grey";
}

function sound2() {
  if (audo) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  audio = true;
  red.style.backgroundColor = "grey";
}

function sound3() {
  if (audio) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  audio = true;
  yellow.style.backgroundColor = "grey";
}

function sound4() {
  if (audio) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  audio = true;
  blue.style.backgroundColor = "grey";
}
function sound5() {
  if (audio) {
    let audio = document.getElementById("wrong");
    audio.play();
  }
  audio = true;
}
// this function return the blocks to their initial color
function clearColor() {
  green.style.backgroundColor = "green";
  red.style.backgroundColor = "red";
  yellow.style.backgroundColor = "yellow";
  blue.style.backgroundColor = "blue";
}
//this function return the background to it's initial color
function clearBackgroundColor() {
  changeColor.style.backgroundColor = "#041D37";
}
function flashColor() {
  changeColor.style.backgroundColor = "red";
  sound5();
}
function flashColor1() {
  changeColor.style.backgroundColor = "purple";
  diff.innerHTML = "congrats you winnn!!<br><br>Press Any Key To Restart"
}
//these events are responsible of clicking the blocks
green.addEventListener('click', (event) => {
  if (gameRunning) {
    playerSequence.push(1);
    check();
    sound1();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

red.addEventListener('click', (event) => {
  if (gameRunning) {
    playerSequence.push(2);
    check();
    sound2();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

yellow.addEventListener('click', (event) => {
  if (gameRunning) {
    playerSequence.push(3);
    check();
    sound3();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

blue.addEventListener('click', (event) => {
  if (gameRunning) {
    playerSequence.push(4);
    check();
    sound4();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})
//this function check if the player won
function check() {
  if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]){
    good = false;
    diff.innerHTML=("game over, press any key to start again")
    document.addEventListener('keypress', (event) => {
      startGame();
    })
  }

  if (playerSequence.length == selectLevel && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    
    setTimeout(() => {  
    clearColor();
    clearBackgroundColor();

    }, 800);

    audio = false;
  }

  if (playerTurn == playerSequence.length && good && !win) {
    playerTurn++;
    playerSequence = [];
    computerTurn = true;
    counter = 0;
    level.innerHTML = playerTurn;
    intervalId = setInterval(gameTurn, 800);
  }

}
//this is the win function that restart the game
function winGame() {
  flashColor1();
  gameRunning = false;
  win = true;
  document.addEventListener('keypress', (event) => {
      startGame();
  })
}
