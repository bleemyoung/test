# 52. N 皇后 II
https://leetcode.cn/problems/n-queens-ii/description
## 题目描述
n 皇后问题 研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。

## 示例
```
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

## 题解
https://leetcode.cn/problems/n-queens/solutions/2079586/hui-su-tao-lu-miao-sha-nhuang-hou-shi-pi-mljv/?envType=daily-question&envId=2024-12-01

由于每行恰好放一个皇后，记录每行的皇后放在哪一列，可以得到一个 [0,n−1] 的排列 queens。示例 1 的两个图，分别对应排列 [1,3,0,2] 和 [2,0,3,1]。所以我们本质上是在枚举列号的全排列。

# 其他
