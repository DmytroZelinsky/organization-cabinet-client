import React from 'react';
import { List } from 'antd';

const data = [
    <>
        <span>
            Додано нового користувача: <a>#25325</a>
        </span>
        <span>
            19.11.2022
        </span>
    </>,
        <>
        <span>
            Статус послуги <a>#6546</a> змінено на: Виконано
        </span>
        <span>
            19.11.2022
        </span>
    </>,
    <>
        <span>
            Статус послуги <a>#7658</a> змінено на: В процесі
        </span>
        <span>
            19.11.2022
        </span>
    </>,
        <>
        <span>
            Видалено користувача: <a>#875</a>
        </span>
        <span>
            18.11.2022
        </span>
    </>,
    <>
        <span>
            Опис послуги <a>#7685</a> змінено на: Надання місця тимчасового проживання
        </span>
        <span>
            18.11.2022
        </span>
    </>,
  ];

const ServiceHistory = () => (
    <List
    size="large"
    header={<div><b>Історія зміни послуг та користувачів</b></div>}
    bordered
    dataSource={data}
    renderItem={(item) => <List.Item>{item}</List.Item>}
    />
);
export default ServiceHistory;