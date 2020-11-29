

// getting player elements
let p1d1 = document.getElementById("player1dice1");
let p1d2 = document.getElementById("player1dice2");
let p2d1 = document.getElementById("player2dice1");
let p2d2 = document.getElementById("player2dice2");
const roll = document.getElementById("roll");

let player1score = document.getElementById("player1score");
let player2score = document.getElementById("player2score");
let player1total = document.getElementById("player1total");
let player2total = document.getElementById("player2total");
let results = document.getElementById("results");

let round = 0;
let win = "";

let diceSound = document.getElementById("dice-sound");

function playSound(){
  diceSound.play();
}

// Dice rolls between 1 - 6


roll.addEventListener("click", function(){
  
  $( "#player1dice1").hide().fadeIn(1500, function() {
    
  });
  $( "#player1dice2").hide().fadeIn(1500, function() {
   
  });
  $( "#player2dice1").hide().fadeIn(1500, function() {
   
  });
  $( "#player2dice2").hide().fadeIn(1500, function() {
  
  });
    let roll1 = Math.round(Math.random()*5) + 1;
    let roll2 = Math.round(Math.random()*5) + 1;
    let roll3 = Math.round(Math.random()*5) + 1;
    let roll4 = Math.round(Math.random()*5) + 1;
    
    p1d1.src = `images/dice${roll1}.png`;
    p1d2.src = `images/dice${roll2}.png`;
    p2d1.src = `images/dice${roll3}.png`;
    p2d2.src = `images/dice${roll4}.png`;


    // Increments rounds
    round++;

    // Disables roll after 3 rolls
    if(round > 3){
      winner(globalScore1,globalScore2);
      roll.prop(`disabled`, true);
    }

    // View results
    if(round == 3){
      roll.innerHTML = `Results`;
    }

    playSound();

    player1points(roll1,roll2);
    player2points(roll3,roll4);

});




// Total score compare
function winner(globalScore1,globalScore2){

  if (globalScore1 < globalScore2) {
    win = "lose";
    
  }
  if (globalScore1 > globalScore2) {
    win = "win";
 
  }
  if (globalScore1 == globalScore2) {
    win = "tie";
  }

  results.innerHTML = `<hr><h2>Results:</h2>${win}<br><br><button class="again" onClick="window.location.reload()">Play Again</button>`;

}




// Player 1 points score/total
let globalScore1 = 0;

function player1points(roll1,roll2){
  let total = roll1 + roll2;
  let sum = 0;
  if(roll1 == 1 || roll2 == 1){
    player1score.innerHTML = "Score: " +(total) * 0;
    sum = (total) * 0
    
  }
  
  if(roll1 == roll2 && roll1 > 1 && roll2 > 1){
    player1score.innerHTML = "Score: " +(total) * 2;
    sum = (total) * 2

  }

  if(roll1 > 1 && roll2 > 1 && roll1 != roll2){
    player1score.innerHTML = "Score: "+ (total);
    sum = (total)
    
  }
  globalScore1 += parseInt(sum);
  player1total.innerHTML = globalScore1;
  
}

// Player 2 points score/total
let globalScore2 = 0;

function player2points(roll3,roll4){
  let total = roll3 + roll4;
  let sum = 0;
  if(roll3 == 1 || roll4 == 1){
    player2score.innerHTML = "Score: "+ (total) * 0;
    sum = (total) * 0;
  }
  
  if(roll3 == roll4 && roll3 > 1 && roll4 > 1){
    player2score.innerHTML = "Score: "+(total) * 2;
    sum = (total) * 2;
  }

  if(roll3 > 1 && roll4 > 1 && roll3 != roll4){
    player2score.innerHTML = "Score: "+ (total);
    sum = (total);
  }
  globalScore2 = globalScore2 + parseInt(sum);
  player2total.innerHTML = globalScore2;
}




