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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    const queue = [root.left, root.right];
    while (queue.length) {
        const left = queue.shift();
        const right = queue.shift();
        if (!left && !right) continue;
        if (!left || !right || left.val !== right.val) return false;
        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
    }
    return true;
};

const { LeetCodeTreeRunner } = require('../../../utils/LeetCodeTreeRunner');
const runner = new LeetCodeTreeRunner();
console.log(
    runner.run(
        isSymmetric,
        [1,2,2,3,4,4,3]
    ),
);