/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
    let n = nums.length;
    let ans = new Array(n).fill(-1)
    let width = 2 * k + 1;
    if (n < width) {
        return ans
    }
    // 以下情况 n >= 2*k+1
    let sum = 0;
    for (let i = 0; i < width; i++) {
        sum += nums[i];
    }
    ans[k] = Math.floor(sum / width);
    for (let j = width; j < n; j++) {
        sum += nums[j] - nums[j - width];
        ans[j - k] = Math.floor(sum / width);
    }
    return ans
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
// Output: [-1,-1,-1,5,4,4,-1,-1,-1]