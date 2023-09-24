function setup() {
  letCanvasContainer('canvas', 3, 2, true);
  background(255);
}

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, 50);
}
