/**
 * @param {number[]} nums
 * @return {number}
 */
var countOfPairs = function(nums) {
    const n = nums.length;
    const m = Math.max(...nums);
    const mod = 1e9 + 7;
    const dp = Array(n).fill(0).map(() => Array(m + 1).fill(0));
    for (let a = 0; a <= nums[0]; a++) {
        dp[0][a] = 1;
    }
    for (let i = 1; i < n; i++) {
        const d = Math.max(0, nums[i] - nums[i - 1]);
        for (let j = d; j <= nums[i]; j++) {
            if (j == 0) {
                dp[i][j] = dp[i - 1][j - d];
            } else {
                dp[i][j] = (dp[i][j - 1] + dp[i - 1][j - d]) % mod;
            }
        }
    }
    let res = 0;
    for (let num of dp[n - 1]) {
        res = (res + num) % mod;
    }
    return res;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/find-the-count-of-monotonic-pairs-i/solutions/2992035/dan-diao-shu-zu-dui-de-shu-mu-i-by-leetc-7x5r/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
console.log(countOfPairs([2,3,2]));