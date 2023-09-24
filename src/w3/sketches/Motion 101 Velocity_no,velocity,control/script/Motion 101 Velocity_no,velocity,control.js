let pos;
let vel;
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
}
function draw() {
  background('salmon');
  pos = createVector(random(width), random(height));
  vel = createVector(random(-5, 5), random(-5, 5));

  pos.add(vel);

  //원을 그리기 이전에 if 로써 원의 동선(?)을 먼저 설정해
  //주는 게 맞는가? 아니면 순서가 바뀌어도 상관은 없는가?

  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }

  noStroke();
  fill('cornsilk');
  ellipse(pos.x, pos.y, 50);
}
