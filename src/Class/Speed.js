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
            var val1 = input/2;
            var val2 = (input - 2)/(-2);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if (rule == 2) {
            var res = 0;
            var val1 = (input + 1/5)/(2/5);
            var val2 = (input - 11/5)/(-2/5);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if (rule == 3) {
            var res = 0;
            var val1 = (input + 2/3)/(2/9);
            var val2 = (input - 8/3)/(-2/9);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if (rule == 4) {
            var res = 0;
            var val1 = (input + 2)/(1/5);
            var val2 = (input - 4)/(-1/5);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if ( rule == 5) {
            var res = 0;
            var val1 = (input + 3)/(1/6);
            var val2 = (input - 5)/(-1/6);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
    }
   
  }
   