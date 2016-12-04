var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');



// hello worlds
var HEIGHT = 50;
var WIDTH = 50;
var xPos = 0;
var yPos = 0;
var hp = 0;

// iterate through enemys in enemylist, check if enemy and player collide

// gets distance between 2 objects
getDistanceBetweenObject = function (object1, object2) { 


}

var enemy = { };
//var upgradeList= { };
/**
creates RandomEnemy that object has to dodge
@param x is x coordinate of enemy
@param y is y coordinate of enemy
@param width is
@ param height is
@ param id is an object number
*/

	// creates rectangle to move around
	
	context.rect(xPos, yPos, 50, 50);
	context.stroke();
	context.beginPath();
    context.moveTo(0, 100);
    context.lineTo(canvas.width,100);
    context.stroke();
    
   // enemy is a class constructor
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
		var x = Math.random() * WIDTH;
		var y = Math.random() * HEIGHT;
		var height = 10 + Math.random() * 30;
		var width = Math.random() * 30;
		var id = Math.random();
		return new enemy(id, x, y, width, height);
	
	
	}
	var enemy = generateRandomEnemy();
	
	console.log(enemy);
	context.rect(enemy.x, enemy.y, enemy.width, enemy.height);
	context.stroke();
	


/*Upgrade = function(id, x,y, width, height) { 
	var enemy = { 
		x:x,
		y:y,
		id:id,
		width:width,
		
	
	}
	upgradeList[id] = enemy;

	
}
	generateRandomUpgrade = function(){
        //Math.random() returns a number between 0 and 1
        var x = Math.random()*WIDTH;
        var y = Math.random()*HEIGHT;
        var height = 10;
        var width = 10;
        var id = Math.random();
        
        Upgrade(id,x,y,width,height);
}
*/


function move(e){

	//alert(e.keyCode);

	if(e.keyCode == 39){ //Right arrow key
		// if less than boundary on right side, move right, if not do nothing
		if (xPos < 650) xPos +=5; 
	}
	else if(e.keyCode == 37) { //Left arrow key
		if (xPos > 0) xPos -=5;
	}

	if(e.keyCode == 38) { //Up arrow key
		if (yPos > 100) yPos -= 5;
	}
	else if(e.keyCode == 40) { //Down arrow key
		if (yPos < 450) yPos +=5;
	}
	    canvas.width = canvas.width;
	    context.rect(xPos, yPos, 50, 50);
	    context.stroke();
	    
	
	
	


	// Peter upper boundary line
	context.beginPath();
    context.moveTo(0, 100);
    context.lineTo(canvas.width,100);
    context.stroke();
}


document.onkeydown = move;
