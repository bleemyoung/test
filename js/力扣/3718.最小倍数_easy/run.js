/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
    nums.sort((a, b) => a - b)
    // console.log(nums);
    let times = k
    for (let num of nums) {
        if (num == times) times += k
    }
    return times
};

console.log(missingMultiple([8,2,3,4,6],2));
console.log(missingMultiple([1, 4, 7, 10, 15], 5));//5