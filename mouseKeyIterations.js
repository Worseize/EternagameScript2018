function changeScaler(event){
  if(event.deltaY > 5){
    scaler -= 5;
    start = true;
  }else if(event.deltaY < 5){
    scaler += 5;
    start = true;
  }
}

mousePressed = function() {
  if(mouseX > (width / 2 - buttonWidth / 2) && mouseX < (width / 2 + buttonWidth / 2) && mouseY > (height - buttonHeight / 2 - buttonHeight) && mouseY < (height + buttonHeight / 2 - buttonHeight)){
    a = 20;
    calculate();
  }
}

keyReleased = function(){
  if(autoMode){
    if(keyCode === 86){//V
      if(memoryPosition > 0){
        memoryPosition--;
        start = true;
      }else{
        memoryPosition = +ol1.value().length + (+ol2.value().length) - 2;
        start = true;
      }
    }else if(keyCode === 78){//N
      if(memoryPosition < +ol1.value().length + (+ol2.value().length) - 2){
        memoryPosition++;
        start = true;
      }else{
        memoryPosition = 0;
        start = true;
      }
    }
  }else{
    if(keyCode === 192){//`
      debugMode();
      start = true;
    }else if(keyCode === 82){//R
      if(+ol1Position.value() > 0){
        ol1Position.value(+ol1Position.value() - 1);
        start = true;
      }
    }else if(keyCode === 89){//Y
      ol1Position.value(+ol1Position.value() + 1);
      start = true;
    }else if(keyCode === 70){//F
      if(+ol2Position.value() > 0){
        ol2Position.value(+ol2Position.value() - 1);
        start = true;
      }
    }else if(keyCode === 72){//H
      ol2Position.value(+ol2Position.value() + 1);
      start = true;
    }
  }

  if(keyCode === 32){//Space
    if(autoMode === true){
      autoMode = false;
      flag = false;
      start = true;
    }else{
      autoMode = true;
      flag = true;
      start = true;
    }
  }else if(keyCode === 27){//ESC
    if(showMenu){
      showMenu = false;
      start = true;
    }else{
      showMenu = true;
      start = true;
    }
  }else if(keyCode === 84){//T
    scaler+=5;
    start = true;
  }else if(keyCode === 66){//B
    scaler-=5;
    start = true;
  }
  a = 0;
}

mouseReleased = function(){
  a = 0;
  if(autoMode === false){
    if(event.button == 0){ // LeftMouse Click on Oligo => change letter
      if(mouseY > 50 - scaler / 2 && mouseY < 50 + scaler / 2){
        let temp = round((mouseX - scaler / 2) / scaler);
        changeLetter(temp , 1);
        start = true;
      }
      if(mouseY > 100 - scaler / 2 && mouseY < 100 + scaler / 2){
        let temp = round((mouseX - scaler / 2) / scaler);
        changeLetter(temp , 2);
        start = true;
      }
    }
  }

}

window.onresize = function(){
  myCanvas = createCanvas(innerWidth - correction,innerHeight - 23 * 3);
  calculate();
}