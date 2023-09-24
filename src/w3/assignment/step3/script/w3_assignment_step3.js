let center; // 원의 중심점
let radius = 100; // 원의 반지름
let vel; // 속도
let acc; // 가속도

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  center = createVector(width / 2, height / 2);
  vel = createVector(random(-2, 2), random(-2, 2)); // 초기 무작위 속도 생성
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    // 중심점으로부터 마우스로 향하는 벡터
    let target = createVector(mouseX, mouseY).sub(center);

    // 클릭 시 원의 중심으로 당기는 힘을 추가
    let force = target.copy().mult(0.001); // 조절 가능한 힘의 크기

    // 가속도는 target 벡터를 0.1로 스케일링한 벡터
    acc = target.copy().mult(0.001);

    // 속도에 가속도와 당기는 힘을 더함
    vel.add(acc);
    vel.add(force);

    // 위치에 속도를 더함
    center.add(vel);

    // 원의 위치가 화면을 벗어나지 않도록 처리하지 않음
  }

  // 원 그리기
  noStroke();
  fill(0, 0, 255);
  ellipse(center.x, center.y, radius * 2);

  // 원의 중심점과 마우스 커서를 연결하는 선분 그리기
  stroke(255, 0, 0);
  line(center.x, center.y, mouseX, mouseY);
}
