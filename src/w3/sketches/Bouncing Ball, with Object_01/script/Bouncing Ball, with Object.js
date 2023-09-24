let p = {};
let v = {
  x: 3,
  y: 5,
};

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  p.x = width / 2.0;
  p.y = height / 2.0;
  console.log('p', p);
  console.log('v', v);
}
function draw() {
  background('white');
  let TikTok = 25;
  p.x += v.x;
  p.y += v.y;

  // 아래의 add 함수는 사용하지 않아야 합니다.
  // p.add(v);

  ellipse(p.x, p.y, 50);

  if (p.x < TikTok || p.x > width - TikTok) {
    v.x *= -1; // velocityX 대신 v.x를 사용
  }
  if (p.y < TikTok || p.y > height - TikTok) {
    v.y *= -1; // velocityY 대신 v.y를 사용
  }
}
//x += velocityX;
//y += velocityY;
//ellipse(x, y, 50);
//
//
//if (x < TikTok || x > width - TikTok) {
//  velocityX *= -1;
//}
//if (y < TikTok || y > height - TikTok) {
//  velocityY *= -1;
//}
//}
//
