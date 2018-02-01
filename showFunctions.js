function showHelpMenu(){
  background(12); 
  fill(155, 155, 0);
  text(" Z | X => change page : BACKWARD | FORWARD", 0, scaler * 1.25);
  text(" Q | W => move oligo location ( Y - axis ) : UP | DOWN" , 0, scaler * 2.25);
  text(" mouse wheel -/+' => scale canvas elements : DOWN | UP" , 0, scaler * 3.25);
  text(" B | T => scale canvas elements : DOWN | UP" , 0, scaler * 4.25);
  text(" SPACE => change mode : AUTO | MANUAL", 0, scaler * 5.25);
  push();
  translate(0,scaler);
  fill(155, 155, 255);
  text(" In manual mode: ", 0, scaler * 6.25);
  text(" leftClick + Shift on letter to change it A => U => G => C => E => A" , scaler, scaler * 7.25);
  text(" leftClick + Ctrl on letter to add 'E'" , scaler, scaler * 8.25);
  text(" leftClick + Alt on letter to remove it" , scaler, scaler * 9.25);
  text(" R | Y => move Oligo_1 : LEFT | RIGHT", scaler, scaler * 10.25);
  text(" F | H => move Oligo_2 : LEFT | RIGHT", scaler, scaler * 11.25);
  for(let i = 0; i < 5; i++){
    text("*", scaler / 2, scaler / 4 + 7.25 * scaler + (scaler * i));
  }
  fill(0, 155, 255);
  text(" In auto mode: ", 0, scaler * 13.25);
  text("*", scaler / 2, scaler / 4 + 14.25 * scaler);
  text(" V | N => change Memory position HiGHER | LOWER", scaler, scaler * 14.25);
  fill(0, 255, 0);
  text("greenArea ==> INPUT", scaler, scaler * 16.25);
  fill(255, 255, 255);
  text("whiteArea ==> OUTPUT", scaler, scaler * 17.25);
  pop();
}

function showMemory(){
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
}

function showPage(){
  fill(150, 255, 50);
  if(page === 0){
    rect(width / 2, height - scaler * 1.5 , scaler * 5.25, scaler * 1.25);
    rect(width * 0.7, height - scaler * 1.5 , scaler * 16, scaler * 1.25);
    fill(0);
    text(" Help Menu", width / 2, height - scaler * 0.5);
    text(" 'ESQ' => go to State all showPage", width * 0.7, height - scaler * 0.5);
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
    text(" 'ESQ' => go to help menu page", width * 0.7, height - scaler * 0.5);
  }
}

