class Penduluma {
  constructor(x, y, armLength) {
    this.origin = createVector(x, y);
    this.armLength = armLength;
    this.angle = PI / 4;
    this.angleVel = 0;
    this.angleAcc = 0;
    this.damping = 0.995;
    this.bob = createVector();

    this.secondBob = createVector();
    this.secondArmLength = armLength;
  }

  update() {
    const gravity = 0.4;
    this.angleAcc = ((-1 * gravity) / this.armLength) * sin(this.angle);
    this.angleVel += this.angleAcc;
    this.angleVel *= this.damping;
    this.angle += this.angleVel;

    this.bob.x = this.origin.x + this.armLength * sin(this.angle);
    this.bob.y = this.origin.y + this.armLength * cos(this.angle);

    this.secondBob.x = this.bob.x + this.secondArmLength * sin(this.angle);
    this.secondBob.y = this.bob.y + this.secondArmLength * cos(this.angle);
  }

  display() {
    stroke(0);
    line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
    fill(0);
    ellipse(this.bob.x, this.bob.y, 24);

    stroke(0);
    line(this.bob.x, this.bob.y, this.secondBob.x, this.secondBob.y);
    fill(0);
    ellipse(this.secondBob.x, this.secondBob.y, 50);
  }
}
