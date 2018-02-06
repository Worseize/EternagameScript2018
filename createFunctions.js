function createDomElements(){
  // https://youtu.be/wH3tjX2xfdg?t=58m23s selectAll tag, class , id 
  showPage1DOM = createCheckbox('show Page 1 inputs and outputs', false);
  showPage1DOM.addClass('staticFirstLine');
  showPage1DOM.style('right','225px');
  showPage1DOM.changed(page1DOMEvent);

  showPage2DOM = createCheckbox('show Page 2 inputs and outputs', false);
  showPage2DOM.addClass('staticFirstLine');
  showPage2DOM.style('right','5px');
  showPage2DOM.changed(page2DOMEvent);

  tutorialLink = createA('https://www.youtube.com/watch?v=dYDxDWK1A4U&list=PL7CHTefBrBuj3EMghG_MJ-AuV1Hwmrab6', 'Video tutorials last update 05.02.2018', '[_parent]');
  tutorialLink.style("left", "5px");
  tutorialLink.addClass('staticFirstLine');

  version = createSpan('Script version 1.8.1 last update 07.02.2018');
  version.style("left", "325px");
  version.addClass('staticFirstLine');

  //CSS class
  firstLineEls = selectAll('.staticFirstLine');
  for(let i = 0; i < firstLineEls.length; i++){
    firstLineEls[i].style('position','absolute');
    firstLineEls[i].style('top','5px');
  }
//---------------------------------------------------PAGE 1 ---------------------------------------------------------
  specialBr1 = createElement("br");
  specialBr1.addClass('page1ShowBr');
  //TEXT
  stateAllInputText = createSpan('State All Inputs');
  stateAllInputText.addClass('page1Show');
  //OLIGO1 POSITION INPUT
  ol1Position = createElement("input","text");
  ol1Position.style("width", 30 + "px");
  ol1Position.style("background-color","green");
  ol1Position.style("text-align","center");
  ol1Position.style("margin-top","5px");
  ol1Position.addClass('page1Show');
  ol1Position.input(updatePage1);
  //OLIGO 2 POSITION INPUT
  ol2Position = createElement("input","text");
  ol2Position.style("width", 30 + "px");
  ol2Position.style("background-color","green");
  ol2Position.style("text-align","center");
  ol2Position.style("margin-left","5px");
  ol2Position.style("margin-top","5px");
  ol2Position.addClass('page1Show');
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
  sel3.addClass('page1Show');
  sel3.changed(mySelect3Event);

  //INPUT1
  ol1 = createElement("input","text");
  ol1.style("width", (innerWidth - 150) + "px");
  ol1.style("background-color","green");
  ol1.style("font-family", "'Courier New', Courier, monospace");
  ol1.style("margin-top","5px");
  ol1.addClass('page1Show');
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
  sel1.addClass('page1Show');
  sel1.changed(mySelect1Event);
  //INPUT2
  ol2 = createElement("input","text");
  ol2.style("width", (innerWidth - 150) + "px");
  ol2.style("background-color","green");
  ol2.style("font-family", "'Courier New', Courier, monospace");
  ol2.style("margin-top","5px");
  ol2.addClass('page1Show');
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
  sel2.addClass('page1Show');
  sel2.changed(mySelect2Event);
  //OUTPUT1 (INPUT1 + INPUT2 UNITED LETTERS)
  ol3 = createElement("input","text");
  ol3.style("background-color","white");
  ol3.style("color","black");
  ol3.style("font-family", "'Courier New', Courier, monospace");
  ol3.style("margin-top","5px");
  ol3.attribute("readOnly","true");
  ol3.addClass('page1Show');
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
  loadButton.addClass('page1Show');
  //SAVE BUTTON
  saveButton = createButton('save');
  saveButton.mousePressed(saveMyMemorys);
  saveButton.style("background-color","pink");
  saveButton.style("margin-right","5px");
  saveButton.style("margin-top","5px");
  saveButton.style("float","right");
  saveButton.addClass('page1Show');
  //NEW LINE
  specialBr2 = createElement("br");
  specialBr2.addClass('page1ShowBr');
  //OUTPUT2 (REVERSE INPUT1)
  ol4 = createElement("input","text");
  ol4.style("width", (innerWidth / 2 - 10) + "px");
  ol4.style("background-color","white");
  ol4.style("font-family", "'Courier New', Courier, monospace");
  ol4.style("margin-top","5px");
  ol4.attribute("readOnly","true");
  ol4.addClass('page1Show');
  //OUTPUT3 (REVERSE INPUT2)
  ol5 = createElement("input","text");
  ol5.style("width", (innerWidth / 2 - 10) + "px");
  ol5.style("background-color","white");
  ol5.style("font-family", "'Courier New', Courier, monospace");
  ol5.style("margin-top","5px");
  ol5.attribute("readOnly","true");
  ol5.addClass('page1Show');
//--------------------------------------------PAGE 2--------------------------------------------
  specialBr3 = createElement("br");
  specialBr3.addClass('page2Show');
  //NEW LINE
  state1InputText = createSpan("State 1 Inputs");
  state1InputText.addClass('page2Show');
  //INPUT3 START POSITION
  ol6Start = createElement("input","text");
  ol6Start.style("width", 30 + "px");
  ol6Start.style("background-color","green");
  ol6Start.style("text-align","center");
  ol6Start.style("margin-top","5px");
  ol6Start.style("margin-right","5px");
  ol6Start.addClass('page2Show');
  ol6Start.input(updatePage2);
  //INPUT3 AMOUNT OF BASES IN LOOP
  ol6Loop = createElement("input","text");
  ol6Loop.style("width", 30 + "px");
  ol6Loop.style("background-color","green");
  ol6Loop.style("text-align","center");
  ol6Loop.style("margin-top","5px");
  ol6Loop.style("margin-right","5px");
  ol6Loop.addClass('page2Show');
  ol6Loop.input(updatePage2);
  //INPUT3 END POSITION
  ol6End = createElement("input","text");
  ol6End.style("width", 30 + "px");
  ol6End.style("background-color","green");
  ol6End.style("text-align","center");
  ol6End.style("margin-right","5px");
  ol6End.style("margin-top","5px");
  ol6End.addClass('page2Show');
  ol6End.input(updatePage2);
  //OLIGO3 INPUT
  ol6 = createElement("input","text");
  ol6.style("width", (innerWidth - 150) + "px");
  ol6.style("background-color","green");
  ol6.style("font-family", "'Courier New', Courier, monospace");
  ol6.style("margin-top","5px");
  ol6.addClass('page2Show');
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
  sel4.addClass('page2Show');
  sel4.changed(mySelect4Event);
//------------------------------------------------------PAGE 3-------------------------------------------------

}

