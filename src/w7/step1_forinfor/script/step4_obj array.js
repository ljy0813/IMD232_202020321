// let aMover;
// let mVec;

// function setup() {
//   createCanvas(600, 400);
//   aMover = new Mover(width / 2, height / 2, 10, 25, 'cornflowerblue');
//   mVec = createVector();
//   background(255);
// }

// function draw() {
//   mVec.set(mouseX, mouseY);
//   const dirVec = p5.Vector.sub(mVec, aMover.pos);
//   dirVec.setMag(0.5);
//   aMover.applyForce(dirVec);
//   aMover.update();
//   background(255);
//   aMover.display();
//   aMover.displayVector();
// }

//-> 여기까지 원 하나 만들기

let Movers;
const moverNUM = 10;
let mVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  // aMover = new Mover(width / 2, height / 2, 10, 25, 'cornflowerblue');

  colorMode(HSL, 360, 100, 100);
  for (let a = 0; a < moverNUM; a++);
  moverNUM.push(
    new Mover(
      random(width),
      random(height),
      10,
      25,
      color(random(360), 100, 50)
    )
  );
  mVec = createVector();
  background(255);
}

function draw() {
  mVec.set(mouseX, mouseY);

  // const dirVec = p5.Vector.sub(mVec, aMover.pos);
  // dirVec.setMag(0.5);
  // aMover.applyForce(dirVec);
  // aMover.update();

  const dirVec = p5.Vector.sub(mVec, aMover.pos);
  dirVec.setMag(0.5);
  aMover.applyForce(dirVec);
  aMover.update();

  background(255);
  aMover.display();
  aMover.displayVector();
}
