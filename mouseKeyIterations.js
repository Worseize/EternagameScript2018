keyReleased = function(){
  //  ----------------------------------------------- PAGE 1 (STATE ALL) -----------------------------------------
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
      if(keyIsDown(16)){//Shift
        if(keyCode === 81){//Q
          if(+ol1Position.value() > 0){
            ol1Position.value(+ol1Position.value() - 1);
          }
        }else if(keyCode === 69){//E
          ol1Position.value(+ol1Position.value() + 1);
        }else if(keyCode === 65){//A
          if(+ol2Position.value() > 0){
            ol2Position.value(+ol2Position.value() - 1);
          }
        }else if(keyCode === 68){//D
          ol2Position.value(+ol2Position.value() + 1);
        }
      }
    }
    if(keyIsDown(16)){//Shift
      if(keyCode === 87){//W
        if(qwSelector === 1){
          oligo1PY -= 0.1;
        }else if(qwSelector === 2){
          oligo2PY -= 0.1;
        }else if(qwSelector === 3){
          oligo3PY -= 0.1;
        }else if(qwSelector === 4){
          oligo4PY -= 0.1;
        }
      }else if(keyCode === 83){//S
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
    if(keyCode === 86 || keyCode === 78 || keyCode === 82 || keyCode === 32 || 
      (keyIsDown(16) && (keyCode === 87 || keyCode === 83 || keyCode === 81 || keyCode === 69 || keyCode === 65 || keyCode === 68))){
      start = true;
    }

//  ----------------------------------------------- PAGE 2 (STATE 1) -----------------------------------------
  }else if(page === 2){
    if(autoModePage2){
      if(keyCode === 86){//V
        if(memoryPositionPage3 > 0){
          memoryPositionPage3--;
        }else{
          memoryPositionPage3 = memoryPage2.length - 1;
        }
      }else if(keyCode === 78){//N
        if(memoryPositionPage3 < memoryPage2.length - 1){
          memoryPositionPage3++;
        }else{
          memoryPositionPage3 = 0;
        }
      }
    }
    
    if(keyIsDown(16)){ // Shift
      if(keyCode === 68){//D
        rnaScene2.translateX += rnaScene2.baseSize * scaler;
      }else if(keyCode === 65){//A
        rnaScene2.translateX -= rnaScene2.baseSize * scaler;
      }else if(keyCode === 87){//W
        rnaScene2.translateY -= rnaScene2.baseSize * scaler;
      }else if(keyCode === 83){//S
        rnaScene2.translateY += rnaScene2.baseSize * scaler;
      }else if(keyCode === 78){//N
        if(rnaScene2.ArrayOfNucleos.length > +ol6End.value()){
          rnaScene2.startIndex++;
          rnaScene2.endIndex++;
          ol6Start.value(+ol6Start.value() + 1);
          ol6End.value(+ol6End.value() + 1);
        }
      }else if(keyCode === 86){//V
        if(+ol6Start.value() > 0){
          rnaScene2.startIndex--;
          rnaScene2.endIndex--;
          ol6Start.value(+ol6Start.value() - 1);
          ol6End.value(+ol6End.value() - 1);
        }
      }else if(keyCode === 81){//Q-----------------------------
        if(rnaScene2.loopBases > 3){
          rnaScene2.translateX -= rnaScene2.baseSize * scaler;
          ol6Start.value(+ol6Start.value() + 1);
          ol6Loop.value(+ol6Loop.value() - 1);
        }
      }else if(keyCode === 90){//Z
        if(+ol6Start.value() > 0){
          rnaScene2.translateX += rnaScene2.baseSize * scaler;
          ol6Start.value(+ol6Start.value() - 1);
          ol6Loop.value(+ol6Loop.value() + 1);
        }
      }else if(keyCode === 67){//C
        let rightTail = rnaScene2.ArrayOfNucleos.length - rnaScene2.endIndex;
        if(rightTail > 0){
          ol6End.value(+ol6End.value() + 1);
          ol6Loop.value(+ol6Loop.value() + 1);
        }
      }else if(keyCode === 69){//E
        if(+ol6Loop.value() > 3){
          ol6End.value(+ol6End.value() - 1);
          ol6Loop.value(+ol6Loop.value() - 1);
        }
      }else if(keyCode === 70){//F
        if(+ol6Start.value() > 0 && (rnaScene2.ArrayOfNucleos.length - +ol6End.value()) > 0){
          ol6Pairs.value(+ol6Pairs.value() + 1);
          ol6Start.value(+ol6Start.value() - 1);
          ol6End.value(+ol6End.value() + 1);
        }
      }else if(keyCode === 82){//R
        if(+ol6Pairs.value() > 0){
          ol6Pairs.value(+ol6Pairs.value() - 1);
          ol6Start.value(+ol6Start.value() + 1);
          ol6End.value(+ol6End.value() - 1);
        }
      }else if(keyCode === 74){//J---------------------------------
        if(+ol6Loop.value() > 4){
          ol6Loop.value(+ol6Loop.value() - 2);
          ol6Pairs.value(+ol6Pairs.value() + 1);
        }
      }else if(keyCode === 77){//M
        if(+ol6Pairs.value() > 0){
          ol6Loop.value(+ol6Loop.value() + 2);
          ol6Pairs.value(+ol6Pairs.value() - 1);
        }
      }
    }
    if(keyCode === 32){//Space
      if(autoModePage2 === true){
        autoModePage2 = false;
        ol6Start.style("background-color","green");
        ol6Loop.style("background-color","green");
        ol6End.style("background-color","green");
      }else{
        autoModePage2 = true;
        memoryPositionPage3 = 0;
        ol6Start.style("background-color","white");
        ol6Loop.style("background-color","white");
        ol6End.style("background-color","white");
      }
    }
    if(keyCode === 32 || ( keyIsDown(16)  && ( keyCode === 68 || keyCode === 65 || keyCode === 87 || keyCode === 83 || keyCode === 78 ||
       keyCode === 86 || keyCode === 81 || keyCode === 90 || keyCode === 67 || keyCode === 69 || keyCode === 82 || keyCode === 70 ||
       keyCode === 74 || keyCode === 77))){
      start = true;
    }
  }

//  ----------------------------------------------- ALWAYS -----------------------------------------
  if(keyCode === 27){//ESC
    if(page != 0){
      page = 0;
    }else{
      page = 1;
    }
  }else if(keyCode === 84){//T
    scaler+=1;
    textSize(scaler);
    showObjects();
  }else if(keyCode === 66){//B
    scaler-=1;
    textSize(scaler);
    showObjects();
  }else if(keyIsDown(16)){
    if(keyCode === 49){
      page = 0;
    }else if(keyCode === 50){
      page = 1;
    }else if(keyCode === 51){
      page = 2;
    }else if(keyCode === 52){
      page = 3;
    }
  }
  if(keyCode === 27 || keyCode === 49 || keyIsDown(16)  && (keyCode === 50 || keyCode === 51 || keyCode === 52)){
    start = true;
  }
}

