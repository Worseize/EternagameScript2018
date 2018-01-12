mousePressed = function() {
  if(mouseX > (width / 2 - buttonWidth / 2) && mouseX < (width / 2 + buttonWidth / 2) && mouseY > (height - buttonHeight / 2 - buttonHeight) && mouseY < (height + buttonHeight / 2 - buttonHeight)){
    a = 20;
    calculate();
  }
}
keyPressed = function(){
  if(keyCode === 13){
    calculate();
    a = 20;
  }
}
keyReleased = function(){
  a = 0;
  if(keyCode === 192){// `
    debugMode();
    calculate();
  }else if(keyCode === 81){ //Q
    if(+ol1Position.value() > 0){
      ol1Position.value(+ol1Position.value() - 1);
      calculate();
    }
  }else if(keyCode === 69){ //E
    ol1Position.value(+ol1Position.value() + 1);
    calculate();
  }else if(keyCode === 65){ //A
    if(+ol2Position.value() > 0){
      ol2Position.value(+ol2Position.value() - 1);
      calculate();
    }
  }else if(keyCode === 68){ //D
    ol2Position.value(+ol2Position.value() + 1);
    calculate();
  }else if(keyCode === 90){
    if(memoryPosition > 0){
      memoryPosition--;
    }else{
      memoryPosition = 9;
    }
  }else if(keyCode === 67){
    if(memoryPosition < 9){
      memoryPosition++;
    }else{
      memoryPosition = 0;
    }
  }else if(keyCode === 32){
    if(autoMode === true){
      autoMode = false;
    }else{
      autoMode = true;
    }
  }else if(keyCode === 27){
    if(showMenu){
      showMenu = false;
    }else{
      showMenu = true;
    }
  }
}

mouseReleased = function() {
  a = 0;
  if(event.button == 0){
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