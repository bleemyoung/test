var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    let i = 0;
    while (i < n) {
        let sumOfGas = 0, sumOfCost = 0;
        let cnt = 0;
        while (cnt < n) {
            const j = (i + cnt) % n;
            sumOfGas += gas[j];
            sumOfCost += cost[j];
            if (sumOfCost > sumOfGas) {
                break;
            }
            cnt++;
        }
        if (cnt === n) {
            return i;
        } else {
            i = i + cnt + 1;
        }
    }
    return -1;
};
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// Output: 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
// Output: -1
console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]));
// Output: 0
// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/gas-station/solutions/488357/jia-you-zhan-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。