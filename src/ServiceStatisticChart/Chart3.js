import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Харків',
    uv: 67,
  },
  {
    name: 'Запоріжжя',
    uv: 89,
  },
  {
    name: 'Суми',
    uv: 12,
  },
  {
    name: 'Миколаїв',
    uv: 76,
  },
  {
    name: 'Херсон',
    uv: 56,
  },
  {
    name: 'Дніпро',
    uv: 89,
  },
];

export default class Chart3 extends PureComponent {
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
            <Bar dataKey="uv" name='Кількість нових користувачів з різних міст' fill="#86jjrt" />
          </BarChart>
      </>
    );
  }
}
