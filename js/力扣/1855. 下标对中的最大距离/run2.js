// 1855. 下标对中的最大距离
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
    const n2 = nums2.length;
    let res = 0;

    for (let i = 0; i < nums1.length; i++) {
        let left = i;
        let right = n2 - 1;
        let best = i - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (nums2[mid] >= nums1[i]) {
                best = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        res = Math.max(res, best - i);
    }

    return res;
};

console.log(maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5]));
// Output: 2
console.log(maxDistance([2, 2, 2], [10, 10, 1]));
// Output: 1
console.log(maxDistance([30, 29, 19, 5], [25, 25, 25, 25, 25]));
// Output: 2
