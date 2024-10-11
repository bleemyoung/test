# 3164. 优质数对的总数 II
[题目链接](https://leetcode.cn/problems/find-the-number-of-good-pairs-ii/description/)

## 题目描述
给你两个整数数组 nums1 和 nums2，长度分别为 n 和 m。同时给你一个正整数 k。

如果 nums1[i] 可以被 nums2[j] * k 整除，则称数对 (i, j) 为 优质数对（0 <= i <= n - 1, 0 <= j <= m - 1）。

返回 优质数对 的总数。
### 提示：
```
1 <= n, m <= 10^5
1 <= nums1[i], nums2[j] <= 10^6
1 <= k <= 10^3
```
注意：常规[暴力解法](./easy.js)会超时

此外，另有一题难度为easy，放松了一些限制 [3162. 优质数对的总数 I](https://leetcode.cn/problems/find-the-number-of-good-pairs-i/description/)

### 示例
```输入：nums1 = [1,3,4], nums2 = [1,3,4], k = 1

输出：5

解释：

5个优质数对分别是 (0, 0), (1, 0), (1, 1), (2, 0), 和 (2, 2)。
```

### 题解
1、[枚举因子](./run.js)

[参考](https://leetcode.cn/problems/find-the-number-of-good-pairs-ii/solutions/2790631/tong-ji-yin-zi-ge-shu-pythonjavacgo-by-e-bl3o/)