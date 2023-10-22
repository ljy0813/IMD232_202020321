let pos;
let vel;
let acc;
let radius=50

let aninstance;
let anotherInstance;
let intancearray;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  reset();
  aninstance = new Mover();
  anotherInstance = new Mover();
  intancearray = new Mover();
  for(let i =0; i<10; i++){
    instanceArray.push(new Mover());
  }
}
function draw() {
  background('white');
  update();
  infiniteEdge();
  display();
  aninstance.update();
  aninstance.infiniteEdge();
  aninstance.display();
  anotherInstance.update();
  anotherInstance.infiniteEdge();
  anotherInstance.display();
  anotherInstance.update();
  intancearray.infiniteEdge();
  intancearray.display();
  intancearray.forEach((eachInstant));
}

function reset() {
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector(); //acc는 매번 랜덤하게 생성할 것이기때문에 벡터라고만 해둘거임
}
function update() {
  this.acc = p5.Vector.random2D();
  this.acc.mult(0.1);
  this.vel.add(this.acc);
  this.vel.limit(40);
  this.pos.add(this.vel);
}

function infiniteEdge(){
    if(this.pos.x<0){
     this.pos.y+=width
    else if (this.pos.x>=width){
     this.pos.x-=width;
        }
    }
}
    if(this.pos.y<0){
     this.pos.y+=height
    }else if (this.pos.y>=height){
     this.pos.y-=height;
        }

function display() {
  ellipse(this.pos.x, this.pos.y, 2 *radius);
}
