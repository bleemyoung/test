# 685. 冗余连接 II
[题目链接](https://leetcode.cn/problems/redundant-connection-ii/description)
## 题目描述 
在本问题中，有根树指满足以下条件的 有向 图。该树只有一个根节点，所有其他节点都是该根节点的后继。该树除了根节点之外的每一个节点都有且只有一个父节点，而根节点没有父节点。

输入一个有向图，该图由一个有着 n 个节点（节点值不重复，从 1 到 n）的树及一条附加的有向边构成。附加的边包含在 1 到 n 中的两个不同顶点间，这条附加的边不属于树中已存在的边。

结果图是一个以边组成的二维数组 edges 。 每个元素是一对 [ui, vi]，用以表示 有向 图中连接顶点 ui 和顶点 vi 的边，其中 ui 是 vi 的一个父节点。

返回一条能删除的边，使得剩下的图是有 n 个节点的有根树。若有多个答案，返回最后出现在给定二维数组的答案。

## 示例
```
输入：edges = [[1,2],[1,3],[2,3]]
输出：[2,3]
```
```
输入：edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]
输出：[4,1]
```

# 题解
[参考题解](https://leetcode.cn/problems/redundant-connection-ii/solutions/2968048/python3javacgotypescript-yi-ti-yi-jie-bi-yng0/?envType=daily-question&envId=2024-10-28)