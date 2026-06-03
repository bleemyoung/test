var isSymmetric = function(root) {
    if (!root) return true;
    const dfs = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return left.val === right.val && dfs(left.left, right.right) && dfs(left.right, right.left);
    };
    return dfs(root.left, root.right);
};

const { LeetCodeTreeRunner } = require('../../../utils/LeetCodeTreeRunner');
const runner = new LeetCodeTreeRunner();
console.log(
    runner.run(
        isSymmetric,
        [1,2,2,3,4,4,3]
    ),
);