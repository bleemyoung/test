Array.prototype.last = function () {
    let arr = this
    let len = arr.length
    let res = len > 0 ? arr[len - 1] : -1
    return res
}
let t = [1, 2, 3, 4, 5].last()
console.log(t)
// 难度：简单
// https://leetcode.cn/problems/array-prototype-last/
// 参考https://blog.csdn.net/weixin_38788347/article/details/78123881