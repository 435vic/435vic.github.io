var a, b;
var max;
var n;
var col;

function setup() {
  var canvas = createCanvas(650, 650);
  canvas.parent('sketch-holder');
  background(0);
  max = 100;
  // colorMode(HSB);
}

function draw() {
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      a = map(x, 0, width, -2, 2);
      b = map(y, 0, height, -2, 2);

      var ca = a;
      var cb = b;

      for (n = 0; n < max; n++) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;

        a = aa + ca;
        b = bb + cb;

        if (abs(a + b) > 2) {
          break;
        }
      }

      col = map(n, 0, max, 0, 255);

      if (n == max) {
        col = 0;
      }

      var index = (x + y * width) * 4;
      pixels[index] = col;
      pixels[index + 1] = col;
      pixels[index + 2] = col;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  //Prevents the webpage from exploding
  noLoop();
}
