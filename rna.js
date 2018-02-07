class Rna{

	constructor(ArrayOfNucleos, startIndex, loopBases, endIndex, pairs, baseSize , translateX, translateY){
		this.ArrayOfNucleos = ArrayOfNucleos;
		this.startIndex = startIndex;
		this.loopBases = loopBases;
		this.endIndex = endIndex;
		this.pairs = pairs;
		this.baseSize = baseSize;
		this.translateX = translateX;
		this.translateY = translateY;
	}

	calculateHairpinStemPairs(){
		this.pairs = 0;
		let s;
		let f;
		let i;
		
		const allPairs = (this.ArrayOfNucleos.length - (this.ArrayOfNucleos.length - this.endIndex) - this.loopBases - this.startIndex) / 2;
		const startPart3 = allPairs + this.startIndex;
		for(i = this.startIndex; i < startPart3; i++){
			s = this.ArrayOfNucleos[i]; //start++ 
			f = this.ArrayOfNucleos[this.endIndex - i + this.startIndex - 1];//end--
			if( (s === "A" && f === "U") ||
			    (s === "U" && (f === "A" || f === "G")) ||
			    (s === "G" && (f === "U" || f === "C")) || 
			    (s === "C" && f === "G")
			){
				this.pairs++;
				
			}
		}
	}

	showGivenStructure(){		
		/*
			OPTIMIZATION (SPEED UP CALCULATIONS , BUT CONSUME MORE RAM)
		    IF MAKE 7 SMALL LOOPS WE LOST CONNECTION BETWEEN index and [x , y] 
		    WE NEED THAT CONNECTION IN FUTURE TO ADD MOUSECLICK EVENTS f(i) = [x, y]
			f(i) => [x, y] , g(i) => [x, y] , k(i) => [x, y]... 
			see img/Engine.jpg
		*/
		//OPTIMIZATION
		let i; // input
		let x; // output 1
		let y; // output 2

		//maximum bounded pairs 
		const pairs = (this.ArrayOfNucleos.length - (this.ArrayOfNucleos.length - this.endIndex) - this.loopBases - this.startIndex) / 2;
		const baseSize = this.baseSize * scaler; // add opportunity to scale basisVectors by user (basisX = basisY = this.baseSize)
		const thirdBase = baseSize * 0.3; // letter translation (ellipse <--> text different begin points in p5.js)
		//basis translation  (0, 0) ---> (x0, y0);
		const halfSize = baseSize * 0.5;
		const oneHalfSize = baseSize * 1.5;
		const twiceSize = baseSize * 2;
		const twoHalf = baseSize * 2.5;
		const threeSize = baseSize * 3;
		const threehalfSize = baseSize * 3.5;
		//function boundaries 
		const startPart3 = this.startIndex + pairs;
		let startPart4;
	    let startPart5;
	    let startPart6;
	    let startPart7;
	    // 7 different function(i) because we have 7 parts
		const part2X = oneHalfSize + this.startIndex * baseSize;
		const part3X = part2X - baseSize;
		let part4X;
		const part5X = part2X + twiceSize;
		const part6X = part2X + baseSize;
		let part4Y;
	    let part5Y;

		//PRELOGIC , HOW MANY BASES IN LOOP CENTER , DEPENDS ON AMOUNT OF ELEMENTS IN LOOP (ODD OR EVEN) 
		if(this.loopBases % 2 === 0){
		    startPart4 = this.loopBases / 2 - 1 + startPart3; // before center loop 
		    startPart5 = startPart4 + 2; // center loop 2 elements long
		    startPart6 = startPart5 +  this.loopBases / 2 - 1;
		    startPart7 = startPart6 + pairs;

		    part4X = part2X;

		    part4Y = halfSize + (startPart4 - this.startIndex + 2) * baseSize;
		    part5Y = part4Y - baseSize;
		}else{
			startPart4 = (this.loopBases - 1) / 2 + startPart3; // before center loop 
			startPart5 = startPart4 + 1; // center loop 1 element long
			startPart6 = startPart5 +  (this.loopBases - 1) / 2;
			startPart7 = startPart6 + pairs;

			part4X = part2X + halfSize;

			part4Y = halfSize + (startPart4 - this.startIndex + 2) * baseSize;
		    part5Y = part4Y - baseSize; 
		}

		//VISUALISATION OF 2D miRNA STRUCTURE
		if(this.loopBases > 2 && (this.endIndex - this.startIndex - this.loopBases) % 2 === 0){
			for(let i = 0; i < this.ArrayOfNucleos.length; i++){
				// FUNCTION SHORTCUTS --> to make code more readable 
				let addColor = () => {
					if(this.ArrayOfNucleos[i] === "A"){
						fill(255, 255, 0);
					}else if(this.ArrayOfNucleos[i] === "U"){
						fill(0, 0, 255);
					}else if(this.ArrayOfNucleos[i] === "G"){
						fill(255, 0, 0);
					}else if(this.ArrayOfNucleos[i] === "C"){
						fill(0, 255, 0);
					}
				}
				let addLetters = () => {
					textSize(scaler);
					fill(0, 0, 0); // Black letters
					if(this.ArrayOfNucleos[i] === "A"){
						text("A", x - thirdBase, y + thirdBase);
					}else if(this.ArrayOfNucleos[i] === "U"){
						text("U", x - thirdBase, y + thirdBase);
					}else if(this.ArrayOfNucleos[i] === "G"){
						text("G", x - thirdBase, y + thirdBase);
					}else if(this.ArrayOfNucleos[i] === "C"){
						text("C", x - thirdBase, y + thirdBase);
					}
				}
				let coordinateTransformer = () => {
					if(i < this.startIndex){// part1
						x = oneHalfSize + i * baseSize + this.translateX;
						y = oneHalfSize + this.translateY;
					}else if(i <  startPart3){// part2
						x = part2X + this.translateX;
						y = twoHalf + (i - this.startIndex) * baseSize + this.translateY;
					}else if(i < startPart6){ // parts (3,4,5)
						if(i < startPart4){ // part3
							x = part3X + this.translateX;
							y = twoHalf + (i - this.startIndex) * baseSize + this.translateY;
						}else if(i < startPart5){ // part4 loop center
							x = part4X + baseSize * (i - startPart4) + this.translateX;
							y = part4Y + this.translateY;
						}else{ // part5
							x = part5X + this.translateX;
							y = part5Y + (startPart5 - i) * baseSize + this.translateY;
						}
					}else if(i < startPart7){ // part6
						x = part6X + this.translateX;
						y = part5Y + (startPart5 - i) * baseSize + this.translateY;
					}else{ // part7
						x = threehalfSize + (i -this.endIndex + this.startIndex) * baseSize + this.translateX;
						y = oneHalfSize + this.translateY;
					}
				}
				coordinateTransformer(); // transforms i to x, y
				addColor();
				ellipse(x, y, baseSize, baseSize);
				addLetters();
			}
			//SHOW PAIRS (OUTPUTS amount of bounded pairs)
			fill(150, 255, 50);
			rect(5, height - 65, 175, 60);
			fill(0, 0, 0);
			text("pairs: " + this.pairs, 20, height - 15);
			text("Array.length: " + this.ArrayOfNucleos.length , 20, height - 45);
		}else{ // if wrong input
			fill(255);
			if((this.endIndex - this.startIndex - this.loopBases) % 2 !== 0){
				text("Wrong inputs! three inputs are connected with rule : ", width / 8, height / 2);
				text("(input3 - input2 - input1) % 2 === 0 always should be 0", width / 8, height / 2 + 40);
				text("You can fix it by changing any of all three inputs by +-1", width / 8, height / 2 + 80);
			}
			if(this.loopBases < 3){
				text("Input2 should be more than 2", width / 8, height / 2 + 120);
			}
		}
	}

}