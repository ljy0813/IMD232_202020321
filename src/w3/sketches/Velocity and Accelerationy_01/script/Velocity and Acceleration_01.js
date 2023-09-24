let pos;
let vel;
let acc;
let radius;
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  // acc = createVector(1,0);
  // acc.rotate.random,(TAU);
  p5.Vector.random2D();
  acc.mult(0.1);
}
function draw() {
  background('salmon');
}
