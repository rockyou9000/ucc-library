import axios from 'axios'
import qs from 'qs'

import { baseURL } from './config'

axios.defaults.timeout = 5000

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // post提交 data存在 并且 data不是FormData对象时对数据进行json化处理
    if (config.method === 'post' && config.data && config.data.constructor !== FormData) {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export default {
  get (url, params) {
    return axios({
      method: 'get',
      url: baseURL + url,
      params
      // withCredentials: true,
    })
  },
  post (url, data) {
    return axios({
      method: 'post',
      url: baseURL + url,
      data: qs.stringify(data)
      // withCredentials: true,
    })
  },
  form (url, formdata) {
    return axios({
      method: 'post',
      url: baseURL + url,
      data: formdata
      // withCredentials: true,
    })
  }
}
