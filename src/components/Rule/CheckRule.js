export const CheckRuleETO = (eto) => {
  const ruleETO = []
  if ( eto > 10 && eto < 20 ) {
    ruleETO.push(1);
  }
  if ( eto > 18 && eto < 30 ) {
    ruleETO.push(2);
  }
  if ( eto > 26 && eto < 40 ) {
    ruleETO.push(3);
  }
  return ruleETO;
}

export const CheckRuleMoisture = ( moisture ) => {
  const ruleMoisture = []
  if ( moisture > 10 && moisture < 20 ) {
    ruleMoisture.push(1);
  }
  if ( moisture > 18 && moisture < 30 ) {
    ruleMoisture.push(2);
  }
  if ( moisture > 26 && moisture < 40 ) {
    ruleMoisture.push(3);
  }
  return ruleMoisture;
}

export const CheckRuleSowing = ( sowing ) => {
  const ruleSowing = []
  if ( sowing > 10 && sowing < 20 ) {
    ruleSowing.push(1);
  }
  if ( sowing > 18 && sowing < 30 ) {
    ruleSowing.push(2);
  }
  if ( sowing > 26 && sowing < 40 ) {
    ruleSowing.push(3);
  }
  return ruleSowing;
}