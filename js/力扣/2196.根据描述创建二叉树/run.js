/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var createBinaryTree = function(descriptions) {
    const isRoot = new Map();  // 数值对应的节点是否为根节点的哈希表
    const nodes = new Map();   // 数值与对应节点的哈希表
    
    for (const d of descriptions) {
        const p = d[0];
        const c = d[1];
        const left = d[2] === 1;
        
        if (!isRoot.has(p)) {
            isRoot.set(p, true);
        }
        isRoot.set(c, false);
        
        // 创建或更新节点
        if (!nodes.has(p)) {
            nodes.set(p, new TreeNode(p));
        }
        if (!nodes.has(c)) {
            nodes.set(c, new TreeNode(c));
        }
        
        if (left) {
            nodes.get(p).left = nodes.get(c);
        } else {
            nodes.get(p).right = nodes.get(c);
        }
    }
    
    // 寻找根节点
    let root = -1;
    for (const [val, isRootNode] of isRoot.entries()) {
        if (isRootNode) {
            root = val;
            break;
        }
    }
    
    return nodes.get(root);
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/create-binary-tree-from-descriptions/solutions/1365049/gen-ju-miao-shu-chuang-jian-er-cha-shu-b-sqrk/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。