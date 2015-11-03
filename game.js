
/********** GUESSING GAME SCRIPTS by ANTHONY S. CASSON **********/

var tally = 0; // tallies total score

//Script for the FIRST question

var userResponse1 = prompt('Do I drive a sweet 1986 Volvo?');

if ((userResponse1 === 'yes')||(userResponse1 === 'Yes')||(userResponse1 === 'YES')||(userResponse1 === 'Y')||(userResponse1 === 'y')) {
  alert("You are correct! It's quite the battle sedan.");
  tally++;
}else {
  alert("Actually, I do! It's a pretty awesome ride.")
};




// Script for the SECOND question

var userResponse2 = prompt('Did I grow up in Texas?');

if ((userResponse2 === 'yes')||(userResponse2 === 'Yes')||(userResponse2 === 'YES')||(userResponse2 === 'Y')||(userResponse2 === 'y')) {
  alert('Correct! Yeeehhhaaawww!');
  tally++;
}else {
  alert('Tisk, tisk, tisk! Incorrect. Was to!');
};




// Script for the THIRD question

var userResponse3 = prompt('Is my favorite color green?');

if ((userResponse3 === 'yes')||(userResponse3 === 'Yes')||(userResponse3 === 'YES')||(userResponse3 === 'Y')||(userResponse3 === 'y')) {
  alert('Incorrect. I like blue more than I like green!');
}else {
  alert('You are right! I much prefer blue.');
  tally++;
};


// Script for the FOURTH question

var userResponse4 = prompt('Did I go to college?');

if ((userResponse4 === 'yes')||(userResponse4 === 'Yes')||(userResponse4 === 'YES')||(userResponse4 === 'Y')||(userResponse4 === 'y')) {
  alert('Correct! I graduated from Oregon State University.');
  tally++;
}else {
  alert('Incorrect. I graduated from Oregon State University');
};


// Script for the FIFTH question

var userResponse5 = prompt('Do I own a dog?');

if ((userResponse5 === 'yes')||(userResponse5 === 'Yes')||(userResponse5 === 'YES')||(userResponse5 === 'Y')||(userResponse5 === 'y')) {
  alert('Incorrect. I wish I did!');
}else {
  alert('You are correct. I will one day, though!');
  tally++;
};


// Script for the SIXTH question

var userResponse6 = Number(prompt('Is my age closer to 20 or 30?'));

if (userResponse6 === 30) {
  alert('Correct. I am 28 years old!');
  tally++;
}else {
  alert('Incorrect. I am 28 years old and thus closer to 30!');
};

// Script for TOTAL score

if (tally >= 4) { //majority reaction
  alert("You got " + tally + " out of 6 answers correct! Nice work!");
} else { //minority reaction
  alert("You only got " + tally + " out of 6 answers correct! Better luck next time!");
};
