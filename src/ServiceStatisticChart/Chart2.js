import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Червень',
    uv: 102,
  },
  {
    name: 'Липень',
    uv: 55,
  },
  {
    name: 'Серпень',
    uv: 32,
  },
  {
    name: 'Вересень',
    uv: 76,
  },
  {
    name: 'Жовтень',
    uv: 54,
  },
  {
    name: 'Листопад',
    uv: 32,
  },
];

export default class Chart2 extends PureComponent {
  render() {
    return (
      <>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" name='Кількість нових користувачів упродовж останнього півріччя' fill="#874523" />
          </BarChart>
      </>
    );
  }
}
