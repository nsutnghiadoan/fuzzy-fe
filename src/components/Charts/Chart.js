import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getRuleChart } from './GetDataChart';

function Chart( props ) {

  const series = getRuleChart(props.nameChart, props.ruleValue, props.xValue, props.yValue);
  console.log(series);
  return (
    <ResponsiveContainer id={'chart'} width="100%" height="100%">
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="valueRead" type="number" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        {series.map((s) => (
          <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
