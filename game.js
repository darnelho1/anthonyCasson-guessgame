
/********** GUESSING GAME SCRIPTS by ANTHONY S. CASSON **********/

var tally = 0; // tallies total score

//Script for the FIRST question

var userResponse1 = prompt('Do I drive a sweet 1986 Volvo?');

if ((userResponse1 === 'yes')||(userResponse1 === 'Yes')||(userResponse1 === 'YES')||(userResponse1 === 'Y')||(userResponse1 === 'y')) {
  console.log("You are correct! It's quite the battle sedan.");
  tally++;
}else {
  console.log("Actually, I do! It's a pretty awesome ride.")
};




// Script for the SECOND question

var userResponse2 = prompt('Did I grow up in Texas?');

if ((userResponse2 === 'yes')||(userResponse2 === 'Yes')||(userResponse2 === 'YES')||(userResponse2 === 'Y')||(userResponse2 === 'y')) {
  console.log('Correct! Yeeehhhaaawww!');
  tally++;
}else {
  console.log('Tisk, tisk, tisk! Incorrect. Was to!');
};




// Script for the THIRD question

var userResponse3 = prompt('Is my favorite color green?');

if ((userResponse3 === 'yes')||(userResponse3 === 'Yes')||(userResponse3 === 'YES')||(userResponse3 === 'Y')||(userResponse3 === 'y')) {
  console.log('Incorrect. I like blue more than I like green!');
}else {
  console.log('You are right! I much prefer blue.');
  tally++;
};


// Script for the FOURTH question

var userResponse4 = prompt('Did I go to college?');

if ((userResponse4 === 'yes')||(userResponse4 === 'Yes')||(userResponse4 === 'YES')||(userResponse4 === 'Y')||(userResponse4 === 'y')) {
  console.log('Correct! I graduated from Oregon State University.');
  tally++;
}else {
  console.log('Incorrect. I graduated from Oregon State University');
};


// Script for TOTAL score

if (tally >= 4) { //majority reaction
  console.log("You got " + tally + " out of 6 answers correct! Nice work!");
} else { //minority reaction
  console.log("You only got " + tally + " out of 6 answers correct! Better luck next time!");
};
