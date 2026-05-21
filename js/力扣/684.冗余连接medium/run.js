/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const n = edges.length;
    const parent = new Array(n + 1).fill(0).map((val, index) => index)
    // console.log(parent);
    for (let i = 0; i < n; i++) {
        const [node1, node2] = edges[i]
        if (find(parent, node1) != find(parent, node2)) {
            union(parent, node1, node2)
        }
        else {
            return edges[i]
        }
    }
    return [0]
};
const union = (parent, index1, index2) => {
    // parent[find(parent, index2)] = find(parent, index1);//这个顺序无所谓
    parent[find(parent, index1)] = find(parent, index2);
}

const find = (parent, index) => {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}


console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]));
// [2, 3]
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]));
// [1, 4]