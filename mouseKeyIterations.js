keyReleased = function(){
  //IF PAGE === STATE ALL
  if(page === 1){
    if(autoMode){
      if(keyCode === 86){//V
        if(memoryPosition > 0){
          memoryPosition--;
        }else{
          memoryPosition = +ol1.value().length + (+ol2.value().length) - 2;
        }
      }else if(keyCode === 78){//N
        if(memoryPosition < +ol1.value().length + (+ol2.value().length) - 2){
          memoryPosition++;
        }else{
          memoryPosition = 0;
        }
      }
    }else{
      if(keyCode === 82){//R
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
      }
    }

    if(keyCode === 32){//Space
      if(autoMode === true){
        autoMode = false;
        ol1Position.style("background-color","green");
        ol2Position.style("background-color","green");
        flag = false;
      }else{
        autoMode = true;
        ol1Position.style("background-color","white");
        ol2Position.style("background-color","white");
        flag = true;
      }
    }
  }
  //ALWAYS
  if(keyCode === 90){//Z
    if(page > 0){
      page--;
    }else{
      page = 3;
    }
  }else if(keyCode === 88){//X
    if(page < 3){
      page++;
    }else{
      page = 0;
    }
  }else if(keyCode === 27){//ESC
    if(page != 0){
      page = 0;
    }else{
      page = 1;
    }
  }else if(keyCode === 84){//T
    scaler+=1;
  }else if(keyCode === 66){//B
    scaler-=1;
  }
  if(keyCode === 81){//Q
    if(qwSelector === 1){
      oligo1PY -= 0.1;
    }else if(qwSelector === 2){
      oligo2PY -= 0.1;
    }else if(qwSelector === 3){
      oligo3PY -= 0.1;
    }else if(qwSelector === 4){
      oligo4PY -= 0.1;
    }
  }else if(keyCode === 87){//W
    if(qwSelector === 1){
      oligo1PY += 0.1;
    }else if(qwSelector === 2){
      oligo2PY += 0.1;
    }else if(qwSelector === 3){
      oligo3PY += 0.1;
    }else if(qwSelector === 4){
      oligo4PY += 0.1;
    }
  }
  start = true;
}

mouseReleased = function(){
  if(page === 1){
    if(keyIsPressed && event.button === 0){ //LeftMouse Click on Oligo => change letter
      if(autoMode === false && keyCode === 16){ //Shift
        if(mouseY > 50 * qwScaler * oligo1PY - scaler / 2 && mouseY < 50 * qwScaler * oligo1PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          changeLetter(temp , 1);
          start = true;
        }
        if(mouseY > 50 * qwScaler * oligo2PY - scaler / 2 && mouseY < 50 * qwScaler * oligo2PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          changeLetter(temp , 2);
          start = true;
        }
      }else if(autoMode === false && keyCode === 17){ //Ctrl
        if(mouseY > 50 * qwScaler * oligo1PY - scaler / 2 && mouseY < 50 * qwScaler * oligo1PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          addLetter(temp , 1);
          start = true;
        }
        if(mouseY > 50 * qwScaler * oligo2PY - scaler / 2 && mouseY < 50 * qwScaler * oligo2PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          addLetter(temp , 2);
          start = true;
        }
      }else if(autoMode === false && keyCode === 18){ //Alt
        if(mouseY > 50 * qwScaler * oligo1PY - scaler / 2 && mouseY < 50 * qwScaler * oligo1PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          removeLetter(temp , 1);
          start = true;
        }
        if(mouseY > 50 * qwScaler * oligo2PY - scaler / 2 && mouseY < 50 * qwScaler * oligo2PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          removeLetter(temp , 2);
          start = true;
        }
      }
    }
  }
}

