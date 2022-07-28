import React from 'react';
import { useNavigate } from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined 
  } from '@ant-design/icons';
import { Layout, Dropdown, Menu, Avatar  } from 'antd';
const { Header } = Layout;

export default function TopMenu(props) {
    const { collapsed,setCollapsed } = props;
    const navigate = useNavigate();
    
    const jumpFun = ({ key }) => {
        let path=''; 
        if(key === 1){
            path='/index';
        }else if(key === 2){
            path='/index';
        }else{
            path='/login';
        }
        navigate(path);
    };
    const menu = (
        <Menu
        onClick={jumpFun}
          items={[
            {
              key: '1',
              label: (
                <span className="top-menu-item"> 我的消息 </span>
              ),
            },
            {
              key: '2',
              label: (
                <span className="top-menu-item"> 个人中心 </span>
              ),
            },
            {
              key: '3',
              label: (
                <span className="top-menu-item"> 退出 </span>
              ),
            },
          ]}
        />
      );
    return ( 
        <Header className="bg-white header-container">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
            })}
            {/* 个人中心 */}
            <div className="header-right">
                <Dropdown overlay={menu} placement="bottomRight">
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}
