var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');



// hello world
var xPos = 0;
var yPos = 0;
	// creates rectangle to move around
	
	context.rect(xPos, yPos, 50, 50);
	context.stroke();
	context.beginPath();
    context.moveTo(0, 100);
    context.lineTo(canvas.width,100);
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
	/* creates a line boundary so that 
	the health bar and stats go on top
	*/
	canvas.width = canvas.width;
	context.beginPath();
	// coordinates where line starts
    context.moveTo(0, 75);
    // cordinates where ilne end
    context.lineTo(canvas.width,75);
    context.stroke();
   
   // creates the rectangle to move around
	context.rect(xPos, yPos, 50, 50);
	context.stroke();
}


document.onkeydown = move;
