import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const series = [
  {
    name: 'Series 1',
    data: [
      { category: 0, value: 1 },
      { category: 20, value: 1 },
      { category: 30, value: 0 },
    ],
  },
  {
    name: 'Series 2',
    data: [
      { category: 15, value: 0 },
      { category: 40, value: 1 },
      { category: 65, value: 0 },
    ],
  },
  {
    name: 'Series 3',
    data: [
      { category: 50, value: 0 },
      { category: 60, value: 1 },
      { category: 100, value: 1 },
    ],
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer id={'chart'} width="100%" height="100%">
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" type="number" />
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
