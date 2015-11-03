
/********** GUESSING GAME SCRIPTS by ANTHONY S. CASSON **********/

/*****
Script for the FIRST question
*****/
var userResponse1 = prompt('Do I drive a sweet 1986 Volvo?');
var responseScore1; //global var modified inside 'if'

if ((userResponse1 === 'yes')||(userResponse1 === 'Yes')||(userResponse1 === 'YES')||(userResponse1 === 'Y')||(userResponse1 === 'y')) {
  console.log("You are correct! It's quite the battle sedan.");
  responseScore1 = 1;
}else {
  console.log("Actually, I do! It's a pretty awesome ride.")
  responseScore1 = 0;
};



/*****
Script for the SECOND question
*****/
var userResponse2 = prompt('Did I grow up in Texas?');
var responseScore2; //global var modified inside 'if'

if ((userResponse2 === 'yes')||(userResponse2 === 'Yes')||(userResponse2 === 'YES')||(userResponse2 === 'Y')||(userResponse2 === 'y')) {
  console.log('Correct! Yeeehhhaaawww!');
  responseScore2 = 1;
}else {
  console.log('Tisk, tisk, tisk! Incorrect. Was to!');
  responseScore2 = 0;
};



/*****
Script for the THIRD question
*****/
var userResponse3 = prompt('Is my favorite color green?');
var responseScore3; //global var modified inside 'if'

if ((userResponse3 === 'no')||(userResponse3 === 'No')||(userResponse3 === 'NO')||(userResponse3 === 'N')||(userResponse3 === 'n')) {
  console.log('You are right! I much prefer blue.');
  responseScore3 = 1;
}else {
  console.log('Incorrect. I like blue more than I like green!');
  responseScore3 = 0;
};

/*****
Script for the TOTAL answers correct
*****/
var totalCorrect = responseScore1 + responseScore2 + responseScore3;

if (totalCorrect >= 2) { //majority reaction
  console.log("You got " + totalCorrect + " out of 3 answers correct! Nice work!");
} else { //minority reaction
  console.log("You only got " + totalCorrect + " out of 3 answers correct! Better luck next time!");
};

