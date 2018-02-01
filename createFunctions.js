function createDomElements(){
  //OLIGO 1 INPUT
  ol1 = createElement("input","text");
  ol1.style("width", (innerWidth - 150) + "px");
  ol1.style("background-color","green");
  ol1.style("font-family", "'Courier New', Courier, monospace");
  ol1.style("margin-top","5px");
  ol1.input(calculate);
  //SELECT 1
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
  sel1.changed(mySelect1Event);
  //NEW LINE
  br = createElement("br");
  //OLIGO 2 INPUT
  ol2 = createElement("input","text");
  ol2.style("width", (innerWidth - 150) + "px");
  ol2.style("background-color","green");
  ol2.style("font-family", "'Courier New', Courier, monospace");
  ol2.style("margin-top","5px");
  ol2.input(calculate);
  //SELECT 2
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
  sel2.changed(mySelect2Event);
  //NEW LINE
  br = createElement("br");
  //OUTPUT
  ol3 = createElement("input","text");
  ol3.value(" OUTPUT (calculated RNA sequence) : ");
  ol3.style("background-color","white");
  ol3.style("color","black");
  ol3.style("font-family", "'Courier New', Courier, monospace");
  ol3.style("margin-top","5px");
  ol3.attribute("readOnly","true");
  //NEW LINE
  br = createElement("br");

  ol4 = createElement("input","text");
  ol4.style("width", (innerWidth / 2 - 10) + "px");
  ol4.style("background-color","white");
  ol4.style("font-family", "'Courier New', Courier, monospace");
  ol4.style("margin-top","5px");
  ol4.attribute("readOnly","true");

  ol5 = createElement("input","text");
  ol5.style("width", (innerWidth / 2 - 10) + "px");
  ol5.style("background-color","white");
  ol5.style("font-family", "'Courier New', Courier, monospace");
  ol5.style("margin-top","5px");
  ol5.attribute("readOnly","true");

  br = createElement("br");
  //OLIGO 1 POSITION INPUT
  ol1Position = createElement("input","text");
  ol1Position.style("width", 30 + "px");
  ol1Position.style("background-color","green");
  ol1Position.style("text-align","center");
  ol1Position.style("margin-top","5px");
  ol1Position.value("Oligo1 position");
  ol1Position.input(calculate);
  //OLIGO 2 POSITION INPUT
  ol2Position = createElement("input","text");
  ol2Position.style("width", 30 + "px");
  ol2Position.style("background-color","green");
  ol2Position.style("text-align","center");
  ol2Position.style("margin-left","5px");
  ol2Position.style("margin-top","5px");
  ol2Position.value("Oligo2 position");
  ol2Position.input(calculate);
  //SELECT 3
  sel3 = createSelect();
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
  saveButton.style("margin-right","5px");
  saveButton.style("margin-top","3px");
  saveButton.style("float","left");
  //TEXT
  mySpan = createSpan("load local (.JSON) file");
  mySpan.style("margin-left","5px");
  //LOAD BUTTON
  loadButton = createFileInput(handleFile);
  loadButton.mouseClicked(clearFileName);
  loadButton.style("id","files");
  loadButton.style("name","files[]");
  loadButton.style("multiple");
  loadButton.style("margin-left","5px");
  loadButton.style("margin-top","3px");
  loadButton.style("float","center");
}

