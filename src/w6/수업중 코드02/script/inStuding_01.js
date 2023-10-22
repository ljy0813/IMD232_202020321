let ball;
let ball2;
let gravity;
let wind;

function setup() {
  setcanvascontainer('canvas', 3, 2, true);
  ball = new Mover(width / 3, 0, 50);
  ball2 = new Mover((2 * width) / 3, 0, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(-1, 0); //모든 물체는 중력이 아니라 중력가속도가 같다.
  //얘는 무겁고 쟤는 가벼워요. 둘 다한테 f/m=a임. 힘을 질량으로 나눈게 가속도인데. 모든게 다 중력에 비례해서 -암튼 그렇게 해서 환산되는 가속도는 똑같음.
}
function draw() {
  let G = p5.Vector.muit(gravity, ball.mass);
  ball.applyForce(G);
  let G2 = p5.Vector.muit(gravity, ball2.mass);
  ball2.applyForce(G2);
  if (mouseISpressed) {
    ball.applyForce(wind);
    ball2.applyForce(wind);
  }
  ball.update();
  ball.edgeBounds();
  ball2.update();
  ball2.edgeBounds();
  background('salmon');
  fill('white');
  ball.display();
  ball2.display();
  Attr.
}
