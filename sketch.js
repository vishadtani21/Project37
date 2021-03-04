var canvas;

var database;

var contestantCount;
var gameState = 0;

var quiz, question, contestant;

var allContestants;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");

  textSize(20);
  fill ("black");
  textFont("Times New Roman");
  text("Contestants : 3", 700,25);

  if(contestantCount === 3){
    quiz.update(1);
  }
  
  if(gameState === 1){
    quiz.play();
  }

  
}
