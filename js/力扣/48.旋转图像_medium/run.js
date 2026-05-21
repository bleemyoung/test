/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length
    let tempMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
    console.log(tempMatrix);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            tempMatrix[j][n - 1 - i] = matrix[i][j]
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = tempMatrix[i][j]
        }
    }
};

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(matrix)
console.log(matrix);