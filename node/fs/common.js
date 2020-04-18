/* 模块化 就是把程序分为小程序 */
/* 模块化的代码可以代码重用 */
/* 一个js文件就有一个模块 */
/* 在node中 每一个js文件都是独立运行在一个函数中的 不是全局作用域 所以一个模块的变量和函数在其他模块中无法访问 */
var fn = require('./math.js');
console.log(fn);
/* 从外部引入文件 */
var fn2= require('./hellomodule');
/* require 就是模块标识可以通过模块标识 找到指定模块 */
/* 分类：
        核心模块 node提供 不用自己写路径 完整的 比如
        文件模块 自己写 绝对路径 相对路径
        var fs = require('fs');
*/
var fs = require('fs');
var ws = fs.createWriteStream();
var rs = fs.createReadStream();
ws = rs.pipe();