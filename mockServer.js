var express = require('express')
var compression = require('compression')
var config = require('./config/index')
var axios = require('axios')

// 读取配置中的端口
var port = process.env.PORT || config.build.port
// 实例化express
var app = express()
// 启用路由
var apiRoutes = express.Router()

// 示例接口
apiRoutes.get('/getDiscList', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

// 接口映射到/api 域名下
app.use('/api', apiRoutes)

// 启用默认压缩
app.use(compression())

// 启用静态服务器
app.use(express.static('./dist'))

// 监听端口 localhost: + port
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
