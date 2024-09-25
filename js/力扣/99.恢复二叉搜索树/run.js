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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let nums = []
    const inorder = root => {
        if (root == null) return
        inorder(root.left)
        nums.push(root.val)
        inorder(root.right)
    }
    const recover = (r, count, x, y) => {
        if (r !== null) {
            if (r.val === x || r.val === y) {
                r.val = r.val === x ? x : y
                if (--count === 0) {
                    return
                }
            }
            recover(r.left, count, x, y)
            recover(r.right, count, x, y)
        }
    }
    inorder(root)
    const [x, y] = findTwoSwapped(nums)
    recover(root, 2, x, y)
};

const findTwoSwapped = nums => {
    const n = nums.length
    let index1 = -1, index2 = -1
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            index2 = i + 1
            if (index1 == -1) {
                index1 = i
            } else {
                break;
            }
        }
    }
    let x = nums[index1], y = nums[index2]
    return [x, y]

}