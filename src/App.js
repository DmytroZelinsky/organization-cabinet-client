
import ServiceStatistic from './ServiceStatistic/ServiceStatistic';
import ServiceHistory from './ServiceHistory/ServiceHistory';
import ServiceStatisticChart from './ServiceStatisticChart/ServiceStatisticChart';
import UserList from './UserList/UserList'
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import Home from './Home/Home';
const { Header, Content, Sider } = Layout;

const App = () => {
 
  let navigate = useNavigate();

return (
    <Layout>
      <Header className="header" onClick={function () { navigate('/');} } style={{backgroundColor:"rgb(186, 225, 255)", fontSize:"20px", cursor:"pointer"}} >
        Кабінет організації
      </Header>
      <Layout>
        <Sider width={250} style={{backgroundColor: "white"}}>
        <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                label: 'Статистика надання послуг',
                onClick: function () { navigate('/statistic'); }
              },
              {
                key: '2',
                label: 'Діаграми наданих послуг',
                onClick: function () { navigate('/charts'); }
              },
              {
                key: '3',
                label: 'Активності організації',
                onClick: function () { navigate('/history'); }
              }
            ]}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 500,
            }}
          >
            <Routes>
                <Route exact path='/statistic' element={< ServiceStatistic />}></Route>
                <Route exact path='/charts' element={< ServiceStatisticChart />}></Route>
                <Route exact path='/history' element={< ServiceHistory />}></Route>
                <Route exact path='/' element={< Home />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
)};
export default App;