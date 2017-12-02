# UCC-Library 图书查询平台


## 技术栈

* ES2015+
* Typescript
* Vue-cli
* Vue2.0
* Vue-router
* element-ui
* axios
* pug
* stylus

## 语法规则

- tab缩进2, 空格编码字符
- 无分号
- 启用EsLint代码风格检查(standard)
- 使用 '===' 和 '!==' 而不是 '==' 和 '!='


## 构建使用

安装依赖

```
npm install
```

启动开发服务器,监听localhost:8080端口

```
npm run dev
```

打包编译生产版本

```
npm run build
```

代码es-lint语法检查

```
npm run lint
```

启用后端server服务

```
npm run server
```

## 目录结构

``` bash
├── build  构建目录
├── config  脚手架配置
├── src  源代码
│   ├── App.vue  根组件
│   ├── assets   静态资源
│   │   ├── css
│   │   ├── image
│   │   └── js
│   ├── components  业务组件
│   ├── fetch  api封装
│   │   ├── api.js
│   │   ├── config.js
│   │   └── fetch.js
│   ├── base  基础组件
│   ├── utils    工具集
│   ├── router  路由文件
│   │── view    页面
│   ├── main.ts  编译入口
├── index.html  模板HTML
├── mockServer.js  mock服务
├── .babelrc  babel转译配置
├── .editorconfig   编辑器配置
├── .eslintignore   eslint忽略
├── .eslintrc.js    eslint配置
├── .postcssrc.js   postcss配置
├── .tsconfig.json   typescript配置
```
