# ucc-library

> library project
> ucc 图书馆查询

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# lint for *.vue & *.js
npm run lint

# serve for mock Data
npm run mock

```

## 目录结构

``` txt

|-- build 构建配置文件
|-- config webpack配置
|-- dist 编译后文件
|-- mock mock服务配置
|-- src 开发文件目录
    |-- assets 静态资源
    |-- components 组件
    |-- pages 页面
    |-- utils 工具函数
        request.js 通讯库封装
    |-- store vuex 配置
    |-- router router 配置
    |-- filters 过滤器
    |-- directive 自定义指令

    App.vue 入口
    main.js 构建入口
|-- test 测试目录
|-- static 静态文件
```
