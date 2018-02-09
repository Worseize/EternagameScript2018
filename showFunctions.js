function showHelpMenu(){
  background(12); 
  fill(155, 155, 0);
  text(" Z | X => change page : BACKWARD | FORWARD", 0, scaler * 1.25);
  text(" Q | W => move oligo location ( Y - axis ) : UP | DOWN" , 0, scaler * 2.25);
  text(" mouse wheel -/+' => scale canvas elements : DOWN | UP" , 0, scaler * 3.25);
  text(" B | T => scale canvas elements : DOWN | UP" , 0, scaler * 4.25);
  text(" SPACE => change mode : AUTO | MANUAL", 0, scaler * 5.25);
  push();
  translate(0, scaler);
  fill(155, 155, 255);
  text(" In manual mode: ", 0, scaler * 6.25);
  text(" leftClick + Shift on letter to change it A => U => G => C => E => A" , scaler, scaler * 7.25);
  text(" leftClick + Ctrl on letter to add 'E'" , scaler, scaler * 8.25);
  text(" leftClick + Alt on letter to remove it" , scaler, scaler * 9.25);
  text(" SHIFT + Q | E => move oligo1 to LEFT | RIGHT", scaler, scaler * 10.25);
  text(" SHIFT + A | D => move oligo1 to LEFT | RIGHT", scaler, scaler * 11.25);
  for(let i = 0; i < 5; i++){
    text("*", scaler / 2, scaler / 4 + 7.25 * scaler + (scaler * i));
  }
  fill(0, 155, 255);
  text(" In auto mode: ", 0, scaler * 13.25);
  text("*", scaler / 2, scaler / 4 + 14.25 * scaler);
  text(" V | N => change Memory position HiGHER | LOWER", scaler, scaler * 14.25);
  fill(0, 255, 0);
  text("greenArea ==> INPUT", scaler, scaler * 16.25);
  fill(255);
  text("whiteArea ==> OUTPUT", scaler, scaler * 17.25);

  text("*", scaler / 2, scaler / 4 + 20.25 * scaler);
  text('SUPPORT ISSUE IN FIREFOX' , scaler, scaler * 20.25);
  text("*", scaler / 2, scaler / 4 + 21.25 * scaler);
  text("*", scaler / 2, scaler / 4 + 22.25 * scaler);
  text("*", scaler / 2 + 5, scaler / 4 + 21.25 * scaler);
  text("*", scaler / 2 + 5, scaler / 4 + 22.25 * scaler);
  text(' At the moment supports only in google chrome browser and' , scaler, scaler * 21.25);
  text(' CSS , DOM objects could be overfit in firefox but canvas script should work' , scaler, scaler * 22.25);
  pop();
}

function showMemory(){
  if(page === 1){
    fill(150, 255, 50);
    rect(scaler/4, height - scaler * 3.5 , scaler * 10 + 4 * log(memory.length), scaler * 3.25);
    fill(0);
    if(memory.length > 0){
      text("Memory position : " + (memoryPosition + 1) + "/" + memory.length  , scaler / 2, height - scaler/2);
    }else{
      text("Memory position : 1/1", scaler / 2 , height - scaler/2);
    }
    if(autoMode){
      text("United letters : " + memory[memoryPosition].unitedLetters , scaler / 2, height - scaler * 1.5);
    }else{
      let myNewTemp = 0;
      for(let j = 0; j < ol3.value().length; j++){
        if(ol3.value().charAt(j) === "A" || ol3.value().charAt(j) === "U" || ol3.value().charAt(j) === "C" || ol3.value().charAt(j) === "G"){
          myNewTemp++;
        }
      }
      text("United letters : " + myNewTemp , scaler / 2, height - scaler * 1.5);
    }
    if(autoMode){
      text("Mode : auto", scaler / 2, height - scaler * 2.5);
    }else{
      text("Mode : manual", scaler / 2, height - scaler * 2.5);
    }
  }else if(page === 2){
    //SHOW PAIRS
    fill(150, 255, 50);
    rect(5, height - scaler * 3.5 , 10 + scaler * 7,  scaler * 3.25 );
    fill(0, 0, 0);
    text("Pairs: " + rnaScene2.pairs, 10, height - scaler / 2 );
    //SHOW ARRAY LENGTH
    text("Array.length: " + rnaScene2.ArrayOfNucleos.length , 10, height - 1.5 * scaler);
    //SHOW MODE
    if(autoModePage2){
      fill(255, 0, 0);
      text("Auto", 10, height - 2.5 * scaler);
      fill(255);
      text('Calculated ' + memoryConsumed + ' variations', 5, height / 2);
    }else{
      fill(0, 255, 0);
      text("Manual", 10, height - 2.5 * scaler);
    }
  }
}

function showPage(){
  fill(150, 255, 50);
  if(page === 0){
    rect(width / 2, height - scaler * 1.5 , scaler * 5.25, scaler * 1.25);
    rect(width * 0.7, height - scaler * 1.5 , scaler * 16, scaler * 1.25);
    fill(0);
    text(" Help Menu", width / 2, height - scaler * 0.5);
    text(" 'ESC' => go to State all showPage", width * 0.7, height - scaler * 0.5);
  }else if(page === 1){
    rect(width / 2, height - scaler * 1.5 , scaler * 4.5, scaler * 1.25);
    fill(0);
    text(" State All ", width / 2, height - scaler * 0.5);
  }else if(page === 2){
    rect(width / 2, height - scaler * 1.5 , scaler * 4, scaler * 1.25);
    fill(0);
    text(" State 1", width / 2, height - scaler * 0.5);
  }else if(page === 3){
    rect(width / 2, height - scaler * 1.5 , scaler * 4, scaler * 1.25);
    fill(0);
    text(" State 2", width / 2, height - scaler * 0.5);
  }
  if(page !== 0){
    fill(150, 255, 50);
    rect(width * 0.7, height - scaler * 1.5 , scaler * 15, scaler * 1.25);
    fill(0);
    text(" 'ESC' => go to help menu page", width * 0.7, height - scaler * 0.5);
  }
}

function showObjects(){
  background(12);
  if(page === 0){
    showHelpMenu();
    readmeLink.style('display','inline');
    readmeLink.style("top", (domYLength + 50) + 'px');
  }else if(page === 1){
    myOligo1.show();
    myOligo2.show();
    myRna.show();
    myRna2.show();
    showMemory();
  }else if(page === 2){
    rnaScene2.showGivenStructure();
    showMemory();
  }else if(page === 3){

  }
  if(page !== 0){
    readmeLink.style('display','none');
  }
  showPage();
}