/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let ans = 0;
    let sum = 0;
    let left = 0;
    let map = new Map()
    let sameNum = 0;
    for (let right = 0; right < nums.length; right++) {
        while (right - left + 1 > k) {
            if (map.has(nums[left])) {
                if (map.get(nums[left]) > 1) {
                    map.set(nums[left], map.get(nums[left]) - 1)
                    sameNum--;
                } else {
                    map.delete(nums[left])
                }
            }
            sum -= nums[left];
            left++;
        }
        if (map.has(nums[right])) {
            map.set(nums[right], map.get(nums[right]) + 1)
            sameNum++;
        } else {
            map.set(nums[right], 1)
        }
        sum += nums[right];
        if (right - left + 1 === k && sameNum === 0) {
            ans = Math.max(ans, sum)
        }
    }
    return ans;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));