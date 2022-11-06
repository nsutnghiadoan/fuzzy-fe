export const CheckRuleETO = ( eto ) => {
  const ruleETO = []
  if ( eto >= -10 && eto <= -6 ) {
    ruleETO.push(1);
  }
  if ( eto >= -7 && eto <= -1 ) {
    ruleETO.push(2);
  }
  if ( eto >= -1.5 && eto <= 1.5 ) {
    ruleETO.push(3);
  }
  if ( eto >= 1 && eto <= 7 ) {
    ruleETO.push(4);
  }
  if ( eto >= 6 && eto <= 10 ) {
    ruleETO.push(5);
  }
  return ruleETO;
}

export const CheckRuleMoisture = ( moisture ) => {
  const ruleMoisture = []
  if ( moisture >= 0 && moisture <= 30 ) {
    ruleMoisture.push(1);
  }
  if ( moisture >=15 && moisture <= 65 ) {
    ruleMoisture.push(2);
  }
  if ( moisture >= 50 && moisture <= 100 ) {
    ruleMoisture.push(3);
  }
  return ruleMoisture;
}

export const CheckRuleSowing = ( sowing ) => {
  const ruleSowing = []
  if ( sowing >= 0 && sowing <= 20 ) {
    ruleSowing.push(1);
  }
  if ( sowing >= 15 && sowing <= 65 ) {
    ruleSowing.push(2);
  }
  if ( sowing >= 40 && sowing <= 110 ) {
    ruleSowing.push(3);
  }
  if ( sowing >= 100 && sowing <= 140 ) {
    ruleSowing.push(4);
  }
  return ruleSowing;
}