//business logic
var getRandomInt = function(min, max){
  min = 1;
  max = 6;
  return Math.ceil(Math.random() * max-min) + min;
}

console.log(getRandomInt);

function Player (currentTotal) {
  // this.total = total;
  this.currentTotal = currentTotal;
}


// Player1.prototype.p1ScoreBoard = function (total) {
//   this.total += total;
// }


Player.prototype.deposit = function (current) {

}
// Player.prototype.p1CurrentScore = function (getRandomInt) {
//   this.total += getRandomInt;
// }


//user interface Logic
$(document).ready(function() {
  $(".roll").click(function(){
    var currentDice = $("#dice").text(getRandomInt());

//     var p1ScoreBoard = $(".p1-scoreboard").getRandomInt();
//     // var p2ScoreBoard = $(".p2-scoreboard").val();
//     var p1CurrentScore = $(".p1-current-score").append(getRandomInt());
//     // var p2CurrentScore = $(".p2-current-score").val();
    var currentTotal = new Player(currentDice);
    player1[currentDice] = currentTotal;


  });
  console.log(currentTotal);
//
//
//
//
});
