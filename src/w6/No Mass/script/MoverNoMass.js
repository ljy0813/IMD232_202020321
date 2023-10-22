class moverNoMass {
  constructor(x, y, r) {
    // 생성자에서 초기 위치(x, y)와 반지름(r)을 받아와 속성으로 저장합니다.
    //radius를 넣은건 construct개념을 다루게 되었기 때문
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
    this.radius = r; //moverNoMass에 들어오는 radius의 차이.
    //위 코드의 radius는 세 가지 다른 역할을 하는 변수들을 나타냄
    //
  }
  // 나중에 New moverNoMass라는 구문을 쓸 때 constructor에
  // x,y라는 구문을 썼으니 그곳에 해당되는 구문을 넣어줘야한다.
  // New moverNoMass(100,100); - 100,100이 createVector(x, y);여기의 x,y 값이다.

  update() {
    // 위치를 업데이트합니다.
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  checkEdges() {
    if (this.pos.x < 0) {
      // 왼쪽 벽에 부딪혔을 때

      // //이전에는 그저 0밑으로 내려가면 양수로바꾸기~이렇게 정확하기 않은 계산으로 만들었는데
      // //이젠 정확히 탄력성있게 부딪혀 나가는 모습을 재현하기위해 정확한 계산을 하는 법을 만들거임
      // //그래 0보다 뚫고간 건 알겠는데 얼마다 뚫고갔어?를 확인한뒤에 그 뚫고간 거리를 0에 더해주면 정확히 튕긴 위치가 된다.
      // if (this.pos.x < 0) {
      //   //보다 얼마나 뚫고 갔는가?
      //   let delta = this.pos.x - 0;
      //   //그 뚫고 간 거리를 -1 곱해서 방향을 뒤집고,
      //   delta *= -1;
      //   //0을 기준으로 뒤집힌 거리를 더해준다.
      //   this.pos.x = 0 + delta;

      //그리고 위의 일련의 계산을 다른 방식으로도 할수 있음.
      this.pos.x -= 0;
      this.pos.x *= -1;
      this.pos.x += 0;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1) {
      this.pos.x -= width - 1;
      this.pos.x *= -1;
      this.pos.x += width - 1;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1) {
      this.pos.y -= height - 1;
      this.pos.y *= -1;
      this.pos.y += height - 1;
      this.vel.y *= -1;
    }
  }

  display() {
    noStroke();
    fill(0);
    //위치를 나타낸걸 화면에 표시해주는 부분
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  displayVector() {
    //그려지는 원의 속도와 가속도 묘사
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('blue'); // 파란색으로 가속도를 그립니다.
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100, // 100배 확대하여 그립니다.
      this.pos.y + this.acc.y * 100
    );
  }
}
