let Y;
let X;
let velicityX = 1;
let velocityY = 1;

function setup() {
  setCanvasContainer('canvas', 300, 200, true);
  background('white');
  X = width / 2;
  y = height / 2;
}

function draw() {
  background('white');
  X += velocityX;
  Y += velocityY;
  ellipse(X, Y, 50);
}
