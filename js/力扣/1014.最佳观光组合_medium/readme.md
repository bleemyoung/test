# 1014. 最佳观光组合
https://leetcode.cn/problems/best-sightseeing-pair/description/
## 题目描述
给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。

一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去 它们两者之间的距离。

返回一对观光景点能取得的最高分。
## 示例
```
示例 1：

输入：values = [8,1,5,2,6]
输出：11
解释：i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
示例 2：

输入：values = [1,2]
输出：2
```
## 提示
* 2 <= values.length <= 5 * 104
* 1 <= values[i] <= 1000
## 题解
### 思路1
遍历区间长度[1,n-1]，从区间以此计算

需要关注数值边际，区间窗口大小超过2000的数据不用计算

### 思路2
参考题解，得分公式，我们可以将其拆分成 values[i]+i 和 values[j]−j 两部分,在j保持不变的情况下，取values[i]+i最大值，记为mx

遍历j，范围[1,len-1],同时取values[i]+i最大值mx
```
var maxScoreSightseeingPair = function(values) {
    let ans = 0;
    let mx = values[0] + 0;
    for (let j = 1; j < values.length; ++j) {
        ans = Math.max(ans, mx + values[j] - j);
        // 边遍历边维护
        mx = Math.max(mx, values[j] + j);
    }
    return ans;
};
```

https://leetcode.cn/problems/best-sightseeing-pair/solutions/291380/zui-jia-guan-guang-zu-he-by-leetcode-solution/