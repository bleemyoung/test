/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
    const seen = new Set();
    for (let num of arr1) {
        while (num > 0) {
            seen.add(num)
            num = Math.floor(num / 10)
        }
    }
    let res = 0
    for (let num of arr2) {
        while (num > 0) {
            if (seen.has(num)) {
                res = Math.max(res, String(num).length)
            }
            num = Math.floor(num / 10)
        }
    }
    return res
};



console.log(longestCommonPrefix([1,10,100], [1000]));