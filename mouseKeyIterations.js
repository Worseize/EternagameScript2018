function changeScaler(event){
  if(event.deltaY > 5){
    scaler += 5;
    start = true;
  }else if(event.deltaY < 5){
    scaler -= 5;
    start = true;
  }else{

  }
}
mousePressed = function() {
  if(mouseX > (width / 2 - buttonWidth / 2) && mouseX < (width / 2 + buttonWidth / 2) && mouseY > (height - buttonHeight / 2 - buttonHeight) && mouseY < (height + buttonHeight / 2 - buttonHeight)){
    a = 20;
    calculate();
  }
}
keyPressed = function(){
  if(keyCode === 13){//ENTER
    calculate();
    a = 20;
  }
}
keyReleased = function(){
  a = 0;
  myButton.show();
  start = true;
  if(keyCode === 82){//R
    if(+ol1Position.value() > 0){
      ol1Position.value(+ol1Position.value() - 1);
    }
  }else if(keyCode === 192){//`
    debugMode();
  }else if(keyCode === 82){//R
    if(+ol1Position.value() > 0){
      ol1Position.value(+ol1Position.value() - 1);
    }
  }else if(keyCode === 89){//Y
    ol1Position.value(+ol1Position.value() + 1);
  }else if(keyCode === 70){//F
    if(+ol2Position.value() > 0){
      ol2Position.value(+ol2Position.value() - 1);
    }
  }else if(keyCode === 72){//H
    ol2Position.value(+ol2Position.value() + 1);
  }else if(keyCode === 86){//V
    if(memoryPosition > 0){
      memoryPosition--;
    }else{
      memoryPosition = 9;
    }
  }else if(keyCode === 78){//N
    if(memoryPosition < 9){
      memoryPosition++;
    }else{
      memoryPosition = 0;
    }
  }else if(keyCode === 32){//Space
    if(autoMode === true){
      autoMode = false;
    }else{
      autoMode = true;
    }
  }else if(keyCode === 27){//ESC
    if(showMenu){
      showMenu = false;
    }else{
      showMenu = true;
    }
  }else{
    start = false;
  }
}
mouseReleased = function() {
  a = 0;
  myButton.show();
  if(event.button == 0){ // LeftMouse Click on Oligo => change letter
    if(mouseY > 50 - scaler / 2 && mouseY < 50 + scaler / 2){
      let temp = round((mouseX - scaler / 2) / scaler);
      changeLetter(temp , 1);
    }
    if(mouseY > 100 - scaler / 2 && mouseY < 100 + scaler / 2){
      let temp = round((mouseX - scaler / 2) / scaler);
      changeLetter(temp , 2);
    }
  }
}
window.onresize = function(){
  myCanvas = createCanvas(innerWidth - correction,innerHeight - 23*3);
  myButton = new Button(width / 2, height - buttonHeight, buttonWidth, buttonHeight);
}