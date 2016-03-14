/**
 * @file
 * @author jinguangguo
 * @date 2016/2/19
 */

// 加载公共的部分
import common from './js/common';

// 可以直接加载html
import './widget/header/header';

require(['./js/async.test2'], function(asyncTest2) {
    asyncTest2();
});