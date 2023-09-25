let ellipse_center; // 원의 중심점
let ellipse_radius = 100; // 원의 반지름
let velocity; // 속도
let acceleration; // 가속도

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  ellipse_center = createVector(width / 2, height / 2);
  velocity = createVector(); // 처음 속도는 0
}

function draw() {
  background(220);

  // 중심점에서 마우스로 향하는 벡터
  let centerToMouse = createVector(mouseX, mouseY).sub(ellipse_center);

  // 가속도는 centerToMouse 벡터를 0.1로 스케일링한 벡터
  acceleration = centerToMouse.normalize().mult(0.1); // 길이가 고정된 0.1로 설정

  // 속도에 가속도를 더함
  velocity.add(acceleration);

  // 위치에 속도를 더함
  ellipse_center.add(velocity);

  // 원의 위치가 화면을 벗어나지 않도록 처리하지 않음

  // 원 그리기
  noStroke();
  fill(0);
  ellipse(ellipse_center.x, ellipse_center.y, ellipse_radius * 1);

  // 가속도와 속도 벡터 시각화
  stroke(0);
  strokeWeight(4);
  line(
    ellipse_center.x,
    ellipse_center.y,
    ellipse_center.x + acceleration.x * 100,
    ellipse_center.y + acceleration.y * 100
  );

  stroke(0, 0, 255);
  line(
    ellipse_center.x,
    ellipse_center.y,
    ellipse_center.x + velocity.x * 100,
    ellipse_center.y + velocity.y * 100
  );

  // 원의 중심점과 마우스 커서를 연결하는 선분 그리기
  stroke(255, 0, 0);
  line(ellipse_center.x, ellipse_center.y, mouseX, mouseY);
  strokeWeight(8);
  ellipse_center.normalize();
  ellipse_center.mult(500);
}
