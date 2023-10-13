let mover;
let gravity;
let mVec;
let pMVec;
let throwingForce;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  mover = new Mover(width / 2, height / 2, 30);
  gravity = createVector(0, 0.2);
  mVec = createVector();
  pMVec = createVector();
  throwingForce = createVector();
  background(255);
}

function draw() {
  background(255);

  const force = p5.Vector.mult(gravity, mover.mass);
  mover.applyForce(force);
  mover.update();
  mover.display();
}

function mouseMoved() {
  mover.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  mover.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  mover.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  mover.mouseReleased();
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  // Calculate the force based on the mouse drag
  throwingForce = p5.Vector.sub(mVec, pMVec);
  mover.applyForce(throwingForce);
}