//-------------------------Show || Hide page 1 checkBox Event
function page1DOMEvent(){
  if(this.checked()){
    //show
    page1ShowEls = selectAll('.page1Show');
    page1ShowElsBr = selectAll('.page1ShowBr');
    for(let i = 0; i < page1ShowElsBr.length; i++){
      page1ShowElsBr[i].style('display','block');
    }
    for(let i = 0; i < page1ShowEls.length; i++){
      page1ShowEls[i].style('display','inline');
    }
    domYLength += rowsInPage1Dom * 27;
  }else{
    //hide
    page1ShowEls = selectAll('.page1Show');
    page1ShowElsBr = selectAll('.page1ShowBr');
    for(let i = 0; i < page1ShowElsBr.length; i++){
      page1ShowElsBr[i].style('display','none');
    }
    for(let i = 0; i < page1ShowEls.length; i++){
      page1ShowEls[i].style('display','none');
    }
    //change margin-bottom for canvas
    domYLength -= rowsInPage1Dom * 27; 
  }
    //change margin-top for canvas
  if(this.checked() || showPage2DOM.checked()){
    myCanvas.style("margin-top","5px");
  }else{
    myCanvas.style("margin-top","25px");
  }
  resizeCanvas(innerWidth - 10, innerHeight - domYLength);
  //redraw page
  start = true;
}

//-----------------------------Show || Hide page 2 checkBox Event
function page2DOMEvent(){
  if(this.checked()){
    page2ShowEls = selectAll('.page2Show');
    page2ShowElsBr = selectAll('.page2ShowBr');
    for(let i = 0; i < page2ShowElsBr.length; i++){
      page2ShowElsBr[i].style('display','block');
    }
    for(let i = 0; i < page2ShowEls.length; i++){
      page2ShowEls[i].style('display','inline');
    }
    domYLength += rowsInPage2Dom * 27; 
  }else{
    page2ShowEls = selectAll('.page2Show');
    page2ShowElsBr = selectAll('.page2ShowBr');
    for(let i = 0; i < page2ShowElsBr.length; i++){
      page2ShowElsBr[i].style('display','none');
    }
    for(let i = 0; i < page2ShowEls.length; i++){
      page2ShowEls[i].style('display','none');
    }
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

//-------------------------reCreate DOM values 
function config(){
  //-----Page 1 default input 
  ol1.value("GUCGGACAAGGACGUAGACA");
  ol2.value("GGUGGACAGAGAGAUACAUG");
  ol1Position.value("5");
  ol2Position.value("3");
  //-----Page 2 default input 
  ol6.value("GUCGGACAAGGACGUAGACAECAGUCUUGAAUCAGEGUUUGGUAGGUAGUGGUACC");
  ol6Start.value(2);
  ol6Loop.value(15);
  ol6End.value(55);
  //hide page1DOM
  page1ShowEls = selectAll('.page1Show');
  page1ShowElsBr = selectAll('.page1ShowBr');
  for(let i = 0; i < page1ShowElsBr.length; i++){
    page1ShowElsBr[i].style('display','none');
  }
  for(let i = 0; i < page1ShowEls.length; i++){
    page1ShowEls[i].style('display','none');
  }
  //hide page2DOM
  page2ShowEls = selectAll('.page2Show');
  page2ShowElsBr = selectAll('.page2ShowBr');
  for(let i = 0; i < page2ShowElsBr.length; i++){
    page2ShowElsBr[i].style('display','none');
  }
  for(let i = 0; i < page2ShowEls.length; i++){
    page2ShowEls[i].style('display','none');
  }
}
//-------------------------reCreate canvas objects 
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