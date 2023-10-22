const cNum = 8; // 열의 개수
const rNum = 8; // 행의 개수
const centerRadius = 100; // 중심 원의 반지름
const smallRadius = 75; // 작은 원의 반지름 (기존 50에서 75로 증가)
let angleBegin = 0;
let angleStep;
let gridC;
let gridR;

// 각 그래픽의 색상을 저장할 배열
let colors = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);

  // 각도 증가량 설정
  angleStep = 360 / (60 * 60);

  // 기타 변수 초기화
  gridC = width / cNum;
  gridR = height / rNum;

  // 각 그래픽의 색상 미리 생성
  for (let i = 0; i < cNum * rNum; i++) {
    colors.push(color(random(360), 100, 50, 25));
  }
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      push();
      translate(c * gridC + gridC / 2, r * gridR + gridR / 2);
      rotate(angleBegin + r * 15); // 회전 각도 설정

      // 저장된 색상 사용
      fill(colors[r * cNum + c]);
      noStroke();
      ellipse(0, 0, 2 * centerRadius * 0.3);

      fill(255, 0, 0);
      ellipse(centerRadius * 0.3, 0, 1 * smallRadius * 0.3);
      stroke(0);
      line(0, 0, centerRadius * 0.3, 0);

      pop();
    }
  }

  // 각 행의 각도 계산
  for (let r = 0; r < rNum; r++) {
    // 각 행의 첫 번째 개체를 기준으로 각도 계산
    let angle = angleBegin + r * 15;

    // 각 행의 나머지 개체에 대해 각도 적용
    for (let c = 1; c < cNum; c++) {
      translate(c * gridC + gridC / 2, r * gridR + gridR / 2);
      rotate(angle + c * 15);
    }
  }

  angleBegin += angleStep;
}
