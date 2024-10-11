/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
    let ans = 0
    const map = new Map()
    for (let num of nums1) {
        if (num % k !== 0) continue
        num /= k
        // 对于每个数num，先将其除以k，然后将其所有因子d加入map中
        for (let d = 1; d * d <= num; d++) {
            if (num % d !== 0) continue
            map.set(d, (map.get(d) || 0) + 1)
            // d能整除num，则num/d也能整除k，因此可以将num/d加入map中
            // 避免重复计算，因此只需要判断d*d是否小于num
            if (d * d < num) {
                map.set(num / d, (map.get(num / d) || 0) + 1)
            }
        }
    }
    console.log(map);
    for (let num of nums2) {
        ans += map.get(num) || 0
    }
    return ans
};

console.log(numberOfPairs([1, 3, 4], [1, 3, 4], 1));//5
console.log(numberOfPairs([1, 2, 4, 12], [2, 4], 3));//2