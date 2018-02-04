class Rna{
	constructor(ArrayOfNucleos, startIndex, loopBases, endIndex, pairs, baseSize){
		this.ArrayOfNucleos = ArrayOfNucleos;
		this.startIndex = startIndex;
		this.loopBases = loopBases;
		this.endIndex = endIndex;
		this.pairs = pairs;
		this.baseSize = baseSize;
	}
	calculateGivenStructure(){
		this.pairs = 0;
		for(let i = this.startIndex; i < this.endIndex; i++){
			let s = this.ArrayOfNucleos[i];
			let f = this.ArrayOfNucleos[this.endIndex + this.startIndex - i];
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
		let partOne; // index before Loop center
		
		const baseSize = this.baseSize * scaler; // add opportunity to scale basisVectors by user (basisX = basisY = this.baseSize)

		const thirdBase = baseSize * 0.3; // letter translation (ellipse <--> text different begin points in p5.js)

		//basis translation  
		const halfSize = baseSize * 0.5;
		const oneHalfSize = baseSize * 1.5;
		const twiceSize = baseSize * 2;
		const twoHalf = baseSize * 2.5;

		
		const part12X = oneHalfSize + this.startIndex * baseSize;
		const part23X = oneHalfSize + (this.startIndex - 1) * baseSize;
	    let part34X;

	    let part34Y;
		/*
		
		const part5X =
		const part6X = 
		const part7X = 

		const part5Y =
		const part6Y = 
		const part7Y = 
		*/
		//function boundaries 
		const border23 = this.startIndex + (this.ArrayOfNucleos.length - (this.ArrayOfNucleos.length - this.endIndex) - this.loopBases - this.startIndex) / 2;
		let border34;
	    let border45;
	    //let border56;
		const border36 = border23 + this.loopBases;
		//PRELOGIC , HOW MANY BASES IN LOOP CENTER , DEPENDS ON AMOUNT OF ELEMENTS IN LOOP (ODD OR EVEN) 

		if(this.loopBases % 2 === 0){
		    border34 = this.loopBases / 2 - 1 + border23; // before center loop 
		    border45 = border34 + 2; // center loop 2 elements long
		    part34X = part12X;
		    part34Y = halfSize + (border34 - this.startIndex + 2) * baseSize;
		    /*
			border56 = ;
			border67 = ;
			*/
		}else{
			border34 = (this.loopBases - 1) / 2 + border23; // before center loop 
			border45 = border34 + 1; // center loop 1 element long
			part34X = part12X;
		    part34Y = halfSize + (border34 - this.startIndex + 2.5) * baseSize;
			/*
			border56 = ;
			border67 = ;
			*/
		}

		//VISUALISATION OF 2D miRNA STRUCTURE
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
					x = oneHalfSize + i * baseSize;
					y = oneHalfSize;
				}else if(i <  border23){// part2
					x = part12X;
					y = twoHalf + (i - this.startIndex) * baseSize;
				}else if(i < border36){ // parts (3,4,5)
					if(i < border34){ // part3
						x = part23X;
						y = twoHalf + (i - this.startIndex) * baseSize;
					}else if(i < border45){ // part4 loop center
						x = part34X + baseSize * (i - border34);
						y = part34Y;
					}/*else{ // part5
						x = ;
						y = ;
					}
				}else if(){ // part6
					x = ;
					y = ;
				}else{ // part7
					x = ;
					y = ;
				*/
				}
			}
			if(i < border45){
				coordinateTransformer(); // transforms i to x, y
				addColor();
				ellipse(x, y, baseSize, baseSize);
				addLetters();
			}
		}
		//SHOW PAIRS
		fill(150, 255, 50);
		rect(5, height - 40, 120, 35);
		fill(0, 0, 0);
		text("pairs: " + this.pairs, 20, height - 15);
	}

}