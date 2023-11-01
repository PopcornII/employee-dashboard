import React, { Children, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BankOutlined,
  UserAddOutlined,
  TeamOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Space, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../AppHeader/header';
import AppFooter from '../AppFooter/footer';
import PageContent from '../PageContent/PageContent';


const {Header, Content, Footer,Sider,} = Layout

const SideMenu = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider style={{ 
        textAlign: 'left',
        lineHeight: '120px',
       
        }}
      
        trigger={null} collapsible collapsed={collapsed}>
        <div className="menuitems">
        
              
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/dasboard']}
            onClick={(items) => {navigate(items.key);}} //item.key
            
            items={[
              {
                key:false,
                label: <h1><AppHeader/></h1>,
              },
              {

                key:'/home',
                icon:<HomeOutlined />,
                label: 'Home',

              },
              {
                key: '/employeeform',
                icon: <UserAddOutlined />,
                label: 'Employee Form',
              },
              {
                key: '/employeelist',
                icon: <TeamOutlined />,
                label: 'Employee List',
              },
              {
                key: '/staffsalary',
                icon: <BankOutlined />,
                label: 'Payroll List',
              },
            ]}
          /> 
        </div>
      </Sider>
      <Layout>
          <Header style={{
            padding: 0,
            background: colorBgContainer,
            }}> 
              <Space>
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }} />               
                </Space>                                                
          </Header>
          
          <Content style={{
            margin: '0 16px 0',
          }}>
              <PageContent  style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,             
              }}>
              </PageContent>
              
          </Content>
          
          <Footer> 
              <AppFooter></AppFooter>    
          </Footer>
      </Layout>
      
    </Layout>
  );
};
export default SideMenu;