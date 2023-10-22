let x;
let y;
let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  // vel = createVector(5, 3);

  //   x = cos(angle) * distance;
  //   y = sin(sngle) * distance;
  //   vel = createVector(x, y);

  //   //1. 임의의 방향으로 1만큼씩 이동시키고 싶다면-?
  //   vel = createVector(0, 1);
  //   vel.rotate(random(TAU));
  //   // = vel.rotate(random(PI*2));
  //   //-> 여기까지 넣으면 임의의 방향으로 무조건 1의 길이가 된다. = 리스타트할때마다 랜덤으로길이 1.
  //   console.log(vel.mag());

  //2. 임의의 방향으로 1만큼씩 이동시키고 싶다면-?
  vel = p5.Vector.random2D(); //괄호를 꼭넣어야 함수라는 뜻임

  vel.mult(5);
  acc = createVector(0, 0.1);

  console.log(vel.mag());
}
function draw() {
  background('white');

  update();
  infiniteEdge();
  display();

  function update() {
    vel.add(acc); //속도도 매번 가속도가 더해지도록 함.
    vel.limit(20);
    pos.add(vel);
  }
  function infiniteEdge() {
    if (pos.x < 0) {
      pos.x += width;
    } else if (pos.x >= width) {
      pos.x -= width;
    }
    if (pos.y < 0) {
      pos.y += height;
    } else if (pos.y >= height) {
      pos.y -= height;
    }
  }
  function display() {
    ellipse(pos.x, pos.y, 2 * radius);
  }
}
