/**
 * @file
 * @author jinguangguo
 * @date 2016/2/19
 */

// 加载公共的部分
import common from './js/common';

// 可以直接加载html
import './widget/header/header';

common.parseUrl(window.location.href);

require(['./js/async.test1.js'], function(asyncTest1) {
    asyncTest1.printA();
});