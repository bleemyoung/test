// 2708. 一个小组的最大实力值
// https://leetcode.cn/problems/maximum-strength-of-a-group/description/?envType=daily-question&envId=2024-09-03
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function (nums) {
    let output
    let p1 = 1, p2 = 1;
    let positiveCount = 0, zeroCount = 0, negativeCount = 0;
    let negativeArr = []
    nums.sort((a, b) => a - b);
    for (let num of nums) {
        if (num > 0) {
            p1 *= num
            positiveCount++
        } else if (num < 0) {
            negativeCount++
            negativeArr.push(num)
        } else {
            zeroCount++
        }
    }
    if (negativeCount <= 1) {
        if (positiveCount > 0) {
            output = p1
        } else {
            output = nums[nums.length - 1]
        }
    } else {
        output = calNegative(negativeArr)
        if (positiveCount > 0) {
            output *= p1
        }
    }

    return output
};
/**
 * @param {number[]} negativeArr
 * @return {number}
 */
var calNegative = function (negativeArr) {
    let output = 1;
    negativeArr.sort((a, b) => a - b);
    if (negativeArr.length == 0 || negativeArr.length == 1) {
        return 1;
    } else if (negativeArr.length % 2 == 0) {
        for (let i = 0; i < negativeArr.length; i++) {
            output *= negativeArr[i]
        }
    } else {
        for (let i = 0; i < negativeArr.length - 1; i++) {
            output *= negativeArr[i]
        }
    }
    return output
};
console.log(maxStrength([3, -1, -5, 2, 5, -9]));
console.log(maxStrength([-4, -5, -4]));
console.log(maxStrength([-1, 0]));
console.log(maxStrength([-1, 0, 0]));