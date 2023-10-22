let particles = [];
const maxParticles = 100;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  colorMode(HSB, 360, 100, 100, 100); // HSB 모드로 변경
  background(0); // 검은색 배경
  gravity = createVector(0, 0.1);
}

function draw() {
  console.log('현재 파티클 개수: ' + particles.length);
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.applyForce(gravity);
    p.update();
    p.display();
    if (p.isDead()) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  for (let i = 0; i < maxParticles; i++) {
    let hue = random(360); // 무작위 색상
    let angle = random(TWO_PI); // 무작위 방향을 선택
    let magnitude = 3;
    let vx = cos(angle) * magnitude;
    let vy = sin(angle) * magnitude;
    let p = new Particle(mouseX, mouseY, hue, vx, vy);
    particles.push(p);
  }
}

class Particle {
  constructor(x, y, hue, vx, vy) {
    this.position = createVector(x, y);
    this.velocity = createVector(vx, vy);
    this.acceleration = createVector();
    this.lifespan = 60;
    this.hue = hue;
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.velocity.add(gravity);
    this.lifespan--;
  }

  display() {
    fill(this.hue, 100, 100, map(this.lifespan, 0, 60, 0, 100)); // HSB 색상 설정
    noStroke();
    ellipse(this.position.x, this.position.y, 10, 10);
  }

  isDead() {
    return this.lifespan <= 0 || this.position.y > height;
  }
}
