let canvasContainerId;

function setup() {
  // 캔버스 컨테이너 설정
  setCanvasContainer('p5-canvas', 3, 2, true);
  drawCanvas();
}

function draw() {
  // 여기서는 루프에서 별도의 그림 그리기 코드가 필요하지 않습니다.
}

function setCanvasContainer(id, width, height, isFlexible = false) {
  canvasContainerId = id;
  const canvasContainer = select(`#${canvasContainerId}`);

  let canvasWidth, canvasHeight;
  if (isFlexible) {
    // 유연한 크기 조정
    canvasWidth = canvasContainer.width;
    canvasHeight = (canvasWidth * 1) / 3; // 3:2 비율을 유지
  } else {
    canvasWidth = width;
    canvasHeight = height;
    // 컨테이너 크기 설정
    canvasContainer.style('width', `${canvasWidth}px`);
    canvasContainer.style('height', `${canvasHeight}px`);
  }

  createCanvas(canvasWidth, canvasHeight).parent(canvasContainer);
}
function windowResized() {
  // 창 크기가 변경될 때 캔버스 크기 다시 조정
  setCanvasContainer('p5-canvas', 3, 2, true);
  drawCanvas();
}
function drawCanvas() {
  background('seagreen');
  colorMode(RGB);
  strokeWeight(3);

  background('seagreen');
  colorMode(RGB);
  strokeWeight(3);

  rectMode(CORNER);
  //바닥
  fill('palegoldenrod');
  rect(0, 390, 705, 80);
  rect(0, 370, 705, 20);

  //몬드리안 그림액자
  fill('palegoldenrod');
  rect(500, 80, 100, 100);
  //몬드리안그림
  rect(505, 85, 90, 90);
  //흰색
  fill('snow');
  rect(505, 85, 20, 30);
  rect(505, 120, 20, 30);
  rect(530, 155, 45, 20);
  rect(580, 167, 15, 8);
  //파랑
  fill('mediumblue');
  rect(505, 155, 20, 20);
  //빨강
  fill('red');
  rect(530, 85, 65, 65);
  //노랑
  fill('yellow');
  rect(580, 155, 15, 8);

  //창문
  fill('gainsboro');
  rect(40, 50, 250, 250);
  //창틀
  fill('deepskyblue');
  rect(50, 60, 230, 230);

  //창밖운동장
  fill('olivedrab');
  rect(60, 190, 200, 20);
  fill('peru');
  rect(60, 210, 200, 80);
  //바깥풍경-학교
  fill('burlywood');
  rect(60, 140, 130, 70);

  //학교 창문
  //-첫번째 가로축
  fill('powderblue');
  rect(85, 150, 10, 10);
  rect(100, 150, 10, 10);
  rect(115, 150, 10, 10);
  rect(130, 150, 10, 10);
  rect(145, 150, 10, 10);
  rect(160, 150, 10, 10);
  rect(175, 150, 10, 10);

  rect(85, 165, 10, 10);
  rect(100, 165, 10, 10);
  rect(115, 165, 10, 10);
  rect(130, 165, 10, 10);
  rect(145, 165, 10, 10);
  rect(160, 165, 10, 10);
  rect(175, 165, 10, 10);

  rect(85, 180, 10, 10);
  rect(100, 180, 10, 10);
  rect(115, 180, 10, 10);
  rect(130, 180, 10, 10);
  rect(145, 180, 10, 10);
  rect(160, 180, 10, 10);
  rect(175, 180, 10, 10);

  //학교 가운대 정문
  fill('slategray');
  rect(115, 200, 35, 10);

  //창틀
  fill('tan');
  rect(170, 60, 10, 250);

  //커튼 봉
  fill('seashell');
  rect(10, 60, 320, 10);
  ellipse(5, 65, 20, 20);
  ellipse(335, 65, 20, 20);

  //왼쪽 창문 커튼
  fill('mintcream');
  rect(20, 50, 60, 270);
  fill('mintcream');
  rect(20, 50, 60, 40);

  //오른쪽 커튼
  fill('mintcream');
  rect(260, 50, 60, 270);
  fill('mintcream');
  rect(260, 50, 60, 40);

  //바닥장판
  fill('orange');
  rect(0, 390, 20, 80);
  rect(20, 390, 20, 80);
  rect(40, 390, 20, 80);
  rect(60, 390, 20, 80);
  rect(80, 390, 20, 80);
  rect(100, 390, 20, 80);
  rect(120, 390, 20, 80);
  rect(140, 390, 20, 80);
  rect(160, 390, 20, 80);
  rect(180, 390, 20, 80);
  rect(200, 390, 20, 80);
  rect(220, 390, 20, 80);
  rect(240, 390, 20, 80);
  rect(260, 390, 20, 80);
  rect(280, 390, 20, 80);
  rect(300, 390, 20, 80);
  rect(320, 390, 20, 80);
  rect(340, 390, 20, 80);
  rect(260, 390, 20, 80);
  rect(280, 390, 20, 80);
  rect(300, 390, 20, 80);
  rect(320, 390, 20, 80);
  rect(340, 390, 20, 80);
  rect(360, 390, 20, 80);
  rect(380, 390, 20, 80);
  rect(400, 390, 20, 80);
  rect(420, 390, 20, 80);
  rect(440, 390, 20, 80);
  rect(460, 390, 20, 80);
  rect(480, 390, 20, 80);
  rect(500, 390, 20, 80);
  rect(520, 390, 20, 80);
  rect(540, 390, 20, 80);
  rect(560, 390, 20, 80);
  rect(580, 390, 20, 80);
  rect(600, 390, 20, 80);
  rect(620, 390, 20, 80);
  rect(640, 390, 20, 80);
  rect(660, 390, 20, 80);
  rect(680, 390, 20, 80);

  //바닥 카펫
  fill('darkolivegreen');
  rect(0, 405, 450, 80);

  //유리책상
  fill('aliceblue');
  ellipse(246, 280, 250, 25);

  fill('darkgrey');
  rectMode(CENTER);
  rect(160, 350, 20, 200);

  rectMode(CENTER);
  rect(335, 350, 20, 200);

  rectMode(CORNER);
  fill('aliceblue');
  ellipse(250, 300, 300, 25);
  fill('darkgrey');
  ellipse(335, 250, 20, 7);
  ellipse(160, 250, 20, 7);
  //책장
  fill('palegoldenrod');
  rect(410, 270, 160, 10);
  rect(410, 280, 160, 120);
  rect(440, 320, 100, 40);
  rect(440, 280, 100, 120);
  rect(440, 280, 100, 40);
  rect(440, 360, 100, 40);

  //책장 서랍 손잡이
  fill('papayawhip');
  ellipse(490, 300, 20, 10);
  ellipse(490, 340, 20, 10);
  ellipse(490, 380, 20, 10);

  //오른쪽의자
  fill('darkseagreen');
  rect(390, 330, 80, 30, 20, 20, 0, 0);
  fill('darkslategrey');
  rect(390, 360, 80, 90);

  //왼쪽의자
  fill('darkseagreen');
  rect(20, 330, 80, 30, 20, 20, 0, 0);
  fill('darkslategrey');
  rect(20, 360, 80, 90);

  //침대
  fill('darkseagreen');
  rect(570, 230, 160, 70);
  fill('darkslategrey');
  rect(570, 300, 160, 110);
  fill('darkseagreen');
  rect(570, 390, 160, 60);

  //베게
  fill('mintcream');
  rect(600, 280, 90, 40, 10, 10, 20, 20);
  rect(700, 280, 5, 40, 10, 10, 20, 20);

  //시계
  fill('mintcream');
  ellipse(700, 100, 80, 80);
  ellipse(700, 100, 60, 60);
  fill('0');
  strokeWeight(10);
  point(700, 100);
  strokeWeight(3);
  line(685, 80, 700, 100);
  strokeWeight(1);
  line(720, 115, 700, 100);
}
