webpack构建项目架构
===================

### 简要介绍
> - 模块化构建工具
> - 基于react和react-router进行构建
> - 编译es6及sass


### 学习笔记
> - 文件的目录结构
> - es6和react文件解析
> - sass文件解析
> - 浏览器端使用npm node模块
> - server使用webpack
> - 新hapi及其插件
> - 使用ip模块获取本地ip地址
> - 热编译
> - 加载图片
> - 公共代码提取
> - 异步加载
> - 使用html-loader加载html模板文件


### 本地启动

```
gulp server:start
```


### 本地构建

```
gulp deploy:debug;      # 开发模式
gulp deploy:prod;       # 产品模式
```

### webpack开发

> - [webpack官方文档](http://webpack.github.io/docs/)


### webpack优势

##### 1. 能够根据模块按需require进所需要的资源, 包括node的所有模块及html(tpl)/css(scss)/png(jpg/gif)等资源

```javascript

// 加载某个样式文件
import './scss/index.scss';

// 加载后端node模块的文件
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';

// 可以直接加载html
import './widget/header/header';

// 加载进入某个png图片
import chuiziPng from './img/chuizi.png';

```


##### 2. 可以异步加载所需要的资源, 即懒加载相关的资源


```javascript

// async.test1.js
module.exports = {
    /**
     * print
     */
    printA() {
        console.log('printA...');
    }
};

// pageA.js
require(['./js/async.test1.js'], function(asyncTest1) {
    asyncTest1.printA();
});

// async.test2.js
module.exports = function() {
    console.log('async.test2 ...');
};

// pageB.js
require(['./js/async.test2'], function(asyncTest2) {
    asyncTest2();
});

```


##### 3. 智能打包公共资源

```javascript

// webpack.config.js 添加插件
plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        filename: "commons.js",
        name: "commons"
    })
]

```

pageA和pageB其中公共的资源会加入进commons.js中

```javascript
// 加载公共的部分 - commons.js
import common from './js/common';

// 可以直接加载html - commons.js
import './widget/header/header';

common.parseUrl(window.location.href);

require(['./js/async.test1.js'], function(asyncTest1) {
    asyncTest1.printA();
});
```

```javascript
// 加载公共的部分 - commons.js
import common from './common';

// 可以直接加载html - commons.js
import './widget/header/header';

require(['./js/async.test2'], function(asyncTest2) {
    asyncTest2();
});
```

对应的html页面,pageA.html

```html
<script src="build/commons.js"></script>
<script src="build/pageA.bundle.js"></script>
```


### 项目特点

> - 可以使用代理工具(如nproxy/charles)进行代理, 只需要代理对应的入口文件即可,即webpack.config.js中的entry属性中的文件,这样就把所有js依赖需要的html/css等所有资源均可代理.

