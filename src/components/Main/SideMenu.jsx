import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import { getUser } from '@apis/jd-car-user/user';
import { HomeOutlined,KeyOutlined, NotificationOutlined, 
  UserOutlined,HighlightOutlined,ApartmentOutlined,RadarChartOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

export default function SideMenu(props) {
  const { collapsed } = props;
  const [menuList, setMenu] = useState([]);
  const navigate = useNavigate();
  let pathname = useLocation().pathname; 
  const defaultOpenKey = '/'+ pathname.split('/')[1];
  const iconList={
    '/index':<HomeOutlined />,
    '/user-manage':<ApartmentOutlined />,
    '/right-manage':<KeyOutlined />,
    '/news-manage':<HighlightOutlined />,
    '/audit-manage':<UserOutlined/>,
    '/publish-manage':<NotificationOutlined/>,
  };
  // 普通数组转tree数组结构----map实现
  const toTree = (data) => {
    let arr = [];
    let map = {};

    data.forEach(item => {
      delete item.children;  //删除item下的children，以防多次调用
    });
    data.forEach(item => {
      item.icon=iconList[item.key];
      map[item.id] = item;
    });

    data.forEach(item => {
      let parent = map[item.pid];  //判断item的pid是否是否存在map中
      if(item.pagepermisson){  //并且为页面
        if (parent) {  //如果存在说明自己不是顶层数据
          (parent.children || (parent.children = [])).push(item)
        } else {
          arr.push(item)  // 如果不存在 则是顶层数据
        }
      }
    });
    return arr;
  } 
  const clickMenuItem=({key})=>{
    navigate(key);
  }

  useEffect(() => {
    getUser().then(res => {
      setMenu(toTree(res.data));
    })
  }, [])
 
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="side-container">
        <div className="logo">{collapsed?<RadarChartOutlined/>:'新闻发布管理后台'}</div>
        <div className="menu-container">
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
            defaultOpenKeys={[defaultOpenKey]}
            items={menuList}
            onClick={clickMenuItem}
          />
        </div>
      </div>
    </Sider>
  );
};