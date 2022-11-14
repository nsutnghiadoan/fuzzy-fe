import ToolTips from './components/ToolTips/ToolTips';
import {
    listAttribute,
    SignupSchema,
    getNameRuleETO,
    getNameRuleSowing,
    getNameRuleMoisture,
    getNameRuleSpeed
} from './components/listData';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import './assets/css/style.css';
import {CheckRuleETO, CheckRuleMoisture, CheckRuleSowing} from './components/Rule/CheckRule';
import {CombinationRule, ListRule} from './components/Rule/ListRule';
import {useFormik} from 'formik';
import TableChart from './components/TableChart/TableChart';
import {useEffect, useState} from "react";
import {etoCalculate} from "./components/Rule/eto";
import Header from "./components/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function App() {
    const [listRule, setListRule] = useState([]);
    const [openChart, setOpenChart] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadTlt, setLoadTlt] = useState('Calculate');
    let maxSpeed;
    const formik = useFormik({
        initialValues: {
            humidity: '',
            moisture: '',
            sowing: '',
            radiation: '',
            windspeed: '',
            temperature: ''
        },
        onSubmit: (value) => {
            const eto = etoCalculate(formik.values.humidity, formik.values.temperature, formik.values.radiation, formik.values.windspeed);
            const ruleETO = CheckRuleETO(eto),
                ruleMoisture = CheckRuleMoisture(formik.values.moisture),
                ruleSowing = CheckRuleSowing(formik.values.sowing);
            formik.values['eto'] = eto;
            const listRuleComb = CombinationRule(ruleETO, ruleMoisture, ruleSowing);
            const listRuleCalculator = ListRule(listRuleComb, formik.values);
            var result = 0;
            listRuleCalculator.forEach((rule) => {
                var zValue = rule.eto.value;
                if (rule.moisture.value < zValue) {
                    zValue = rule.moisture.value;
                }
                if (rule.sowing.value < zValue) {
                    zValue = rule.sowing.value;
                }
                if(result < zValue) {
                    maxSpeed = rule;
                    result = zValue;
                };
                rule.speed.setVal(zValue);
            });
            setLoading(true);
            setListRule(listRuleCalculator);
            setLoadTlt('Calculating');
        },
        validationSchema: SignupSchema
    });
    useEffect(() => {
        let calculated;
        if (loading) {
            calculated = setTimeout(() => {
                setLoading(false);
                setLoadTlt('Calculated');
                setOpenChart(true);
            }, 2000);
        }
        return () => {
            clearTimeout(calculated);
        }
    }, [loading, loadTlt]);
    
    return (
        <>
            <Header/>
            <Card className={'main_content'}>
                <CardContent>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='listTooltip'>
                            {listAttribute.map((item) => {
                                return (
                                    <ToolTips
                                        key={item.nameState}
                                        icon={item.icon}
                                        nameState={item.nameState}
                                        requiredTitle={item.requiredTitle}
                                        handleChange={formik.handleChange}
                                        valueInput={formik.values[item.nameState]}
                                        error={formik.errors[item.nameState]}
                                        label={item.label}
                                        unit={item.unit}
                                    />
                                )
                            })}
                        </div>
                        <div className="submit">
                            <Button type='submit' variant="contained">{loadTlt}</Button> {loading &&
                            <CircularProgress size={30}/>}
                        </div>
                    </form>
                </CardContent>
            </Card>
            {openChart && <TableChart rules={listRule}/>}
            <div className="list_rule">
                {openChart && <h2>List Rule </h2>}
                {openChart ? listRule.map((rule, index)=>{
                    return(
                        <>
                            <h3 key={index}>( Moisture is {getNameRuleMoisture(rule.moisture.rule)} ) AND
                                ( ETO is {getNameRuleETO(rule.eto.rule)} ) AND
                                ( Development stage is {getNameRuleSowing(rule.sowing.rule)} ) THEN
                                ( Speed is {getNameRuleSpeed(rule.speed.rule)} )
                            </h3>
                            <hr />
                        </>
                    )
                }) : ''}
            </div>
        </>
    );
}

export default App;
