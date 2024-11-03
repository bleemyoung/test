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
// var minOperations = function (nums) {
//     let n = nums.length
//     for (let i = 0; i < n - 2; i++) {
//         if (nums[i] == 0) {
//             for (let j = 0; j < 3; j++) {
//                 nums[i+j]=nums[i+j]==1?0:1
//             }
//         }
//     }
//     if (nums[n - 2] == 0 || nums[n - 1 == 0]) return false
//     return true
// };
// console.log(minOperations([[0, 1, 1, 1, 0, 0]]));
var minChanges = function (n, k) {
    let ans = 0
    if (n != (n | k)) {
        return -1
    }
    let count1 = 0
    while (n > 0) {
        if (n % 2 === 1) {
            count1 += 1
        }
        n = Math.floor(n / 2)
    }
    let count2 = 0
    while (k > 0) {
        if (k % 2 === 1) {
            count2 += 1
        }
        k = Math.floor(k / 2)
    }
    console.log(count1, count2);
    return count1 - count2
};
console.log(minChanges(13, 4));

