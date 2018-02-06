function createDomElements(){
  showPage1DOM = createCheckbox('show Page 1 inputs and outputs', false);
  showPage1DOM.style('position','absolute');
  showPage1DOM.style('top','5px');
  showPage1DOM.style('right','225px');
  showPage1DOM.changed(page1DOMEvent);
  showPage2DOM = createCheckbox('show Page 2 inputs and outputs', false);
  showPage2DOM.style('position','absolute');
  showPage2DOM.style('top','5px');
  showPage2DOM.style('right','5px');
  showPage2DOM.changed(page2DOMEvent);
  tutorialLink = createA('https://www.youtube.com/watch?v=dYDxDWK1A4U&list=PL7CHTefBrBuj3EMghG_MJ-AuV1Hwmrab6', 'Video tutorials last update 5th Feb', '[_parent]');
  tutorialLink.style("position", "absolute");
  tutorialLink.style("margin-top", "5px");
  tutorialLink.style("margin-left", "5px");
  version = createSpan('Script version 1.8.0');
  version.style('position','absolute');
  version.style("top", "5px");
  version.style("left", "325px");

//---------------------------------------------------PAGE 1 ---------------------------------------------------------
  specialBr1 = createElement("br");
  specialBr1.style('display','none');
  //TEXT
  stateAllInputText = createSpan('State All Inputs');
  stateAllInputText.style('display','none');
  //OLIGO1 POSITION INPUT
  ol1Position = createElement("input","text");
  ol1Position.style("width", 30 + "px");
  ol1Position.style("background-color","green");
  ol1Position.style("text-align","center");
  ol1Position.style("margin-top","5px");
  ol1Position.style('display','none');
  ol1Position.input(updatePage1);
  //OLIGO 2 POSITION INPUT
  ol2Position = createElement("input","text");
  ol2Position.style("width", 30 + "px");
  ol2Position.style("background-color","green");
  ol2Position.style("text-align","center");
  ol2Position.style("margin-left","5px");
  ol2Position.style("margin-top","5px");
  ol2Position.style('display','none');
  ol2Position.input(updatePage1);
  //SELECT 3
  sel3 = createSelect();
  sel3.style("background-color","green");
  sel3.style("margin-top","5px");
  sel3.style("margin-left","5px");
  sel3.option("moveOligo1 Y - axis");
  sel3.option("moveOligo2 Y - axis");
  sel3.option("moveOligo3 Y - axis");
  sel3.option("moveOligo4 Y - axis");
  sel3.style('display','none');
  sel3.changed(mySelect3Event);

  //INPUT1
  ol1 = createElement("input","text");
  ol1.style("width", (innerWidth - 150) + "px");
  ol1.style("background-color","green");
  ol1.style("font-family", "'Courier New', Courier, monospace");
  ol1.style("margin-top","5px");
  ol1.style('display','none');
  ol1.input(updatePage1);
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
  sel1.style('display','none');
  sel1.changed(mySelect1Event);
  //INPUT2
  ol2 = createElement("input","text");
  ol2.style("width", (innerWidth - 150) + "px");
  ol2.style("background-color","green");
  ol2.style("font-family", "'Courier New', Courier, monospace");
  ol2.style("margin-top","5px");
  ol2.style('display','none');
  ol2.input(updatePage1);
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
  sel2.style('display','none');
  sel2.changed(mySelect2Event);
  //OUTPUT1 (INPUT1 + INPUT2 UNITED LETTERS)
  ol3 = createElement("input","text");
  ol3.style("background-color","white");
  ol3.style("color","black");
  ol3.style("font-family", "'Courier New', Courier, monospace");
  ol3.style("margin-top","5px");
  ol3.attribute("readOnly","true");
  ol3.style('display','none');
  //LOAD BUTTON
  loadButton = createFileInput(handleFile);
  loadButton.mouseClicked(clearFileName);
  loadButton.style("background-color","green");
  loadButton.style("width","175px");
  loadButton.style("id","files");
  loadButton.style("name","files[]");
  loadButton.style("multiple");
  loadButton.style("margin-right","5px");
  loadButton.style("margin-top","5px");
  loadButton.style("float","right");
  loadButton.style('display','none');
    //SAVE BUTTON
  saveButton = createButton('save');
  saveButton.mousePressed(saveMyMemorys);
  saveButton.style("background-color","pink");
  saveButton.style("margin-right","5px");
  saveButton.style("margin-top","5px");
  saveButton.style("float","right");
  saveButton.style('display','none');
  //NEW LINE
  specialBr2 = createElement("br");
  specialBr2.style('display','none');
  //OUTPUT2 (REVERSE INPUT1)
  ol4 = createElement("input","text");
  ol4.style("width", (innerWidth / 2 - 10) + "px");
  ol4.style("background-color","white");
  ol4.style("font-family", "'Courier New', Courier, monospace");
  ol4.style("margin-top","5px");
  ol4.attribute("readOnly","true");
  ol4.style('display','none');
  //OUTPUT3 (REVERSE INPUT2)
  ol5 = createElement("input","text");
  ol5.style("width", (innerWidth / 2 - 10) + "px");
  ol5.style("background-color","white");
  ol5.style("font-family", "'Courier New', Courier, monospace");
  ol5.style("margin-top","5px");
  ol5.attribute("readOnly","true");
  ol5.style('display','none');
//--------------------------------------------PAGE 2--------------------------------------------
  specialBr3 = createElement("br");
  specialBr3.style('display','none');
  //NEW LINE
  state1InputText = createSpan("State 1 Inputs");
  state1InputText.style('display','none');
  //INPUT3 START POSITION
  ol6Start = createElement("input","text");
  ol6Start.style("width", 30 + "px");
  ol6Start.style("background-color","green");
  ol6Start.style("text-align","center");
  ol6Start.style("margin-top","5px");
  ol6Start.style("margin-right","5px");
  ol6Start.value(2);
  ol6Start.style('display','none');
  ol6Start.input(updatePage2);
  //INPUT3 AMOUNT OF BASES IN LOOP
  ol6Loop = createElement("input","text");
  ol6Loop.style("width", 30 + "px");
  ol6Loop.style("background-color","green");
  ol6Loop.style("text-align","center");
  ol6Loop.style("margin-top","5px");
  ol6Loop.style("margin-right","5px");
  ol6Loop.value(15);
  ol6Loop.style('display','none');

  ol6Loop.input(updatePage2);
  //INPUT3 END POSITION
  ol6End = createElement("input","text");
  ol6End.style("width", 30 + "px");
  ol6End.style("background-color","green");
  ol6End.style("text-align","center");
  ol6End.style("margin-right","5px");
  ol6End.style("margin-top","5px");
  ol6End.value(55);
  ol6End.style('display','none');
  ol6End.input(updatePage2);
  //OLIGO3 INPUT
  ol6 = createElement("input","text");
  ol6.style("width", (innerWidth - 150) + "px");
  ol6.style("background-color","green");
  ol6.style("font-family", "'Courier New', Courier, monospace");
  ol6.style("margin-top","5px");
  ol6.style('display','none');
  ol6.input(updatePage2);
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
  sel4.style('display','none');
  sel4.changed(mySelect4Event);
//------------------------------------------------------PAGE 3-------------------------------------------------
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
function page1DOMEvent(){
  if(this.checked()){
    specialBr1.style('display','block');
    stateAllInputText.style('display','inline');
    ol1Position.style('display','inline');
    ol2Position.style('display','inline');
    sel3.style('display','inline');
    ol1.style('display','inline');
    sel1.style('display','inline');
    ol2.style('display','inline');
    sel2.style('display','inline');
    ol3.style('display','inline');
    loadButton.style('display','inline');
    saveButton.style('display','inline');
    specialBr2.style('display','block');
    ol4.style('display','inline');
    ol5.style('display','inline');
    domYLength += rowsInPage1Dom * 27;
  }else{
    specialBr1.style('display','none');
    stateAllInputText.style('display','none');
    ol1Position.style('display','none');
    ol2Position.style('display','none');
    sel3.style('display','none');
    ol1.style('display','none');
    sel1.style('display','none');
    ol2.style('display','none');
    sel2.style('display','none');
    ol3.style('display','none');
    loadButton.style('display','none');
    saveButton.style('display','none');
    specialBr2.style('display','none');
    ol4.style('display','none');
    ol5.style('display','none');
    domYLength -= rowsInPage1Dom * 27; 
  }
  if(this.checked() || showPage2DOM.checked()){
    myCanvas.style("margin-top","5px");
  }else{
    myCanvas.style("margin-top","25px");
  }
  resizeCanvas(innerWidth - 10, innerHeight - domYLength);
  start = true;
}
function page2DOMEvent(){
  if(this.checked()){
    specialBr3.style('display','block');
    state1InputText.style('display','inline');
    ol6Start.style('display','inline');
    ol6Loop.style('display','inline');
    ol6End.style('display','inline');
    ol6.style('display','inline');
    sel4.style('display','inline');
    myCanvas.style("margin-top","5px");
    domYLength += rowsInPage2Dom * 27; 
  }else{
    specialBr3.style('display','none');
    state1InputText.style('display','none');
    ol6Start.style('display','none');
    ol6Loop.style('display','none');
    ol6End.style('display','none');
    ol6.style('display','none');
    sel4.style('display','none');
    domYLength -= rowsInPage2Dom * 27; 
  }
  if(this.checked() || showPage1DOM.checked()){
    myCanvas.style("margin-top","5px");
  }else{
    myCanvas.style("margin-top","25px");
  }
  resizeCanvas(innerWidth - 10, innerHeight - domYLength);
  start = true;
}
function updateAll(){
  errorsFinder();
  //CREATE OLIGOS
  myOligo1 = new Oligo(oligo1PY * qwScaler, oligo1);
  myOligo2 = new Oligo(oligo2PY * qwScaler, oligo2);
  //REVERSE ORDER
  ol4.value(reverseString(ol1.value()));
  ol5.value(reverseString(ol2.value()));
  findRna();
  //RNA FOLD 2nd PAGE
  let temp = [];
  for(let i = 0; i < ol6.value().length; i++){
    temp[i] = ol6.value().charAt(i);
  }
  rnaScene2 = new Rna(temp, +ol6Start.value(),+ol6Loop.value(), +ol6End.value(), 0, 1.2 , width / 3 , 0);
  start = true;
}
function updatePage1(){
  errorsFinder();
  //CREATE OLIGOS
  myOligo1 = new Oligo(oligo1PY * qwScaler, oligo1);
  myOligo2 = new Oligo(oligo2PY * qwScaler, oligo2);
  //REVERSE ORDER
  ol4.value(reverseString(ol1.value()));
  ol5.value(reverseString(ol2.value()));
  findRna();
  start = true;
}
function updatePage2(){
  //CREATE 2D RNA
  let temp = [];
  for(let i = 0; i < ol6.value().length; i++){
    temp[i] = ol6.value().charAt(i);
  }
  rnaScene2 = new Rna(temp, +ol6Start.value(),+ol6Loop.value(), +ol6End.value(), 0, 1.2 , width / 3 , 0);
  start = true;
}