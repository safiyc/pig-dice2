//Business Logic
//Add player object
function Player(name){
  this.name = name;
  this.score = 0;
  this.turnTotal = 0;
}

function Dice(){
  this.value = 0;
}

//Add constructor Methods
Dice.prototype.roll = function(){
  this.value = Math.floor(Math.random() * 6) + 1;
}

Player.prototype.addTurnToScore = function(){
  this.score += this.turnTotal
}

$(function(){
  var scoreToWin = 10;
  var die = new Dice();
  var player1 = new Player("player 1");
  var player2  = new Player("player 2");
  var isP1Turn = true;

  updateGame();

  function getActivePlayer(){
    if(isP1Turn) {
      return player1;
    } else {
      return player2;
    }
  }

//Interface Logic
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
      $('#dice').hide();
      $('#p1-total').text(player1.score);
      $('#p1-current').text(player1.turnTotal);
      $('#p2-total').text(player2.score);
      $('#p2-current').text(player2.turnTotal);

      if(isP1Turn){
        var check = $("#p1-results").text("You Win!");
        console.log(check);
        $("#p2-results").text("You Lose!");
      } else {
        $("#p1-results").text("You Lose!");
        var check2 = $("#p2-results").text("You Win!");
        console.log(check2);
      }
    } else {
      switchTurn();
      updateGame();
    }
  });

  function switchTurn(){
    if(isP1Turn = !isP1Turn) {
      $('.player1').addClass('activeClass');
      $('.player2').removeClass('activeClass');
    } else {
      $('.player1').removeClass('activeClass');
      $('.player2').addClass('activeClass');
    }
    //some sort of toggle
    // $('.player1 .player2').toggleClass('activeClass');
  }
  function updateGame(){
    $('#dice').html(die.value);
    $('#p1-total').text(player1.score);
    $('#p1-current').text(player1.turnTotal);
    $('#p2-total').text(player2.score);
    $('#p2-current').text(player2.turnTotal);
  }



});
