class Rna{
	constructor(basesInloop, ArrayOfNucleos, beginId, endId, pairs){
		this.basesInloop = basesInloop;
		this.ArrayOfNucleos = ArrayOfNucleos;
		this.beginId = beginId;
		this.endId = endId;
		this.pairs = pairs;
	}
	calculateGivenStructure(){
		this.pairs = 0;
		for(let i = this.beginId; i < this.endId; i++){
			if(
				function(){
					let s = this.ArrayOfNucleos[i];
					let f = this.ArrayOfNucleos[this.endId + this.beginId - i];
					if( (s === "A" && f === "U") ||
					    (s === "U" && (f === "A" || f === "G")) ||
					    (s === "G" && (f === "U" || f === "C")) || 
					    (s === "C" && f === "G")
					  ){
						return true;
					}
				}){
					this.pairs++;
			}
		}

	}
	showGivenStructure(){
		background(0);
		for(let i = 0; i < this.beginId; i++){
			if(this.ArrayOfNucleos[i] === "A"){
				fill(255, 255, 0);
			}else if(this.ArrayOfNucleos[i] === "U"){
				fill(0, 0, 255);
			}else if(this.ArrayOfNucleos[i] === "G"){
				fill(255, 0, 0);
			}else if(this.ArrayOfNucleos[i] === "C"){
				fill(0, 255, 0);
			}
			ellipse(25 * qwScaler + i * 50 * qwScaler, 50 * qwScaler , qwScaler * 50, qwScaler * 50);
		}
		for(let i = 0; i < this.beginId; i++){
			fill(255, 255, 255);
			let x = 15 * qwScaler + i * 50 * qwScaler;
			let y = 60 * qwScaler;
			if(this.ArrayOfNucleos[i] === "A"){
				text("A", x, y);
			}else if(this.ArrayOfNucleos[i] === "U"){
				text("U", x, y);
			}else if(this.ArrayOfNucleos[i] === "G"){
				text("G", x, y);
			}else if(this.ArrayOfNucleos[i] === "C"){
				text("C", x, y);
			}
		}
		text("pairs: " + this.pairs, width / 2, height - 250);
		fill(0);
	}
}