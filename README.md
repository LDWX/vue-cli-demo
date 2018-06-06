# vue-cli-demo

> A Vue.js project

> 这个项目包含：

- 多文件入口
- 全局的filters
- 全局的methods
- 全局的scss文件
- vuex
- vue-router
- 为生产环境配置相对路径，dist不需要强制设置为根路径
- 添加web字体

> [字体转换网站](https://www.fontsquirrel.com/tools/webfont-generator)

> [谷歌免费字体网站](https://fonts.google.com/)

## 多页面入口使用指南

添加多页面时，需要在 src/pages/ 目录下创建自己的独立文件夹，
并在文件夹中添加 index.html 与 index.js 。当运行打包工具时，
会自动为你生成多页面。

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
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