window.onresize = function(){
  myCanvas = createCanvas(innerWidth - 10, innerHeight - domYLength);
  ol1.style("width", (innerWidth - 150) + "px");
  sel1.style("position","relative");
  sel1.style("margin-top","5px");
  sel1.style("float","left");
  ol2.style("width", (innerWidth - 150) + "px");
  sel2.style("position","relative");
  sel2.style("margin-top","5px");
  sel2.style("float","left");
  if(ol3.value().length < ((innerWidth - 150) / 8)){
    ol3.style("width", (ol3.value().length * 8) + "px");
  }else{
    ol3.style("width", (innerWidth - 150) + "px");
  }

  ol4.style("width", (innerWidth / 2 - 20) + "px");
  ol5.style("width", (innerWidth / 2 - 20) + "px");

  ol6.style("width", (innerWidth - 150) + "px");
  ol6.style("background-color","green");
  ol6.style("margin-top","5px");

  createAllObjects();
}

function mySelect1Event() {
  let item1 = sel1.value();
  if(item1 === "A"){
    ol1.value("GUCGGACAAGGACGUAGACA");
  }else if(item1 === "B"){
    ol1.value("GUUUGGUAGGUAGUGGUACC");
  }else if(item1 === "R"){
    ol1.value("CAGUCUUGAAUCAG");
  }else if(item1 === "A + E + B"){
    ol1.value("GUCGGACAAGGACGUAGACAEGUUUGGUAGGUAGUGGUACC");
  }else if(item1 === "B + E + A"){
    ol1.value("GUUUGGUAGGUAGUGGUACCEGUCGGACAAGGACGUAGACA");
  }else if(item1 === "R + E + A + E + B"){
    ol1.value("CAGUCUUGAAUCAGEGUCGGACAAGGACGUAGACAEGUUUGGUAGGUAGUGGUACC");
  }else if(item1 === "A + E + R + E + B"){
    ol1.value("GUCGGACAAGGACGUAGACAECAGUCUUGAAUCAGEGUUUGGUAGGUAGUGGUACC");
  }else if(item1 === "A + E + B + E + R"){
    ol1.value("GUCGGACAAGGACGUAGACAEGUUUGGUAGGUAGUGGUACCECAGUCUUGAAUCAG");
  }else if(item1 === "B + E + A + E + R"){
    ol1.value("GUUUGGUAGGUAGUGGUACCEGUCGGACAAGGACGUAGACAECAGUCUUGAAUCAG");
  }else if(item1 === "B + E + R + E + A"){
    ol1.value("GUUUGGUAGGUAGUGGUACCECAGUCUUGAAUCAGEGUCGGACAAGGACGUAGACA");
  }else if(item1 === "R + E + B + E + A"){
    ol1.value("CAGUCUUGAAUCAGEGUUUGGUAGGUAGUGGUACCEGUCGGACAAGGACGUAGACA");
  }

  createAllObjects();
}
function mySelect2Event(){
  let item2 = sel2.value();
  if(item2 === "C"){
    ol2.value("GGUGGACAGAGAGAUACAUG");
  }else if(item2 === "R"){
    ol2.value("CAGUCUUGAAUCAG");
  }else if(item2 === "C + E + C"){
    ol2.value("GGUGGACAGAGAGAUACAUGEGGUGGACAGAGAGAUACAUG");
  }else if(item2 === "R + E + C"){
    ol2.value("CAGUCUUGAAUCAGEGGUGGACAGAGAGAUACAUG");
  }else if(item2 === "C + E + R"){
    ol2.value("GGUGGACAGAGAGAUACAUGECAGUCUUGAAUCAG");
  }else if(item2 === "C + E + C + E + R"){
    ol2.value("GGUGGACAGAGAGAUACAUGEGGUGGACAGAGAGAUACAUGECAGUCUUGAAUCAG");
  }else if(item2 === "C + E + R + E + C"){
    ol2.value("GGUGGACAGAGAGAUACAUGECAGUCUUGAAUCAGEGGUGGACAGAGAGAUACAUG");
  }else if(item2 === "R + E + C + E + C"){
    ol2.value("CAGUCUUGAAUCAGEGGUGGACAGAGAGAUACAUGEGGUGGACAGAGAGAUACAUG");
  }
  createAllObjects();
}
function mySelect3Event(){
  let item3 = sel3.value();
  if(item3 === "moveOligo1 Y - axis"){
    qwSelector = 1;
  }else if(item3 === "moveOligo2 Y - axis"){
    qwSelector = 2;
  }else if(item3 === "moveOligo3 Y - axis"){
    qwSelector = 3;
  }else if(item3 === "moveOligo4 Y - axis"){
    qwSelector = 4;
  }
  createAllObjects();
}
function mySelect4Event(){
  let item4 = sel4.value();
  if(item4 === "C"){
    ol6.value("GGUGGACAGAGAGAUACAUG");
  }else if(item4 === "R"){
    ol6.value("CAGUCUUGAAUCAG");
  }else if(item4 === "C + E + C"){
    ol6.value("GGUGGACAGAGAGAUACAUGEGGUGGACAGAGAGAUACAUG");
  }else if(item4 === "R + E + C"){
    ol6.value("CAGUCUUGAAUCAGEGGUGGACAGAGAGAUACAUG");
  }else if(item4 === "C + E + R"){
    ol6.value("GGUGGACAGAGAGAUACAUGECAGUCUUGAAUCAG");
  }else if(item4 === "C + E + C + E + R"){
    ol6.value("GGUGGACAGAGAGAUACAUGEGGUGGACAGAGAGAUACAUGECAGUCUUGAAUCAG");
  }else if(item4 === "C + E + R + E + C"){
    ol6.value("GGUGGACAGAGAGAUACAUGECAGUCUUGAAUCAGEGGUGGACAGAGAGAUACAUG");
  }else if(item4 === "R + E + C + E + C"){
    ol6.value("CAGUCUUGAAUCAGEGGUGGACAGAGAGAUACAUGEGGUGGACAGAGAGAUACAUG");
  }else if(item4 === "A"){
    ol6.value("GUCGGACAAGGACGUAGACA");
  }else if(item4 === "B"){
    ol6.value("GUUUGGUAGGUAGUGGUACC");
  }else if(item4 === "R"){
    ol6.value("CAGUCUUGAAUCAG");
  }else if(item4 === "A + E + B"){
    ol6.value("GUCGGACAAGGACGUAGACAEGUUUGGUAGGUAGUGGUACC");
  }else if(item4 === "B + E + A"){
    ol6.value("GUUUGGUAGGUAGUGGUACCEGUCGGACAAGGACGUAGACA");
  }else if(item4 === "R + E + A + E + B"){
    ol6.value("CAGUCUUGAAUCAGEGUCGGACAAGGACGUAGACAEGUUUGGUAGGUAGUGGUACC");
  }else if(item4 === "A + E + R + E + B"){
    ol6.value("GUCGGACAAGGACGUAGACAECAGUCUUGAAUCAGEGUUUGGUAGGUAGUGGUACC");
  }else if(item4 === "A + E + B + E + R"){
    ol6.value("GUCGGACAAGGACGUAGACAEGUUUGGUAGGUAGUGGUACCECAGUCUUGAAUCAG");
  }else if(item4 === "B + E + A + E + R"){
    ol6.value("GUUUGGUAGGUAGUGGUACCEGUCGGACAAGGACGUAGACAECAGUCUUGAAUCAG");
  }else if(item4 === "B + E + R + E + A"){
    ol6.value("GUUUGGUAGGUAGUGGUACCECAGUCUUGAAUCAGEGUCGGACAAGGACGUAGACA");
  }else if(item4 === "R + E + B + E + A"){
    ol6.value("CAGUCUUGAAUCAGEGUUUGGUAGGUAGUGGUACCEGUCGGACAAGGACGUAGACA");
  }
  start = true;
  createAllObjects();
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