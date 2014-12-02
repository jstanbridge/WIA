/*
     Name: James Stanbridge
     Date: 1 DEC 2014
     Class & Section:  WIA-1201
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js ***
// Link the main.js file ***
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message*/

window.onload = function() {

		if(Modernizr.canvas){

/*	PART 1
Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.*/

	var theCanvas1 = document.getElementById("canvas1");

	if(theCanvas1){
		var ctx = theCanvas1.getContext("2d");

		if(ctx){
			ctx.fillStyle = 'blue';
			ctx.strokeStyle = 'black';
			ctx.fillRect(0,0,50,100);
			ctx.strokeRect(0,0,50,100);
		}
	}//end canvas1



/*	PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method*/


	var theCanvas2 = document.getElementById("canvas2");

	if(theCanvas2){
		var ctx = theCanvas2.getContext("2d");

		if(ctx){
			var degrees = 360;
			var radians = (degrees/180)*Math.PI;
			ctx.fillStyle = 'rgba(255,0,0,0.5)';
			ctx.strokeStyle = 'black';
			ctx.beginPath();
			ctx.arc(50,50,20,0,radians);
			ctx.fill();
			ctx.stroke();
		}
	}//end canvas2


/*PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.*/


	var theCanvas3 = document.getElementById("canvas3");

	if(theCanvas3){
		var ctx = theCanvas3.getContext("2d");

		if(ctx){
			ctx.fillStyle = 'yellow';
			ctx.strokeStyle = 'white';
			ctx.beginPath();
			ctx.lineWidth = 2;
			ctx.moveTo(100, 100);
			ctx.lineTo(134, 160);
			ctx.lineTo(209, 171);
			ctx.lineTo(154, 223);
			ctx.lineTo(167, 298);
			ctx.lineTo(100, 263);
			ctx.lineTo(36, 298);
			ctx.lineTo(46, 223);
			ctx.lineTo(0, 171);
			ctx.lineTo(67, 160);
			ctx.lineTo(100, 100);
			ctx.fill();
			ctx.stroke();
		}
	}//end canvas3



/*PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.*/


	var theCanvas4 = document.getElementById("canvas4");

	if(theCanvas4){
		var ctx = theCanvas4.getContext("2d");

		if(ctx){
			ctx.fillStyle = 'black';
			ctx.strokeStyle = 'black';
			ctx.beginPath();
			ctx.moveTo(0,200);
			ctx.bezierCurveTo(0,0,400,0,400,200);
			ctx.bezierCurveTo(400,200,350,150,300,200);
			ctx.bezierCurveTo(300,200,250,150,200,200);
			ctx.bezierCurveTo(200,200,150,150,100,200);
			ctx.bezierCurveTo(100,200,50,150,0,200);
			ctx.fill();
			ctx.stroke();
		}
	}//end canvas4



/*PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.*/


	var theCanvas5 = document.getElementById("canvas5");

	if(theCanvas5){
		var ctx = theCanvas5.getContext("2d");

		if(ctx){
			var theString = "My practice text.";
			ctx.font = "25pt Georgia";
			ctx.fillStyle = "green";
			ctx.strokeStyle = "green";
			ctx.fillText(theString,40,40);
			ctx.strokeText(theString,40,40);
		}
	}//end canvas5



/*PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%.
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.*/


	var theCanvas6 = document.getElementById("canvas6");

	if(theCanvas6){
		var ctx = theCanvas6.getContext("2d");

		if(ctx){
			var srcImg = document.getElementById("logo");
			ctx.drawImage(srcImg,0,400);
			ctx.drawImage(srcImg,0,100,1700,500);
			ctx.drawImage(srcImg,600,600,900,900,0,0,300,300);
		}
	}//end canvas6



/*Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.*/



	var theCanvas7 = document.getElementById("canvas7");

	if(theCanvas7){
		var ctx = theCanvas7.getContext("2d");

		if(ctx){
			var theString = "Bringing it all together.";
			ctx.font = "20pt Georgia";
			ctx.fillStyle = "blue";
			ctx.strokeStyle = "blue";
			ctx.fillText(theString,55,30);
			ctx.strokeText(theString,55,30);

			ctx.beginPath();
			ctx.fillStyle = "white";
			ctx.strokeStyle = "white";
			ctx.moveTo(0,200);
			ctx.bezierCurveTo(0,0,400,0,400,200);
			ctx.bezierCurveTo(100,200,50,300,0,200);
			ctx.fill();
			ctx.stroke();

			var degrees = 360;
			var radians = (degrees/180)*Math.PI;
			ctx.fillStyle = 'yellow';
			ctx.strokeStyle = 'yellow';
			ctx.beginPath();
			ctx.arc(100,125,30,0,radians);
			ctx.fill();
			ctx.stroke();

			ctx.beginPath();
			ctx.fillStyle = 'orange';
			ctx.strokeStyle = 'orange';
			ctx.arc(200,100,30,0,radians);
			ctx.fill();
			ctx.stroke();

			ctx.beginPath();
			ctx.fillStyle = 'teal';
			ctx.strokeStyle = 'teal';
			ctx.arc(300,120,30,0,radians);
			ctx.fill();
			ctx.stroke();
		}
	}//end canvas7
}else{
	alert("Your browser does not support HTML5 Canvas.");
}//end modernizr test

}//end function