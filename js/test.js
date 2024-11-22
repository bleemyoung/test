/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
    let ans = 0
    for (let command of commands) {
        switch (command) {
            case 'UP':
                ans -= n
                break;
            case 'RIGHT':
                ans++
                break;
            case 'DOWN':
                ans += n
                break;
            case 'LEFT':
                ans--
                break;
        }
    }
    return ans
};
console.log(finalPositionOfSnake(2, ["RIGHT", "DOWN"]));