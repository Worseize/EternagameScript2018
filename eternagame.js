let flag = 0 , consoleLog = 0 , memory = [], showMenu = true, autoMode = false, memoryPosition = 0 , scaler = 20, a = 0, kof = 0.6 , buttonWidth = 210 , buttonHeight = 70, oligo1 = [], oligo2 = [] , rna1 = [] , rna2 = [], myOligo1, myOligo2, myRna, myRna2, start = false, errors = [] , correction = 30;

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

  myCanvas = createCanvas(innerWidth - correction, innerHeight - 23*4);
  myCanvas.mouseWheel(changeScaler);
  myButton = new Button(width / 2, height - buttonHeight, buttonWidth, buttonHeight);
  debugMode();
}


function draw(){
  if(start){
    for(let ooo = 0; ooo < 2; ooo++){ // Strange bug , fixed by applying loop 
      background(12);
      calculate();
      errorsFinder(); //Find and shows basic errors( wrong inputs )
      myButton.show();
      if(autoMode === false){
        myOligo1.show();
        myOligo2.show();
        myRna.show(); // RNA variant 1
        myRna2.show(); // if more than 1 variant , that RNA shows up
      }else{
         //autoMode
      }
      showMemory();
      if(showMenu){
        showFunctionality(); // shows all options that exist
      }
      start = false;
      consoleLog++;
      console.log("calculated " + consoleLog + " times" )
    }
  }
}
