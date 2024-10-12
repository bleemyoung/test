/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let n = code.length
    let res = new Array(n).fill(0)
    // console.log(res);
    let sum = 0
    if (k == 0) {
        return res
    }
    if (k > 0) {
        for (let i = 1; i <= k; i++) {
            let index = (i) % n
            sum += code[index]
        }
        res[0] = sum
        for (let i = 1; i < n; i++) {
            let left = i
            let right = (i + k) % n
            sum += code[right] - code[left]
            res[i] = sum
        }
        return res
    }
    if (k < 0) {
        for (let i = 1; i <= -k; i++) {
            let index = (n - i) % n
            sum += code[index]
        }
        res[0] = sum
        for (let i = 1; i < n; i++) {
            let right = i - 1
            let left = (i + k - 1 + n) % n
            sum += code[right] - code[left]
            res[i] = sum
        }
        return res
    }
};

console.log(decrypt([5, 7, 1, 4], 3));//[12,10,16,13]
console.log(decrypt([5, 7, 1, 4], 0));//[12,10,16,13]
console.log(decrypt([2, 4, 9, 3], -2));//[12,5,6,13]