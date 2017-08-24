//Business Logic
//Add player object
function Player(name){
  this.name = name;
  this.score = 0;
  this.turnTotal = 0;
}

function Dice(){
  this.value = 1;
}

//Add constructor Methods
Dice.prototype.roll = function(){
  this.value = Math.floor(Math.random() * 6) + 1;
}

Player.prototype.addTurnToScore = function(){
  this.score += this.turnTotal
}

$(function(){
  var scoreToWin = 50;
  var die = new Dice();
  var player1 = new Player("player 1");
  var player2  = new Player("player 2");
  var isP1Turn = true;

  updateGame();

  $(".roll").click(function(){
    die.roll();
    if(die.value === 1){
      getActivePlayer().turnTotal = 0;
      switchTurn();
    } else {
      getActivePlayer().turnTotal += die.value;
    }
    updateGame();
  });

  $("button.pass").click(function(){
    getActivePlayer().addTurnToScore();
    getActivePlayer().turnTotal = 0;

    if(getActivePlayer().score >= scoreToWin){
      $("#p1-score").css('background-color', red);
      $("#p1-score").css('background-color', red);
      $('#dice').hide();
      $('#p1-total').text(player1.score);
      $('#p1-current').text(player1.turnTotal);
      $('#p2-total').text(player2.score);
      $('#p2-current').text(player2.turnTotal);

      if(isP1Turn){
        $("#p1-results").text("You Win!");
        $("#p2-results").text("You Lose!");
      } else {
        $("#p1-results").text("You Lose!");
        $("#p2-results").text("You Win!");
      }
    } else {
      switchTurn();
      updateGame();
    }
  });

  function switchTurn(){
    isP1Turn = !isP1Turn;
    //some sort of toggle
    // $('.player1 .player2').toggleClass('activeClass');
    $('.player2').toggleClass('activeClass')
  }
  function updateGame(){
    $('#dice').html(die.value);
    $('#p1-total').text(player1.score);
    $('#p1-current').text(player1.turnTotal);
    $('#p2-total').text(player2.score);
    $('#p2-current').text(player2.turnTotal);
  }

  function getActivePlayer(){
    if(isP1Turn) {
      return player1;
    } else {
      return player2;
    }
  }

});
