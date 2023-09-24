//let x;
//let y;
//let poseX =
//let poseY = -3;
//어떤 변수가 있는데 그 변수가 값을 여러개를 가지고 있게하면 안돼? 해서 만들어진 게 array
let pos;
let vel = [3, 5];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = [width / 2, height / 2];

  console.log('pos', pos);
  console.log('vel', vel);
}

function draw() {
  background('white');
  pos[0] += vel[0];
  pos[1] += vel[1];
  ellipse(pos[0], pos[1], 50);

  if (pos[0] < 0 || pos[0] > width) {
    vel[0] *= -1;
  }
  if (pos[1] < 0 || pos[1] > height) {
    vel[1] *= -1;
  }
}
