// 1855. 下标对中的最大距离
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
    console.log(nums1, nums2);
    const n1 = nums1.length
    const n2 = nums2.length
    const findJ = (i) => {
        let len = 0
        for (let j = i; j < n2; j++) {
            if (nums2[j] < nums1[i]) {
                // console.log('a',nums2,j);
                len = Math.max(len, -1)
            }
            else if (nums2[j] == nums1[i]) {
                // console.log('b');
                len = Math.max(len, j - i)
            } else {
                len = Math.max(len, j - i)
            }
        }
        // console.log(i, len);
        return len
    }
    let res = 0
    for (let i = 0; i < n1; i++) {
        res = Math.max(res, findJ(i))
    }
    return res
};

nums1 = [55, 30, 5, 4, 2]
nums2 = [100, 20, 10, 10, 5]
// console.log(maxDistance(nums1, nums2));
// console.log(maxDistance([2, 2, 2], [10, 10, 1]));//1
console.log(maxDistance([30, 29, 19, 5], [25, 25, 25, 25, 25]));//2