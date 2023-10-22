let emitters = [];
let g;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  colorMode(HSL, 360, 100, 100);
  g = createVector(0, 0.1);

  background('salmon');
}

function draw() {
  background('salmon');
  console.log('createdEmittersNum :', emitters.length);

  for (let i = emitters.length - 1; i >= 0; i--) {
    emitters[i].createBall();
    emitters[i].applyGravity(g);
    emitters[i].update();
    emitters[i].display();

    if (emitters[i].isDead()) {
      emitters.splice(i, 1);
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    for (let i = 0; i < 100; i++) {
      const emitter = new Emitter(mouseX, mouseY);
      emitters.push(emitter);
    }
  }
}
