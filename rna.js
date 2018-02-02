class Rna{
	constructor(basesInloop, ArrayOfNucleos, beginId, endId, pairs, baseSize){
		this.basesInloop = basesInloop;
		this.ArrayOfNucleos = ArrayOfNucleos;
		this.beginId = beginId;
		this.endId = endId;
		this.pairs = pairs;
		this.baseSize = baseSize;
	}
	calculateGivenStructure(){
		this.pairs = 0;
		for(let i = this.beginId; i < this.endId; i++){
			let s = this.ArrayOfNucleos[i];
			let f = this.ArrayOfNucleos[this.endId + this.beginId - i];
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
		let tmp = ((this.endId - this.beginId - this.basesInloop) / 2  + this.beginId);
		let tmp2 = tmp + this.basesInloop;
		let tmp3 = tmp2 + this.endId;

		let eltmp = this.baseSize * scaler;
		let looptmp = false;
		let partOne = 0;
		if(this.basesInloop % 2 === 0){
		    looptmp = false;
		}else{
			looptmp = true;
			partOne = tmp + (this.basesInloop - 1) / 2;
		}
		
		for(let i = 0; i < this.ArrayOfNucleos.length; i++){
			if(this.ArrayOfNucleos[i] === "A"){
				fill(255, 255, 0);
			}else if(this.ArrayOfNucleos[i] === "U"){
				fill(0, 0, 255);
			}else if(this.ArrayOfNucleos[i] === "G"){
				fill(255, 0, 0);
			}else if(this.ArrayOfNucleos[i] === "C"){
				fill(0, 255, 0);
			}
			if(i < this.beginId){//BEFORE BEGIN
				ellipse(eltmp / 2  + i * eltmp,
						eltmp,	eltmp, eltmp);
				fill(0, 0, 0);
				let x = eltmp * 0.2 + i * eltmp;
				let y = eltmp * 0.3 + eltmp;
				if(this.ArrayOfNucleos[i] === "A"){
					text("A", x, y);
				}else if(this.ArrayOfNucleos[i] === "U"){
					text("U", x, y);
				}else if(this.ArrayOfNucleos[i] === "G"){
					text("G", x, y);
				}else if(this.ArrayOfNucleos[i] === "C"){
					text("C", x, y);
				}
			}else if(i < tmp){//BEFORE LOOP
				ellipse(
					this.baseSize * scaler / 2 + this.beginId * this.baseSize * scaler,
					this.baseSize * scaler * (i - this.beginId + 2), scaler * this.baseSize, scaler * this.baseSize
				);
				fill(0, 0, 0);
				let x = eltmp * 0.2 + this.beginId * eltmp;
				let y = eltmp * 0.3 + eltmp * (i - this.beginId + 2);
				if(this.ArrayOfNucleos[i] === "A"){
					text("A", x, y);
				}else if(this.ArrayOfNucleos[i] === "U"){
					text("U", x, y);
				}else if(this.ArrayOfNucleos[i] === "G"){
					text("G", x, y);
				}else if(this.ArrayOfNucleos[i] === "C"){
					text("C", x, y);
				}
			}else if(i < tmp2){ // LOOP
				if(looptmp){ // IF AMOUNT OF BASES IN LOOP ARE ODD
					if(i < partOne){
					/* THINKING...
						ellipse(
							this.baseSize * scaler / 2 + this.beginId * this.baseSize * scaler,
							this.baseSize * scaler * (i - this.beginId + 2), scaler * this.baseSize, scaler * this.baseSize
						);
						fill(0, 0, 0);
						let x = this.baseSize * scaler * 0.2 + this.beginId * this.baseSize * scaler;
						let y = this.baseSize * scaler * 1.1 * (i - this.beginId + 2);
						if(this.ArrayOfNucleos[i] === "A"){
							text("A", x, y);
						}else if(this.ArrayOfNucleos[i] === "U"){
							text("U", x, y);
						}else if(this.ArrayOfNucleos[i] === "G"){
							text("G", x, y);
						}else if(this.ArrayOfNucleos[i] === "C"){
							text("C", x, y);
						}
					*/
					}else if(i < partOne + 1){ //LOOP CENTER

					}else{

					}
				}else{ // IF AMOUNT OF BASES IN LOOP ARE EVEN

				}
			}else if(i < tmp3){//AFTER LOOP

			}else{//AFTER END

			}
		}
		fill(150, 255, 50);
		rect(5, height - 40, 120, 35);
		fill(0, 0, 0);
		text("pairs: " + this.pairs, 20, height - 15);
	}
}
