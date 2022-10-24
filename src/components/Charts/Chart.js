import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart(props) {
  const data = [
    {
      name: 'Page C',
      Wet: 0,
      Dry: 9800,
      Medium: 2290,
    },
    {
      name: 'Page D',
      Wet: 2780,
      Dry: 3908,
      Medium: 2000,
    },
    {
      name: 'Page E',
      Wet: 1890,
      Dry: 4800,
      Medium: 2181,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          layout="vertical"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="Dry" stroke="#8884d8" />
          <Line dataKey="Wet" stroke="#82ca9d" />
          <Line dataKey="Medium" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  )
}
