let pos;
let vel
lwt acc;
let radius=25;//실수할 여지를 줄이기 위해 변수를 하는것임. 

function setup({.
    setCanvasContainer('my-sketch-goes-here, 3, 2, true);
    background(255);
    acc=p5.Vecter.random2D
    acc.mult(2);
    pos.add(vel);
    //if(pos.x<0){
        pos.x=width;        
    }else if(pos.x>width{
        vel.x*=-1;
    })

    pos=createVecter(width/1,height/1);
    vel=createVecter(0,0);
    acc=createVecter();//...중력스러운 값을 넓기,가속도가 속도에 더해지고 속도가 위치에 더해진다.포지션에 에드 벨로시티는 지금 되어있는데 벨로시티에 에드 에이씨씨가 없음.
    console.log(pos)
    console.log(vel)
    ellipse(pos.x,pos.y,50)
  }
  function draw(){
    background(255);
    pos.add(vel);
    if(pos.x<0){
    
    }else if(pos.x>width{
        vel.x*=-1;
    })
                   
    posX +=3;
   ellipse(pos.X,pos.Y,2*radius);
     posY +=5;
    //posY +=1;
    //posY=posY+1;