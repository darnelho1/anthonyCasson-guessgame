
/********** GUESSING GAME SCRIPTS by ANTHONY S. CASSON **********/

var tally = 0; // tallies total score
var positiveResponse = ["You are correct! It's quite the battle sedan.",'Correct! Yeeehhhaaawww!','No','Correct! I graduated from Oregon State University.','Incorrect. I wish I did!','Correct! I am 28 years old!'];
var negativeResponse = ["Actually, I do! It's a pretty awesome ride.",'Tisk, tisk, tisk! Incorrect. Was to!','You are correct! I much prefer blue.','Incorrect. I graduated from Oregon State University','You are correct! I will one day, though!','Incorrect. I am 28 years old and thus closer to 30!']

var response;

var checkAnswer = function(p1,p2,p3){
   var patt = /CORRECT!/g;
   if ((p1.toUpperCase() === 'YES') || (p1.toUpperCase()==='Y')){

    if (patt.test(p2.toUpperCase())){
    response = p2;
    tally++
  }
   }


   else{
    p3.toUpperCase();
    if (patt.test(p3.toUpperCase())){
      tally++
    };
    response = p3;
   }
   console.log(response);
   console.log(tally);


}

//Script for the FIRST question

var userResponse1 = prompt('Do I drive a sweet 1986 Volvo?');

checkAnswer(userResponse1,positiveResponse[0],negativeResponse[0]);
document.getElementById('a1').innerHTML = response;

// Script for the SECOND question



var userResponse2 = prompt('Did I grow up in Texas?');

checkAnswer(userResponse2,positiveResponse[1],negativeResponse[1]);
document.getElementById('a2').innerHTML = response;

// Script for the THIRD question

var userResponse3 = prompt('Is my favorite color green?');

checkAnswer(userResponse3,positiveResponse[2],negativeResponse[2]);
document.getElementById('a3').innerHTML = response;

// Script for the FOURTH question

var userResponse4 = prompt('Did I go to college?');

checkAnswer(userResponse4,positiveResponse[3],negativeResponse[3]);
document.getElementById('a4').innerHTML = response;

// Script for the FIFTH question

var userResponse5 = prompt('Do I own a dog?');

checkAnswer(userResponse5,positiveResponse[4],negativeResponse[4]);
document.getElementById('a5').innerHTML = response;

// Script for the SIXTH question

var userResponse6 = Number(prompt('Is my age closer to 20 or 30?'));

if (userResponse6 === 30) {
  document.getElementById('a6').innerHTML = positiveResponse[5];
  tally++;
}else {
  document.getElementById('a6').innerHTML = negativeResponse[5];
};

// Script for TOTAL score


if (tally >= 4) { //majority reaction
  document.getElementById('finalScore').innerHTML = "You got " + tally + " out of 6 answers correct! Nice work!";
}
  else { //minority reaction
  document.getElementById('finalScore').innerHTML = "You only got " + tally + " out of 6 answers correct! Better luck next time!";
};


