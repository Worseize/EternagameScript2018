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
  if(keyIsPressed && event.button === 0){ //LeftMouse Click on Oligo => change letter
    if(autoMode === false && keyCode === 16){ //Shift
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
    }else if(autoMode === false && keyCode === 17){ //Ctrl
      if(mouseY > 50 - scaler / 2 && mouseY < 50 + scaler / 2){
        let temp = round((mouseX - scaler / 2) / scaler);
        addLetter(temp , 1);
        start = true;
      }
      if(mouseY > 100 - scaler / 2 && mouseY < 100 + scaler / 2){
        let temp = round((mouseX - scaler / 2) / scaler);
        addLetter(temp , 2);
        start = true;
      }
    }else if(autoMode === false && keyCode === 18){ //Alt
      if(mouseY > 50 - scaler / 2 && mouseY < 50 + scaler / 2){
        let temp = round((mouseX - scaler / 2) / scaler);
        removeLetter(temp , 1);
        start = true;
      }
      if(mouseY > 100 - scaler / 2 && mouseY < 100 + scaler / 2){
        let temp = round((mouseX - scaler / 2) / scaler);
        removeLetter(temp , 2);
        start = true;
      }
    }
  }
}

window.onresize = function(){
  myCanvas = createCanvas(innerWidth - 10, innerHeight - 120);
  ol1.style("width", (innerWidth - 50) + "px");
  sel1.style("position","relative");
  sel1.style("margin-top","5px");
  ol2.style("width", (innerWidth - 50) + "px");
  sel2.style("position","relative");
  sel2.style("margin-top","5px");

  if(ol3.value().length < ((innerWidth - 10) / 8)){
    ol3.style("width", (ol3.value().length * 8) + "px");
  }else{
    ol3.style("width", (innerWidth - 10) + "px");
    console.log("ol3.value().length >= (innerWidth - 10) / 8);//see 'window.onresize'  function");
  }

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
  calculate();
}

function changeScaler(event){
  if(event.deltaY > 5){
    scaler -= 1;
    start = true;
  }else if(event.deltaY < 5){
    scaler += 1;
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

function addLetter(position, numberOfOligo){
  let tempor;
  if(numberOfOligo == 1){
    tempor = ol1.value().addAt(position - parseInt(+ol1Position.value()));
    ol1.value(tempor);
  }else if(numberOfOligo == 2){
    tempor = ol2.value().addAt(position - parseInt(+ol2Position.value()));
    ol2.value(tempor);
  }
}

function removeLetter(position, numberOfOligo){
  let tempor;
  if(numberOfOligo == 1){
    tempor = ol1.value().removeAt(position - parseInt(+ol1Position.value()));
    ol1.value(tempor);
  }else if(numberOfOligo == 2){
    tempor = ol2.value().removeAt(position - parseInt(+ol2Position.value()));
    ol2.value(tempor);
  }
}