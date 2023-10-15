class Body {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass ** (1 / 2) * 5; // 반지름은 질량의 제곱근에 비례
  }

  attract(body) {
    const force = p5.Vector.sub(this.pos, body.pos);
    const distance = (force.mag(), 20, 50);
    const strength = (G * this.mass * body.mass) / distance ** 2;
    const strengthFactor = -0.05; // 힘의 크기를 조절할 상수
    force.setMag(strength * strengthFactor);
    return force;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display() {
    noStroke();
    fill(0, 127);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }
}
