const {NotImplementedError} = require('../extensions/index.js');
const {ListNode} = require("../extensions");
const {assert} = require("chai");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

    constructor() {
        this.top = null;
        this.end = null;
    }

    getUnderlyingList() {
        while (this.top !== null) {
            return this.top;
        }
    }

    enqueue(value) {
        const listNode = new ListNode(value);
        if (this.top !== null) {
            this.end.next = listNode;
            this.end = listNode;
        } else {
            this.top = listNode;
            this.end = listNode;
        }
    }

    dequeue() {
        const top = this.top;
        if (this.top.next !== null) {
            this.top = this.top.next;
        } else {
            this.top = null;
            this.end = null;
        }
        return top.value;
    }
}

// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.dequeue();
// q.dequeue();

module.exports = {
    Queue
};
