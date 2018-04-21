import fetch from './fetch'
import { Notification, Loading } from 'element-ui'

export const queryBookList = (pageNum, type, content) => {
  let data = {
    pageSize: 20,
    pageNum
  }
  switch (type) {
    case 'name' : data.name = content
      break
    case 'author' : data.author = content
      break
    case 'publisher' : data.publisher = content
      break
    case 'categories' : data.categories = content // 暂不支持
      break
    case 'locations' : data.locations = content // 暂不支持
      break
    default : ;
  }
  return fetch.post(
    '/book/query',
    data
  ).catch(() => {
    Loading.service().close()
    Notification({
      type: 'error',
      title: '数据加载失败!',
      message: '请刷新重试',
      duration: 0,
      offset: 50
    })
  })
}

/**
 * 删除一本书
 * @param {String} id   唯一id
 */
export const removeOneBook = (id) => {
  return fetch.post(
    '/book/delete',
    {id}
  )
}

/**
 * 新增一本书
 * @param {Object} payload  包含name author publisher等字段
 */
export const addOneBook = (payload) => {
  return fetch.post(
    '/book/add',
    payload
  )
}

/**
 * 编辑一本书
 * @param {Object} payload  包含id name author publisher等字段
 */
export const editOneBook = (payload) => {
  return fetch.post(
    '/book/update',
    payload
  )
}

/**
 * 测试接口 jsonp
 */
export const biliNav = () => {
  return fetch.jsonp(
    '//api.bilibili.com/x/web-interface/nav',
    {jsonp: 'jsonp'}
  )
}

/**
 * 测试接口 axios
 */
export const getList = () => {
  return fetch.axios(
    '//big.bilibili.com/web/bubble/list',
    {}
  )
}

/**
 * 测试接口 get
 */
export const getList2 = () => {
  return fetch.get(
    '/web/bubble/list',
    {}
  )
}

/**
 * 测试接口 post
 */
export const getList3 = () => {
  return fetch.post(
    '/web/pannel/info',
    {}
  )
}
