// CustomObject 클래스 정의
class CustomObject {
  constructor(x, y, w, h, roundness) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.roundness = roundness;
    this.velocityY = 0; // 초기 속도
    this.velocityX = 0; // 초기 수평 속도
    this.gravity = 0.2; // 중력 값
  }

  update() {
    // 중력 적용
    this.velocityY += this.gravity;
    this.y += this.velocityY;

    // 수평 가속도 적용
    this.x += this.velocityX;

    // 경계 확인
    if (this.y > height - this.height / 2) {
      this.y = height - this.height / 2; // 캔버스 내에 개체를 유지합니다.
      this.velocityY = 0; // 바닥에 닿으면 낙하를 중지합니다.
    }
    // 좌우 벽에 닿았을 때 마찰력 적용
    if (this.x < this.width / 2 || this.x > width - this.width / 2) {
      this.velocityX *= 1 - friction;
    }
  }

  display() {
    // 모서리가 둥근 직사각형을 그립니다.
    fill(0, 100, 200);
    stroke(0);
    strokeWeight(4);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, this.roundness);

    // 굵은 글씨 "이주영" 추가 직사각형으로
    textSize(24);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    fill(255);
    text('이주영', this.x, this.y);
  }
}
