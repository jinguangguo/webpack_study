webpackJsonp([0,6],[
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @file
	 * @author jinguangguo
	 * @date 2016/3/1
	 */
	
	// 学习ES6
	
	// 函数参数的默认值
	function log(x) {
	  var y = arguments.length <= 1 || arguments[1] === undefined ? 'world' : arguments[1];
	
	  console.log(x, y);
	}
	
	log('hello');

/***/ }
]);
//# sourceMappingURL=es6.bundle.js.map