# 787. K 站中转内最便宜的航班
https://leetcode.cn/problems/cheapest-flights-within-k-stops/description/
## 题目描述
有 n 个城市通过一些航班连接。给你一个数组 flights ，其中 flights[i] = [fromi, toi, pricei] ，表示该航班都从城市 fromi 开始，以价格 pricei 抵达 toi。

现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到出一条最多经过 k 站中转的路线，使得从 src 到 dst 的 价格最便宜 ，并返回该价格。 如果不存在这样的路线，则输出 -1。

```
1 <= n <= 100
0 <= flights.length <= (n * (n - 1) / 2)
flights[i].length == 3
0 <= fromi, toi < n
fromi != toi
1 <= pricei <= 10^4
航班没有重复，且不存在自环
0 <= src, dst, k < n
src != dst
```
## 示例
![gp1.png](gp1.png)
```
输入: 
n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
输出: 700 
解释: 城市航班图如上
从城市 0 到城市 3 经过最多 1 站的最佳路径用红色标记，费用为 100 + 600 = 700。
请注意，通过城市 [0, 1, 2, 3] 的路径更便宜，但无效，因为它经过了 2 站。
```

## 题解
### 方法一：动态规划
```
f[t][i] = Math.min(f[t][i], f[t - 1][j] + cost);
```
#### 注意
到达不到，用INF表示，边界限制n<=100，INF=10^4*101+1