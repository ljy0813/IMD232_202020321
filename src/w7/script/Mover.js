class Mover{
    construntor(){
        //constructor안에는 리셋에 있는 내용이 들어가야함
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.acc = createVector();}
}
update() {
    acc = p5.Vector.random2D();
    acc.mult(0.1);
    vel.add(acc);
    vel.limit(40);
    pos.add(vel);
  }
  
infiniteEdge(){
      if(pos.x<0){
       pos.y+=width
      else if (pos.x>=width){
       pos.x-=width;
          }
      }
  }
      if(pos.y<0){
       pos.y+=height
      }else if (pos.y>=height){
       pos.y-=height;
          }
  
display() {
    ellipse(pos.x, pos.y, 2 * radius);
}