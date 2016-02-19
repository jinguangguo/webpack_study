/**
 * @file
 * @author jinguangguo
 * @date 2016/2/19
 */

//import {common} from './common';

//let shared = require('./shared');

import '../widget/header/header';

setTimeout(function() {

    require(["./shared"], function(shared) {
        shared("This is page A");
    });

}, 5000);
