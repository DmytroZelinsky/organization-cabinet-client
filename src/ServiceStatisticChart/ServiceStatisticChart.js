import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Червень',
    uv: 356,
  },
  {
    name: 'Липень',
    uv: 213,
  },
  {
    name: 'Серпень',
    uv: 123,
  },
  {
    name: 'Вересень',
    uv: 345,
  },
  {
    name: 'Жовтень',
    uv: 441,
  },
  {
    name: 'Листопад',
    uv: 531,
  },
];

export default class ServiceStatisticChart extends PureComponent {
  render() {
    return (
      <>
        <ResponsiveContainer width="100%" height="100%">
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
            <Bar dataKey="uv" name='Кількість наданих послуг упродовж останнього півріччя' fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </>
    );
  }
}
