/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) {
            let arr = map.get(nums[i])
            arr.push(i)
            map.set(nums[i], arr)
        } else {
            map.set(nums[i], [i])
        }
    }
    let res = false
    map.forEach((value,key) => {
        let list = value
        // console.log(value,key);
        list.sort()
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i + 1] - list[i] <= k) {
                res = true
                return
            }
        }
    })
    return res
};
// https://leetcode.cn/problems/contains-duplicate-ii/description/?envType=problem-list-v2&envId=array
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));