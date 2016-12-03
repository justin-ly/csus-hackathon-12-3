var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var xPos = 0;
var yPos = 0;

context.rect(xPos, yPos, 50, 50);
context.stroke();


function move(e){

	//alert(e.keyCode);


	if(e.keyCode == 39){ //Right arrow key
		xPos +=5;
	}
	else if(e.keyCode == 37) { //Left arrow key
		xPos -=5;
	}

	if(e.keyCode == 38) { //Up arrow key
		yPos -= 5;
	}
	else if(e.keyCode == 40) { //Down arrow key
		yPos +=5;
	}
	
	canvas.width = canvas.width;
	context.rect(xPos, yPos, 50, 50);
	context.stroke();
}

document.onkeydown = move;
