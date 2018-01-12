class Button {
  constructor(positionX, positionY, width, height){
    this.pX = positionX;
    this.pY = positionY;
    this.w = width;
    this.h = height;
  }
  show(){
    noStroke();
    fill(0);
    if(!(a == 20)){
      ellipse(this.pX, this.pY + 20, this.w + 20, this.h + 20);
    }else{
       ellipse(this.pX, this.pY + 20, this.w + 20, this.h);
    }
    push();
      translate(0, a);
        fill(50,100,150);
        ellipse(this.pX, this.pY, this.w, this.h);
        textSize(22);
        fill(0);
        text("Calculate RNA", this.pX - buttonWidth / 3, this.pY );
        text("use 'Enter'", this.pX - buttonWidth / 5, this.pY + 22 );
    pop();
    fill(255);
    if(autoMode){
      //text("autoMode ON", this.pX - this.w / 4, this.pY - this.h / 1.5);
      text("autoMode in developing stage", this.pX - this.w / 4, this.pY - this.h / 1.5);
    }else{
      text("autoMode OFF", this.pX - this.w / 4, this.pY - this.h / 1.5 );
    }
  }
}