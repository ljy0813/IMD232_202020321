//let x;
//let y;
//let velocityX = -3;
//let velocityY = 5;

//벡터란 친구는 x,y,z값은 내부에 가지고 있는 오브젝트 값임

let position;
let velocity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //x = width / 2;
  // y = height / 2;
  position = createVector(width / 2, height / 2); //우리가 선언은 했지만 아직 시작은 안했기 떄문에 값을 줄때 무조건'createVector'라는 이름의 방식으로 줘야한다.
  velocity = createVector(3, 5); //createVector는setup안에서 반드시 create값을 넣어줘야한다.
}

function draw() {
  background('white');
  //  x += velocityX;
  //  y += velocityY;
  position.add(velocity);
  ellipse(position.x, position.y, 50);

  if (position.x < 25 || position.x > width - 25) {
    velocity.x *= -1;
  }
  if (position.y < 25 || position.y > height - 25) {
    velocity.y *= -1;
  }
}
//if (x < TikTok) {
//  velocityX *= -1;
//} else if (x > width - TikTok) {
//  velocityX *= -1;
//}

//if (y < TikTok) {
//  velocityY *= -1;
//} else if (y > height - TikTok) {
//  velocityY *= -1;
//}
