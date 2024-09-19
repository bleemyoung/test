/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
    let normal = 0
    for (let i = 1; i <= n; i++) {
        // console.log(i, isNormal(i));
        if (isNormal(i)) {
            normal++
        }
    }
    return n - normal
};
// var isNormal = function (i) {
//     let map = new Map()
//     while (i > 0) {
//         let digit = i % 10
//         if (map.has(digit)) {
//             return true
//         } else {
//             map.set(digit, 1)
//         }
//         i = Math.floor(i / 10)
//     }
//     return false
// }
var isNormal = function (i) {
    let arr = new Array(10).fill(0)
    while (i > 0) {
        let digit = i % 10
        if (arr[digit] > 0) {
            return true
        }
        arr[digit]++
        i = Math.floor(i / 10)
    }
    return false
}
// 超时
console.log(countSpecialNumbers(20));
console.log(countSpecialNumbers(5));
console.log(countSpecialNumbers(135));
