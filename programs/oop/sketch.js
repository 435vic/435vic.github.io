var bubbles = [];

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }

  if (bubbles.length > 50) {
    bubbles.splice(0, 1);
  }
}


function mouseDragged () {
  bubbles.push(new Bubble(mouseX, mouseY));
}
