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


