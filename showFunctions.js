function showFunctionality(){
  push();
  translate(scaler / 4, -scaler / 4);
  textSize(scaler);
  fill(150, 255, 50);
  rect(0, height - scaler * 11 , scaler * 33, scaler * 11);
  fill(0);
  text(" 'ESQ'  => show/hide help menu", 0, height - scaler * 10);
  text(" '`'  => load debug mode oligos and calculate RNA once" , 0, height - scaler * 9);
  text(" 'R' <= move Oligo_1 => 'Y' ", 0, height - scaler * 8);
  text(" 'F' <= move Oligo_2 => 'H' ", 0, height - scaler * 7);
  text(" 'V' <= move Memory position => 'N' ", 0, height - scaler * 6);
  text(" 'mouse wheel -/+' => scale canvas elements DOWN/UP" , 0, height - scaler * 5);
  text(" DOWN <= 'B'  scale canvas elements 'T' => UP" , 0, height - scaler * 4);
  text(" 'SPACE'  => change automode state", 0, height - scaler * 3); 
  text(" leftClick + Shift on letter to change it A => U => G => C => E => A" , 0, height  - scaler * 2);
  text(" leftClick + Ctrl on letter to add 'E'" , 0, height  - scaler );
  text(" leftClick + Alt on letter to remove it" , 0, height);
  pop();
}

function showMemory(){
  textSize(scaler);
  fill(255);
  text("Memory position", width - scaler * 8, height - scaler * 2.5);
  if(memory.length > 0){
    text(memoryPosition + "/" + (memory.length - 1) , width - scaler * 7, height - scaler);
  }else{
    text("0/0", width - scaler * 7, height - scaler);
  }
  fill(255);
  if(autoMode){
    text("Auto", width / 2, height / 2 - scaler * 3);
  }else{
    text("Manual", width / 2 - scaler, height / 2 - scaler * 3 );
  }
}
function showUnitedLetters(){
  fill(255);
  if(autoMode){
    text("United letters : " + memory[memoryPosition].unitedLetters , width - scaler * 8, height - scaler * 4.5);
  }else{
    let myNewTemp = 0;
    for(let j = 0; j < ol3.value().length; j++){
      if(ol3.value().charAt(j) === "A" || ol3.value().charAt(j) === "U" || ol3.value().charAt(j) === "C" || ol3.value().charAt(j) === "G"){
        myNewTemp++;
      }
    }
    text("United letters : " + myNewTemp , width - scaler * 8, height - scaler * 4.5);
  }
}