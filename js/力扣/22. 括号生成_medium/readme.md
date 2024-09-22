# 22. 括号生成 Medium
https://leetcode.cn/problems/generate-parentheses/description/
## 题目描述
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

## 示例
```
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
```
## 题解
这道题的思路是使用回溯法，从左到右枚举每一个左括号，然后递归地枚举右括号，直到左括号和右括号的数量相等。
具体的算法如下：
1. 定义一个函数 `generateParenthesis(n)`，参数为整数 n，返回一个列表，列表中包含所有可能的并且 有效的 括号组合。
2. 定义一个函数 `backtrack(left, right, curr, res)`，参数分别为左括号数量 left、右括号数量 right、当前组合 curr、结果列表 res。
3. 对于 left 和 right，分别从 0 到 n 枚举。
4. 如果 left 大于 right，说明当前的组合不合法，直接返回。
5. 如果 left 和 right 相等，说明当前的组合合法，将 curr 加入 res。
6. 递归地调用 `backtrack(left+1, right, curr+'(', res)` 和 `backtrack(left, right-1, curr+')', res)`，分别生成左括号和右括号的组合。
7. 返回 res。
## 复杂度分析
时间复杂度：O(2^n)，枚举所有可能的组合，每一次递归调用都需要枚举左右括号，因此时间复杂度为 O(2^n)。
空间复杂度：O(n)，最坏情况下，所有括号都需要放入结果列表，因此空间复杂度为 O(n)。