# _Pig Dice_


#### By _**Safiy Cham and Luciano Oliveira, 08/24/2017**_

## Description

_This game requires 2 Players_
_Game will start with user one _
_Player 1 will roll the dice, if number is not one, value will be added to your current score_
_You can pass the turn to Player 2 and your current score will be added to your total score_
_If you roll the dice and get 1, your current score will get wiped to 0, and you will pass the turn to player 2_
_Player 2 turn, and same rules apply _


## Specifications
* Click button to start new game
  * input: click start new game button
  * output: scores reset to 0

* Random number is generated for player one
  * input: click 'roll'
  * output: 3

* Total score increases each roll
  * input: 5, 4
  * output: 9


* If output is '1', player's current turn's score is '0' and players are switched
  * input: roll is '1'
  * output: current turn's score: 0; total score: 9; players switch

* Current player has option to pass/hold
  * input: click 'pass'
  * output: display "Next Player"

* Switch player
  * input: click 'pass'
  * output: display "Next Player"

* Whoever gets to 21 or higher, win
  * input: score is 21 or higher
  * output: display "You Won" message

* Loser player receives "You Lost" message
  * input:
  * output: "You Lost"



## Setup/Installation Requirements

* _Clone GitHub Repository_
* _Open pig-dice folder_
* _Open index.html in web browser of choice_
* _Make modifications as you see fit_


## Known Bugs

_No bugs at the time_

## Support and contact details

_Feel free to contact me at luciano101@msn.com or Safiy Cham at safiyc_

## Technologies Used

_HTML jQuery JavaScript_

### License

*This software is licensed under the MIT license*

Copyright (c) 2016 **_Luciano Oliveira & Safiy Cham_**
