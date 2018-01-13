function changeLetter(position, numberOfOligo){
  if(numberOfOligo == 1){
    if(myOligo1.charArray[position] == "A"){
      myOligo1.charArray[position] = "U";
      let temp = ol1.value().replaceAt(position - parseInt(ol1Position.value()),"U");
      ol1.value(temp);
    }else if(myOligo1.charArray[position] == "U"){
      myOligo1.charArray[position] = "G";
      let temp = ol1.value().replaceAt(position - parseInt(ol1Position.value()),"G");
      ol1.value(temp);
    }else if(myOligo1.charArray[position] == "G"){
      myOligo1.charArray[position] = "C";
      let temp = ol1.value().replaceAt(position - parseInt(ol1Position.value()),"C");
      ol1.value(temp);
    }else if(myOligo1.charArray[position] == "C"){
      myOligo1.charArray[position] = "E";
      let temp = ol1.value().replaceAt(position - parseInt(ol1Position.value()),"E");
      ol1.value(temp);
    }else if(myOligo1.charArray[position] == "E"){
      myOligo1.charArray[position] = "A";
      let temp = ol1.value().replaceAt(position - parseInt(ol1Position.value()),"A");
      ol1.value(temp);
    }
  }else if(numberOfOligo == 2){
    if(myOligo2.charArray[position] == "A"){
      myOligo2.charArray[position] = "U";
      let temp = ol2.value().replaceAt(position - parseInt(ol2Position.value()),"U");
      ol2.value(temp);
    }else if(myOligo2.charArray[position] == "U"){
      myOligo2.charArray[position] = "G";
      let temp = ol2.value().replaceAt(position - parseInt(ol2Position.value()),"G");
      ol2.value(temp);
    }else if(myOligo2.charArray[position] == "G"){
      myOligo2.charArray[position] = "C";
      let temp = ol2.value().replaceAt(position - parseInt(ol2Position.value()),"C");
      ol2.value(temp);
    }else if(myOligo2.charArray[position] == "C"){
      myOligo2.charArray[position] = "E";
      let temp = ol2.value().replaceAt(position - parseInt(ol2Position.value()),"E");
      ol2.value(temp);
    }else if(myOligo2.charArray[position] == "E"){
      myOligo2.charArray[position] = "A";
      let temp = ol2.value().replaceAt(position - parseInt(ol2Position.value()),"A");
      ol2.value(temp);
    }
  }
}
function findRna(){
  ol3.value("");
  rna1 = [];
  rna2 = [];
  let shortestBranch, longestWaste;
  if(oligo1.length > oligo2.length){
    shortestBranch = oligo2.length;
  }else{
    shortestBranch = oligo1.length;
  }
  if(+ol1Position.value() > +ol2Position.value()){
    longestWaste = +ol1Position.value();
  }else{
    longestWaste = +ol2Position.value();
  }
  for(let i = longestWaste; i < shortestBranch; i++){
    if(oligo1[i] == "A"){
      if(oligo2[i] == "A" || oligo2[i] == "G"){
        rna1[i] = "U";
      }else{
        rna1[i] = "E";
      }
    }else if(oligo1[i] == "U"){
      if(oligo2[i] == "C"){
        rna1[i] = "G";
      }else if(oligo2[i] == "U"){
        rna1[i] = "A";
        rna2[i] = "G";
      }else{
        rna1[i] = "E";
      }
    }else if(oligo1[i] == "G"){
      if(oligo2[i] == "A"){
        rna1[i] = "U";
      }else if(oligo2[i] == "G"){
        rna1[i] = "C";
        rna2[i] = "U";
      }else{
        rna1[i] = "E";
      }
    }else if(oligo1[i] == "C"){
      if(oligo2[i] == "C" || oligo2[i] == "U"){
        rna1[i] = "G";
      }else{
        rna1[i] = "E"; 
      }
    }
  }
  myRna = new Oligo(5, rna1);
  myRna2 = new Oligo(6, rna2);
  let temp = "";
  for(let i = 0; i < rna1.length; i++){
    if(rna1[i] != undefined){
      temp += rna1[i];
    }
  }
  ol3.value(temp);
  ol3.style("width", (temp.length * 10) + "px");
}
function calculate(){
  errorsFinder();
  //CREATE OLIGOS
  myOligo1 = new Oligo(1, oligo1);
  myOligo2 = new Oligo(2, oligo2);
  findRna();
  start = true;
}
function errorsFinder(){
  //CHECKING FOR ERRORS INPUT3 && INPUT4 SHOULD BE A NUMBERS
  if(isNaN(+ol1Position.value()) || isNaN(+ol2Position.value())){
    errors[2] = true;
    return;
  }else{
    errors[2] = false;
  }
  let temp;
  temp = ol1.value().toUpperCase();
  oligo1 = [];
  for(let i = 0; i < ol1.value().length; i ++){
    if(temp[i] == "A" || temp[i] == "U" || temp[i] == "G" || temp[i] == "C"){
      oligo1[i + (Number(ol1Position.value()))] = temp[i];
    }else{
      errors[0] = true;
      return;
    }
    errors[0] = false;
  } 
  temp = ol2.value().toUpperCase();
  oligo2 = [];
  for(let i = 0; i < ol2.value().length; i ++){
    if(temp[i] == "A" || temp[i] == "U" || temp[i] == "G" || temp[i] == "C"){
      oligo2[i + (Number(ol2Position.value()))] = temp[i];
    }else{
      errors[1] = true;
      return;
    }
    errors[1] = false;
  }
  //Show Errors
  for(let i = 0; i < errors.length; i++){
    if(errors[i] == false){

    }else{
      if(i == 0){
        fill(255);
        textSize(50);
        text("Oligo1 unexpected char detected!", width / 3, 50);
      }else if(i == 1){
        fill(255);
        textSize(50);
        text("Oligo2 unexpected char detected!", width / 3, 100);
      }else if(i == 2){
        fill(255);
        textSize(50);
        text("Not a numbers in Oligo position input box", width / 3, 150);
      }else{
        fill(255);
        textSize(50);
        text("Impossible error", width / 3, height / 2);
      }
    }
  }
}
function debugMode(){
  ol1.value("CGACUACG");
  ol2.value("AUACGACUACG");
  ol1Position.value("11");
  ol2Position.value("8");
  background(12);
  errorsFinder();
  showFunctionality();
  showMemory();
  calculate();
  myButton.show();
  myOligo1.show();
  myOligo2.show();
  myRna.show(); // RNA variant 1
  myRna2.show(); // if more than 1 variant , that RNA shows up
}
function showFunctionality(){
  push();
  translate(scaler / 4, -scaler / 4);
  textSize(scaler/2);
  fill(150, 255, 50);
  rect(0, height - scaler * 6.5 , scaler * 14, scaler * 6.5);
  fill(0);
  text("'ESQ'  => show/hide help menu", 0, height - scaler * 6);
  text("'`'  => load debug mode oligos and calculate RNA once" , 0, height - scaler * 5.5);
  text("'R' <= move Oligo_1 => 'Y' ", 0, height - scaler * 5);
  text("'F' <= move Oligo_2 => 'H' ", 0, height - scaler * 4.5);
  text("'V' <= move Memory position => 'N' ", 0, height - scaler * 4);
  text("'mouse wheel +' => scale UP" , 0, height - scaler * 3.5);
  text("'mouse wheel -'  => scale DOWN" , 0, height - scaler * 3);
  text("'SPACE'  => change automode state", 0, height - scaler * 2.5); 
  text("'Enter'  => compare current oligos and find RNA" , 0, height - scaler * 2);
  text("Click on letter to change it A => U => G => C => E => A" , 0, height - scaler * 1.5);
  pop();
}
function showMemory(){
  push();
  translate(-scaler / 4, -scaler / 4);
  textSize(scaler / 2);
  fill(200, 200, 0);
  rect(width - scaler * 12, height - scaler * 2 , scaler * 12, scaler * 2);
  fill(0);
  stroke(4);
  line(scaler / 1.65 + width - scaler * 12 + memoryPosition * scaler , height - scaler * 1.5, 
       scaler / 1.65 + width - scaler * 12 + memoryPosition * scaler , height - scaler);
  line(-scaler / 6 + scaler / 1.65 + width - scaler * 12 + memoryPosition * scaler , height - scaler * 1.25, 
       scaler / 1.65 + width - scaler * 12 + memoryPosition * scaler , height - scaler);
  line(scaler / 6 + scaler / 1.65 + width - scaler * 12 + memoryPosition * scaler , height - scaler * 1.25, 
       scaler / 1.65 + width - scaler * 12 + memoryPosition * scaler , height - scaler);
  noStroke();
  for(let i = 0 ; i < 10 ; i++){
    text(i, scaler / 2 + width - scaler * 12 + i * scaler , height - scaler * 0.5 );
  }
  fill(255);
  text("Memory position", width - scaler * 8, height - scaler * 2.5);
  pop();
}


// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
function sortObjectsArray(objectsArray, sortKey){
  // Quick Sort:
  let retVal;

  if (1 < objectsArray.length)
  {
      let pivotIndex = Math.floor((objectsArray.length - 1) / 2);  // middle index
      let pivotItem = objectsArray[pivotIndex];                    // value in the middle index
      let less = [], more = [];

      objectsArray.splice(pivotIndex, 1);                          // remove the item in the pivot position
      objectsArray.forEach(function(value, index, array)
      {
          value[sortKey] <= pivotItem[sortKey] ?                   // compare the 'sortKey' proiperty
              more.push(value) :
              less.push(value) ;
      });

      retVal = sortObjectsArray(less, sortKey).concat([pivotItem], sortObjectsArray(more, sortKey));
  }
  else
  {
      retVal = objectsArray;
  }

  return retVal;
}