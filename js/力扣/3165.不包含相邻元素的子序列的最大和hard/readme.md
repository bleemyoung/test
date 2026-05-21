# 3165. 不包含相邻元素的子序列的最大和hard
https://leetcode.cn/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/description/
## 题目描述
给你一个整数数组 nums 和一个二维数组 queries，其中 queries[i] = [posi, xi]。

对于每个查询 i，首先将 nums[posi] 设置为 xi，然后计算查询 i 的答案，该答案为 nums 中 不包含相邻元素 的 
子序列
 的 最大 和。

返回所有查询的答案之和。

由于最终答案可能非常大，返回其对 109 + 7 取余 的结果。

子序列 是指从另一个数组中删除一些或不删除元素而不改变剩余元素顺序得到的数组。
## 示例
```
输入：nums = [3,5,9], queries = [[1,-2],[0,-3]]

输出：21

解释：
执行第 1 个查询后，nums = [3,-2,9]，不包含相邻元素的子序列的最大和为 3 + 9 = 12。
执行第 2 个查询后，nums = [-3,-2,9]，不包含相邻元素的子序列的最大和为 9 。
```
