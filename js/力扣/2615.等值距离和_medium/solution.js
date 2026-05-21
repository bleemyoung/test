/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
    var map = new Map()
    const n = nums.length
    for (let i = 0; i < n; i++) {
        let num = nums[i]
        if (map.get(num)) {
            let arr = map.get(num)
            arr.push(i)
            map.set(num, arr)
        } else {
            map.set(num, [i])
        }
    }
    var ans = new Array(n).fill(0)
    for (let group of map.values()) {
        let total = 0;
        for (const idx of group) {
            total += idx;
        }
        let prefixTotal = 0;
        const sz = group.length;
        for (let i = 0; i < sz; i++) {
            const idx = group[i];
            ans[idx] = total - prefixTotal * 2 + idx * (2 * i - sz);
            prefixTotal += idx;
        }
        // 作者：力扣官方题解
        // 链接：https://leetcode.cn/problems/sum-of-distances/solutions/3950426/deng-zhi-ju-chi-he-by-leetcode-solution-8bun/
        // 来源：力扣（LeetCode）
        // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    }
    // console.log(map)
    return ans
};
console.log(distance([1, 3, 1, 1, 2]));//[5,0,3,4,0]