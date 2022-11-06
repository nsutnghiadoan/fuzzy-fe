import { ETO }  from '../../Class/ETO';
import { Duration }  from '../../Class/Duration';
import { Sowing }  from '../../Class/Sowing';
import { Moisture }  from '../../Class/Moisture';

export const ListRuleDefault = [
    {
        eto: new ETO(0, 1),
        moisture: new Moisture(0, 1),
        sowing: new Sowing(0, 1),
        speed: new Duration(0, 1),
    },
    {
        eto : 2,
        moisture : 1,
        sowing : 1,
        speed : 3,
    },
    {
        eto : 1,
        moisture : 3,
        sowing : 3,
        speed : 1,
    }
]
