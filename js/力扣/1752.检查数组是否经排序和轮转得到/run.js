/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    const n = nums.length;
    const findStart = (arr) => {
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return i + 1;
            }
        }
        return -1;
    }
    const start = findStart(nums);
    // console.log(start);
    if (start === -1) {
        return true;
    }
    for (let i = 0; i < n-1; i++) {
        let left = (start + i) % n;
        let right = (start + i+1) % n;
        // console.log(nums[left],nums[right],left,right);
        if (nums[left] > nums[right]) return false
    };
    return true
}
console.log(check([2, 1, 3, 4]));//false
console.log(check([3, 4, 5, 1, 2]));//true