const MOD = 10 ** 9 + 7;

var zigZagArrays = function (n, l, r) {
    const dp0 = new Array(r + 1).fill(0);
    const dp1 = new Array(r + 1).fill(0);
    const sum0 = new Array(r + 2).fill(0);
    const sum1 = new Array(r + 2).fill(0);

    for (let i = l; i <= r; i++) {
        dp0[i] = dp1[i] = 1;
        sum0[i] = sum1[i] = i - l + 1;
    }

    for (let i = 1; i < n; i++) {
        for (let j = l; j <= r; j++) {
            dp0[j] = (sum1[r] - sum1[j] + MOD) % MOD;
            dp1[j] = sum0[j - 1];
        }

        sum0[l] = dp0[l];
        sum1[l] = dp1[l];
        for (let j = l + 1; j <= r; j++) {
            sum0[j] = (sum0[j - 1] + dp0[j]) % MOD;
            sum1[j] = (sum1[j - 1] + dp1[j]) % MOD;
        }
    }

    return (sum0[r] + sum1[r]) % MOD;
};
console.log(zigZagArrays(3,4,5))
// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/number-of-zigzag-arrays-i/solutions/3984255/ju-chi-xing-shu-zu-de-zong-shu-i-by-leet-nioi/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。