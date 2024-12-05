/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let max = Math.floor(Math.sqrt(c));
    for (let i = 0; i <= max; i++) {
        let j = Math.sqrt(c - i * i);
        if (j === Math.floor(j)) {
            return true;
        }
    }
    return false
};

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));