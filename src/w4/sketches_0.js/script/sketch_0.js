let posX
let posY
let posXAdd=3;
let posYAdd=-2;//멕터란 어떤방향으로 얼마나가는가 하는 각도와 길이에 대한 이야기가 벡터이다.(2차원상에서 이해하기 편하게 이야기하기 쉽게 Y로 얼마X로얼마다 라고 이야기하게된다.)

function setup({//프로그램이 시작되면 한번 실행되고 더이상 실행이 안된다.
    setCanvasContainer('my-sketch-goes-here, 3, 2, true);
    background(255);
    positionX=width/2;
    posY=width/2;
    ellipse(positionX,posY,50)//코딩에서 우리가 생각하는 많은 개념들은 작업의 효율성이나 귀찮아지니까 무언가 더해지고 더해지고 더해지는,,,


  }
  function draw(){
    background(255);//코드를 어떻게 생각하면 되냐면(코드의 흐름은setup,draw가 있는데 계속해서 루프처럼 돌기때문)
                   //우리가 눈으로 보는 시점은 루프한구문이 끝났을때 보게된다.백그라운드가 없으면 모든 과정이 더럽게 다 기록되어 원 라인보인다.  
                   //이전에 있었던 것을 백그라운드로 날리지 않았기때문에 궤적이 남아서 더럽게 보이는거임.
     posY +=5;
     posX +=3;//계산을 먼저하고 그림을 그려야함. 
    ellipse(positionX,posY,50);//-> 화면상에서 알아서 움직이게 하고싶다면?변수가 들어가야하고 그 변수를 매번갈이해줘야함
    //posY +=1;
    //posY=posY+1;


    
  }