import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import {  Table } from 'antd';
import axios from 'axios';
const { Panel } = Collapse;

var getServiceType = function(type) {
  switch(type){
    case 0: return "Евакуація";
    case 1: return "Перевезення";
    case 2: return "Надання житла";
    case 3: return "Надання матеріальної допомоги";
    case 4: return "Надання роботи";
  }
}

const columns = [
  {
    title: 'Постраждалий',
    dataIndex: 'client',
    key: 'client',
  },
  {
    title: 'Звідки',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Фахівець',
    dataIndex: 'specialist',
    key: 'specialist',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Тип послуги',
    dataIndex: 'serviceType',
    key: 'serviceType',
  },
];

const ServiceStatistic = () => {

  const [employees,setEmployees] = useState();

  useEffect(() => {
    axios.get('https://localhost:7299/api/employees').then((response) => {

      let newArr = response.data.map((e, i) => (
        {
          firstName: e.firstName,
          lastName: e.lastName,
          services: e.processedServices.map((s, i) => (
            {
              client: s.client.firstName + " " + s.client.lastName,
              address: s.client.residenceAddress.city,
              specialist: s.specialist.firstName + " " + s.specialist.lastName,
              status: s.state.stateString,
              serviceType: getServiceType(s.serviceType)
            }
          ))
        }
      ))

      setEmployees(newArr)
      console.log(response.data)
    });
  },[])


  return (
    <Collapse >
      {employees?.map((e, i) => (
        <Panel header={e.firstName + " " + e.lastName}>
          <Table columns={columns} dataSource={e.services} />
        </Panel>
      ))}
    </Collapse>
  );
};
export default ServiceStatistic;