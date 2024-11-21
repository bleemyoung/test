/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
    let ans = 0
    const n = s.length
    function windowCount(len) {
        if (len == 1) {
            return n
        }
        let left = 0
        let count = 0
        let ans = 0
        for (let right = 0; right < n; right++) {
            if (s[right] == '1') count++
            while (right - left + 1 > len) {
                if (s[left] == '1') {
                    count--
                }
                left++
            }
            if (right - left + 1 == len) {
                if (count <= k || len - count <= k) {
                    ans++
                }
            }
        }
        console.log(len, ans);
        return ans
    }

    for (let len = 1; len <= n; len++) {
        ans += windowCount(len)
    }
    return ans
};


console.log(countKConstraintSubstrings("10101", 1));