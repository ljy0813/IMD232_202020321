function setup() {
  setCanvasContainer('canvas', 3, 2, true);
}
function draw() {
  background('255');
  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);

  mouse.sub(center);

  push();
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
  pop();
  //mag는 어느방향으로 가도 양수값으로 나오는 것
  const m = mouse.mag();
  fill(0);
  rect(10, 10, m, 10);
}
