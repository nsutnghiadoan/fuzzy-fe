import { FaTemperatureLow, FaRadiation } from 'react-icons/fa';
import { BsMoisture } from 'react-icons/bs';
import { GiMatterStates } from 'react-icons/gi';
import { WiHumidity, WiCloudyWindy } from 'react-icons/wi';
import * as Yup from 'yup';

export const listAttribute = [
    {
        nameState : 'temperature', 
        icon : <FaTemperatureLow size={'50'} />,
        requiredTitle : '(from -25 to 50)(°C)',
        label : 'Temperature',
        unit: '(°C)'
    },
    {
        nameState : 'moisture',
        icon : <BsMoisture size={'50'} />,
        requiredTitle : '(from 0 to 100)(%)',
        label : 'Moisture',
        unit: '(%)'
    },
    {
        nameState : 'humidity',
        icon : <WiHumidity size={'80'} />,
        requiredTitle : '(from 0 to 100)(%)',
        label : 'Humidity',
        unit: '(%)'
    },
    {
        nameState : 'windspeed', 
        icon : <WiCloudyWindy size={'70'} />,
        requiredTitle : '(from -10 to 10)(mph)',
        label : 'Wind Speed',
        unit: '(mph)'
    },
    {
        nameState : 'radiation',
        icon : <FaRadiation size={'50'} />,
        requiredTitle : '(from 0 to 100)(%)',
        label : 'Radiation',
        unit: '(%)'
    },
    {
        nameState : 'sowing',
        icon : <GiMatterStates size={'50'} />,
        requiredTitle : '(from 0 to 140)(days)',
        label : 'Development Stage',
        unit: 'days'
    }
]

export const SignupSchema = Yup.object().shape({
    humidity: Yup.number()
        .typeError("Please enter the number")
        .required('Please enter the humidity')
        .min(0, "Too short")
        .max(100, "Too big"),
    moisture : Yup.number()
        .typeError("Please enter the number")
        .required('Please enter the moisture')
        .min(0, "Too short")
        .max(100, "Too big"),
    temperature : Yup.number()
        .typeError("Please enter the number")
        .required('Please enter the temperature')
        .min(-25, "Too short")
        .max(50, "Too big"),
    windspeed : Yup.number()
        .typeError("Please enter the number")
        .required('Please enter the wind speed')
        .min(-10, "Too short")
        .max(10, "Too big"),
    radiation : Yup.number()
        .typeError("Please enter the number")
        .required('Please enter the radiation')
        .min(0, "Too short")
        .max(100, "Too big"),
    sowing : Yup.number()
        .typeError("Please enter the number")
        .required('Please enter the development stage')
        .min(0, "Too short")
        .max(140, "Too big"),
});

export const getNameRuleETO = (rule) => {
    let nameRule;
    switch (rule) {
        case 1 :
            nameRule = 'LN';
            break;
        case 2 :
            nameRule = 'SN';
            break;
        case 3:
            nameRule = 'EQ';
            break;
        case 4 :
            nameRule = 'SP';
            break;
        case 5:
            nameRule = 'LP';
            break;
    }
    return nameRule;
}