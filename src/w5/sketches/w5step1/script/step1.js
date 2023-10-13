const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel;
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  stroke(0);

  // 각도 증가 속도와 초기 각도 설정
  angleBeginVel = 1; // 각도 증가 속도
  angleStep = 15; // 각 그래픽 간의 각도 간격
}

function draw() {
  background(255);

  // 각 행마다 그래픽 그리기
  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      push();
      translate(
        (width / (cNum + 2)) * (c + 1),
        (height / (rNum + 2)) * (r + 1)
      );
      rotate(angleBegin + c * angleStep); // 회전
      // 여기에 그래픽을 그리는 코드를 추가하세요
      line(0, 0, 30, 0); // 예시로 선을 그리는 코드

      pop();
    }
  }
