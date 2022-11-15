var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	
	fabric.Image.fromURL('natal.png', function(Img) {
	blockImageObject = Img;
		
	blockImageObject.scaleToWidth(600);
	blockImageObject.scaleToHeight(400);
	blockImageObject.set({
	top:0,
	left:0
	});
	canvas.add(blockImageObject);
	});
	
}

function playSound(){
	x.play();
}
