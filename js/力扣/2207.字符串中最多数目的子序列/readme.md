# 2207. 字符串中最多数目的子序列
https://leetcode.cn/problems/maximize-number-of-subsequences-in-a-string/description/
## 题目描述
给你一个下标从 0 开始的字符串 text 和另一个下标从 0 开始且长度为 2 的字符串 pattern ，两者都只包含小写英文字母。

你可以在 text 中任意位置插入 一个 字符，这个插入的字符必须是 pattern[0] 或者 pattern[1] 。注意，这个字符可以插入在 text 开头或者结尾的位置。

请你返回插入一个字符后，text 中最多包含多少个等于 pattern 的 子序列 。

子序列 指的是将一个字符串删除若干个字符后（也可以不删除），剩余字符保持原本顺序得到的字符串。

## 示例
```
输入：text = "abdcdbc", pattern = "ac"
输出：4
解释：
如果我们在 text[1] 和 text[2] 之间添加 pattern[0] = 'a' ，那么我们得到 "abadcdbc" 。那么 "ac" 作为子序列出现 4 次。
其他得到 4 个 "ac" 子序列的方案还有 "aabdcdbc" 和 "abdacdbc" 。
但是，"abdcadbc" ，"abdccdbc" 和 "abdcdbcc" 这些字符串虽然是可行的插入方案，但是只出现了 3 次 "ac" 子序列，所以不是最优解。
可以证明插入一个字符后，无法得到超过 4 个 "ac" 子序列。
```
## 解题
方法一两个数组存储，遍历字符串，判断当前字符是first还是second并记录，若是second则count+=a.length

**记得讨论pattern是否存在两个字符相等情况**
``` javascript
var maximumSubsequenceCount = function (text, pattern) {
    const first = pattern[0], second = pattern[1];
    // console.log(first, second);
    let count = 0;
    let a = [], b = []
    if (first === second) {
        for (let index = 0; index < text.length; index++) {
            if (text[index] === first) {
                a.push(index);
            }
        }
        count = a.length * (a.length - 1) / 2 + a.length
        return count
    } else {
        for (let index = 0; index < text.length; index++) {
            if (text[index] === first) {
                a.push(index);
            }
            if (text[index] === second) {
                count += a.length
                b.push(index);
            }
        }
        count += a.length > b.length ? a.length : b.length;
        return count
    }
};
```
## 方法二
方法二、弃用a[]和b[]，直接计数减少开销
``` javascript
var maximumSubsequenceCount = function (text, pattern) {
    const first = pattern[0], second = pattern[1];
    let count = 0;
    let a = 0, b = 0
    if (first === second) {
        for (let index = 0; index < text.length; index++) {
            if (text[index] === first) {
                a++;
            }
        }
        count = a * (a - 1) / 2 + a
        return count
    } else {
        for (let index = 0; index < text.length; index++) {
            if (text[index] === first) {
                a++;
            }
            if (text[index] === second) {
                count += a
                b++;
            }
        }
        count += a > b ? a : b;
        return count
    }
};
```