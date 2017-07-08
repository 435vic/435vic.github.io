//create new array
var bubbles = [];

function setup() {
  var canvas = createCanvas(600, 400);
  canvas.parent('sketch-holder');
  background(0);
}

function draw() {
  background(0);
  //for each bubble in bubbles, show and move them
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }

  if (bubbles.length > 50) {
    //splice the first (or last drawn bubble) in the array if the array is bigger than 50
    bubbles.splice(0, 1);
  }
}


function mouseDragged () {
  //push new bubbles to the array when the mouse is dragged
  bubbles.push(new Bubble(mouseX, mouseY));
}
