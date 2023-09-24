let x;
let y;
let velocityX = -1;
let velocityY = 1; //velocity 속도

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  x = width / 2.0;
  y = height / 2.0;
  if (x < 0) {
    velocityx *= -1;
  } else if (x > width) {
    velocityx *= -1;
  }
}
function draw() {
  x += velocityX;
  y += velocityY;
  background('white');
  ellipse(x, y, 50);
  if (x < 0) {
    velocity *= -1;
  } else if (y > width) {
    velocityy *= -1;
  }
}
