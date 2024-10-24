/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function (nums, k, x) {
    let ans = []
    let left = 0
    let table = new Array(101).fill(0)
    for (let right = 0; right < nums.length; right++) {
        while (right - left + 1 > k) {
            table[nums[left] + 50]--
            left++
        }
        table[nums[right] + 50]++
        if (right - left + 1 == k) {
            let index = 0, sum = 0
            while (sum < x) {
                sum += table[index]
                index++
            }
            index = index - 1 - 50
            if (index > 0) index = 0
            ans.push(index)
        }
    }
    return ans
};

console.log(getSubarrayBeauty([1, -1, -3, -2, 3], 3, 2));