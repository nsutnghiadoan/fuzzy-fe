import { ListRuleDefault } from "./index";

export const CombinationRule = ( etoArr, moistureArr, sowingArr) =>{ 
    const listCombinationRule = []
    etoArr.forEach(( valEto ) => {
        moistureArr.forEach(( valMois ) => {
            sowingArr.forEach(( valSow ) => {
            let rule =  {
                eto : valEto,
                moisture : valMois,
                sowing : valSow
            }
            listCombinationRule.push(rule);
            });
        });
    });
    return listCombinationRule;
}

export const ListRule = ( listCombinationRule )=> {
    const listRuleCalculator = []
    listCombinationRule.forEach(( ruleCal ) => {
        ListRuleDefault.forEach(( ruleDefault ) => {
            if(ruleCal.eto == ruleDefault.eto && ruleCal.moisture == ruleDefault.moisture && ruleCal.sowing == ruleDefault.sowing) {
            listRuleCalculator.push(ruleDefault);
            }
        })
    });
    return listRuleCalculator;
}