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
  if(event.button === 0){ // LeftMouse Click on Oligo => change letter
    if(autoMode === false && keyCode === 16){
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
    }else if(autoMode === false && keyCode === 17){
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
  myCanvas = createCanvas(innerWidth - correction, innerHeight - 100);
  sel1.position(myCanvas.width - scaler * 2 , 0);
  sel2.position(myCanvas.width - scaler * 2 , scaler * 1.2);
  saveButton.position(myCanvas.width - scaler * 4.5 , myCanvas.height + scaler * 2.5);
  ol1.style("width", (myCanvas.width - correction * 3) + "px");
  ol2.style("width", (myCanvas.width - correction * 3) + "px");
  calculate();
}

function mySelectEvent() {
  let item1 = sel1.value();
  if(item1 === "A"){
    ol1.value("GUCGGACAAGGACGUAGACA");
  }else if(item1 === "B"){
    ol1.value("GUUUGGUAGGUAGUGGUACC");
  }else if(item1 === "C"){
    ol1.value("GGUGGACAGAGAGAUACAUG");
  }else if(item1 === "R"){
    ol1.value("CAGUCUUGAAUCAG");
  }
  let item2 = sel2.value();
  if(item2 === "A"){
    ol2.value("GUCGGACAAGGACGUAGACA");
  }else if(item2 === "B"){
    ol2.value("GUUUGGUAGGUAGUGGUACC");
  }else if(item2 === "C"){
    ol2.value("GGUGGACAGAGAGAUACAUG");
  }else if(item2 === "R"){
    ol2.value("CAGUCUUGAAUCAG");
  }
}

function changeScaler(event){
  if(event.deltaY > 5){
    scaler -= 5;
    start = true;
  }else if(event.deltaY < 5){
    scaler += 5;
    start = true;
  }
}

function changeLetter(position, numberOfOligo){
  let tempor;
  if(numberOfOligo == 1){
    if(myOligo1.charArray[position] == "A"){
      myOligo1.charArray[position] = "U";
      tempor = ol1.value().replaceAt(position - parseInt(ol1Position.value()),"U");
      ol1.value(tempor);
    }else if(myOligo1.charArray[position] == "U"){
      myOligo1.charArray[position] = "G";
      tempor = ol1.value().replaceAt(position - parseInt(ol1Position.value()),"G");
      ol1.value(tempor);
    }else if(myOligo1.charArray[position] == "G"){
      myOligo1.charArray[position] = "C";
      tempor = ol1.value().replaceAt(position - parseInt(ol1Position.value()),"C");
      ol1.value(tempor);
    }else if(myOligo1.charArray[position] == "C"){
      myOligo1.charArray[position] = "E";
      tempor = ol1.value().replaceAt(position - parseInt(ol1Position.value()),"E");
      ol1.value(tempor);
    }else if(myOligo1.charArray[position] == "E"){
      myOligo1.charArray[position] = "A";
      tempor = ol1.value().replaceAt(position - parseInt(ol1Position.value()),"A");
      ol1.value(tempor);
    }
  }else if(numberOfOligo == 2){
    if(myOligo2.charArray[position] == "A"){
      myOligo2.charArray[position] = "U";
      tempor = ol2.value().replaceAt(position - parseInt(ol2Position.value()),"U");
      ol2.value(tempor);
    }else if(myOligo2.charArray[position] == "U"){
      myOligo2.charArray[position] = "G";
      tempor = ol2.value().replaceAt(position - parseInt(ol2Position.value()),"G");
      ol2.value(tempor);
    }else if(myOligo2.charArray[position] == "G"){
      myOligo2.charArray[position] = "C";
      tempor = ol2.value().replaceAt(position - parseInt(ol2Position.value()),"C");
      ol2.value(tempor);
    }else if(myOligo2.charArray[position] == "C"){
      myOligo2.charArray[position] = "E";
      tempor = ol2.value().replaceAt(position - parseInt(ol2Position.value()),"E");
      ol2.value(tempor);
    }else if(myOligo2.charArray[position] == "E"){
      myOligo2.charArray[position] = "A";
      tempor = ol2.value().replaceAt(position - parseInt(ol2Position.value()),"A");
      ol2.value(tempor);
    }
  }
}