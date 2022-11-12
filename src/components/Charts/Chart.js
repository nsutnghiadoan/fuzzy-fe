import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {etoData, getRuleChart, moistureData, speedData} from './GetDataChart';

function Chart( props ) {

  const series = props.arrRule ? props.arrRule : getRuleChart(props.nameChart, props.ruleValue, props.xValue, props.yValue, props.xValue1);
  // const series = speedData;
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="valueRead" type="number" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        {series.map((s) => (
          <Line dot={''} dataKey="value" data={s.data} name={s.name} key={s.name} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
