import {useState, PureComponent} from 'react';
import { FaTemperatureLow } from 'react-icons/fa'
import ToolTips from './components/ToolTips/ToolTips';
import { listAttribute } from './components/listData';
import Button from '@mui/material/Button';
import Chart from './components/Charts';
import './assets/css/style.css';
import { TextField } from '@mui/material';
import { Submit } from './components/Submit/Submit';

function App() {
  const [listParam, setListParam] = useState({
    humidity: '',
    temperature : '',
    radiation : '',
  });

  const handleSubmit =()=> {
    
  }
  return (
    <div className="App">
      <div className='listTooltip'>
        {listAttribute.map((item)=> {
          return (
            <ToolTips 
              icon={item.icon} 
              parentState={listParam}
              setListParam={setListParam}
              nameState={item.nameState}
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
