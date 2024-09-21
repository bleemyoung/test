# 2374. 边积分最高的节点 Medium
https://leetcode.cn/problems/node-with-highest-edge-score/description/

给你一个有向图，图中有 n 个节点，节点编号从 0 到 n - 1 ，其中每个节点都 恰有一条 出边。

图由一个下标从 0 开始、长度为 n 的整数数组 edges 表示，其中 edges[i] 表示存在一条从节点 i 到节点 edges[i] 的 有向 边。

节点 i 的 边积分 定义为：所有存在一条指向节点 i 的边的节点的 编号 总和。

返回 边积分 最高的节点。如果多个节点的 边积分 相同，返回编号 最小 的那个。

## 示例
![本地路径](.\pic.png "相对路径演示,上一级目录")
```
输入：edges = [1,0,0,0,0,7,7,5]
输出：7
解释：
- 节点 1、2、3 和 4 都有指向节点 0 的边，节点 0 的边积分等于 1 + 2 + 3 + 4 = 10 。
- 节点 0 有一条指向节点 1 的边，节点 1 的边积分等于 0 。
- 节点 7 有一条指向节点 5 的边，节点 5 的边积分等于 7 。
- 节点 5 和 6 都有指向节点 7 的边，节点 7 的边积分等于 5 + 6 = 11 。
节点 7 的边积分最高，所以返回 7 。
```

# 解法
let val = new Array(n).fill(0)保存值，遍历取index


[另解](https://leetcode.cn/problems/node-with-highest-edge-score/solutions/2924767/zhi-jie-bian-li-ha-xi-shu-zu-you-hua-by-3jfqo/)