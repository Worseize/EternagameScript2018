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
    }else if(oligo1[i] == "E"){
      rna1[i] = "E";
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
  if(temp.length < ((innerWidth - 10) / 8)){
    ol3.style("width", (temp.length * 8) + "px");
  }else{
    console.log("ol3.value().length >= (innerWidth - 10) / 8);//see 'findRna'  function");
  }
}

function calculate(){
  errorsFinder();
  //CREATE OLIGOS
  myOligo1 = new Oligo(1, oligo1);
  myOligo2 = new Oligo(2, oligo2);
  findRna();
  start = true;
  //show in console how many times sequence was calculated
  consoleLog++;
  console.log("calculated " + consoleLog + " times" );
}

function errorsFinder(){
  //Show current Errors 
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
  //CHECKING FOR NEW ERRORS INPUT3 && INPUT4 SHOULD BE A NUMBERS
  if(isNaN(+ol1Position.value()) || isNaN(+ol2Position.value())){
    errors[2] = true;
    return;
  }else{
    errors[2] = false;
  }
  //CHECKING FOR NEW ERRORS INPUT1 SHOULD BE A LETTER A or U or G or C or E.
  let temp;
  temp = ol1.value().toUpperCase();
  oligo1 = [];
  for(let i = 0; i < ol1.value().length; i ++){
    if(temp[i] == "A" || temp[i] == "U" || temp[i] == "G" || temp[i] == "C" || temp[i] == "E"){
      oligo1[i + (Number(ol1Position.value()))] = temp[i];
    }else{
      errors[0] = true;
      return;
    }
    errors[0] = false;
  }
  //CHECKING FOR NEW ERRORS INPUT2 SHOULD BE A LETTER A or U or G or C or E.
  temp = ol2.value().toUpperCase();
  oligo2 = [];
  for(let i = 0; i < ol2.value().length; i ++){
    if(temp[i] == "A" || temp[i] == "U" || temp[i] == "G" || temp[i] == "C" || temp[i] == "E"){
      oligo2[i + (Number(ol2Position.value()))] = temp[i];
    }else{
      errors[1] = true;
      return;
    }
    errors[1] = false;
  }
}

function debugMode(){
  ol1.value("GUCGGACAAGGACGUAGACA");
  ol2.value("GUCGGACAAGGACGUAGACA");
  ol1Position.value("0");
  ol2Position.value("2");
  background(12);
  errorsFinder();
  showFunctionality();
  showMemory();
  calculate();
  myOligo1.show();
  myOligo2.show();
  myRna.show(); // RNA variant 1
  myRna2.show(); // if more than 1 variant , that RNA shows up
}

function saveMyMemorys(){
  if(memory.length > 0){
    let savedMemory = {}; // new  JSON Object
    savedMemory[0] = memory[memoryPosition];
    saveJSON(savedMemory, 'EternaScript.json');
    calculate();
  }
}

function handleFile(file){
  autoMode = false;
  memory = JSON.parse(atob(file.data.substr(13)));
  ol1.value(memory[0].oligo1);
  ol2.value(memory[0].oligo2);
  ol3.value(memory[0].rna);
  ol1Position.value(memory[0].ol1Position);
  ol2Position.value(memory[0].ol2Position);
  calculate();
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