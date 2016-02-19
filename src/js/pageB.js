/**
 * @file
 * @author jinguangguo
 * @date 2016/2/19
 */

//import {common} from './common';

require.ensure(["./shared"], function(require) {
    var shared = require("./shared");
    var commom = require('./common');
    shared("This is page B");
});