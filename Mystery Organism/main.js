// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, arr) => {
  return {
    specimenNum: number,
    dna: arr,
    //To mutate DNA base because of it's behavior
    mutate() {
      let currBase = this.dna[Math.floor(Math.random() * this.dna.length)];
      let newBase = currBase;
      while(currBase === newBase){
        newBase = this.dna[Math.floor(Math.random() * this.dna.length)];
      };
      return newBase;
    },
    //To compare two DNA with identical base in the same place
    compareDNA(pObj) {
      let identicalCount = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === pObj.dna[i]){
          identicalCount++
        }
      }
      const percentage = Math.round(identicalCount / this.dna.length * 100);
      console.log(`specimen #${this.specimenNum} and specimen #${pObj.specimenNum} have ${percentage}% DNA in common`);
    },
    
    willLikelySurvive(){
      let cOrGCount = 0;
      for (let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          cOrGCount++;
        };
      };
      const percentage = Math.round(cOrGCount / this.dna.length * 100);
      if (percentage > 60){
        return true;
      } else {
        return false;
      };
    },
  }
};

const pAequorInstances = [];

for (let i = 1; i <= 30; i++) {
  const specimenNum = i;
  const dnaBases = mockUpStrand();
  const pAequor = pAequorFactory(specimenNum, dnaBases);
  
  if (pAequor.willLikelySurvive()) {
    pAequorInstances.push(pAequor);
  }
};


 




