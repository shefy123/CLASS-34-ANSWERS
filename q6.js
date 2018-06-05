let highScore = 250;
let currentScore = 250;
let needScore = highScore - currentScore;

if (currentScore > highScore){
    console.log ("Congratulations!! Your new high score is " + currentScore);
} 
else if (currentScore === highScore) {
    console.log ("You need 1 more score to win");
} else {
    console.log ("Try Again. You just need " + needScore + " score to win" );
}