// https://blog.csdn.net/navicheung/article/details/130787424
/**
 * @description 节流函数
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var throttle = function (fn, t) {
    var time = null
    var flag = true
    var arguments = null
    var times = 0
    return function (...args) {
        clearInterval(time)
        if (flag) {
            times++
            fn(...args)
            flag = false
        } else {
            times++
            if (arguments !== null) arguments = args
        }
        time = setTimeout(() => {
            flag = true
            // console.log(arguments);
            if (times > 1) {
                fn(...arguments)
            }
            times = 0
        }, t)
    }
};
const log = throttle(console.log, 500);
log('Hello'); // 第一个先执行
// log('Hello2');// 第二个不执行
// log('Hello3');// 第三个执行

// log('Hello'); // 第一个先执行
// setTimeout(() => {
//     log('Hello2');// 第二个不执行
//     log('Hello3');// 第三个执行
// })