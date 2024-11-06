/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
    let result = [];
    let n = nums.length;
    if (n == 1) return [nums[0]];//单个元素的情况
    if (k == 1) return nums;//k=1的情况，每个元素都满足
    let left = 0
    let piont = 0
    for (let right = 1; right < n; right++) {
        if (nums[right] !== nums[right - 1] + 1) {//连续 且 上升
            piont = right;
        }
        while (right - left + 1 > k) {
            if (left == piont) piont = left + 1
            left++;
        }
        if (right - left + 1 === k) {
            // console.log(nums[right]);
            if (piont == left) {
                result.push(nums[right]);
            } else {
                result.push(-1)
            }
        }
    }
    return result;
};

// console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3));
// [3,4,-1,-1,-1]