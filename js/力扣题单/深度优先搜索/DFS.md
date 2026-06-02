# 深度优先搜索
https://leetcode.cn/problem-list/depth-first-search/
### 环境提供
``` javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

const { LeetCodeTreeRunner } = require('../../../utils/LeetCodeTreeRunner');
const runner = new LeetCodeTreeRunner();
console.log(
    runner.run(
        minDepth,
        [3,9,20,null,null,15,7]
    ),
); // 2
```
使用封装的树结构，方便测试
### 题目复习
* [94.二叉树的中序遍历](../../力扣/94.二叉树的中序遍历_easy/run.js)
* js\力扣\100.相同的树_easy\run.js
* js\力扣\104.二叉树的最大深度_easy\run.js
* js\力扣\111.二叉树的最小深度_easy\run.js
* js\力扣\112.路径总和_easy\run.js