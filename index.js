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

