import {useState, PureComponent} from 'react';
import ToolTips from './components/ToolTips/ToolTips';
import { listAttribute } from './components/listData';
import Button from '@mui/material/Button';
import './assets/css/style.css';
import { ListRuleDefault } from './components/Rule';
import { CheckRuleETO , CheckRuleMoisture, CheckRuleSowing } from './components/Rule/CheckRule';
import { CombinationRule, ListRule } from './components/Rule/ListRule';

function App() {
  const [listParam, setListParam] = useState({
    humidity: '',
    moisture: ''
  });
  const listRuleComb = CombinationRule( CheckRuleETO(12), CheckRuleMoisture(11), CheckRuleSowing(12));
  const listRuleCalculator = ListRule(listRuleComb);
  console.log(listRuleCalculator);
  const handleSubmit =()=> {
    
  }
  return (
    <div className="App">
      <div className='listTooltip'>
        {listAttribute.map((item)=> {
          return (
            <ToolTips 
              key={item.nameState}
              icon={item.icon} 
              parentState={listParam}
              setListParam={setListParam}
              nameState={item.nameState}
              requiredTitle={item.requiredTitle}
            />
          )
        })}
      </div>
      <Button onClick={handleSubmit} variant="contained">Calculate</Button>
      {/* <Chart idChart={'moisture'} /> */}
    </div>
  );
}

export default App;
