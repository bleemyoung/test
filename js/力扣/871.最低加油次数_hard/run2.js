// const { MaxPriorityQueue } = require('datastructures-js');
const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue
  } = require('@datastructures-js/priority-queue');
var minRefuelStops = function (target, startFuel, stations) {
    const pq = new MaxPriorityQueue();
    let ans = 0, prev = 0, fuel = startFuel;
    const n = stations.length;
    for (let i = 0; i <= n; i++) {
        let curr = i < n ? stations[i][0] : target;
        fuel -= curr - prev;
        while (fuel < 0 && !pq.isEmpty()) {
            fuel += pq.front().element;
            pq.dequeue();
            ans++;
        }
        if (fuel < 0) {
            return -1;
        }
        if (i < n) {
            pq.enqueue(stations[i][1], stations[i][1]);
            prev = curr;
        }
    }
    return ans;
};



console.log(minRefuelStops(1, 1, []));
// Output: 0
console.log(minRefuelStops(100, 1, [[10, 100]]));
// Output: -1

console.log(minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]));
// Input: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
// Output: 2
