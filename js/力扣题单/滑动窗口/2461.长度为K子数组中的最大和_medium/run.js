/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let sum = 0;
    let n = nums.length;
    let map = new Map(), sameNum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
        if (map.has(nums[i])) {
            sameNum++;
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let ans = 0;
    if(sameNum ===0) ans = Math.max(ans, sum);
    for (let i = k; i < n; i++) {
        sum += nums[i]-nums[i-k];
        if (map.get(nums[i-k]) === 1) {
            map.delete(nums[i-k]);
        }else if(map.get(nums[i-k]) > 1) {
            map.set(nums[i-k], map.get(nums[i-k]) - 1);
            sameNum--;
        }
        if (map.has(nums[i])) {
            sameNum++;
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
        if (sameNum === 0) {
            ans = Math.max(ans, sum);
        }
    }

    return ans;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));