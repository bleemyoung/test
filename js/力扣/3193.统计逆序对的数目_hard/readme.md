# 3193.统计逆序对的数目
https://leetcode.cn/problems/count-the-number-of-inversions/description/
## 题目描述
给你一个整数 n 和一个二维数组 requirements ，其中 requirements[i] = [endi, cnti] 表示这个要求中的末尾下标和 逆序对 的数目。

整数数组 nums 中一个下标对 (i, j) 如果满足以下条件，那么它们被称为一个 逆序对 ：

i < j 且 nums[i] > nums[j]
请你返回 [0, 1, 2, ..., n - 1] 的 
排列
 perm 的数目，满足对 所有 的 requirements[i] 都有 perm[0..endi] 恰好有 cnti 个逆序对。

由于答案可能会很大，将它对 10**9 + 7 取余 后返回。

## 示例
```
输入：n = 3, requirements = [[2,2],[0,0]]

输出：2

解释：

两个排列为：

[2, 0, 1]
前缀 [2, 0, 1] 的逆序对为 (0, 1) 和 (0, 2) 。
前缀 [2] 的逆序对数目为 0 个。
[1, 2, 0]
前缀 [1, 2, 0] 的逆序对为 (0, 2) 和 (1, 2) 。
前缀 [1] 的逆序对数目为 0 个。
```