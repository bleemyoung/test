# 684. 冗余连接 Medium
https://leetcode.cn/problems/redundant-connection/description
## 题目描述
树可以看成是一个连通且 无环 的 无向 图。

给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。

请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的那个。

## 示例
```
输入: edges = [[1,2], [1,3], [2,3]]
输出: [2,3]
```
```
输入: edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]
输出: [1,4]
```

## 题解

* [官方题解](https://leetcode.cn/problems/redundant-connection/solutions/557616/rong-yu-lian-jie-by-leetcode-solution-pks2/)
  * 并查集[补充知识](https://leetcode.cn/problems/redundant-connection/solutions/181093/tong-su-jiang-jie-bing-cha-ji-bang-zhu-xiao-bai-ku/)