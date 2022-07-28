import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '@components/Main/SideMenu';
import TopMenu from '@components/Main/TopMenu';
import './index.less'
import { Layout } from 'antd';
const { Content } = Layout;

export default function Main() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout className='main-layout'>
            <SideMenu collapsed={collapsed} />
            <Layout className="site-layout">
                <TopMenu collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content
                className="bg-white"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
                > 
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}
