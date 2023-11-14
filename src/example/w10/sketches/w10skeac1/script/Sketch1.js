let cells = [];

const colNum = 10,
  rowNum = colNum;

let w, h;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  w = width / colNum;
  h = height / rowNum;

  idx = totalColNum * row + col;

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      const idx = colNum * row + col;
      let state = random() < 0.5;
      cells.push(new Cell(x, y, w, h, state, idx)); //진짜하기싫다
    }
  }
  console.log(cells);

  background('white');
}

function draw() {
  background('white');
  cells.forEach((eachCell) => {
    eachCell.display();
  });
}
