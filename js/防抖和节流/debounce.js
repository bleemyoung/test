/**
 * @description 防抖函数，非立即执行版函数
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    var time = null
    return function (...args) {
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(() => {
            fn(...args)
        }, t)
    }
};
/**
 * @description 防抖函数，立即执行版函数
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce2 = function (fn, t) {
    var time = null
    var flag = true
    return function (...args) {
        clearInterval(time)
        if (flag) {
            fn(...args)
            flag = false
        }
        time = setTimeout(() => {
            flag = true
        }, t)
    }
};
/**
 * 非立即执行版函数
 */
// const log = debounce(console.log, 1000);
// log('Hello'); // cancelled
// log('Hello'); // cancelled
// log('Hello'); // Logged at t=100ms
/**
 * 立即执行版函数
 */
const log = debounce2(console.log, 500);
log('Hello'); // cancelled
log('Hello2');//不执行
setTimeout(() => {
    log('Hello3');
    log('Hello4');//不执行
}, 1000)

// https://blog.csdn.net/bu_xiang_tutou/article/details/133870551
// https://leetcode.cn/problems/debounce/description/
