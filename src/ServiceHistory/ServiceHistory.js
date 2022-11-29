import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import axios from 'axios';

const data = [
    <>
        <span>
            Додано нового користувача: <a>#25325</a>
        </span>
        <span>
            19.11.2022
        </span>
    </>
  ];

const ServiceHistory = () => {
    const [notifications, setNotifications] = useState()

    useEffect(() => {
        axios.get('https://localhost:7299/api/notifications').then((response) => {

            let newArr = response.data.map((n, i) => (
               <>
                <span>
                    {n.notificationString}
                </span>
                <span>
                    {n.dateCreated.substring(0, 10)}
                </span>
               </>
            ))
            setNotifications(newArr)

        });
    },[])

    return (
    <List
    size="large"
    header={<div><b>Історія зміни послуг та користувачів</b></div>}
    bordered
    dataSource={notifications}
    renderItem={(item) => <List.Item>{item}</List.Item>}
    />
)};
export default ServiceHistory;