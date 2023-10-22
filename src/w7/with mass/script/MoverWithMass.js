class MoverWithMass {
  //더이상 반지름을 받지않고 질량으로 받도록 조정을함
  //질량에 비례하여 바뀌도록함.
  //제곱근을 씌운이유=길이가 두배가 되면 무게는 네배가 된다.
  //-> 때문에 무게가 두배가 왰을때의 크기는 길이가 제곱근 만큼 커져야하기때문에

  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
    this.mass = mass; //이제 나중에 constructor(x, y, r) 여기서 받아올수있게 만드는 과정 거칠것임
    this.radius = mass ** 0.5 * 10;
  }
  applyForce(force) {
    let forceDividesByMass = createVector(force.x, force.y);
    forceDividesByMass.div(this.mass);
    this.acc.add(forceDividesByMass);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisplay.set(this.acc);
    this.acc.mult(0);
  }

  checkEdges() {
    if (this.pos.x < 0) {
      //   // 0보다 얼마나 뚫고 갔는가?
      //   let delta = this.pos.x - 0;
      //   // 그 뚫고간 거리에 -1을 곱해 방향을 뒤집고,
      //   delta *= -1;
      //   // 0을 기준으로 뒤집힌 거리를 더해준다.
      //   this.pos.x = 0 + delta;
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
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  displayVectors() {
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accDisplay.x * 100,
      this.pos.y + this.accDisplay.y * 100
    );
  }
}
