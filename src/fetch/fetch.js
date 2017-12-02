import axios from 'axios'
import qs from 'qs'
import originJsonp from 'jsonp'

import { baseURL, jpOption } from './config'

// axios 全局配置
axios.defaults.timeout = 5000

// axios 全局拦截器
axios.interceptors.request.use(
  config => {
    // post提交方式采用urlencode编码
    if (config.method === 'post' && config.data && config.data.constructor !== FormData) {
      // 设置body数据编码方式为urlencode
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      config.data = qs.stringify(config.data)
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default {

  /**
   * 发送 get 请求
   * @param {*} url 地址
   * @param {*} params 参数对象
   */
  get (url, params) {
    return axios({
      method: 'get',
      url: baseURL + url,
      params
      // withCredentials: true,
    })
  },

  /**
   * 发送post请求
   * @param {*} url 地址
   * @param {*} data 数据对象
   */
  post (url, data) {
    return axios({
      method: 'post',
      url: baseURL + url,
      data: qs.stringify(data)
      // withCredentials: true,
    })
  },

  /**
   * 发送formData数据
   * @param {*} url 地址
   * @param {*} formdata
   */
  form (url, formdata) {
    return axios({
      method: 'post',
      url: baseURL + url,
      data: formdata
      // withCredentials: true,
    })
  },

  /**
   * 完整的axios方法
   * @param {*} options axios配置
   */
  axios (options) {
    return axios(options)
  },

  /**
   * jsonp 封装
   * @param {*} url 地址
   * @param {*} data 数据对象
   */
  jsonp (url, data) {
    // 参数拼接到URL上
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    return new Promise((resolve, reject) => {
      originJsonp(url, jpOption, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject(err)
        }
      })
    })
  }
}

/**
 * 对象转为url参数
 * @param {*} data
 */
function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
