import ToolTips from './components/ToolTips/ToolTips';
import { listAttribute, SignupSchema } from './components/listData';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import './assets/css/style.css';
import { ListRuleDefault } from './components/Rule';
import { CheckRuleETO, CheckRuleMoisture, CheckRuleSowing } from './components/Rule/CheckRule';
import { CombinationRule, ListRule } from './components/Rule/ListRule';
import { useFormik } from 'formik';
import TableChart from './components/TableChart/TableChart';
import {useEffect, useState} from "react";

// van de : Khi nguoi ta nhap, nho khong vao cac khoang cua minh thi sao ????

function App() {
  const [listRule, setListRule] = useState([]);
  const [openChart, setOpenChart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadTlt, setLoadTlt] = useState('Calculate');
  const formik = useFormik({
    initialValues : {
      humidity : '',
      moisture : '',
      sowing: '',
      radiation: '',
      windspeed : '',
      temperature : ''
    },
    onSubmit: (value) => {
      const listRuleComb = CombinationRule(CheckRuleETO(19), CheckRuleMoisture(formik.values.moisture), CheckRuleSowing(formik.values.sowing));
      const listRuleCalculator = ListRule(listRuleComb);
      setListRule(listRuleCalculator);
      setLoading(true);
      setLoadTlt('Calculating');
    },
    validationSchema : SignupSchema
  });
  useEffect(()=>{
    let calculated;
    if( loading ) {
      calculated = setTimeout(()=> {
        setLoading(false);
        setLoadTlt('Calculated');
        setOpenChart(true);
      }, 2000);
    }
    return () => {
      clearTimeout(calculated);
    }
  },[loading,loadTlt]);
  
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
                label = {item.label}
              />
            )
          })}
        </div>
        <div className="submit">
          <Button type='submit' variant="contained">{loadTlt}</Button> { loading && <CircularProgress size={30} /> }
        </div>
      </form>
      { openChart && <TableChart rules={listRule} /> }
    </div>
  );
}

export default App;
