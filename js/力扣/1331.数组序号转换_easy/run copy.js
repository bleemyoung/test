var arrayRankTransform = function(arr) {
    const sortedArr = new Array(arr.length).fill(0);
    sortedArr.splice(0, arr.length, ...arr);
    sortedArr.sort((a, b) => a - b);
    // console.log(sortedArr); // [10, 20, 30, 40] 有序数组
    const ranks = new Map();
    const ans = new Array(arr.length).fill(0);
    for (const a of sortedArr) {
        if (!ranks.has(a)) {
            ranks.set(a, ranks.size + 1);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        ans[i] = ranks.get(arr[i]);
    }
    return ans;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/rank-transform-of-an-array/solutions/1701490/shu-zu-xu-hao-zhuan-huan-by-leetcode-sol-8zlu/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));
console.log(arrayRankTransform([100, 100, 100]));//[1,1,1]