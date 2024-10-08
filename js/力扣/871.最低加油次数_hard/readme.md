# 871. 最低加油次数
https://leetcode.cn/problems/minimum-number-of-refueling-stops/description/
## 题目描述
汽车从起点出发驶向目的地，该目的地位于出发位置东面 target 英里处。

沿途有加油站，用数组 stations 表示。其中 stations[i] = [positioni, fueli] 表示第 i 个加油站位于出发位置东面 positioni 英里处，并且有 fueli 升汽油。

假设汽车油箱的容量是无限的，其中最初有 startFuel 升燃料。它每行驶 1 英里就会用掉 1 升汽油。当汽车到达加油站时，它可能停下来加油，将所有汽油从加油站转移到汽车中。

为了到达目的地，汽车所必要的最低加油次数是多少？如果无法到达目的地，则返回 -1 。

注意：如果汽车到达加油站时剩余燃料为 0，它仍然可以在那里加油。如果汽车到达目的地时剩余燃料为 0，仍然认为它已经到达目的地。

## 示例

```
输入：target = 1, startFuel = 1, stations = []
输出：0
解释：可以在不加油的情况下到达目的地。
```

```
输入：target = 100, startFuel = 1, stations = [[10,100]]
输出：-1
解释：无法抵达目的地，甚至无法到达第一个加油站。
```

```
输入：target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
输出：2
解释：
1. 到达第 1 个加油站时，可以加满汽油，然后继续前进 30 英里到达目的地。
2. 到达第 2 个加油站时，可以加满汽油，然后继续前进 30 英里到达目的地。
3. 到达第 3 个加油站时，可以加满汽油，然后继续前进 30 英里到达目的地。
```

## 解题
### 贪心算法

### 动态规划
见[动态规划解法](run.js)
``` javascript
var minRefuelStops = function (target, startFuel, stations) {
    const n = stations.length;
    const dp = new Array(n + 1).fill(0);
    // dp[i] 表示到第 i 次加油能到达的最远距离
    dp[0] = startFuel;
    for (let i = 1; i <= n; i++) {
        const [position, fuel] = stations[i - 1];
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] >= position) {
                dp[j + 1] = Math.max(dp[j + 1], dp[j] + fuel);
            }
        }
    }
    for (let i = 0; i <= n; i++) {
        if (dp[i] >= target) {
            return i;
        }
    }
    return -1;
};
```