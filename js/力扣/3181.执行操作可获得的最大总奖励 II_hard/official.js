var maxTotalReward = function(rewardValues) {
    let n = rewardValues.length;
    rewardValues.sort((a, b) => a - b);
    if (n >= 2 && rewardValues[n - 2] == rewardValues[n - 1] - 1) {
        return 2 * rewardValues[n - 1] - 1;
    }
    let f = BigInt(1);
    for (let x of rewardValues) {
        let mask = (BigInt(1) << BigInt(x)) - BigInt(1);
        f = f | ((f & mask) << BigInt(x));
    }
    return f.toString(2).length - 1;
};


console.log(maxTotalReward([1, 1, 3, 3]));
// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/maximum-total-reward-using-operations-ii/solutions/2959298/zhi-xing-cao-zuo-ke-huo-de-de-zui-da-zon-8r4o/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。