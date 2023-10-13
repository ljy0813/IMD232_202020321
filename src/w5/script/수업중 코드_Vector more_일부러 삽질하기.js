//class =구조는 똑같고 안에 들어간 값들만 좀 다를때 사용

//class 안의 모든 함수에는 this가 들어가야함
class Ball {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = p5.Vector.random2D(); // random2D 함수를 호출하여 벡터를 생성해야 합니다.
    this.vel.mult(5); // 벡터에 대한 함수를 호출하여 벡터의 크기를 조정합니다.
    this.acc = createVector(0, 0.1);
    this.radius = 25;

    //초기 위치값이 고정일 경우에는 ()안에 넣어준다.
    //고정이 아니고 고유한 값일 경우, constructor()의 ()안에 넣은 좌표값을 createVector안에 넣어주면 된다.
  }

  //클래스 안에서 지정할떄는 위에 정리한 함수와 밑에 function 을 지워줌
  // update();
  // infiniteEdge();
  // display();

  update() {
    this.vel.add(this.acc);
    this.vel.limit(20);
    this.pos.add(this.vel);
  }
  infiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x += width;
    } else if (this.pos.x >= width) {
      this.pos.x -= width;
    }
    if (this.pos.y < 0) {
      this.pos.y += height;
    } else if (this.pos.y >= height) {
      this.pos.y -= height;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}

let aBall;
let bBall;
let cBall;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');

  aBall = new Ball();
  bBall = new Ball();
}
//여기에 값을 넣느냐 아니냐는 위에 construct에 무언가가 들어갔느냐 아니냐로 달려있음.
function draw() {
  background('white');
  aBall.update();
  aBall.infiniteEdge();
  aBall.display();

  bBall.update();
  bBall.infiniteEdge();
  bBall.display();

  cBall.update();
  cBall.infiniteEdge();
  cBall.display();
}
