import React from 'react';
import { Descriptions } from 'antd';
const User = () => (
  <Descriptions style={{backgroundColor:"rgb(186, 225, 255)", padding:"15px", borderRadius:"5px"}} title="Інформація про користувача">
    <Descriptions.Item label="ПІБ">Альберда Роман Романович</Descriptions.Item>
    <Descriptions.Item label="Номер телефону">+380673744264</Descriptions.Item>
    <Descriptions.Item label="Адреса">Київ, вул. Відкрита, 2</Descriptions.Item>
    <Descriptions.Item label="Дата народження">5 червня 2000</Descriptions.Item>
    <Descriptions.Item label="Додаткова інформація">Діабет</Descriptions.Item>
  </Descriptions>
);
export default User;