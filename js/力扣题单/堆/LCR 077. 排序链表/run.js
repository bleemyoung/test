/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const { ListNode, arrayToList, listToArray } = require('../../../class/ListNode');
const { PriorityQueue } = require('../type');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    const pq = new PriorityQueue((a, b) => a < b);
    let current = head;
    while (current) {
        pq.insert(current.val);
        current = current.next;
    }
    let res = []
    while (pq.size()) {
        const val = pq.remove();
        res.push(val);
    }
    return res;
};
// var sortList = function (head) {
//     const pq = new PriorityQueue((a, b) => a.val < b.val);
//     let current = head;
//     while (current) {
//         pq.insert(current);
//         current = current.next;
//     }
//     let dummy = new ListNode();
//     current = dummy;
//     while (pq.size()) {
//         const node = pq.remove();
//         node.next = null;
//         current.next = node;
//         current = current.next;
//     }
//     return dummy.next;
// };


const list1 = arrayToList([4, 2, 1, 3]);
const outcome = sortList(list1);
console.log(outcome);
console.log('结果:', listToArray(outcome));