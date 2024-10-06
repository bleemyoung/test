var findMaxAverage = function (nums, k) {
    let res = -Infinity
    let last
    for (let i = 0; i <= nums.length - k; i++) {
        let sum
        if (i == 0) {
            sum = 0
            for (let j = 0; j < k; j++) {
                sum += nums[i + j]
            }
        } else {
            sum = last
            sum -= nums[i - 1]
            sum += nums[i + k - 1]
        }
        last = sum
        res = res > sum ? res : sum
    }
    return res / k
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// Output: 12.75
console.log(findMaxAverage([5], 1));
// Output: 5