class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class LeetCodeTreeRunner {
    build(values = []) {
        if (!Array.isArray(values) || values.length === 0 || values[0] == null) {
            return null;
        }

        const root = new TreeNode(values[0]);
        const queue = [root];
        let index = 1;

        while (queue.length > 0 && index < values.length) {
            const current = queue.shift();

            if (!current) {
                continue;
            }

            const leftValue = values[index++];
            if (leftValue != null) {
                current.left = new TreeNode(leftValue);
                queue.push(current.left);
            }

            if (index >= values.length) {
                break;
            }

            const rightValue = values[index++];
            if (rightValue != null) {
                current.right = new TreeNode(rightValue);
                queue.push(current.right);
            }
        }

        return root;
    }

    serialize(root) {
        if (!root) {
            return [];
        }

        const result = [];
        const queue = [root];

        while (queue.length > 0) {
            const current = queue.shift();

            if (!current) {
                result.push(null);
                continue;
            }

            result.push(current.val);
            queue.push(current.left);
            queue.push(current.right);
        }

        while (result.length > 0 && result[result.length - 1] == null) {
            result.pop();
        }

        return result;
    }

    run(solution, ...args) {
        let options = {};
        let inputs = args;

        if (args.length > 0) {
            const lastArg = args[args.length - 1];
            if (
                lastArg &&
                typeof lastArg === 'object' &&
                !Array.isArray(lastArg) &&
                Object.prototype.hasOwnProperty.call(lastArg, 'serializeResult')
            ) {
                options = lastArg;
                inputs = args.slice(0, -1);
            }
        }

        const { serializeResult = false } = options;
        const normalizedArgs = inputs.map((input) => {
            if (Array.isArray(input)) {
                return this.build(input);
            }

            return input;
        });
        const result = solution(...normalizedArgs);

        if (serializeResult) {
            return this.serialize(result);
        }

        return result;
    }
}

module.exports = {
    TreeNode,
    LeetCodeTreeRunner,
};
