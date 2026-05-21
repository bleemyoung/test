/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * 题目要求：
 * 给你链表头节点 head，把链表整体向右旋转 k 次。
 *
 * 先不要把链表当数组看。
 * 链表没有 head.length，也不能直接 head.slice(...)。
 * 你需要通过 next 指针去找到：
 * 1. 链表长度
 * 2. 尾节点
 * 3. 新头节点
 * 4. 新尾节点
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    // 边界情况：
    // 1. 空链表
    // 2. 只有一个节点
    // 3. k = 0
    // 这些情况通常可以直接返回原链表

    // 第一步：遍历链表，求出长度 length，同时拿到尾节点 tail

    // 第二步：处理 k 比链表长度大的情况
    // 真正需要旋转的次数是 k % length

    // 第三步：如果旋转次数等于 0，直接返回原链表

    // 第四步：找到“新的尾节点”
    // 例如长度 length = 5，右移 step = 2
    // 原链表: 1 -> 2 -> 3 -> 4 -> 5
    // 结果应为: 4 -> 5 -> 1 -> 2 -> 3
    // 新尾节点是 3，它的位置可以通过 length - step - 1 推出来

    // 第五步：
    // newHead = newTail.next
    // 然后断开 newTail.next
    // 再让原 tail.next 指回原 head

    // 第六步：返回 newHead
};

module.exports = {
    rotateRight,
}
