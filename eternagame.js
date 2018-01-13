let flag = 0 , consoleLog = 0 , memory = [], showMenu = true, autoMode = false, memoryPosition = 0 , scaler = 20, a = 0, kof = 0.6 ,
    buttonWidth = 210 , buttonHeight = 70, oligo1 = [], oligo2 = [] , rna1 = [] , rna2 = [], myOligo1, myOligo2, myRna, myRna2, start = false,
    errors = [] , correction = 30;

function setup(){
  ol1 = createElement("input","text");
  ol1.style("width", (innerWidth - correction) + "px");
  ol1.style("background-color","green");
  ol1.value(" USER INPUT (Oligo1) only 'AUGC' characters allowed : ");
  ol1.mouseClicked(clearInput1);
  br = createElement("br");

  ol2 = createElement("input","text");
  ol2.style("width", (innerWidth - correction) + "px");
  ol2.style("background-color","green");
  ol2.value(" USER INPUT (Oligo2) only 'AUGC' characters allowed : ");
  ol2.mouseClicked(clearInput2);
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

  ol2Position = createElement("input","text");
  ol2Position.style("width", 100 + "px");
  ol2Position.style("background-color","green");
  ol2Position.value("Oligo2 position");
  ol2Position.mouseClicked(clearInput4);

  br = createElement("br");

  myCanvas = createCanvas(innerWidth - correction, innerHeight - 23 * 4);
  myCanvas.mouseWheel(changeScaler);
  myButton = new Button(width / 2, height - buttonHeight, buttonWidth, buttonHeight);
  debugMode();
}


function draw(){
  if(start){
    background(12);
    calculate();
    myButton.show();
    if(autoMode === false){
      myOligo1.show();
      myOligo2.show();
      myRna.show(); // RNA variant 1
      myRna2.show(); // if more than 1 variant , that RNA shows up
    }else{
       //autoMode
        ol1Position.value(0);
        ol2Position.value(0);
        memory = [];

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
          memory.push(new Memory(newTemp, 0, +ol2Position.value()));
        }
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
          memory.push(new Memory(newTemp, +ol1Position.value(), 0));
        }

        memory = sortObjectsArray(memory, 'coreLength');
        
        ol1Position.value(memory[memoryPosition].ol1Position);
        ol2Position.value(memory[memoryPosition].ol2Position);
        calculate();

        myOligo1.show();
        myOligo2.show();
        myRna.show(); // RNA variant 1
        myRna2.show(); // if more than 1 variant , that RNA shows up
    }
    showMemory();
    if(showMenu){
      showFunctionality(); // shows all options that exist
    }
    consoleLog++;
    console.log("calculated " + consoleLog + " times" )
    start = false;
  }
}
