import axios from 'axios';
/**
  * 跳转登录页
  * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
  */
//  const toLogin = () => {
//   window.location.href = '/login';
// }
 
/**
 * axios封装 
 */
const defaultConfig = {
  timeout: 60 * 1000, // Timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  withCredentials: true
};
const instance = axios.create(defaultConfig);
// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 携带token 
    let token = sessionStorage.getItem('user_token');
    token && (config.headers['Authorization '] = token)
    return config;
  },
  error => { 
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(
  response =>{
    return Promise.resolve(response.data);
  },
  error => {  
    return Promise.reject(error);
  }
);

export { instance };
