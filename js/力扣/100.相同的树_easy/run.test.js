const assert = require('assert');
const { LeetCodeTreeRunner } = require('../../../utils/LeetCodeTreeRunner');
const { isSameTree } = require('./run');

const runner = new LeetCodeTreeRunner();

assert.strictEqual(
    runner.run(isSameTree, [1, 2, 3], [1, 2, 3]),
    true,
    '相同的树应该返回 true',
);

assert.strictEqual(
    runner.run(isSameTree, [2, 2, 2, null, 2, null, null, 2], [2, 2, 2, 2, null, 2, null]),
    false,
    '节点值相同但结构不同的树应该返回 false',
);

console.log('isSameTree tests passed');
