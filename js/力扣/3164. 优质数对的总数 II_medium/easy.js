/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
    let ans = 0
    let nums3 = nums2.map(item => k*item)
    console.log(nums3)
    for (let num of nums1) {
        if (num % k !== 0) continue
        for (let devide of nums3) {
            if (num % devide == 0) ans++
        }
    }
    return ans
};