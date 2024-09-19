/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
    let add = isNormal(n) ? 0 : 1
    if (n === 1) {
        return 1
    }
    return countSpecialNumbers(n - 1) + add
};

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
console.log(countSpecialNumbers(20));
console.log(countSpecialNumbers(5));
console.log(countSpecialNumbers(135));