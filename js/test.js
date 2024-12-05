/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n, pick) {
    let arr = new Array(n).fill(0).map(() => new Array(11).fill(0))
    // console.log(arr)
    for (let i = 0; i < pick.length; i++) {
        let [row, col] = pick[i]
        arr[row][col]++
    }
    // console.log(arr);
    let count = 0
    for (let i = 0; i < n; i++) {
        let arr2 = arr[i]
        for(let j = 0; j < 10; j++){
            if(arr2[j] > i){
                count++
                break
            }
        }
    }
    return count
};

console.log(winningPlayerCount(4, [[0, 0], [1, 0], [1, 0], [2, 1], [2, 1], [2, 0]]))