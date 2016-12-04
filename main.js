var canvas = document.querySelector('#canvas');
var canvas2 = document.querySelector('#score');


var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');

/* Canvas height/width */
cHeight = 500;
cWidth = 700;


/* Player's initial position (bottom center) */
var xPos = 325;
var yPos = 450;

var score = 0;
var gameOver = 0; //-1 if game is over.



/* Scoreboard */
//context2.rect(0, 0, 700, 70); //Draw the top canvas (score)
//context2.stroke();

/*Player Square*/
context.rect(xPos, yPos, 50, 50); 
context.stroke();



/* Randomly generate enemy */
var enemy = function(id, x, y, width, height){
		this.id = id;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;	
		this.xDir = Math.random() * 10;
	    this.yDir = Math.random() * 10;
	    if(Math.random() <= .5) { 
			this.xDir = -this.xDir;
		}
	  if(Math.random() <=.5) { 
			this.yDir = -this.yDir;
	  }
	}
	


var generateRandomEnemy = function() { 
	var x = Math.random() * cWidth;
	var y = Math.random() * cHeight;
	var height = 10 + Math.random() * 30;
	var width = Math.random() * 30;
	var id = Math.random();
	return new enemy(id, x, y, width, height);
}
var enemy = generateRandomEnemy();
	
context.rect(enemy.x, enemy.y, enemy.width, enemy.height);
context.stroke();
	

	//Moves enemy
setInterval(function() {
	if(enemy.x >650) { 
		enemy.xDir= -enemy.xDir;
	}
	if(enemy.x < 0) { 
		enemy.xDir= -enemy.xDir;
	}
	if(enemy.y >500) { 
		enemy.yDir= -enemy.yDir;
	}
	if(enemy.y <0) { 
		enemy.yDir= -enemy.yDir;
	}
	enemy.x += enemy.xDir;
	enemy.y += enemy.yDir;
	// clears the canvas and won't leave the trail for the enemy
	canvas.width = canvas.width;
	context.rect(enemy.x, enemy.y, enemy.width, enemy.height);
	context.stroke();
	context.rect(xPos, yPos, 50, 50);
	context.stroke();
},50)


//Moves player
function move(e){

	//alert(e.keyCode);

	if(e.keyCode == 39){ //Right arrow key
		//console.log(`xPos: ${xPos}\n`);
		if (xPos < 650) xPos +=10; 
	}
	else if(e.keyCode == 37) { //Left arrow key
		if (xPos > 0) xPos -=10;
	}

	if(e.keyCode == 38) { //Up arrow key
		//if (yPos > 100) yPos -= 5;
		if (yPos > 0) yPos -= 10;
	}
	else if(e.keyCode == 40) { //Down arrow key
		if (yPos < 450) yPos +=10;
	}
}


//Score Counter
function myFunction() {
	if (gameOver == 0) setInterval(alertFunc, 500);
}

function alertFunc() {
    score++;
}

//Scoreboard
setInterval(function(){
	if (gameOver == 0)
	{
		canvas2.width = canvas2.width;
		context2.font="20px Arial";
		context2.fillText(`Score: ${score}`, 5 ,50)
		context2.rect(0, 0, 700, 70);
		context2.stroke();
	}
	else {
		canvas2.width = canvas2.width;
		context2.font="20px Arial";
		context2.fillText(`GAME OVER    Score: ${score}`, 5 ,50)
		context2.rect(0, 0, 700, 70);
		context2.stroke();
	}
}, 100);




document.onkeydown = move;