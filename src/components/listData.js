import { FaTemperatureLow } from 'react-icons/fa';
import { BsMoisture } from 'react-icons/bs';
import * as Yup from 'yup';

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

export const SignupSchema = Yup.object().shape({
    humidity: Yup.number().typeError("must be a number").required('Required').min(-5, "Too short"),
    moisture : Yup.number().typeError("must be a number").required('Required').min(10, "Too short")
});