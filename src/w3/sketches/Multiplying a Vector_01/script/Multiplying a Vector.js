function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}

function draw() {
  background('white');
  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);
  mouse.sub(center);

  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(200);
  line(0, 0, mouse.x, mouse.y);

  mouse.mult(0.5);
  strokeWeight(2);
  stroke(0);
  line(0, 0, mouse.x, mouse.y);
}
