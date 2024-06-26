var creatCounter = function (n) {
    return function () {
        return n++
    }
}
let counter = creatCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());

// https://leetcode.cn/problems/counter/
// https://blog.csdn.net/ingenuou_/article/details/131517693
// 闭包