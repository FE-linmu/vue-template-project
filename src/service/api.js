import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
Vue.use(Toast)
axios.defaults.headers['content-Type'] = 'application/json;charset=UTF-8' // 'Content-Type': 'application/x-www-form-urlencoded'

// 请求拦截
axios.interceptors.request.use(function (config) {
  if (config.method === 'post') {

  } else if (config.method === 'get') {

  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(res => res, err => {
  if (err && (err.toString().indexOf('500') > -1 || err.toString().indexOf('502') > -1 || err.toString().indexOf('404') > -1)) {
    Toast('网络或接口异常')
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('网络或接口异常')
  } else {
    return Promise.reject(err)
  }
})
