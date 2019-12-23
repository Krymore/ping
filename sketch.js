// port of Daniel Shiffman's Pong coding challenge
// by madacoo

let leftscore = 0;
let rightscore = 0;
let isstarted,isfinished = false;

function setup() {
  createCanvas(600, 400);
  puck = new Puck();
  left = new Paddle();
  right = new PaddleAI();

}

function draw() {
	if(isstarted && !isfinished){
	  game();
	  checkfinish();
	}else{
	  outputs();
	}
}

function game(){
	clear();
	background(0);

	  puck.checkPaddleRight(right);
	  puck.checkPaddleLeft(left);

	  left.show();
	  right.show();
	  left.update();
	  right.update(puck);

	  puck.update();
	  puck.edges();
	  puck.show();

	  fill(255);
	  textSize(32);
	  text(leftscore, 32, 40);
	  text(rightscore, width - 64, 40);
}

function keyPressed() {
  if (keyCode === ENTER) {
    isstarted = true;
    isfinished = false;
  } 
}


function checkfinish(){
	if(leftscore == 5){
		isfinished = true; 
		winner = "You";
		leftscore =0;
		rightscore =0;
	}
	if(rightscore == 5){
		isfinished = true; 
		winner = "Computer";	
		leftscore =0;
		rightscore =0;
	}
}

function outputs(){
	if(!isstarted){
	  	textSize(32);
	  	text("Please press 'enter' to start", width/2-100, height/2);
	  }else{
	  	textSize(32);
	  	let wint =winner+" win"; 
	  	text(wint, width/2-100, height/2-50);
	  	text("Press 'ENTER' to restart", width/2-100, height/2);
	  }
}
