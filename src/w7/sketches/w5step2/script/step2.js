let penduluma;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  penduluma = new Penduluma(width / 2, 0, 100);
}

function draw() {
  background(220);
  penduluma.update();

  penduluma.display();
}
