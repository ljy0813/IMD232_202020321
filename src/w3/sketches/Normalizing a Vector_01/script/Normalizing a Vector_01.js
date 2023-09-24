function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}
function draw() {
  background(255);
  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);
  mouse.sub(center);
  translate(width / 2, height / 2);
  strokeWeight(4);
  stroke(200);
  line(0, 0, mouse.x, mouse.y);

  mouse.normalize();
  mouse.mult(50);
  strokeWeight(16);
  stroke(0);
  line(0, 0, mouse.x, mouse.y);
}
