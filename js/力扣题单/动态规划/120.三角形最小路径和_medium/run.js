/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let ans = Infinity;
    let len = triangle.length,n = triangle[len-1].length;
    let dp = new Array(len).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = triangle[0][0];
    for(let i = 1;i < len;i++){
        for(let j = 0;j <= i;j++){
            if(j === 0){
                dp[i][j] = dp[i-1][j] + triangle[i][j];
            }else if(j === i){
                dp[i][j] = dp[i-1][j-1] + triangle[i][j];
            }else{
                dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j]) + triangle[i][j];
            }
        }
    }
    for(let i = 0;i < n;i++){
        ans = Math.min(ans,dp[len-1][i]);
    }
    console.log(dp[len-1])
    return ans;
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))

// https://leetcode.cn/problems/triangle/solutions/329143/san-jiao-xing-zui-xiao-lu-jing-he-by-leetcode-solu/?envType=study-plan-v2&envId=dynamic-programming
// 优化