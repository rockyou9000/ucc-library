/* eslint-disable */
const express = require('express');    // 引入express模块
const Mock = require('mockjs');        // 引入mock模块
const fs = require('fs')               // 引入fs模块
const chalk = require('chalk');
const log = console.log;
const port = 8911;

const app = express();                // 实例化express

/**
 * 方法一:
 * 配置test.action路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
app.all('/test', function (req, res) {
  // res.send('hello world');

  /**
   * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
   */
  res.json(Mock.mock({
    "status": 200,
    "data|1-9": [{
      "name|5-8": /[a-zA-Z]/,
      "id|+1": 1,
      "value|0-500": 20
    }]
  }));
});

app.all('/judgement/credit/jury/notice', function (req, res) {
  res.json(Mock.mock({
    "code": 0,
    "data": {
      "content|15-20": /[a-zA-Z]/,
      "id|1": /[0-9]/,
      "url": 'www.baidu.com'
    }
  }));
});

app.all('/x/credit/jury/kpi', function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  res.json(Mock.mock({
    "code": 0,
    "data|1-5": [
      {
        "number|1-20000": 20000,
        "mid|1-10": 10,
        "day": 1499411445,
        "activeDays|1-30": 30,
        "voteTotal|1-150": 150,
        "rate|0-4": 4,
        "rank|1-3000": 3000,
        "rankRatio|1-100": 100,
        "termStart": 1496246400,
        "termEnd": 1499411445,
      }
    ]
  }));
});

app.get('/x/credit/jury/vote/opinion', function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  res.json(Mock.mock({
    "code": 0,
    "data": {
      "count|3-100": 100,
      "opinion|10":[
        {
          "opid|1-30000": 30000,
          "vote|1-2": 2,
          "content|10-200": /[a-zA-Z]/,
        }
      ]
  }
  }));
})


app.get('/x/credit/jury/case/opinion', function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  res.json(Mock.mock({
    "code": 0,
    "data": {
      "count|3-100": 100,
      "opinion|3":[
        {
          "mid|1-20000": 20000,
          "face": "//i2.hdslb.com/bfs/face/5dc531cb64aedb93f8e2b13bb90a3587cd94f782.jpg",
          "name|5-8": /[a-zA-Z]/,
          "opid|1-3000": 3000,
          "vote|1-2": 2,
          "content|10-200": /[a-zA-Z]/,
        }
      ]
  }
  }));
})


/*为app添加中间件处理 跨域请求 */
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });


/**
 * 监听8911端口
 */
app.listen(port, function(err) {

  if(err){
    console.log(err);
  }

  log(chalk.blue('mock服务启动完成, 访问localhost:'+port));

});

