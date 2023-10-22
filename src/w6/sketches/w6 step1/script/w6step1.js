let gravity;
let emitter;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  createCanvas(400, 400);
  gravity = createVector(0, 0.1);
  emitter = new Emitter(width / 2, height / 2);
  background(360, 0, 100);
}

function draw() {
  console.log('현재 파티클 개수: ' + emitter.particles.length);
  for (let i = 0; i < 10; i++) {
    emitter.createParticle();
  }
  emitter.update();
  emitter.display();
}

function mousePressed() {
  emitter.setLocation(mouseX, mouseY);
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(19, 20), random(19, 20));
    this.acceleration = createVector(0, 0);
    this.lifespan = 60;
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
    fill(360, 100, 50, map(this.lifespan, 0, 60, 0, 100));
    noStroke();
    ellipse(this.position.x, this.position.y, 10, 10);
  }

  isDead() {
    return this.lifespan <= 0 || this.position.y > height;
  }
}

class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.location = createVector(x, y);
  }

  setLocation(x, y) {
    this.location.x = x;
    this.location.y = y;
  }

  createParticle() {
    let p = new Particle(this.location.x, this.location.y);
    this.particles.push(p);
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.applyForce(gravity);
      p.update();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let p of this.particles) {
      p.display();
    }
  }
}
