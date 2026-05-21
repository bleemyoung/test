/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    // if(nums.length < 3)
    let arr = new Array(101).fill(0);
    nums.reverse();
    // console.log(nums);
    let k = Math.floor(nums.length / 3), l = nums.length % 3;
    console.log(k, l);
    for (let i = 0; i < l; i++) {
        if (arr[nums[i]] === 0) {
            arr[nums[i]] = 1;
        } else {
            return k + 1;
        }
    }
    for (let step = 0; step < k; step++) {
        let start = step * 3 + l;
        for (let j = start; j < start + 3; j++) {
            if (arr[nums[j]] === 0) {
                arr[nums[j]] = 1;
            } else {
                // console.log('same:', nums[j]);
                return k - step
            }
        }
    }
    return 0
};


// console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7]));
console.log(minimumOperations([12, 7, 2, 8, 5, 11]));//0
// console.log(minimumOperations([1,2,3,4,4]));//2
// console.log(minimumOperations([6,7,8,9]));//0