import {useState, PureComponent} from 'react';
import { FaTemperatureLow } from 'react-icons/fa'
import ToolTips from './components/ToolTips/ToolTips';
import { humidity } from './components/listData';
import Button from '@mui/material/Button';
import Chart from './components/Charts';
// import

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
      <ToolTips 
        icon={<FaTemperatureLow className='icon_weather' size={'30'} />} 
        parentState={listParam}
        listData={humidity}
        setListParam={setListParam}
      />
      <Button onClick={handleSubmit} variant="contained">Calculate</Button>
      <Chart idChart={'moisture'} />
    </div>
  );
}

export default App;
