function showFunctionality(){
  push();
  translate(width - scaler * 33, -scaler / 4);
  textSize(scaler);
  fill(150, 255, 50);
  rect(0, height - scaler * 11 , scaler * 32.75, scaler * 11);
  fill(0);
  text(" 'ESQ'  => show/hide help menu", 0, height - scaler * 10);
  text(" 'R' <= move Oligo_1 => 'Y' ", 0, height - scaler * 9);
  text(" 'F' <= move Oligo_2 => 'H' ", 0, height - scaler * 8);
  text(" 'V' <= move Memory position => 'N' ", 0, height - scaler * 7);
  text(" 'mouse wheel -/+' => scale canvas elements DOWN/UP" , 0, height - scaler * 6);
  text(" DOWN <= 'B'  scale canvas elements 'T' => UP" , 0, height - scaler * 5);
  text(" 'SPACE'  => change automode state", 0, height - scaler * 4); 
  text(" leftClick + Shift on letter to change it A => U => G => C => E => A" , 0, height  - scaler * 3);
  text(" leftClick + Ctrl on letter to add 'E'" , 0, height  - scaler * 2);
  text(" leftClick + Alt on letter to remove it" , 0, height - scaler);
  text(" 'Q' <= UP move oligo location ( Y - axis ) DOWN => 'W' " , 0, height);
  pop();
}

function showMemory(){
  fill(150, 255, 50);
  rect(scaler/4, height - scaler * 3.5 , scaler * 12, scaler * 3.25);
  textSize(scaler);
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
