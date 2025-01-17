// /**
//  * @param {string} coordinate1
//  * @param {string} coordinate2
//  * @return {boolean}
//  */
// var checkTwoChessboards = function (coordinate1, coordinate2) {
//     return (coordinate1[0].charCodeAt(0) - coordinate2[0].charCodeAt(0) - coordinate1[1] - coordinate2[1]) % 2 === 0
// };
// // 3274. 检查棋盘方格颜色是否相同
// console.log(checkTwoChessboards("a1", "c3"));//true
var numRookCaptures = function (board) {
    function findRook() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (board[i][j] === 'R') {
                    return [i, j];
                }
            }
        }
    }
    let rook = findRook();
    let count = 0;
    for (let i = rook[0] - 1; i >= 0; i--) {
        if (board[i][rook[1]] === 'p') {
            count++;
            break;
        } else if (board[i][rook[1]] === 'B') {
            break;
        }
    }
    for (let i = rook[0] + 1; i < 8; i++) {
        if (board[i][rook[1]] === 'p') {
            count++;
            break;
        } else if (board[i][rook[1]] === 'B') {
            break;
        }
    }
    for (let i = rook[1] - 1; i >= 0; i--) {
        if (board[rook[0]][i] === 'p') {
            count++;
            break;
        } else if (board[rook[0]][i] === 'B') {
            break;
        }
    }
    for (let i = rook[1] + 1; i < 8; i++) {
        if (board[rook[0]][i] === 'p') {
            count++;
            break;
        } else if (board[rook[0]][i] === 'B') {
            break;
        }
    }
    return count;
};
let info = [[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", "R", ".", ".", ".", "p"], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]
console.log(numRookCaptures(info));
