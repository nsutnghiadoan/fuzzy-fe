import { FaTemperatureLow } from 'react-icons/fa';
import { BsMoisture } from 'react-icons/bs';

export const listAttribute = [
    {
        nameState : 'humidity', 
        icon : <FaTemperatureLow size={'50'} />,
        requiredTitle : '(from -10 to 10)'
    },
    {
        nameState : 'moisture',
        icon : <BsMoisture size={'50'} />,
        requiredTitle : '(from -10 to 10)'
    },
    // {
    //     nameState : 'moisture1',
    //     icon : <BsMoisture size={'50'} />,
    //     requiredTitle : '(from -10 to 10)'
    // },
    // {
    //     nameState : 'humidity1', 
    //     icon : <FaTemperatureLow size={'50'} />,
    //     requiredTitle : '(from -10 to 10)'
    // },
    // {
    //     nameState : 'moisture2',
    //     icon : <BsMoisture size={'50'} />,
    //     requiredTitle : '(from -10 to 10)'
    // },
    // {
    //     nameState : 'moisture3',
    //     icon : <BsMoisture size={'50'} />,
    //     requiredTitle : '(from -10 to 10)'
    // }
]