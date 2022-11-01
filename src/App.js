import { useState, PureComponent } from 'react';
import ToolTips from './components/ToolTips/ToolTips';
import { listAttribute, SignupSchema } from './components/listData';
import Button from '@mui/material/Button';
import './assets/css/style.css';
import { ListRuleDefault } from './components/Rule';
import { CheckRuleETO, CheckRuleMoisture, CheckRuleSowing } from './components/Rule/CheckRule';
import { CombinationRule, ListRule } from './components/Rule/ListRule';
import Chart from './components/Charts';
import { useFormik } from 'formik';


function App() {
  const listRuleComb = CombinationRule(CheckRuleETO(19), CheckRuleMoisture(11), CheckRuleSowing(12));
  const listRuleCalculator = ListRule(listRuleComb);
  console.log(listRuleCalculator);
  const formik = useFormik({
    initialValues : {
      humidity : '',
      moisture : ''
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema : SignupSchema
  })
  
  return (
    <div className="App">
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
                valueInput = {formik.values[item.nameState]}
                error = {formik.errors[item.nameState]}
              />
            )
          })}
        </div>
        <Button type='submit' variant="contained">Calculate</Button>
      </form>
      {/* <Chart idChart={'moisture'} /> */}
    </div>
  );
}

export default App;
