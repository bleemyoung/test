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