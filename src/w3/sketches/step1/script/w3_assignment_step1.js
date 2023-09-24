//일단 원의 이동방향, 속도, 가속도를 무작위로 설정,,,
//하되, 캔버스 안에서만 돌도록 if 구문사용 필요.

let ellipseX; // 원의 현재 가로 축 위치
let ellipseY; // 원의 현재 세로 축 위치

let vel_ellipseX; // 원의 현재 가로 방향 속도
let vel_ellipseY; // 원의 현재 세로 방향 속도

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  ellipseX = random(width);
  ellipseY = random(height);

  vel_ellipseX = createVector(random(-1, 1), 0); // 가로 방향의 속도 벡터 생성
  vel_ellipseY = createVector(0, random(-1, 1)); // 세로 방향의 속도 벡터 생성

  frameRate(60);
}

function draw() {
  background(220);

  let accX = createVector(random(-0.1, 0.1), 0); // 가로 방향의 가속도 벡터 생성
  let accY = createVector(0, random(-0.1, 0.1)); // 세로 방향의 가속도 벡터 생성

  vel_ellipseX.add(accX);
  vel_ellipseY.add(accY);

  ellipseX += vel_ellipseX.x;
  ellipseY += vel_ellipseY.y;

  // 캔버스 경계를 벗어난 경우, 위치를 조정하여 다시 나타나도록 합니다.
  if (ellipseX < 0) {
    ellipseX = width;
  } else if (ellipseX > width) {
    ellipseX = 0;
  }
  if (ellipseY < 0) {
    ellipseY = height;
  } else if (ellipseY > height) {
    ellipseY = 0;
  }
  function draw() {
    background(220);

    let accX = createVector(random(-10, 10), 0); // 가로 방향의 가속도 벡터 생성
    let accY = createVector(0, random(-10, 10)); // 세로 방향의 가속도 벡터 생성

    vel_ellipseX.add(accX);
    vel_ellipseY.add(accY);

    ellipseX += vel_ellipseX.x;
    ellipseY += vel_ellipseY.y;

    if (ellipseX < 0) {
      ellipseX = width;
    } else if (ellipseX > width) {
      ellipseX = 0;
    }
    if (ellipseY < 0) {
      ellipseY = height;
    } else if (ellipseY > height) {
      ellipseY = 0;
    }
  }

  stroke(255, 0, 0);
  line(ellipseX, ellipseY, ellipseX + accX.x * 1000, ellipseY);

  stroke(0, 0, 255);
  line(
    ellipseX,
    ellipseY,
    ellipseX + vel_ellipseX.x * 1000,
    ellipseY + vel_ellipseY.y * 1000
  );

  let targetX = mouseX;
  let targetY = mouseY;
  let targetVector = createVector(targetX - ellipseX, targetY - ellipseY);

  stroke(0);
  line(
    ellipseX,
    ellipseY,
    ellipseX + targetVector.x,
    ellipseY + targetVector.y
  );

  noFill();
  stroke(0);
  ellipse(ellipseX, ellipseY, 100, 100);
}
