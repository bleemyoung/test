# 题目描述
给你一个下标从 0 开始的二维整数数组 nums 表示汽车停放在数轴上的坐标。对于任意下标 i，nums[i] = [starti, endi] ，其中 starti 是第 i 辆车的起点，endi 是第 i 辆车的终点。

返回数轴上被车 任意部分 覆盖的整数点的数目。
https://leetcode.cn/problems/points-that-intersect-with-cars/description/

# 解题思路
* 1、map.set存储，最后获取map.size
  * 见test.js
* 2、首先遍历数组 nums 得到坐标的最大值 C，然后使用一个数组 count 表示每个坐标被覆盖的次数，它的下标范围是 [1,C]