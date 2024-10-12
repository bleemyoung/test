/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let cal = 0
    let arr = new Array(2 ** k).fill(0)
    // console.log(arr);
    // k位的二进制串，转换为十进制，对应数组下标
    if (s.length < k) return false
    for (let i = 0; i < k; i++) {
        cal = cal * 2 + (s[i] === '0' ? 0 : 1)
    }
    // console.log(cal);
    arr[cal]++
    for (let i = k; i < s.length; i++) {
        cal -= (s[i - k] === '0' ? 0 : 1) * (2 ** (k - 1))
        cal = cal * 2 + (s[i] === '0' ? 0 : 1)
        arr[cal]++
    }
    // 以上已经通过滑动窗口计算出了所有长度为k的子串出现的次数
    // 接下来判断是否有长度为k的子串出现次数为0
    console.log(arr);
    for (let num of arr) {
        if (num === 0) return false
    }
    return true
};

console.log(hasAllCodes("00110110", 2));//true
console.log(hasAllCodes("0110", 1));//true
console.log(hasAllCodes("1110", 2));//false