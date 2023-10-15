const cNum = 8;
const rNum = 8;
const centerRadius = 100;
const smallRadius = 75;
let angleBegin = 0;
let angleStep;
let gridC;
let gridR;

let colors = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);

  angleStep = 360 / (60 * 60);

  gridC = width / cNum;
  gridR = height / rNum;

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

  for (let r = 0; r < rNum; r++) {
    let angle = angleBegin + r * 15;

    for (let c = 1; c < cNum; c++) {
      translate(c * gridC + gridC / 2, r * gridR + gridR / 2);
      rotate(angle + c * 15);
    }
  }

  angleBegin += angleStep;
}
