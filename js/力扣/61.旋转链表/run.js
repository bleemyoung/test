/**
 * 这份 run.js 不是题解，而是专门用来练习“如何在 JS 里使用链表”。
 * 你可以先跑这个文件，理解链表的构造、遍历、打印，再自己去完成 solution.js。
 */

/**
 * 单向链表节点
 * val: 当前节点的值
 * next: 指向下一个节点；如果没有下一个节点，就是 null
 */
function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

/**
 * 把数组转换成链表
 * 例如 [1, 2, 3] -> 1 -> 2 -> 3 -> null
 */
function arrayToList(arr) {
    if (arr.length === 0) return null

    const dummy = new ListNode(0)
    let current = dummy

    for (const value of arr) {
        current.next = new ListNode(value)
        current = current.next
    }

    return dummy.next
}

/**
 * 把链表转换回数组，方便打印和调试
 * 例如 1 -> 2 -> 3 -> null -> [1, 2, 3]
 */
function listToArray(head) {
    const result = []
    let current = head

    while (current !== null) {
        result.push(current.val)
        current = current.next
    }

    return result
}

/**
 * 打印链表结构，帮助你直观看到 next 指针的连接关系
 */
function printList(head) {
    let current = head
    let output = ''

    while (current !== null) {
        output += `${current.val} -> `
        current = current.next
    }

    output += 'null'
    console.log(output)
}

const head = arrayToList([1, 2, 3, 4, 5])

console.log('1. 链表打印结果：')
printList(head)

console.log('2. 转回数组，方便调试：')
console.log(listToArray(head))

console.log('3. 如何访问节点：')
console.log('head.val =', head.val)
console.log('head.next.val =', head.next.val)
console.log('head.next.next.val =', head.next.next.val)

console.log('4. 如何遍历链表：')
let current = head
let index = 0
while (current !== null) {
    console.log(`第 ${index} 个节点的值是 ${current.val}`)
    current = current.next
    index++
}

console.log('5. 你做这道题时，真正会操作的是节点和 next，不是数组下标')
