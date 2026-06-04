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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right && root.val === targetSum) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

const { LeetCodeTreeRunner } = require('../../../utils/LeetCodeTreeRunner');
const runner = new LeetCodeTreeRunner();
console.log(
    runner.run(
        hasPathSum,
        [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
        22
    ),
); // true