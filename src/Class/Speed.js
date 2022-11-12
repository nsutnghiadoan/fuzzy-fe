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
            var val1 = (input+17/183)/(10000/163);
            var val2 = (input - 7/2)/(-125);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if (rule == 2) {
            var res = 0;
            var val1 = (input+25/8)/(1250);
            var val2 = (input - 50/17)/(-10000/17);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if (rule == 3) {
            var res = 0;
            var val1 = (input+4/3)/(1000/3);
            var val2 = (input - 20/13)/(-10000/13);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if (rule == 4) {
            var res = 0;
            var val1 = (input+5/8)/(125/2);
            var val2 = (input - 5/3)/(-1000/39);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
        if ( rule == 5) {
            var res = 0;
            var val1 = (input + 5/4)/(25);
            var val2 = (input - 4)/(-100/3);
            this.valuex = val1;
            this.valuey = val2;
            res = (val1+val2)/2;
            return res;
        }
    }
   
  }
   