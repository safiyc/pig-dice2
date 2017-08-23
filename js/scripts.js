//Business Logic
// function Player1 (player, currentScore, totalScore) {
//   this.player = player1Div;
//   this.currentScore = currentScore;
//   this.totalScore = totalScore;
// }


// function game(){
//   total = rollDice();
//   console.log('this is total:', total);
//   return total;
// }
//console.log('calling game:', game());

function player1(){
  currentScore = 0;
  totalScore = 0;
  currentScore = currentScore + diceValue;
  return currentScore;
}

//
// Player1.prototype.p1ScoreBoard = function (total) {
//   this.total += total;
// }
//
// console.log(Player1);

function rollDice(min, max){
  min = 1;
  max = 6;
  diceValue  = Math.ceil(Math.random() * max-min) + min;
  return diceValue;
}






//function to start new gamer, resets start new game

/*function

    Player1 rolls dice
    if (!1) {
     add to player1 currentScore
     if player press hold
      add to totalScore
      pass the turn to player2
  } else {
    if(1){
    reset player1 currentScore to 0
    pass the turn to player2
  }
}
 */

 /*function
     Player2 rolls dice
     if (!1) {
      add to player2 currentScore
      if player press hold
       add to player2 totalScore
       pass the turn to player1
   } else {
     if(1){
     reset player2 currentScore to 0
     pass the turn to player1
   }
 }
  */


//Front End Logic
$(document).ready(function(){
    var start = $(".start");
    var roll = $(".roll");
    var pass = $(".pass");
    var p1ScoreBoard = $(".p1-scoreboard");
    var p2ScoreBoard = $(".p2-scoreboard");
    var p1CurrentScore = $("#p1-score");
    var p2CurrentScore = $("#p2-score");
    player1Div = $('.player1');
    player2Div = $('.player2');


    $(".roll").click(function(){
      $('#dice').text(rollDice());
      console.log('diceValue: ', diceValue);
      // console.log('currentScore:', currentScore);
      // p1CurrentScore.text(player1());
      console.log('player1:', player1());
      // var currentTotal = new Player(currentDice);
      // players[currentDice] = currentTotal;
    });

    function startGame(){
      $(start).click(function(){
        p1ScoreBoard.text(0);
        p2ScoreBoard.text(0);
        p1CurrentScore.text(0);
        p2CurrentScore.text(0);
      });
      document.turn === player1Div;
    };
    startGame();

    // var player1Obj = new Player(player1Div);
    // var player2Obj = new Player(player1Div);
    // console.log(players);
});
//
