# 3396. 使数组元素互不相同所需的最少操作次数 easy
https://leetcode.cn/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/description/?envType=daily-question&envId=2025-04-08
## 
给你一个整数数组 nums，你需要确保数组中的元素 互不相同 。为此，你可以执行以下操作任意次：

从数组的开头移除 3 个元素。如果数组中元素少于 3 个，则移除所有剩余元素。
注意：空数组也视作为数组元素互不相同。返回使数组元素互不相同所需的 最少操作次数 。

```
输入： nums = [1,2,3,4,2,3,3,5,7]

输出： 2

解释：

第一次操作：移除前 3 个元素，数组变为 [4, 2, 3, 3, 5, 7]。
第二次操作：再次移除前 3 个元素，数组变为 [3, 5, 7]，此时数组中的元素互不相同。
因此，答案是 2。
```