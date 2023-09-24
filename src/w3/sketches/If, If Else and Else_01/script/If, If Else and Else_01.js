function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('orange');
}
function draw() {
  background('orange');
  fill(0);

  //육사분면 코드
  if (mouseY < height / 2) {
    if (mouseX < width / 3) {
      rect(0, 0, width / 3, height / 2);
    } else if (mouseX < (width / 3) * 2) {
      rect(width / 3, 0, width / 3, height / 2);
    } else {
      rect((width / 3) * 2, 0, width / 3, height / 2);
    }
  } else {
    if (mouseX < width / 3) {
      rect(0, height / 2, width / 3, height / 2);
    } else if (mouseX < (width / 3) * 2) {
      rect(width / 3, height / 2, width / 3, height / 2);
    } else {
      rect((width / 3) * 2, height / 2, width / 3, height / 2);
    }
  }
}

//사분면 코드
//  fill(0);
//  if (mouseX > width / 2) {
//    if (mouseY > height / 2) {
//      rect(width / 2, height / 2, width / 2, height / 2);
//    } else {
//      rect(width / 2, 0, width / 2, height / 2);
//    }
//  } else {
//    if (mouseY > height / 2) {
//      rect(0, height / 2, width / 2, height / 2);
//    } else {
//      rect(0, 0, width / 2, height / 2);
//    }
//  }
//
//
