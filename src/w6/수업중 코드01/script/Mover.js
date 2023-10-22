class Mover{
    constructor(x,y,radius){
        this.pos=createVector(x,y);
        this.vel=createVector(0,0);
        this.acc;=createVector(0,0.01);//(0,0)하면 멈춰있음
        this.radius=radius;
        //공을 묘하사려면 묘사가 되어야하고 묘사하려면 크기가 필요함.
        //우리는 직관적으로 이해할떄, 크면 무겁고, 작으면 가벼울거라 생각하는 경우가 많으니 이 개념으로 들어갈거임(밀도 개념x)
        this.mass=radius**(1/2);//반지름에대해 제곱근으로 넣어주기.
        //질량,면적은 4배, 부피는 세제곱.
    }
    //constructor:생성자. 대부분의 코딩언어에서 constructor 같은 경우가 많다.

    //이제 우리가 보통 여기서 많이하는게 어떤과정을 보이냐면
    //움직이는 방식 1. 업데이트(컬큘레이트 포지션)/2.엣지/3.디스플레이의 세가지 단계가 있는데. 업데이트에서 해야하는 일이 무엇이 있었는지. 
    //속도에 가속도더하기, 위치에 속도를 더함

    applyForce(force){
      //바람이 불떄도 있고 안불때도 있다. 외부의 힘은 같은데 각자가 그 힘에 어떻게 반응할지(무게가 다른등)에대한 코드
      //여러개의 무버가 있는 상태에서 어떤 힘을 가했을때 이 힘을 계산하면 힘자체의 벡터가 바뀌기 때문에 그렇게 안하고 그 힘의 값을 받아서 복사를 뜰거임.-그코드
      //force.div(this.mass);//외부에서 어떤 힘이들어오면 내 힘으로 나눠버리는것.
    let divedForcs = p5.vector.div(force,this.mass);
    this.acc.add(divedForcs);
    //우리가 매번 프로세스 해야하는 것 - 1. 중력, (바람이 불고있으면 바람을 더한다.하지만 바람이 안불면? 내려가는 힘만 적용-외부에서 들어오는 힘을 다 더해서 반영)
    this.acc.mult(0);//
    //이 방식으로 넣으면 업데이트 구문에서 바꿔줘야하는구호



    }
    update(){;//클래스에서 함수를 만들떄는 앞에 펑션을 적어주면 안돼
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    }
    edgeBounce(){
        if(this.pos.x<0+this.radius){
            //반지름을 기준으로 선대칭을 시켜줘라
            let delta = this.pos.x-(0+this.radius);
            this.pos.x+=-2*delta;
            this.vei.x*=-1;

        }else if (this.pos.x>width-1-this.radius){
            let delta = this.pos.x-(width-1-this.radius)
            this.pos.x+=-2*delta;
            this.vei.x*=-1;
        } 
        if(this.pos.y>width-1-this.radius){
            let delta = this.pos.y-(width-1-this.radius)
            this.pos.y+=-2*delta;
            this.vei.y*=-1;
    }
}
display(){
    ellipse(this.pos.x,this.pos.y,2*this.radius);
}
}