/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
    let ans = 0
    const n = s.length
    let mem = new Array(n).fill(0).map(() => new Array(n).fill(-10))
    function windowCount(len) {
        // if (len == 1) {
        //     return n
        // }
        let left = 0
        let count = 0
        let ans = 0
        for (let right = 0; right < n; right++) {
            if (right > 0 && mem[left][right - 1] >= 0) {

                if (right - left + 1 == len) {
                    count = mem[left][right - 1] + (s[right] == '1' ? 1 : 0)
                    mem[left][right] = count
                    if (count <= k || len - count <= k) {
                        ans++
                    }
                    continue
                }
            } else {

            }
            if (s[right] == '1') count++
            while (right - left + 1 > len) {
                if (s[left] == '1') {
                    count--
                }
                left++
            }
            if (right - left + 1 == len) {
                mem[left][right] = count
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


console.log(countKConstraintSubstrings("10101", 1));//12