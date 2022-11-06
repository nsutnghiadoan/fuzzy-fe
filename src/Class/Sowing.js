class Sowing {
    
    constructor(input, rule) {
      this.input = input;
      this.rule = rule;
      this.value = getValue(input,rule);
    }
    
    getValue = (input,rule) => {
        const ruleinput = []
        if( input >= 0 && input < 10 && rule == 1){
            var res = 0;
            res = (1/10)*input;
            return res;
        }
        if( input >= 10 && input < 20 && rule == 1){
            var res = 0;
            res = (-1/10)*input + 2;
            return res;
        }
        if ( input >= 15 && input < 40 && rule == 2) {
            var res = 0;
            res = (1/25)*input - 3/5;
            return res;
        }
        if ( input >= 40 && input < 65 && rule == 2) {
            var res = 0;
            res = (-1/25)*input + 13/5;
            return res;
        }
        if ( input >= 40 && input < 75 && rule == 3) {
            var res = 0;
            res = (1/35)*input - 8/7;
            return res;
        }
        if ( input >= 75 && input <= 110 && rule == 3) {
            var res = 0;
            res = (-1/35)*input + 22/7;
            return res;
        }
        if ( input >= 100 && input < 120 && rule == 4) {
            var res = 0;
            res = (1/20)*input - 5;
            return res;
        }
        if ( input >= 120 && input < 140 && rule == 4) {
            var res = 0;
            res = (-1/20)*input + 7;
            return res;
        }
        if ( input > 140  && rule == 4) {
            return 0;
        }
    }
   
  }
   