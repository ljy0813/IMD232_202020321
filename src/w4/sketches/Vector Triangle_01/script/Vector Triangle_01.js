function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}

function draw() {
  background('white');
  let center = createVector(width / 2, height / 2);
  let mouse = createVector(mouseX, mouseY);

  strokeWeight(4);
  stroke(200);
  line(0, 0, center.x, center.y);
  line(0, 0, mouse.x, mouse.y);

  mouse.sub(center);

  stroke(0);
  translate(center.x, center.y);
  line(0, 0, mouse.x, mouse.y);
}
