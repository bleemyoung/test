const assert = require('assert');
const { LeetCodeTreeRunner } = require('./LeetCodeTreeRunner');

function inorderTraversal(root) {
    const result = [];

    function dfs(node) {
        if (!node) {
            return;
        }

        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }

    dfs(root);
    return result;
}

function invertTree(root) {
    if (!root) {
        return null;
    }

    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}

const runner = new LeetCodeTreeRunner();

assert.deepStrictEqual(
    runner.run(inorderTraversal, [1, null, 2, 3]),
    [1, 3, 2],
    '应该按 LeetCode 方式将数组入参转换为二叉树',
);

assert.deepStrictEqual(
    runner.run(invertTree, [4, 2, 7, 1, 3, 6, 9], { serializeResult: true }),
    [4, 7, 2, 9, 6, 3, 1],
    '应该支持把返回的二叉树重新序列化为数组',
);

assert.deepStrictEqual(
    runner.serialize(runner.build([1, null, 2, 3])),
    [1, null, 2, 3],
    '构建和序列化结果应该与 LeetCode 层序数组一致',
);

function isSameTree(p, q) {
    if (!p && !q) {
        return true;
    }

    if (!p || !q || p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

assert.strictEqual(
    runner.run(isSameTree, [1, 2, 3], [1, 2, 3]),
    true,
    '应该支持双树参数题目的 LeetCode 调用方式',
);

console.log('LeetCodeTreeRunner tests passed');
