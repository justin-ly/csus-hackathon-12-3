var canvas = document.querySelector('.bottom');
var canvas2 = document.querySelector('.top');
//var canvas3 = document.querySelector('enemy');

var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');

// amount of enemies
var enemyCount = 5;
var health = 3;

/* Max starting location of enemy is (450, 650) */
var enemYPos = 450;
var enemXPos = 650;


/* Player's initial position (bottom center) */
var xPos = 325;
var yPos = 450;

var score = 0;
var gameOver = 0; //-1 if game is over.

var pause = false;


// player class 
	var player = function( x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;	
	}
	var player = new player(325,450,50,50);

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
	
	//generateRandomEnemy is a class generator since I'm returning an instance of enemy
	var generateRandomEnemy = function() { 
		var x = Math.random() * enemXPos;
		var y = Math.random() * enemYPos;
		var height = 15 + Math.random() * 30;
		var width = 15 + Math.random() * 30;
	

		
		return new enemy(x, y, width, height);
	}
	//array of enemies
	var enemyList = [];

	for(var i = 0; i < enemyCount; i++) { 
		//to put elements inside array, use push
		// to remove elements, use pop
		enemyList.push(generateRandomEnemy());
		
	}
	// this will generate a new enemey every 3 seconds
	var moreEnemy = setInterval(function() {
	
	enemyList.push(generateRandomEnemy());
	enemyCount++;
	//whenever certain enemyCount is at desired limit,stop this function from creating more enemies
	if(enemyCount == 10) {
		clearInterval(moreEnemy);
	}
	
	}, 3000)
	
	//context.rect(enemy.x, enemy.y, enemy.width, enemy.height);

	//context.stroke();
	
	
	
	var stop =setInterval(function() {
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
     	context.fillStyle = "#FF0000";
	    context.fillRect(enemyList[i].x, enemyList[i].y, enemyList[i].width, enemyList[i].height);
	    context.stroke();
	} //end for

	//fills color and draws the player rectange
	context.fillStyle = "#00ace6";
	context.fillRect(player.x, player.y, player.width, player.height);
	context.stroke();	
	//checks
	// checks for collisions between player and enemy here
//	collisionCheck();


}, 50)

//This is the collision check
 setInterval(function() {
 	for(var i = 0; i < enemyCount; i++) {
 		var check = true;
		// checks if player is within enemy.x +width AND enemy.y + height
		if(player.x < enemyList[i].x + enemyList[i].width &&
			player.x + player.width > enemyList[i].x &&
			player.y < enemyList[i].y + enemyList[i].height &&
			player.y + player.height > enemyList[i].y)  {
			health--;	
			check = false;

		}

		if(health == 0) {
			gameOver++;
			clearInterval(stop);
			clearInterval(scoreCount);
		}

	}
	
	
	}, 300)
/*function collisionCheck(){
	for(var i = 0; i < enemyCount; i++) {
	
		}
		/* Why doesn't this work???
		if(player.x == enemyList[i].x + enemyList[i].width ||
			player.x + player.width == enemyList[i].x ||
			player.y == enemyList[i].y + enemyList[i].height ||
			player.y + player.height == enemyList[i].y) {
				health--;
		}
		

		if(health == 0) {
			gameOver++;
			clearInterval(stop);
			clearInterval(scoreCount);
		}

	}
}
*/

	
function move(e){

	//alert(e.keyCode);

	if(e.keyCode == 39){ //Right arrow key
		if (player.x + player.width < 700) player.x +=30; 
	}
	else if(e.keyCode == 37) { //Left arrow key
		if (player.x > 0) player.x -=30;
	}

	if(e.keyCode == 38) { //Up arrow key
		//if (yPos > 100) yPos -= 5;
		if (player.y > 0) player.y -= 30;
	}
	else if(e.keyCode == 40) { //Down arrow key
		if (player.y  + player.height< 500) player.y +=30;
	}
	else if(e.keyCode == 80) {
	
		!pause;
		pauseGame();



	}


	function pauseGame() {
		if(!pause) {
			clearInterval(stop);
			clearInterval(scoreCount);
		 document.getElementById('test').style.display = "block";
		
		
			
		}
	
	


	}
	
}

//Score Counter

var scoreCount =setInterval(function() {
	
	score++;
	}, 200)

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