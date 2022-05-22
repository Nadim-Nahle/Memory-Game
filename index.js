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







chooseLevel.innerHTML="Press Any Key To Start The Game";
if (!win){
  pressAnyKey();
}


function pressAnyKey(){
  document.addEventListener('keypress', (event) => {
    neww();
    

})
}

