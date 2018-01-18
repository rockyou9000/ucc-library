import fetch from './fetch'

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
    case 'publisher' : data.author = content
      break
    case 'categories' : data.categories = content
      break
    case 'locations' : data.locations = content
      break
    default : data.name = content
  }
  return fetch.get(
    '/book/query',
    data
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
