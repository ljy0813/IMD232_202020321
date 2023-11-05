let traffic; // traffic 객체를 저장하기 위한 변수를 설정한다. (let:변수 선언)
let infiniteOffset = 80; // infiniteOffset이라는 변수를 80으로 설정한다.

function setup() {
  setCanvasContainer('canvas', 3, 2, true); // 캔버스 설정을 초기화하고, 그리기를 시작하게 해줌.->
  //    함수는 초기 설정을 하는 곳
  //   'canvas'라는 이름의 대지를 만듦

  colorMode(HSL, 360, 100, 100, 100); // 색상 모드를 HSL로 설정한다.
  //   색깔을 'HSL' 방식으로 정한다.-HSL: 색상 (Hue), 채도 (Saturation),명도 (Lightness)
  background('white'); // 캔버스의 배경색을 흰색으로 설정한다
  traffic = new Traffic(); // Traffic 객체를 생성하고 traffic 변수에 할당한다
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height)); // 무작위 위치에 차량을 10개 생성한다
  }
}

function draw() {
  background('white'); // 매 프레임마다 캔버스를 흰색으로 지웁니다.
  traffic.run(); // traffic 객체의 run 메서드를 실행하여 객체들을 업데이트하고 그립니다.
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY); // 마우스를 드래그할 때마다, 마우스 위치에 차량을 추가한다
}
