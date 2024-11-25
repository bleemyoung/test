# 743. 网络延迟时间
https://leetcode.cn/problems/network-delay-time/description/
## 题目描述
有 n 个网络节点，标记为 1 到 n。

给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。

现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。

## 示例

## 题解

### 思路
迪杰斯特拉算法，即 Dijkstra 算法。求得到所有节点的最少时间。到达最晚节点的时间为所求答案，此时所有节点都收到信号。
[算法参考学习](https://blog.csdn.net/xiaoxi_hahaha/article/details/110257368)