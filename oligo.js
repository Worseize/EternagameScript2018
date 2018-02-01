class Oligo {
  constructor(numberOfOligo, charArray){
    this.numberOfOligo = numberOfOligo;
    this.charArray = charArray;
  }
  show(){
    for(let i = 0; i < this.charArray.length; i++){
      if (typeof this.charArray[i] !== 'undefined') {
        if(this.charArray[i] == "A"){
          fill(255, 255, 0);
        }else if(this.charArray[i] == "U"){
          fill(0, 0, 255);
        }else if(this.charArray[i] == "G"){
          fill(255, 0, 0);
        }else if(this.charArray[i] == "C"){
          fill(0, 255, 0);
        }else if(this.charArray[i] == "E"){
          fill(0, 0, 0); // missfold rna[i] connect to only oligo1 or oligo2 (not both);
        }else{
          fill(12); // empty rna2[i]
        }
        ellipse(scaler / 2 + scaler * i, this.numberOfOligo * 50, scaler, scaler);
        fill(0);
        textSize(scaler);
        text(this.charArray[i], scaler / 10 + i * scaler, this.numberOfOligo * 50 + scaler / 3);
      }
    }
  }
  
}