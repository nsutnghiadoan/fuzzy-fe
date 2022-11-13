export class Speed {
    constructor(input, rule) {
      this.input = input;
      this.rule = rule;
      this.value = this.getValueCaculated(input,rule);
      this.valuex = 0;
      this.valuey = 0;
    }
    setVal = (val) => {
        this.input = val;
        this.getValueCaculated(val,this.rule);
    }
    getValueCaculated = (input,rule) => {
        const ruleinput = []
        if( rule == 1){
            var res = 0;
            var val1 = (input+2/3)/(2000/3);
            var val2 = (input - 8/3)/(-2000/3);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if (rule == 2) {
            var res = 0;
            var val1 = (input+3/2)/(500);
            var val2 = (input - 7/2)/(-500);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if (rule == 3) {
            var res = 0;
            var val1 = (input+3/2)/(250);
            var val2 = (input - 7/2)/(-250);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if (rule == 4) {
            var res = 0;
            var val1 = (input+5/11)/(400/11);
            var val2 = (input - 27/11)/(-400/11);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if ( rule == 5) {
            var res = 0;
            var val1 = (input + 52/33)/(1000/33);
            var val2 = (input - 118/33)/(-1000/33);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
    }
   
  }
   