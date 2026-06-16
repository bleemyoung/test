/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // console.log(root);
    if (root === null || root.val === p || root.val === q) {
        return root.val;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        return root.val;
    }
    return left.val ?? right.val;
};


const { LeetCodeTreeRunner } = require('../../../../utils/LeetCodeTreeRunner');
const runner = new LeetCodeTreeRunner();

console.log(
    runner.run(
        lowestCommonAncestor,
        [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
        5,
        1
    ),
);
// console.log(lowestCommonAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1));