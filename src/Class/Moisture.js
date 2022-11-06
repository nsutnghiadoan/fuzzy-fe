class Moisture {
    constructor(input, rule) {
      this.input = input;
      this.rule = rule;
      this.value = getValue(input,rule);
    }
    
    getValue = (input,rule) => {
        const ruleinput = []
        if( input >= 0  && input <= 20 && rule == 1){
            return 1;
        }
        if ( input > 20 && input <= 30 && rule == 1) {
          var res = 0;
          res = (-1/10)*input + 3;
          return res;
        }
        if ( input >= 15 && input < 40 && rule == 2) {
            var res = 0;
            res = (1/25)*input - 3/5;
            return res;
        }
        if ( input >= 40 && input <= 65 && rule == 2) {
            var res = 0;
            res = (-1/25)*input + 13/5;
            return res;
        }
        if ( input >= 50 && input < 60 && rule == 3) {
            var res = 0;
            res = (1/10)*input - 5;
            return res;
        }
        if ( input >= 60 && rule == 3) {
            return 1;
        }
    }
   
  }
   