import {useState} from 'react';
import { FaTemperatureLow } from 'react-icons/fa'
import ToolTips from './components/ToolTips';
import { humidity } from './components/listData';

function App() {
  const [listParam, setListParam] = useState({
    humidity: '',
    temperature : '',
    radiation : '',
  })
  return (
    <div className="App">
      <ToolTips 
        icon={<FaTemperatureLow className='icon_weather' size={'30'} />} 
        parentState={listParam}
        listData={humidity}
        setListParam={setListParam}
      />
      {/* <ToolTips icon={<FaTemperatureLow className='icon_weather' size={'30'} />} parentState={listParam} /> */}
    </div>
  );
}

export default App;
