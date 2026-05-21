var maximumSumSubsequence = function (nums, queries) {
    const n = nums.length;
    // 4 个数分别保存 f00, f01, f10, f11
    const t = Array.from({ length: 2 << (32 - Math.clz32(n)) }, () => [0, 0, 0, 0]);

    // 合并左右儿子
    function maintain(o) {
        const a = t[o * 2], b = t[o * 2 + 1];
        t[o][0] = Math.max(a[0] + b[2], a[1] + b[0]);
        t[o][1] = Math.max(a[0] + b[3], a[1] + b[1]);
        t[o][2] = Math.max(a[2] + b[2], a[3] + b[0]);
        t[o][3] = Math.max(a[2] + b[3], a[3] + b[1]);
    }

    // 用 nums 初始化线段树
    function build(o, l, r) {
        if (l === r) {
            t[o][3] = Math.max(nums[l], 0);
            return;
        }
        const m = Math.floor((l + r) / 2);
        build(o * 2, l, m);
        build(o * 2 + 1, m + 1, r);
        maintain(o);
    }

    // 把 nums[i] 改成 val
    function update(o, l, r, i, val) {
        if (l === r) {
            t[o][3] = Math.max(val, 0);
            return;
        }
        const m = Math.floor((l + r) / 2);
        if (i <= m) {
            update(o * 2, l, m, i, val);
        } else {
            update(o * 2 + 1, m + 1, r, i, val);
        }
        maintain(o);
    }

    build(1, 0, n - 1);

    let ans = 0;
    for (const [i, x] of queries) {
        update(1, 0, n - 1, i, x);
        ans += t[1][3]; // 注意 f11 没有任何限制，也就是整个数组的打家劫舍
    }
    return ans % 1_000_000_007;
};

// 作者：灵茶山艾府
// 链接：https://leetcode.cn/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/solutions/2790603/fen-zhi-si-xiang-xian-duan-shu-pythonjav-xnhz/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
console.log(maximumSumSubsequence([3, 5, 9], [[1, -2], [0, -3]]));