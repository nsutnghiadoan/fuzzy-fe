export class Duration {
    constructor(input, rule) {
      this.input = input;
      this.rule = rule;
      this.value = this.getValue(input,rule);
    }
    
    getValue = (input,rule) => {
        const ruleinput = []
        if( input>= 0 && input < 0.5 && rule == 1){
            var res = 0;
            res = (2)*input;
            return res;
        }
        if ( input >= 0.5 && input <= 1 && rule == 1) {
          var res = 0;
          res = (-2)*input + 2;
          return res;
        }
        if ( input >= 0.5 && input < 3 && rule == 2) {
            var res = 0;
            res = (2/5)*input - 1/5;
            return res;
        }
        if ( input >= 3 && input <= 5.5 && rule == 2) {
            var res = 0;
            res = (-2/5)*input + 11/5;
            return res;
        }
        if ( input >= 3 && input < 7.5 && rule == 3) {
            var res = 0;
            res = (2/9)*input - 2/3;
            return res;
        }
        if ( input >= 7.5 && input <= 12 && rule == 3) {
            var res = 0;
            res = (-2/9)*input + 8/3;
            return res;
        }
        if ( input >= 10 && input < 15 && rule == 4) {
            var res = 0;
            res = (1/5)*input - 2;
            return res;
        }
        if ( input >= 15 && input <= 20 && rule == 4) {
            var res = 0;
            res = (-1/5)*input + 4;
            return res;
        }
        if ( input >= 18 && input < 24 && rule == 5) {
            var res = 0;
            res = (1/6)*input - 3;
            return res;
        }
        if ( input >= 18 && input <= 24 && rule == 5) {
            var res = 0;
            res = (-1/6)*input + 5;
            return res;
        }
        if ( input > 24 && rule == 5){
            return 0;
        }
    }
   
  }
   