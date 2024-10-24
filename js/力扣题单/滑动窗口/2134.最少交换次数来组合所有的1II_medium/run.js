/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    let k = 0
    let ans = 100000
    for (const num of nums) {
        k += num
    }
    let addArr = nums.slice(0, k - 1)
    nums = nums.concat(addArr)
    // console.log(nums);
    let left = 0
    let sum = 0
    for (let right = 0; right < nums.length; right++) {
        while (right - left + 1 > k) {
            sum -= nums[left]
            left++
        }
        sum += nums[right]
        if (right - left + 1 == k) {
            ans = Math.min(ans, k - sum)
        }
    }
    return ans
};

console.log(minSwaps([0, 1, 0, 1, 1, 0, 0]));//1
console.log(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0]));//1