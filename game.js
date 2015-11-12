
/********** GUESSING GAME SCRIPTS by ANTHONY S. CASSON **********/

var tally = 0; // tallies total score
var positiveResponse = ["You are correct! It's quite the battle sedan.",'Correct! Yeeehhhaaawww!','No','Correct! I graduated from Oregon State University.','Incorrect. I wish I did!','Correct! I am 28 years old!'];
var negativeResponse = ["Actually, I do! It's a pretty awesome ride.",'Tisk, tisk, tisk! Incorrect. Was to!','You are correct! I much prefer blue.','Incorrect. I graduated from Oregon State University','You are correct! I will one day, though!','Incorrect. I am 28 years old and thus closer to 30!'];
var question = ['Do I drive a sweet 1986 Volvo?','Did I grow up in Texas?','Is my favorite color green?','Did I go to college?','Do I own a dog?','Is my age closer to 20 or 30?'];
var CorrectPic=['http://tinyurl.com/o6y7pwq','http://tinyurl.com/paa4klv','http://tinyurl.com/nwhcz3g','http://tinyurl.com/nf6hzll','http://tinyurl.com/ow2op77','http://cdn.meme.am/instances/56324890.jpg','http://lewamack.com/Facebook/Pics/Congrats-Yippee-Hooray-Wow/Congrats-fireworks-animated-BlackPinkCongrats.gif'];
var IncorrectPic=['http://tinyurl.com/p3h78ch','http://tinyurl.com/nlynuwn','https://s-media-cache-ak0.pinimg.com/236x/48/05/2e/48052e82bc805b34c109acffefe1e96a.jpg','http://tinyurl.com/oxvzxnp','http://tinyurl.com/o5g6e3l','http://i245.photobucket.com/albums/gg46/Ko-Ko-Klown/you-sir-are-wrong.jpg','http://orig04.deviantart.net/1ef4/f/2015/088/f/4/try_again___gif_warning__by_lyricalupin-d8nnjdq.gif'];

var response;
var pic;

var checkAnswer = function(p1,p2,p3,p4,p5){
   var patt = /CORRECT!/g;

   if (((p1.toUpperCase() === 'YES') || (p1.toUpperCase()==='Y')) && (patt.test(p2.toUpperCase()))){
    response = p2;
    pic = p4;
    tally++;


  }

   else if (((p1.toUpperCase() === 'NO') || (p1.toUpperCase() === 'N')) && (patt.test(p3.toUpperCase()))){
      response = p3;
      pic = p5;
      tally++;

    }

   else if ((p1.toUpperCase() === 'YES') || (p1.toUpperCase() === 'Y')){
    response = p2;
    pic = p4;

   }

   else if ((p1.toUpperCase() === 'NO') || (p1.toUpperCase() === 'N')){
    response = p3;
    pic = p5;

   }

   else {
    response = p1 + " is not a correct response. Please enter Yes or No"

   }


   console.log(response);
   console.log(tally);
};

//Script for the FIRST question

var userResponse1 = prompt(question[0]);

checkAnswer(userResponse1,positiveResponse[0],negativeResponse[0],CorrectPic[0],IncorrectPic[0]);
document.getElementById('a1').innerHTML = response;
document.getElementById('pic1').src= pic;

// Script for the SECOND question



var userResponse2 = prompt(question[1]);

checkAnswer(userResponse2,positiveResponse[1],negativeResponse[1],CorrectPic[1],IncorrectPic[1]);
document.getElementById('a2').innerHTML = response;
document.getElementById('pic2').src = pic;


// Script for the THIRD question

var userResponse3 = prompt(question[2]);

checkAnswer(userResponse3,positiveResponse[2],negativeResponse[2],CorrectPic[2],IncorrectPic[2]);
document.getElementById('a3').innerHTML = response;
document.getElementById('pic3').src = pic;




// Script for the FOURTH question

var userResponse4 = prompt(question[3]);

checkAnswer(userResponse4,positiveResponse[3],negativeResponse[3],CorrectPic[3],IncorrectPic[3]);
document.getElementById('a4').innerHTML = response;
document.getElementById('pic4').src = pic;



// Script for the FIFTH question

var userResponse5 = prompt(question[4]);

checkAnswer(userResponse5,positiveResponse[4],negativeResponse[4],CorrectPic[4],IncorrectPic[4]);
document.getElementById('a5').innerHTML = response;
document.getElementById('pic5').src = pic;



// Script for the SIXTH question

var userResponse6 = Number(prompt(question[5]));

if (userResponse6 === 30) {
  tally++;
  document.getElementById('a6').innerHTML = positiveResponse[5];
  document.getElementById('pic6').src = CorrectPic[5];



}else {
  document.getElementById('a6').innerHTML = negativeResponse[5];
  document.getElementById('pic6').src = IncorrectPic[5];
};

// Script for TOTAL score


if (tally >= 4) { //majority reaction
  document.getElementById('finalScore').innerHTML = "You got " + tally + " out of 6 answers correct! Nice work!";
  document.getElementById('pic7').src= CorrectPic[6];
}
  else { //minority reaction
  document.getElementById('finalScore').innerHTML = "You only got " + tally + " out of 6 answers correct! Better luck next time!";
  document.getElementById('pic7').src= IncorrectPic[6];
};


