new p5();



//VARIABLES
let page = 2, qwSelector = 1, oligo1PY = 1, oligo2PY = 2, oligo3PY = 3, oligo4PY = 4, qwScaler = 1, memoryPosition = 0, scaler = 20,
    domYLength = 200;
//BOOLEANS
let start = false, autoMode = false, flag = true;
//ARRAYS
let memory = [], oligo1 = [], oligo2 = [], rna1 = [], rna2 = [], errors = [];
//Undefined
let myOligo1, myOligo2, myRna, myRna2, rnaScene2, oldMouseX, oldMouseY;

function preload(){
  
}

function setup(){
  createDomElements();
  myCanvas = createCanvas(innerWidth - 10, innerHeight - domYLength);
  myCanvas.mouseWheel(changeScaler);
  myCanvas.style("margin-top","5px");
  setupMode();
}


function draw(){
  if(start){ //UPDATE DATA
    textSize(scaler);
    background(12);
//--------------------------------------------------------MANUAL PAGE (HELP MENU)---------------------------------------------
    if(page === 0){
      showHelpMenu();
//--------------------------------------------------------PAGE 1 (STATE ALL)--------------------------------------------------
    }else if(page === 1){
      if(autoMode === false){
        ol1Position.removeAttribute("readOnly");
        ol2Position.removeAttribute("readOnly");
        createAllObjects();
        memory = [];
        let newTemp = findUnitedLetters();
        memory[0] = new Memory(newTemp, +ol1Position.value(), +ol2Position.value(), ol1.value(), ol2.value(), ol3.value(), 0);
        memoryPosition = 0;
      }else{
        ol1Position.attribute("readOnly", "true");
        ol2Position.attribute("readOnly", "true");
        //Clear calculations
        ol1Position.value(0);
        ol2Position.value(0);
        memory = [];
        //move second oligo from 0 to oligo1 length on each step calculate RNA and put it into memory array
        for(let i = 0; i < ol1.value().length; i++){
          ol2Position.value(i);
          createAllObjects();
          let newTemp = findUnitedLetters();
          memory.push(new Memory(newTemp, 0, +ol2Position.value(), ol1.value(), ol2.value(), ol3.value() , i));
        }
        //move first oligo from 0 to oligo2 length on each step calculate RNA and put it into memory array
        ol2Position.value(0);
        for(let i = 1 ; i < ol2.value().length; i++){
          ol1Position.value(i);
          createAllObjects();
          let newTemp = findUnitedLetters();
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
      createAllObjects();
      myOligo1.show();
      myOligo2.show();
      myRna.show(); // RNA variant 1
      myRna2.show(); // if more than 1 variant , that RNA shows up
      showMemory();
      errorsFinder();
      start = false;
//-------------------------------------------------PAGE 2 (STATE 1)-----------------------------------------------------------
    }else if(page === 2){
      rnaScene2.calculateHairpinStemPairs();
      rnaScene2.showGivenStructure();
      start = false;
//-------------------------------------------------PAGE 3 (STATE 2) ----------------------------------------------------------
    }else if(page === 3){
      start = false;
    }
    showPage();
  }
}
