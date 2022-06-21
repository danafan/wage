import axios from 'axios'
import router from '../router/index.js'
import { Toast } from "vant";

const baseURL = `${location.origin}/payslip/`;
// 创建axios实例，可以自定义配置
const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  config => {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration:0
    });
    return config
  },error => {
    return Promise.reject(error)
  })

instance.interceptors.response.use(response => {
  Toast.clear();
  if(response.data.status == 1){
    return response.data;
  }
  switch (response.data.code) {
    case 1:
    return response.data;
    default:
    Toast(response.data.msg);
    return;
  }

},error => {
 Toast.clear();
 if (error.response) {
  switch (error.response.status) {
    case 404:
    Toast('参数错误');
    break;
    case 500:
    Toast('服务器故障');
    break;
    case 504:
    Toast('没有网络');
    break;
  }
}
});

export default instance;