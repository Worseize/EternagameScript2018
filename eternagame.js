let qwSelector = 0, oligo1PY = 1, oligo2PY = 2, oligo3PY = 3, oligo4PY = 4 , qwScaler = 1, flag = true, consoleLog = 0 , memory = [], showMenu = true, autoMode = false, memoryPosition = 0 , scaler = 20, oligo1 = [], oligo2 = [] ,
    rna1 = [] , rna2 = [], myOligo1, myOligo2, myRna, myRna2, start = false, errors = [];
    

function setup(){
  ol1 = createElement("input","text");
  ol1.style("width", (innerWidth - 150) + "px");
  ol1.style("background-color","green");
  ol1.style("font-family", "'Courier New', Courier, monospace");
  ol1.style("margin-top","5px");
  ol1.value(" USER INPUT (Oligo1) only 'AUGC' characters allowed : ");
  ol1.mouseClicked(clearInput1);
  ol1.input(calculate);

  sel1 = createSelect();
  sel1.style("margin-top","5px");
  sel1.style("margin-left","5px");
  sel1.option("A");
  sel1.option("B");
  sel1.option("C");
  sel1.option("R");
  sel1.option("A + E + B");
  sel1.option("B + E + A");
  sel1.option("R + E + A + E + B");
  sel1.option("A + E + R + E + B");
  sel1.option("A + E + B + E + R");
  sel1.option("B + E + A + E + R");
  sel1.option("B + E + R + E + A");
  sel1.option("R + E + B + E + A");
  sel1.changed(mySelectEvent);

  br = createElement("br");

  ol2 = createElement("input","text");
  ol2.style("width", (innerWidth - 150) + "px");
  ol2.style("background-color","green");
  ol2.style("font-family", "'Courier New', Courier, monospace");
  ol2.style("margin-top","5px");
  ol2.value(" USER INPUT (Oligo2) only 'AUGC' characters allowed : ");
  ol2.mouseClicked(clearInput2);
  ol2.input(calculate);

  sel2 = createSelect();
  sel2.style("margin-top","5px");
  sel2.style("margin-left","5px");
  sel2.option("A");
  sel2.option("B");
  sel2.option("C");
  sel2.option("R");
  sel2.option("C + E + C");
  sel2.option("R + E + C");
  sel2.option("C + E + R");
  sel2.option("C + E + C + E + R");
  sel2.option("C + E + R + E + C");
  sel2.option("R + E + C + E + C");
  sel2.changed(mySelectEvent);

  br = createElement("br");

  ol3 = createElement("input","text");
  ol3.value(" OUTPUT (calculated RNA sequence) : ");
  ol3.style("background-color","white");
  ol3.style("color","black");
  ol3.style("font-family", "'Courier New', Courier, monospace");
  ol3.style("margin-top","5px");
  ol3.attribute("readOnly","true");

  sel3 = createSelect();
  sel3.style("margin-top","5px");
  sel3.style("margin-left","5px");
  sel3.option("moveOligo1");
  sel3.option("moveOligo2");
  sel3.option("moveOligo3");
  sel3.option("moveOligo4");
  sel3.changed(mySelectEvent);

  br = createElement("br");

  ol1Position = createElement("input","text");
  ol1Position.style("width", 30 + "px");
  ol1Position.style("background-color","green");
  ol1Position.style("text-align","center");
  ol1Position.style("margin-top","5px");
  ol1Position.value("Oligo1 position");
  ol1Position.mouseClicked(clearInput3);
  ol1Position.input(calculate);

  ol2Position = createElement("input","text");
  ol2Position.style("width", 30 + "px");
  ol2Position.style("background-color","green");
  ol2Position.style("text-align","center");
  ol2Position.style("margin-left","5px");
  ol2Position.style("margin-top","5px");
  ol2Position.value("Oligo2 position");
  ol2Position.mouseClicked(clearInput4);
  ol2Position.input(calculate);

  saveButton = createButton('save memory to local PC (.JSON)');
  saveButton.mousePressed(saveMyMemorys);
  saveButton.style("margin-right","5px");
  saveButton.style("margin-top","3px");
  saveButton.style("float","right");

  mySpan = createSpan("load local (.JSON) file");
  mySpan.style("margin-left","5px");

  loadButton = createFileInput(handleFile);
  loadButton.style("id","files");
  loadButton.style("name","files[]");
  loadButton.style("multiple");
  loadButton.style("margin-left","5px");
  loadButton.style("margin-top","3px");
  loadButton.style("float","center");

  br = createElement("br");

  myCanvas = createCanvas(innerWidth - 10, innerHeight - 120);
  myCanvas.mouseWheel(changeScaler);
  myCanvas.style("margin-top","5px");
  myCanvas.style("id","unFocusMe");
  debugMode();
}


function draw(){
  if(start){
    if(autoMode === false){
      ol1Position.removeAttribute("readOnly");
      ol2Position.removeAttribute("readOnly");
    }else{
      ol1Position.attribute("readOnly", "true");
      ol2Position.attribute("readOnly", "true");
      //Clear calculations
      ol1Position.value(0);
      ol2Position.value(0);
      memory = [];
      //move second oligo from 0 to oligo1 length on each step calculate RNA and put it into memory array
      for(let i = 0; i < ol1.value().length; i++){
        let newTemp = 0;
        ol2Position.value(i);
        calculate();
        for(let j = 0; j < ol3.value().length; j++){
          if(ol3.value().charAt(j) === "A" || ol3.value().charAt(j) === "U" || ol3.value().charAt(j) === "C" || ol3.value().charAt(j) === "G"){
            newTemp++;
          }else{
          }
        }
        memory.push(new Memory(newTemp, 0, +ol2Position.value(), ol1.value(), ol2.value(), ol3.value() , i));
      }
      //move first oligo from 0 to oligo2 length on each step calculate RNA and put it into memory array
      ol2Position.value(0);
      for(let i = 1 ; i < ol2.value().length; i++){
        let newTemp = 0;
        ol1Position.value(i);
        calculate();
        for(let j = 0; j < ol3.value().length; j++){
          if(ol3.value().charAt(j) === "A" || ol3.value().charAt(j) === "U" || ol3.value().charAt(j) === "C" || ol3.value().charAt(j) === "G"){
            newTemp++;
          }
        }
        memory.push(new Memory(newTemp, +ol1Position.value(), 0, ol1.value(), ol2.value(), ol3.value(), i + ol1.value().length - 1));
      }
      //sort memory array by coreLength (more AUGC mean less memory array index)
      memory = sortObjectsArray(memory, 'unitedLetters');
      //put memory position pointer to 0 once after calculations
      if(flag === true){
        memoryPosition = 0;
        flag = false;
      }
      //draw best solution
      ol1Position.value(memory[memoryPosition].ol1Position);
      ol2Position.value(memory[memoryPosition].ol2Position);
    }
    background(12);
    calculate();
    myOligo1.show();
    myOligo2.show();
    myRna.show(); // RNA variant 1
    myRna2.show(); // if more than 1 variant , that RNA shows up
    showMemory();
    if(showMenu){
      showFunctionality(); // shows all options that exist
    }
    start = false;
    errorsFinder();
  }
}
