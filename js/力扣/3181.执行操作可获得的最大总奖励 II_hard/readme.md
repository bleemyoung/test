# 3181. 执行操作可获得的最大总奖励 II_hard
https://leetcode.cn/problems/maximum-total-reward-using-operations-ii/description/?envType=daily-question&envId=2024-10-25
## 题目描述
给你一个整数数组 rewardValues，长度为 n，代表奖励的值。

最初，你的总奖励 x 为 0，所有下标都是 未标记 的。你可以执行以下操作 任意次 ：

从区间 [0, n - 1] 中选择一个 未标记 的下标 i。
如果 rewardValues[i] 大于 你当前的总奖励 x，则将 rewardValues[i] 加到 x 上（即 x = x + rewardValues[i]），并 标记 下标 i。
以整数形式返回执行最优操作能够获得的 最大 总奖励。

# 题解
测试数据简单的题，直接dp求解即可[3190](./run.js)
[3190.执行操作可获得的最大总奖励 I](https://leetcode.cn/problems/maximum-total-reward-using-operations-i/?envType=daily-question&envId=2024-10-25)