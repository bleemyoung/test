/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <=1){
        return intervals;
    }
    intervals.sort((a,b) => a[0] - b[0]);
    // console.log(intervals);
    let res = [intervals[0]];
    for(let i = 1; i < intervals.length; i++){
        let last = res[res.length - 1];
        if(last[1] >= intervals[i][0]){
            last[1] = Math.max(last[1], intervals[i][1]);
        }else{
            res.push(intervals[i]);
        }
    }
    return res;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); //[[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]]));  //[[1,5]]
// https://leetcode.cn/problems/merge-intervals/
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
// 示例 1：
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].