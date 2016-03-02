/**
 * @file
 * @author jinguangguo
 * @date 2016/3/1
 */

// 学习ES6


// 函数——

// 函数参数的默认值
//function log(x, y = 'world') {
//    console.log(x, y);
//}
//
//log('hello');   // 可以省略尾部参数的默认值
//
//function f(x = 1, y) {
//    return [x, y];
//}
//
//f();    // [1, undefined]
//f(2);   // [2, undefined]
//f(, 1); // 报错, 编译无法通过


// rest参数
//function add(...values) {
//    let sum = 0;
//
//    for (let val of values) {
//        sum += val;
//    }
//
//    return sum;
//}
//
//console.log(add(2, 5, 3));   // 10


//const sortNumbers = function() {
//    let arr = Array.prototype.slice.call(arguments);
//    return arr.sort();
//};

//const sortNumbers = function (...numbers) {
//    return numbers.sort();
//};
//
//sortNumbers(3, 1, 2);

// 等同于
//const push = function(array, ...items) {
//    items.forEach(function(item) {
//        array.push(item);
//    });
//};
//
//let a = [];
//
//console.log(push(a, 3, 1, 2));
//
//
//// ---------------- 对象 ------------------
//
//// Object.assign方法用来将源对象的所有可枚举属性复制到目标对象
//let target = {
//    a: 1
//};
//
//// 后边的属性值,覆盖前面的属性值
//Object.assign(target, {
//    b: 2,
//    c: 3
//}, {
//    a: 4
//});
//
//console.log(target);

// 用处1 - 为对象添加属性
//class Point {
//    constructor(x, y) {
//        Object.assign(this, {x, y});
//    }
//}
//
////let p = new Point(1, 2);
////
////console.log(p); // Point {x: 1, y: 2}
//
//// 用处2 - 为对象添加方法
//Object.assign(Point.prototype, {
//    getX() {
//        return this.x;
//    },
//    setX(x) {
//        this.x = x;
//    }
//});
//
//let p = new Point(1, 2);
//
//console.log(p.getX());  // 1
//
//// 用处3 - 克隆对象
//function clone(origin) {
//    return Object.assign({}, origin);
//}



// ------------------Set------------------
{

    // Set里面的成员的值都是唯一的,没有重复的值,Set加入值时不会发生类型转换,所以5和"5"是两个不同的值.
    //let s = new Set();
    //
    //[2, 3, 5, 4, 5, 2, 2].map(function(x) {
    //    s.add(x);
    //});
    //
    ////for (let i of s) {
    ////    console.log(i);
    ////}
    //
    //console.log([...s]);
    //
    //console.log(s.size);


    // 数组去重
    //function dedupe(array) {
    //    return Array.from(new Set(array));
    //}
    //
    //console.log(dedupe([1, 2, 2, 3]));  // 1, 2, 3



}

// ------------------Map------------------
{

    // Map类似于对象,也是键值对的集合,但是"键"的范围不限于字符串,各种类型的值(包括对象)都可以当做键.
    // 也就是说,Object结构提供了"字符串--值"的对应,Map的结构提供了"值——值"的对象,是一种更完善的Hash结构实现.

    var m = new Map();

    var o = {
        p: 'Hello World'
    };

    m.set(o, 'content');
    m.get(o);   // content

    m.has(o);    // true
    m.delete(o);    // true
    m.has(o);   // false


}
