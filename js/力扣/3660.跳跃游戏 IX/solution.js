var maxValue = function(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(0);

    // prevMax[i] = [nums[0..i] 的最大值, 这个最大值首次出现的位置]
    const prevMax = new Array(n);

    nums.reduce(
        (prev, value, index) => {
            // 如果当前值更大，就更新前缀最大值及其位置
            if (value > prev[0]) {
                prev = [value, index];
            }
            // 记录到当前位置为止的前缀最大值快照
            return (prevMax[index] = [...prev]);
        },
        [-Infinity, -1],
    );

    // 处理区间 [0..r]
    // rightMin: 已处理右侧区间的最小值
    // rightMax: 已处理右侧区间最终能到达的最大值
    const process = (r, rightMin, rightMax) => {
        // pMax 是 [0..r] 的最大值，pivotIndex 是它第一次出现的位置
        const [pMax, pivotIndex] = prevMax[r];
        // 如果左边最大值 <= 右边最小值，说明左右断开，只能取左边最大值
        // 否则左右连通，这一块的答案和右边相同
        const currMax = pMax <= rightMin ? pMax : rightMax;

        // 下一轮递归时，右侧会扩展成 [pivotIndex..n-1]，这里提前维护它的最小值
        let nextRightMin = Math.min(pMax, rightMin);
        // [pivotIndex..r] 属于同一块，答案一致，可以一次性赋值
        for (let i = pivotIndex; i <= r; i++) {
            ans[i] = currMax;
            nextRightMin = Math.min(nextRightMin, nums[i]);
        }

        if (pivotIndex === 0) {
            return;
        }

        process(pivotIndex - 1, nextRightMin, currMax);
    };

    // 初始时右侧为空，最小值视为 Infinity
    process(n - 1, Infinity, 0);

    return ans;
};
console.log(maxValue([2,1,3]));
console.log(maxValue([6,8,5,9,7]));
// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/jump-game-ix/solutions/3961012/tiao-yue-you-xi-ix-by-leetcode-solution-mbzp/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
