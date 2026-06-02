/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { LeetCodeTreeRunner } = require('../../../utils/LeetCodeTreeRunner');

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    }

    if (!p || !q || p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

if (require.main === module) {
    const runner = new LeetCodeTreeRunner();
    console.log(
        runner.run(
            isSameTree,
            [2, 2, 2, null, 2, null, null, 2],
            [2, 2, 2, 2, null, 2, null],
        ),
    ); // false
}

module.exports = {
    isSameTree,
};
