var canvas = document.querySelector('.bottom');
var canvas2 = document.querySelector('.top');
//var canvas3 = document.querySelector('enemy');

var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');

// amount of enemies
enemyCount = 10;
health = 3;

/* Canvas height/width */
cHeight = 450;
cWidth = 650;



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

// player class 
var player = function( x, y, width, height){
		
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;	
	}
	/*

/* enemy is a constructor */
var enemy = function( x, y, width, height){
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
	
	//enemyList[id] = enemy2;
	//generateRandomEnemy is a class generator since I'm returning an instance of enemy
	var generateRandomEnemy = function() { 
		var x = Math.random() * cWidth;
		var y = Math.random() * cHeight;
		var height = 10 + Math.random() * 30;
		var width = 10 + Math.random() * 30;

		
		return new enemy(x, y, width, height);
	}
	var player = new player(325,450,25,25)
	var enemyList = [];
	
	for(var i = 0; i < enemyCount; i++) { 
		//to put elements inside array, use push
		// to remove elements, use pop
		enemyList.push(generateRandomEnemy());
		
	}
	
	
	context.strokeStyle = "red";
	context.rect(enemy.x, enemy.y, enemy.width, enemy.height);

	context.stroke();
	
	
	
	setInterval(function() {
	// clears the canvas and won't leave the trail for the enemy
	canvas.width = canvas.width;
	
	//Boundary check
	for(var i = 0; i < enemyCount; i++) {
		if(enemyList[i].x + enemyList[i].width > 700) { 
			enemyList[i].xDir= -enemyList[i].xDir;
		}
		if(enemyList[i].x < 0) { 
			enemyList[i].xDir= -enemyList[i].xDir;
		}
		if(enemyList[i].y + enemyList[i].height > 500) { 
			enemyList[i].yDir= -enemyList[i].yDir;
		}
		if(enemyList[i].y < 0) { 
			enemyList[i].yDir= -enemyList[i].yDir;
		}
		enemyList[i].x += enemyList[i].xDir;
		enemyList[i].y += enemyList[i].yDir;
	 
	context.rect(enemyList[i].x, enemyList[i].y, enemyList[i].width, enemyList[i].height);
	context.stroke();
	} //end for
	context.rect(player.x, player.y, 50, 50);
	context.stroke();	
}, 50)






function move(e){

	//alert(e.keyCode);

	if(e.keyCode == 39){ //Right arrow key
		if (player.x < 650) player.x +=30; 
	}
	else if(e.keyCode == 37) { //Left arrow key
		if (player.x > 0) player.x -=30;
	}

	if(e.keyCode == 38) { //Up arrow key
		//if (yPos > 100) yPos -= 5;
		if (player.y > 0) player.y -= 30;
	}
	else if(e.keyCode == 40) { //Down arrow key
		if (player.y < 450) player.y +=30;
	}
	
	/*canvas.width = canvas.width;
	context.rect(xPos, yPos, 50, 50);
	context.stroke();
	*/
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
		// to write onto top canvas, do this
		context2.fillText(`Score: ${score}		Health: ${health}`, 5 ,50);
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