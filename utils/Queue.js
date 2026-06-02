class Queue {
    constructor() {
        this.list = [];
    }

    enqueue(value) {
        this.list.push(value);
    }

    dequeue() {
        return this.list.shift();
    }

    get length() {
        return this.list.length;
    }
}

module.exports = Queue;
