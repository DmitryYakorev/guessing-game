class GuessingGame {
    constructor() {
        this.guess1=0;
        this.min1=0;
        this.max1=0;
    }

    setRange(min, max) {
        this.min1=min;
         this.max1=max;
    }

    guess() {
       this.guess1=Math.round((this.max1+this.min1)/2);
       
        console.log("guess",this.guess1);
        return this.guess1;
    }

    lower() {
        this.max1=this.guess1;
    }

    greater() {
        this.min1=this.guess1;
    }
}

module.exports = GuessingGame;
