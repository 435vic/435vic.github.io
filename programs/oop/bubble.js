function Bubble (x, y) {
  this.x = x;
  this.y = y;
  this.show = function () {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
  this.move = function () {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}
