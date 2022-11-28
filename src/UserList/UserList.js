import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'ПІБ',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Дії',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Редагувати</a>
        <a>Видалити</a>
        <a>Переглянути</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Зелінський Дмитро',
  },
  {
    key: '2',
    name: 'Гнідець Олександр',
  },
  {
    key: '3',
    name: 'Маркіян Яців',
  },
];
const UserList = () => <Table columns={columns} dataSource={data} />;
export default UserList;