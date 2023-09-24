let x;
let y;
let velocityX = -3;
let velocityY = -3;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  x = width / 2; //초기의 x값을 화면의 너비에
  //중앙에 해당하는 위치로 x 를 정해줌
  y = height / 2;
}

function draw() {
  background('white');
  x += velocityX;
  y += velocityY;
  ellipse(x, y, 50);

  let TikTok = 25;

  if (x < TikTok || x > width - TikTok) {
    velocityX *= -1;
  }
  if (y < TikTok || y > height - TikTok) {
    velocityY *= -1;
  }

  //if (x < TikTok) {
  //  velocityX *= -1;
  //} else if (x > width - TikTok) {
  //  velocityX *= -1;
  //}

  //if (y < TikTok) {
  //  velocityY *= -1;
  //} else if (y > height - TikTok) {
  //  velocityY *= -1;
  //}
}
