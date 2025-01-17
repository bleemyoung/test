/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
    let ans = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]
        if (nums[i] >= k) {
            return 1
        }
        for (let j = i - 1; j >= 0 && ((nums[j] | x) !== nums[j]); j--) {
            nums[j] |= x
            if (nums[j] >= k) {
                ans = Math.min(ans, i - j + 1);
            }
        }
    }
    return ans === Infinity ? -1 : ans;
};

console.log(minimumSubarrayLength([1, 2, 3], 2));//1
console.log(minimumSubarrayLength([1, 2, 3, 4, 5], 10));//-1
console.log(minimumSubarrayLength([2, 1, 8], 10));//3