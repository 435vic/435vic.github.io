function setup() {
    createCanvas(500, 500);
    noStroke();
}

function draw() {
    fill(mouseX, (mouseX + mouseY) / 2, mouseY);
    ellipse(mouseX, mouseY, 50, 50);
}