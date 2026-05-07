/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
    const m = boxGrid.length;
    const n = boxGrid[0].length;
    const res = new Array(n).fill(0).map(() => new Array(m).fill(''));
    for (let i = 0; i < m; i++) {
        let cnt = 0
        let column = boxGrid[i]

        for (let j = 0; j < n; j++) {
            let ch = column[j]
            if (ch === '#') {
                ch = '.'
                cnt++;
            }
            res[j][m - 1 - i] = ch
            if (j === n - 1 || column[j + 1] === '*') {
                for (let k = j; k > j - cnt; k--) {
                    res[k][i] = '#';
                }
                cnt = 0;
            }
        }
    }
    return res
};

// console.log(rotateTheBox([["#", ".", "#"]]));
console.log(rotateTheBox([["#", ".", "*", "."], ["#", "#", "*", "."]]));