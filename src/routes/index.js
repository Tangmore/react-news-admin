import { Navigate } from 'react-router-dom'
import Login from '@views/Login'
import Main from '@views/Main'
import Index from '@views/Index'
import UserList from '@views/UserManage/List'
import RightList from '@views/RightManage/RightList'
import RoleList from '@views/RightManage/RoleList'
import NewsList from '@views/NewsManage/NewsList'
import NewsAdd from '@views/NewsManage/NewsAdd'
const routes = [
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'',
          element:<Navigate to="/index"/>
        },
        {
          path:'index',
          element:<Index/>
        },
        {
          path:'/user-manage/list',
          element:<UserList/>
        },
        {
          path:'/right-manage/role/list',
          element:<RoleList/>
        },
        {
          path:'/right-manage/right/list',
          element:<RightList/>
        }, 
        {
          path:'/news-manage/list',
          element:<NewsList/>
        }, 
        {
          path:'/news-manage/add',
          element:<NewsAdd/>
        }, 
      ]
    }, 
    {
      path:'*',
      element:<Navigate to="/index"/>
    }
];
export default routes;
