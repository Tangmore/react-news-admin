const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
// 用户管理
Mock.mock('/userManagement/userList', 'get', require('./json/userList'));
// 运行日志
Mock.mock('/menuList', 'get', require('./json/menuList')); 
