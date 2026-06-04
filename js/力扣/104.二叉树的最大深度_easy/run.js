/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let res = 0
    if (!root) return res
    const dfs = (node, depth) => {
        if (!node) return depth
        depth++
        res = Math.max(res, depth)
        dfs(node.left, depth)
        dfs(node.right, depth)
    }
    dfs(root, 0)
    return res
};


const { LeetCodeTreeRunner } = require('../../../utils/LeetCodeTreeRunner');
const runner = new LeetCodeTreeRunner();
console.log(
    runner.run(
        maxDepth,
        [3, 9, 20, null, null, 15, 7]
    ),
); // 3