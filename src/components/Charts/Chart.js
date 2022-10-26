import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const series = [
  {
    name: 'Dry',
    data: [
      { valueRead: 0, value: 1 },
      { valueRead: 20, value: 1 },
      { valueRead: 30, value: 0 },
    ],
  },
  {
    name: 'Medium',
    data: [
      { valueRead: 15, value: 0 },
      { valueRead: 40, value: 1 },
      { valueRead: 65, value: 0 },
    ],
  },
  {
    name: 'Wet',
    data: [
      { valueRead: 50, value: 0 },
      { valueRead: 60, value: 1 },
      { valueRead: 100, value: 1 },
    ],
  },
];

export default class Example extends PureComponent {

  render() {
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
}
