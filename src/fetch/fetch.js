import axios from 'axios'
import originJsonp from 'jsonp'
import { Loading } from 'element-ui'

import { baseURL, jpOption } from './config'

// axios 全局配置
axios.defaults.timeout = 5000

let loadingInstance = ''

// axios 全局请求拦截器
axios.interceptors.request.use(
  config => {
    // post提交方式采用application/json编码
    if (config.method === 'post' && config.data && config.data.constructor !== FormData) {
      // 设置body数据编码方式为application/json
      config.headers['Content-Type'] = 'application/json'
    }
    loadingInstance = Loading.service({ fullscreen: true, background: 'rgba(0, 0, 0, 0.1)' })
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// axios 全局相应拦截器
axios.interceptors.response.use(config => {
  loadingInstance.close()
  return config
}, function (error) {
  return Promise.reject(error)
})

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
      data: JSON.stringify(data)
      // withCredentials: true, // 跨域携带cookie
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
      // withCredentials: true, // 跨域携带cookie
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
 * 工具函数
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
