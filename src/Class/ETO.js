class ETO {
    constructor(input, rule) {
      this.input = input;
      this.rule = rule;
      this.value = getValue(input,rule);
    }
    
    getValue = (input,rule) => {
        const ruleinput = []
        if( input >= -11 && input < -7.5 && rule == 1){
            return 1;
        }
        if ( input >= -7.5 && input <= -6 && rule == 1) {
          var res = 0;
          res = (-2/3)*input - 4;
          return res;
        }
        if ( input >= -7 && input < - 4 && rule == 2) {
            var res = 0;
            res = (1/3)*input + 7/3;
            return res;
        }
        if ( input >= -4 && input <= -1 && rule == 2) {
            var res = 0;
            res = (-1/3)*input - 1/3;
            return res;
        }
        if ( input >= -1.5 && input < 0 && rule == 3) {
            var res = 0;
            res = (2/3)*input + 1;
            return res;
        }
        if ( input >= 0 && input <= 1.5 && rule == 3) {
            var res = 0;
            res = (-2/3)*input + 1;
            return res;
        }
        if ( input >= 1 && input < 4 && rule == 4) {
            var res = 0;
            res = (1/3)*input - 1/3;
            return res;
        }
        if ( input >= 4 && input <= 7 && rule == 4) {
            var res = 0;
            res = (-1/3)*input + 7/3;
            return res;
        }
        if ( input >= 6 && input < 7.5 && rule == 5) {
            var res = 0;
            res = (-1/3)*input + 7/3;
            return res;
        }
        if( input >= 7.5 && input <= 11 && rule == 5){
            return 1;
        }
    }
   
  }
   