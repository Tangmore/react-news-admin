import { instance } from './axios';
const http = config => {
  return new Promise((resolve, reject) => {
    instance(config).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

// get请求方式
http.get = (url, params, config = {}) => {
  console.log(url, params, config);
  return new Promise((resolve, reject) => {
    instance.get(url, { params, ...config }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

// post请求方式
http.post = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, params, config).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

export default http;