mouseReleased = function(){
  if(page === 1){
    if(autoMode === false && keyIsPressed && event.button === 0){ //LeftMouse Click on Oligo => change letter
      if(keyIsDown(16)){ //Shift
        if(mouseY > 50 * qwScaler * oligo1PY - scaler / 2 && mouseY < 50 * qwScaler * oligo1PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          changeLetter(temp , 1);
          updatePage1();
        }
        if(mouseY > 50 * qwScaler * oligo2PY - scaler / 2 && mouseY < 50 * qwScaler * oligo2PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          changeLetter(temp , 2);
          updatePage1();
        }
      }else if(keyCode === 17){ //Ctrl
        if(mouseY > 50 * qwScaler * oligo1PY - scaler / 2 && mouseY < 50 * qwScaler * oligo1PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          addLetter(temp , 1);
          updatePage1();
        }
        if(mouseY > 50 * qwScaler * oligo2PY - scaler / 2 && mouseY < 50 * qwScaler * oligo2PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          addLetter(temp , 2);
          updatePage1();
        }
      }else if(keyCode === 18){ //Alt
        if(mouseY > 50 * qwScaler * oligo1PY - scaler / 2 && mouseY < 50 * qwScaler * oligo1PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          removeLetter(temp , 1);
          updatePage1();
        }
        if(mouseY > 50 * qwScaler * oligo2PY - scaler / 2 && mouseY < 50 * qwScaler * oligo2PY + scaler / 2){
          let temp = round((mouseX - scaler / 2) / scaler);
          removeLetter(temp , 2);
          updatePage1();
        }
      }
    }
  }else if(page === 2){
//------------------------------------2D into 1D transformation engine
    if(autoModePage2 === false && keyIsPressed && event.button === 0){
      if(keyIsDown(16)){
        if(mouseX > rnaScene2.translateX + rnaScene2.baseSize * scaler && mouseY > rnaScene2.translateY + rnaScene2.baseSize * scaler){ //mouse at whole rna area
          let temp;
          const baseTranslator = scaler * rnaScene2.baseSize * 1.5;
          const baseSizeTemp = rnaScene2.baseSize * scaler;
          const minY = rnaScene2.translateY + baseSizeTemp;
          const minX = rnaScene2.translateX + baseSizeTemp;
          const pairsTemp = (rnaScene2.endIndex - rnaScene2.loopBases - rnaScene2.startIndex) / 2;
          const maxY = minY + ((rnaScene2.endIndex - rnaScene2.startIndex ) / 2 + 1) * baseSizeTemp;
          const centerIsEven = rnaScene2.loopBases % 2 === 0;
          if(mouseY > maxY + baseSizeTemp / 2){ // bottom border of rna
          }else if( mouseY > minY && mouseY < minY + baseSizeTemp){//mouse at part1 || part7 
            //remember ORIGIN [x, y] = [baseSize * scaler * 1.5, baseSize * scaler * 1.5]
            if(      mouseX < minX + baseSizeTemp  + (rnaScene2.startIndex - 1) * baseSizeTemp ){ // part 1 
              temp = round((( mouseX - (rnaScene2.translateX + baseSizeTemp * 1.5)) / baseSizeTemp));
            }else if(mouseX > minX + baseSizeTemp * 3 + (rnaScene2.startIndex - 1) * baseSizeTemp ){ //part7
              temp = round((( mouseX - (rnaScene2.translateX + baseSizeTemp * 3.5)) / baseSizeTemp)) + (rnaScene2.endIndex - rnaScene2.startIndex);
            }

          }else if(mouseY > minY + ((rnaScene2.endIndex - rnaScene2.startIndex) / 2 + 0.5) * baseSizeTemp){ // part 4
            if(mouseX > minX + baseSizeTemp + (rnaScene2.startIndex - 1) * baseSizeTemp  && 
               mouseX < minX + baseSizeTemp * 3 + (rnaScene2.startIndex - 1) * baseSizeTemp )  { // bottom border of rna
              if(centerIsEven){  
                if(mouseX < minX + baseSizeTemp * 2 + (rnaScene2.startIndex - 1) * baseSizeTemp){
                  temp = (rnaScene2.endIndex + rnaScene2.startIndex) / 2 - 1;
                }else{
                  temp = (rnaScene2.endIndex + rnaScene2.startIndex) / 2;
                }
              }else{
                temp = (rnaScene2.endIndex + rnaScene2.startIndex - 1) / 2;
              }
            }
          }else if(mouseY > minY && mouseY < minY + (pairsTemp + round(rnaScene2.loopBases / 2)) * baseSizeTemp && 
                   mouseX > minX + (rnaScene2.startIndex - 1) * baseSizeTemp && 
                   mouseX < minX + (rnaScene2.startIndex + 1) * baseSizeTemp){ // part 2,3
            temp = round((mouseY - (minY + (pairsTemp + 1.5) * baseSizeTemp)) / baseSizeTemp) + pairsTemp + rnaScene2.startIndex; 
          }else if(mouseY > minY && mouseY < maxY + baseSizeTemp / 2 && 
                   mouseX > minX + (rnaScene2.startIndex + 1) * baseSizeTemp && 
                   mouseX < minX + (rnaScene2.startIndex + 3) * baseSizeTemp && 
                   centerIsEven){ // part 5,6
              temp = round((maxY - mouseY + baseSizeTemp / 2) / baseSizeTemp) + pairsTemp + rnaScene2.startIndex + round(rnaScene2.loopBases / 2 - 1); 
          }else if(mouseY > minY && mouseY < maxY + baseSizeTemp / 2 && 
                   mouseX > minX + (rnaScene2.startIndex + 1) * baseSizeTemp && 
                   mouseX < minX + (rnaScene2.startIndex + 3) * baseSizeTemp && 
                   !centerIsEven){ // part 5,6
            temp = round((maxY - mouseY) / baseSizeTemp) + pairsTemp + rnaScene2.startIndex + (rnaScene2.loopBases - 1) / 2;
          }
          changeLetter(temp, 6);
        }
        updatePage2();
      }else if(keyIsDown(17)){
        if(mouseX > rnaScene2.translateX + rnaScene2.baseSize * scaler && mouseY > rnaScene2.translateY + rnaScene2.baseSize * scaler){ //mouse at whole rna area
          let temp;
          const baseTranslator = scaler * rnaScene2.baseSize * 1.5;
          const baseSizeTemp = rnaScene2.baseSize * scaler;
          const minY = rnaScene2.translateY + baseSizeTemp;
          const minX = rnaScene2.translateX + baseSizeTemp;
          const pairsTemp = (rnaScene2.endIndex - rnaScene2.loopBases - rnaScene2.startIndex) / 2;
          const maxY = minY + ((rnaScene2.endIndex - rnaScene2.startIndex ) / 2 + 1) * baseSizeTemp;
          const centerIsEven = rnaScene2.loopBases % 2 === 0;
          if(mouseY > maxY + baseSizeTemp / 2){ // bottom border of rna
          }else if( mouseY > minY && mouseY < minY + baseSizeTemp){//mouse at part1 || part7 
            //remember ORIGIN [x, y] = [baseSize * scaler * 1.5, baseSize * scaler * 1.5]
            if(      mouseX < minX + baseSizeTemp  + (rnaScene2.startIndex - 1) * baseSizeTemp ){ // part 1 
              temp = round((( mouseX - (rnaScene2.translateX + baseSizeTemp * 1.5)) / baseSizeTemp));
            }else if(mouseX > minX + baseSizeTemp * 3 + (rnaScene2.startIndex - 1) * baseSizeTemp ){ //part7
              temp = round((( mouseX - (rnaScene2.translateX + baseSizeTemp * 3.5)) / baseSizeTemp)) + (rnaScene2.endIndex - rnaScene2.startIndex);
            }

          }else if(mouseY > minY + ((rnaScene2.endIndex - rnaScene2.startIndex) / 2 + 0.5) * baseSizeTemp){ // part 4
            if(mouseX > minX + baseSizeTemp + (rnaScene2.startIndex - 1) * baseSizeTemp  && 
               mouseX < minX + baseSizeTemp * 3 + (rnaScene2.startIndex - 1) * baseSizeTemp )  { // bottom border of rna
              if(centerIsEven){  
                if(mouseX < minX + baseSizeTemp * 2 + (rnaScene2.startIndex - 1) * baseSizeTemp){
                  temp = (rnaScene2.endIndex + rnaScene2.startIndex) / 2 - 1;
                }else{
                  temp = (rnaScene2.endIndex + rnaScene2.startIndex) / 2;
                }
              }else{
                temp = (rnaScene2.endIndex + rnaScene2.startIndex - 1) / 2;
              }
            }
          }else if(mouseY > minY && mouseY < minY + (pairsTemp + round(rnaScene2.loopBases / 2)) * baseSizeTemp && 
                   mouseX > minX + (rnaScene2.startIndex - 1) * baseSizeTemp && 
                   mouseX < minX + (rnaScene2.startIndex + 1) * baseSizeTemp){ // part 2,3
            temp = round((mouseY - (minY + (pairsTemp + 1.5) * baseSizeTemp)) / baseSizeTemp) + pairsTemp + rnaScene2.startIndex; 
          }else if(mouseY > minY && mouseY < maxY + baseSizeTemp / 2 && 
                   mouseX > minX + (rnaScene2.startIndex + 1) * baseSizeTemp && 
                   mouseX < minX + (rnaScene2.startIndex + 3) * baseSizeTemp && 
                   centerIsEven){ // part 5,6
              temp = round((maxY - mouseY + baseSizeTemp / 2) / baseSizeTemp) + pairsTemp + rnaScene2.startIndex + round(rnaScene2.loopBases / 2 - 1); 
          }else if(mouseY > minY && mouseY < maxY + baseSizeTemp / 2 && 
                   mouseX > minX + (rnaScene2.startIndex + 1) * baseSizeTemp && 
                   mouseX < minX + (rnaScene2.startIndex + 3) * baseSizeTemp && 
                   !centerIsEven){ // part 5,6
            temp = round((maxY - mouseY) / baseSizeTemp) + pairsTemp + rnaScene2.startIndex + (rnaScene2.loopBases - 1) / 2;
          }
          addLetter(temp, 6);
        }
        updatePage2();
      }else if(keyIsDown(18)){
        if(mouseX > rnaScene2.translateX + rnaScene2.baseSize * scaler && mouseY > rnaScene2.translateY + rnaScene2.baseSize * scaler){ //mouse at whole rna area
          let temp;
          const baseTranslator = scaler * rnaScene2.baseSize * 1.5;
          const baseSizeTemp = rnaScene2.baseSize * scaler;
          const minY = rnaScene2.translateY + baseSizeTemp;
          const minX = rnaScene2.translateX + baseSizeTemp;
          const pairsTemp = (rnaScene2.endIndex - rnaScene2.loopBases - rnaScene2.startIndex) / 2;
          const maxY = minY + ((rnaScene2.endIndex - rnaScene2.startIndex ) / 2 + 1) * baseSizeTemp;
          const centerIsEven = rnaScene2.loopBases % 2 === 0;
          if(mouseY > maxY + baseSizeTemp / 2){ // bottom border of rna
          }else if( mouseY > minY && mouseY < minY + baseSizeTemp){//mouse at part1 || part7
            //remember ORIGIN [x, y] = [baseSize * scaler * 1.5, baseSize * scaler * 1.5]
            if(      mouseX < minX + baseSizeTemp  + (rnaScene2.startIndex - 1) * baseSizeTemp ){ // part 1 
              temp = round((( mouseX - (rnaScene2.translateX + baseSizeTemp * 1.5)) / baseSizeTemp));
            }else if(mouseX > minX + baseSizeTemp * 3 + (rnaScene2.startIndex - 1) * baseSizeTemp ){ //part7
              temp = round((( mouseX - (rnaScene2.translateX + baseSizeTemp * 3.5)) / baseSizeTemp)) + (rnaScene2.endIndex - rnaScene2.startIndex);
            }

          }else if(mouseY > minY + ((rnaScene2.endIndex - rnaScene2.startIndex) / 2 + 0.5) * baseSizeTemp){ // part 4
            if(mouseX > minX + baseSizeTemp + (rnaScene2.startIndex - 1) * baseSizeTemp  && 
               mouseX < minX + baseSizeTemp * 3 + (rnaScene2.startIndex - 1) * baseSizeTemp )  { // bottom border of rna
              if(centerIsEven){  
                if(mouseX < minX + baseSizeTemp * 2 + (rnaScene2.startIndex - 1) * baseSizeTemp){
                  temp = (rnaScene2.endIndex + rnaScene2.startIndex) / 2 - 1;
                }else{
                  temp = (rnaScene2.endIndex + rnaScene2.startIndex) / 2;
                }
              }else{
                temp = (rnaScene2.endIndex + rnaScene2.startIndex - 1) / 2;
              }
            }
          }else if(mouseY > minY && mouseY < minY + (pairsTemp + round(rnaScene2.loopBases / 2)) * baseSizeTemp && 
                   mouseX > minX + (rnaScene2.startIndex - 1) * baseSizeTemp && 
                   mouseX < minX + (rnaScene2.startIndex + 1) * baseSizeTemp){ // part 2,3
            temp = round((mouseY - (minY + (pairsTemp + 1.5) * baseSizeTemp)) / baseSizeTemp) + pairsTemp + rnaScene2.startIndex; 
          }else if(mouseY > minY && mouseY < maxY + baseSizeTemp / 2 && 
                   mouseX > minX + (rnaScene2.startIndex + 1) * baseSizeTemp && 
                   mouseX < minX + (rnaScene2.startIndex + 3) * baseSizeTemp && 
                   centerIsEven){ // part 5,6
              temp = round((maxY - mouseY + baseSizeTemp / 2) / baseSizeTemp) + pairsTemp + rnaScene2.startIndex + round(rnaScene2.loopBases / 2 - 1); 
          }else if(mouseY > minY && mouseY < maxY + baseSizeTemp / 2 && 
                   mouseX > minX + (rnaScene2.startIndex + 1) * baseSizeTemp && 
                   mouseX < minX + (rnaScene2.startIndex + 3) * baseSizeTemp && 
                   !centerIsEven){ // part 5,6
            temp = round((maxY - mouseY) / baseSizeTemp) + pairsTemp + rnaScene2.startIndex + (rnaScene2.loopBases - 1) / 2;
          }
          removeLetter(temp, 6);
        }
        updatePage2();
      }
    }
  }
}
window.onresize = function(){
  resizeCanvas(innerWidth - 10, innerHeight - domYLength);
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

  showObjects();
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
  updatePage1();
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
  updatePage1();
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
  updatePage1();
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
  updatePage2();
}

