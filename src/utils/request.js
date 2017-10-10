import store from '@/store'
import axios from 'axios'
import qs from 'qs' // axios发送的数据不是json格式，若需要json格式，添加此库

import config from '../../config'

// Add a request interceptor
axios.interceptors.request.use(config => {
  // Do something before request is sent
  // config.withCredentials = true  // 需要跨域打开此配置
  // post提交 data存在 并且 data不是FormData对象时对数据进行json化处理
  if(config.method==='post' && config.data && config.data.constructor !== FormData){
    config.data = qs.stringify(config.data)
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  config.timeout = 5000,
  // 开启loading动画
  store.dispatch('popup/loading/showLoading')
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(response => {
  // Do something with response data
  // 关闭loading动画
  store.dispatch('popup/loading/hideLoading')
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

// axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl)
// export default axios
const baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl)

function format(data) {
  let str = ''
  for (var p in data) {
      str += encodeURIComponent(p) + '=' + encodeURIComponent(data[p]) + '&'
  }
  str = str.slice(0, -1);
  return str
}

export default {
  get (url, params) {
    return axios({
      method: 'get',
      url: baseURL + url,
      params,
    })
  },
  post (url, data) {
    return axios({
      method: 'post',
      url: baseURL + url,
      data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  form (url, formdata) {
    return axios({
      method: 'post',
      url: baseURL + url,
      data: formdata,
    })
  },
  // 需要特殊参数的时候请使用完整的axios方法
  axios(params) {
    return axios(params)
  },
  /**
   * JSONP 封装
   * 调用示例
   * jsonp({
      url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
      data:{
          wd: 'jsonp'
      },
      success: function (data) { console.log(data) }
  });
   */
  jsonp(options) {
    let url = options.url;
    let data = options.data;

    let oScript = document.createElement('script');
    let oBody = document.getElementsByTagName('body')[0];

    let callbackName = 'cb' + (~~(Math.random()*0xffffff)).toString(16);

    window[callbackName] = function (result) {
      options.success(result);
    };

    data.callback = callbackName;

    oScript.setAttribute('src', url + '?' + qs.stringify(data));
    oBody.appendChild(oScript);
  }
}
