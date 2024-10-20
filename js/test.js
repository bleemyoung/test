// Array.prototype.duplicator = function () {
//     let s = this.concat(this)
//     return s
// }
// let t = [1, 2, 3, 4, 5].duplicator()
// console.log(t)

// let str = "310110198211203711"
// let res = str.replace(
//     /(.{6}).*(.{4})/,
//     "$1********$2"
// )
// console.log(res);
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let n = nums.length
    for (let i = 0; i < n - 2; i++) {
        if (nums[i] == 0) {
            for (let j = 0; j < 3; j++) {
                nums[i+j]=nums[i+j]==1?0:1
            }
        }
    }
    if (nums[n - 2] == 0 || nums[n - 1 == 0]) return false
    return true
};
console.log(minOperations([[0, 1, 1, 1, 0, 0]]));