function changeScaler(event){
  if(event.deltaY > 5){
    scaler -= 1;
  }else if(event.deltaY < 5){
    scaler += 1;
  }
  textSize(scaler);
  showObjects();
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
  }else if(numberOfOligo == 6){
    if(rnaScene2.ArrayOfNucleos[position] == "A"){
      rnaScene2.ArrayOfNucleos[position] = "U";
      tempor = ol6.value().replaceAt((position),"U");
      ol6.value(tempor);
    }else if(rnaScene2.ArrayOfNucleos[position] == "U"){
      rnaScene2.ArrayOfNucleos[position] = "G";
      tempor = ol6.value().replaceAt((position),"G");
      ol6.value(tempor);
    }else if(rnaScene2.ArrayOfNucleos[position] == "G"){
      rnaScene2.ArrayOfNucleos[position] = "C";
      tempor = ol6.value().replaceAt((position),"C");
      ol6.value(tempor);
    }else if(rnaScene2.ArrayOfNucleos[position] == "C"){
      rnaScene2.ArrayOfNucleos[position] = "E";
      tempor = ol6.value().replaceAt((position),"E");
      ol6.value(tempor);
    }else if(rnaScene2.ArrayOfNucleos[position] == "E"){
      rnaScene2.ArrayOfNucleos[position] = "A";
      tempor = ol6.value().replaceAt((position),"A");
      ol6.value(tempor);
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
  }else if(numberOfOligo === 6){
    tempor = ol6.value().addAt(position);
    ol6.value(tempor);
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
  }else if(numberOfOligo === 6){
    tempor = ol6.value().removeAt(position);
    ol6.value(tempor);
  }
}