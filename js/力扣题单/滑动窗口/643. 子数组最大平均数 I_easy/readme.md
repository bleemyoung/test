# 643. 子数组最大平均数 I
https://leetcode.cn/problems/maximum-average-subarray-i/description/
## 题目描述
给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

任何误差小于 10-5 的答案都将被视为正确答案。

示例 1：

```
输入：nums = [1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
```

示例 2：

```
输入：nums = [5], k = 1
输出：5.00000
```
## 解题思路
暴力枚举会超时，因此需要使用滑动窗口的方法。
### 个人解法
首先，我们可以先计算出前 k 个元素之合，然后将其作为滑动窗口的左边界。
右移的过程，计算
``` javascript
var findMaxAverage = function (nums, k) {
    let res = -Infinity
    let last
    for (let i = 0; i <= nums.length - k; i++) {
        let sum
        if (i == 0) {
            sum = 0
            for (let j = 0; j < k; j++) {
                sum += nums[i + j]
            }
        } else {
            sum = last
            sum -= nums[i - 1]
            sum += nums[i + k - 1]
        }
        last = sum
        res = res > sum ? res : sum
    }
    return res / k
};
```

### 优化解法,参考题解
```javascript
var findMaxAverage = function (nums, k) {
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let max = sum
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]
        max = Math.max(max, sum)

    }
    return max / k
};
```