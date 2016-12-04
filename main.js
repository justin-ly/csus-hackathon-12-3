var canvas = document.querySelector('#canvas');
var canvas2 = document.getElementById('healthBar');
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
context2.rect(0, 0, 700, 70); //Draw the top canvas (score)
context2.stroke();

/*Main game screen */
context.rect(xPos, yPos, 50, 50); //Draw the second canvas (main game)
context.stroke();

/* Randomly generate enemy */
var enemy = function(id, x, y, width, height){
		this.id = id;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;	
	}
	
	//enemyList[id] = enemy2;
	//generateRandomEnemy is a class generator since I'm returning an instance of enemy
	var generateRandomEnemy = function() { 
		var x = Math.random() * cWidth;
		var y = Math.random() * cHeight;
		var height = 10 + Math.random() * 30;
		var width = Math.random() * 30;
		var id = Math.random();
		return new enemy(id, x, y, width, height);
	}
	var enemy = generateRandomEnemy();
	
	console.log(enemy);
	context.rect(enemy.x, enemy.y, enemy.width, enemy.height);
	context.stroke();





function move(e){

	//alert(e.keyCode);

	if(e.keyCode == 39){ //Right arrow key
		//console.log(`xPos: ${xPos}\n`);
		if (xPos < 650) xPos +=5; 
	}
	else if(e.keyCode == 37) { //Left arrow key
		if (xPos > 0) xPos -=5;
	}

	if(e.keyCode == 38) { //Up arrow key
		//if (yPos > 100) yPos -= 5;
		if (yPos > 0) yPos -= 5;
	}
	else if(e.keyCode == 40) { //Down arrow key
		if (yPos < 450) yPos +=5;
	}
	
	canvas.width = canvas.width;
	context.rect(xPos, yPos, 50, 50);
	context.stroke();
}

//Score Counter
function myFunction() {
	if (gameOver == 0) setInterval(alertFunc, 500);
}

function alertFunc() {
    score++;
}

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