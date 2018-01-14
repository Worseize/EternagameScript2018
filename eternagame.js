let flag = true, consoleLog = 0 , memory = [], showMenu = true, autoMode = false, memoryPosition = 0 , scaler = 20, a = 0, kof = 0.6 ,
    buttonWidth = 210 , buttonHeight = 70, oligo1 = [], oligo2 = [] , rna1 = [] , rna2 = [], myOligo1, myOligo2, myRna, myRna2, start = false,
    errors = [] , correction = 30;

function setup(){
  ol1 = createElement("input","text");
  ol1.style("width", (innerWidth - correction * 3) + "px");
  ol1.style("background-color","green");
  ol1.value(" USER INPUT (Oligo1) only 'AUGC' characters allowed : ");
  ol1.mouseClicked(clearInput1);
  ol1.input(calculate);
  br = createElement("br");

  ol2 = createElement("input","text");
  ol2.style("width", (innerWidth - correction * 3) + "px");
  ol2.style("background-color","green");
  ol2.value(" USER INPUT (Oligo2) only 'AUGC' characters allowed : ");
  ol2.mouseClicked(clearInput2);
  ol2.input(calculate);
  br = createElement("br");

  ol3 = createElement("input","text");
  ol3.value(" OUTPUT (calculated RNA sequence) : ");
  ol3.style("background-color","white");
  ol3.style("color","black");
  ol3.attribute("readOnly","true");
  br = createElement("br");

  ol1Position = createElement("input","text");
  ol1Position.style("width", 100 + "px");
  ol1Position.style("background-color","green");
  ol1Position.value("Oligo1 position");
  ol1Position.mouseClicked(clearInput3);
  ol1Position.input(calculate);

  ol2Position = createElement("input","text");
  ol2Position.style("width", 100 + "px");
  ol2Position.style("background-color","green");
  ol2Position.value("Oligo2 position");
  ol2Position.mouseClicked(clearInput4);
  ol2Position.input(calculate);

  br = createElement("br");

  myCanvas = createCanvas(innerWidth - correction, innerHeight - 100);
  myCanvas.mouseWheel(changeScaler);
  debugMode();

  saveButton = createButton('save');
  saveButton.position(myCanvas.width - scaler * 4.5 , myCanvas.height + scaler * 2.5);
  saveButton.mousePressed(saveMyMemorys);

  sel1 = createSelect();
  sel1.option("A");
  sel1.option("B");
  sel1.option("C");
  sel1.option("R");
  sel1.changed(mySelectEvent);
  sel1.position(myCanvas.width - scaler * 2 , 0);

  sel2 = createSelect();
  sel2.option("A");
  sel2.option("B");
  sel2.option("C");
  sel2.option("R");
  sel2.changed(mySelectEvent);
  sel2.position(myCanvas.width - scaler * 2 , scaler * 1.2);
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
      memory = sortObjectsArray(memory, 'verifiedLetters');
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
    //show in console how many times sequence was calculated
    consoleLog++;
    console.log("calculated " + consoleLog + " times" );
    start = false;
    errorsFinder();
  }
}
