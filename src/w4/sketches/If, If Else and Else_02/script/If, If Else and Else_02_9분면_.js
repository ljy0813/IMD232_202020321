funcion setup(){
setCanvasContainer('canvas',3,3,true);
background('orange');
}

function draw(){
    let w = width;
    let h = height;
    background('orange');
    //첫번째 줄
    if (mouseY < h/3){
        if(mouseX<w/3){
            rect(0,0,w/3,h/3);
        } else if (mouseX < (h/3)*2) {
            rect(w/3,0,w/3,h/3);
        } else 
        rect((w/3)*2,0,w/3,h/3);
    //두번째줄
    }
}else if(mouseY<(h/3)*2){
    if (mouseX<w/3){
    rect(0,h/3,w/3,h/3);
    }else if(mouseX,(w/3)*2){
    rect(w/3,h/3,w/3,h/3);
    }else
    rect((w/3)*2,h/3,w/3,h/3);
    }
}
else {
    if (mouseX<(h/6)*4){
    rect(0,(h/3)*2,w/3,h/3);
    }else if(mouseX,(w/3)*2){
    rect(w/3,(h/3)*2,w/3,h/3);
    }else{}
    rect((w/3)*2,(h/3)*2,w/3,h/3); 
        }
    }
}