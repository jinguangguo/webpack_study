/**
 * @file
 * @author jinguangguo
 * @date 2016/3/14
 */

module.exports = [
    // http://test-marketing-m.ctest.baijiahulian.com/
    // http://test-marketing-m.ctest.baijiahulian.com/build/referral.js
    {
        pattern: /^http:\/\/test-marketing-m.ctest.baijiahulian.com\/static\/(.*)\.js$/,
        responder: 'http://localhost:9000/static/$1.js'
    }
    //{
    //    // http://test-marketing-m.ctest.baijiahulian.com/build/referral.js
    //    pattern: 'http://test-marketing-m.ctest.baijiahulian.com/build/referral.js',
    //    responder: 'http://localhost:8009/build/referral.js'
    //},
    //{
    //    pattern: /^http:\/\/qian.genshuixue.com\/asset\/(.*)_\w{10}\.(js|css)$/,
    //    responder: 'http://localhost:8009/build/referral.js'
    //}
];

// 启动：
// nproxy -l proxy.js -p 9999