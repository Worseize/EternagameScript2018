function createDomElements(){
  //INPUT1
  ol1 = createElement("input","text");
  ol1.style("width", (innerWidth - 150) + "px");
  ol1.style("background-color","green");
  ol1.style("font-family", "'Courier New', Courier, monospace");
  ol1.style("margin-top","5px");
  ol1.input(createAllObjects);
  //SELECT1
  sel1 = createSelect();
  sel1.style("background-color","green");
  sel1.style("margin-top","5px");
  sel1.style("margin-left","5px");
  sel1.option("A");
  sel1.option("B");
  sel1.option("R");
  sel1.option("A + E + B");
  sel1.option("B + E + A");
  sel1.option("R + E + A + E + B");
  sel1.option("A + E + R + E + B");
  sel1.option("A + E + B + E + R");
  sel1.option("B + E + A + E + R");
  sel1.option("B + E + R + E + A");
  sel1.option("R + E + B + E + A");
  sel1.changed(mySelect1Event);
  //NEW LINE
  br = createElement("br");
  //INPUT2
  ol2 = createElement("input","text");
  ol2.style("width", (innerWidth - 150) + "px");
  ol2.style("background-color","green");
  ol2.style("font-family", "'Courier New', Courier, monospace");
  ol2.style("margin-top","5px");
  ol2.input(createAllObjects);
  //SELECT2
  sel2 = createSelect();
  sel2.style("background-color","green");
  sel2.style("margin-top","5px");
  sel2.style("margin-left","5px");
  sel2.option("C");
  sel2.option("R");
  sel2.option("C + E + C");
  sel2.option("R + E + C");
  sel2.option("C + E + R");
  sel2.option("C + E + C + E + R");
  sel2.option("C + E + R + E + C");
  sel2.option("R + E + C + E + C");
  sel2.changed(mySelect2Event);
  //NEW LINE
  br = createElement("br");
  //OUTPUT1 (INPUT1 + INPUT2 UNITED LETTERS)
  ol3 = createElement("input","text");
  ol3.style("background-color","white");
  ol3.style("color","black");
  ol3.style("font-family", "'Courier New', Courier, monospace");
  ol3.style("margin-top","5px");
  ol3.attribute("readOnly","true");
  //NEW LINE
  br = createElement("br");
  //OUTPUT2 (REVERSE INPUT1)
  ol4 = createElement("input","text");
  ol4.style("width", (innerWidth / 2 - 10) + "px");
  ol4.style("background-color","white");
  ol4.style("font-family", "'Courier New', Courier, monospace");
  ol4.style("margin-top","5px");
  ol4.attribute("readOnly","true");
  //OUTPUT3 (REVERSE INPUT2)
  ol5 = createElement("input","text");
  ol5.style("width", (innerWidth / 2 - 10) + "px");
  ol5.style("background-color","white");
  ol5.style("font-family", "'Courier New', Courier, monospace");
  ol5.style("margin-top","5px");
  ol5.attribute("readOnly","true");
  //NEW LINE
  br = createElement("br");
  //OLIGO1 POSITION INPUT
  ol1Position = createElement("input","text");
  ol1Position.style("width", 30 + "px");
  ol1Position.style("background-color","green");
  ol1Position.style("text-align","center");
  ol1Position.style("margin-top","5px");
  ol1Position.input(createAllObjects);
  //OLIGO 2 POSITION INPUT
  ol2Position = createElement("input","text");
  ol2Position.style("width", 30 + "px");
  ol2Position.style("background-color","green");
  ol2Position.style("text-align","center");
  ol2Position.style("margin-left","5px");
  ol2Position.style("margin-top","5px");
  ol2Position.input(createAllObjects);
  //SELECT 3
  sel3 = createSelect();
  sel3.style("background-color","green");
  sel3.style("margin-top","5px");
  sel3.style("margin-left","5px");
  sel3.option("moveOligo1 Y - axis");
  sel3.option("moveOligo2 Y - axis");
  sel3.option("moveOligo3 Y - axis");
  sel3.option("moveOligo4 Y - axis");
  sel3.changed(mySelect3Event);
  //SAVE BUTTON
  saveButton = createButton('save memory to local PC (.JSON)');
  saveButton.mousePressed(saveMyMemorys);
  saveButton.style("background-color","pink");
  saveButton.style("margin-right","5px");
  saveButton.style("margin-top","5px");
  saveButton.style("float","left");
  //LOAD BUTTON
  loadButton = createFileInput(handleFile);
  loadButton.mouseClicked(clearFileName);
  loadButton.style("background-color","green");
  loadButton.style("id","files");
  loadButton.style("name","files[]");
  loadButton.style("multiple");
  loadButton.style("margin-right","5px");
  loadButton.style("margin-top","5px");
  loadButton.style("float","right");
  //TEXT
  mySpan = createSpan("load local (.JSON) file");
  mySpan.style("margin-top","5px");
  mySpan.style("float","right");

  //INPUT3 END POSITION
  ol6End = createElement("input","text");
  ol6End.style("width", 30 + "px");
  ol6End.style("background-color","green");
  ol6End.style("text-align","center");
  ol6End.style("margin-right","5px");
  ol6End.style("margin-top","5px");
  ol6End.value(12);
  ol6End.style("float","right");
  ol6End.input(createAllObjects);
  //INPUT3 AMOUNT OF BASES IN LOOP
  ol6Loop = createElement("input","text");
  ol6Loop.style("width", 30 + "px");
  ol6Loop.style("background-color","green");
  ol6Loop.style("text-align","center");
  ol6Loop.style("margin-top","5px");
  ol6Loop.style("margin-right","5px");
  ol6Loop.value(4);
  ol6Loop.style("float","right");
  ol6Loop.input(createAllObjects);
  //INPUT3 START POSITION
  ol6Start = createElement("input","text");
  ol6Start.style("width", 30 + "px");
  ol6Start.style("background-color","green");
  ol6Start.style("text-align","center");
  ol6Start.style("margin-top","5px");
  ol6Start.style("margin-right","5px");
  ol6Start.value(0);
  ol6Start.style("float","right");
  ol6Start.input(createAllObjects);
  //NEW LINE
  br = createElement("br");
  //OLIGO3 INPUT
  ol6 = createElement("input","text");
  ol6.style("width", (innerWidth - 150) + "px");
  ol6.style("background-color","green");
  ol6.style("font-family", "'Courier New', Courier, monospace");
  ol6.style("margin-top","5px");
  ol6.input(createAllObjects);
  //SELECT4
  sel4 = createSelect();
  sel4.style("background-color","green");
  sel4.style("margin-top","5px");
  sel4.style("margin-left","5px");
  sel4.option("A");
  sel4.option("B");
  sel4.option("C");
  sel4.option("R");
  sel4.option("A + E + B");
  sel4.option("B + E + A");
  sel4.option("C + E + C");
  sel4.option("C + E + R");
  sel4.option("R + E + C");
  sel4.option("A + E + B + E + R");
  sel4.option("A + E + R + E + B");
  sel4.option("B + E + A + E + R");
  sel4.option("B + E + R + E + A");
  sel4.option("C + E + C + E + R");
  sel4.option("C + E + R + E + C");
  sel4.option("R + E + A + E + B");
  sel4.option("R + E + B + E + A");
  sel4.option("R + E + C + E + C");
  sel4.changed(mySelect4Event);

  engineImg = createImg("img/Engine.jpg");
  engineImg.style("width" ,"500px");
  engineImg.style("height" ,"250px");
  engineImg.style("position" ,"absolute");
  engineImg.style("bottom", "75px");
  engineImg.style("right", "10px");
  engineImg.style("z-index", "1");
  engineImg.id("engineImg");
  document.getElementById('engineImg').style.visibility = 'none';
}

function createAllObjects(){
  errorsFinder();
  //CREATE OLIGOS
  myOligo1 = new Oligo(oligo1PY * qwScaler, oligo1);
  myOligo2 = new Oligo(oligo2PY * qwScaler, oligo2);
  //REVERSE ORDER
  ol4.value(reverseString(ol1.value()));
  ol5.value(reverseString(ol2.value()));
  //RNA FOLD 2nd PAGE
  let temp = [];
  for(let i = 0; i < ol6.value().length; i++){
    temp[i] = ol6.value().charAt(i);
  }
  rnaScene2 = new Rna(temp, +ol6Start.value(),+ol6Loop.value(), +ol6End.value(), 0, 1.2 , 0 , 0);
  rnaScene2.calculateGivenStructure();
  findRna();
  start = true;
}