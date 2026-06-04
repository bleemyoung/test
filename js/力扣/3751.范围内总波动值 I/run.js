/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
    function getaviness(num) {
        let str = num.toString()
        let ans = 0
        for (let i = 0; i < str.length - 2; i++) {
            let left = Number(str[i])
            let middle = Number(str[i + 1])
            let right = Number(str[i + 2])
            if ((left < middle && middle > right) || (left > middle && middle < right)) {
                ans++
            }
        }
        return ans
    }
    if (num2 <= 100) return 0
    let table = new Array(num2 + 1).fill(-1)
    let start = num1 > 100 ? num1 : 100

    let ans = 0
    for (let i = start; i <= num2; i++) {
        let preIndex = Math.floor(i / 10)
        let preVal = table[preIndex]
        if (preVal == -1) {
            table[preIndex] = getaviness(preIndex)
            preVal = table[preIndex]
        }
        table[i] = preVal + getaviness(i % 1000)
        // preVal += getaviness(i % 1000)
        // table[i] = preVal
        ans += table[i]
    }
    return ans
};
// console.log(totalWaviness(120, 130))//3
// console.log(totalWaviness(4848, 4848))//2
console.log(totalWaviness(1008, 1088))//115
// 错误解法