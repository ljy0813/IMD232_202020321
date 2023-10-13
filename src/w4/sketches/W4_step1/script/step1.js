const bodies = [];
const minBodyNum = 20; // 최소 물체 수
const maxBodyNum = 100; // 최대 물체 수
const G = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  init();
}

function draw() {
  background(255);

  // 각 물체에 대해 다른 모든 물체에 대한 중력을 계산하고 적용
  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        const force = bodies[i].attract(bodies[j]);
        bodies[i].applyForce(force);
      }
    }

    bodies[i].update();
    bodies[i].display();
  }
}

function mousePressed() {
  init();
}

function init() {
  bodies.length = 0;
  const numBodies = Math.floor(random(minBodyNum, maxBodyNum + 1));

  for (let i = 0; i < numBodies; i++) {
    const x = random(width);
    const y = random(height);
    const mass = random(16, 100);
    bodies.push(new Body(x, y, mass));
  }
}
