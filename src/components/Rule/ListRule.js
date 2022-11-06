import { ListRuleDefault } from "./index";
import {ETO} from "../../Class/ETO";
import {Moisture} from "../../Class/Moisture";
import {Sowing} from "../../Class/Sowing";
import {Speed} from "../../Class/Speed";

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

export const ListRule = ( listCombinationRule, input ) => {
    const listRuleCalculator = []
    listCombinationRule.forEach(( ruleCal ) => {
        ListRuleDefault.forEach(( ruleDefault ) => {
            if( ruleCal.eto == ruleDefault.eto.rule && ruleCal.moisture == ruleDefault.moisture.rule && ruleCal.sowing == ruleDefault.sowing.rule ) {
                listRuleCalculator.push({
                    eto: new ETO(input.eto, ruleCal.eto),
                    moisture: new Moisture(input.moisture, ruleCal.moisture),
                    sowing: new Sowing(input.sowing, ruleCal.sowing),
                    speed: new Speed(input.speed, ruleDefault.eto.speed )
                });
            }
        })
    });
    return listRuleCalculator;
}