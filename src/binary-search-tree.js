const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');
const {assert} = require("chai");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    constructor() {
        this.top = null;
        this.size = 0;
        this.count = 0;
    }

    root() {
        return this.top;
    }

    add(data) {
        this.size++;
        const node = new Node(data);
        if (this.top !== null) {
            this.push(node, this.top);
        } else {
            this.top = node;
        }
    }

    push(node, top) {
        if (node.data < top.data) {
            if (top.left !== null) this.push(node, top.left);
            else top.left = node;
        } else if (node.data > top.data) {
            if (top.right !== null) this.push(node, top.right);
            else top.right = node;
        }
    }

    has(data) {
        const value = this.getValueTop(data);
        if (value !== null && value.data === data) {
            return true;
        }
        return false;
    }

    // getValueData(data, top = this.top) {
    //     this.count++;
    //     let value = null;
    //     if (this.count > 1) top = top;
    //     if (top !== null) {
    //         if (data !== top.data) {
    //             if (data < top.data) value = this.getValueData(data, top.left);
    //             else value = this.getValueData(data, top.right);
    //         } else {
    //             value = top.data;
    //         }
    //     }
    //     this.count = 0;
    //     return value;
    // }

    find(data) {
        return this.getValueTop(data);
    }

    getValueTop(data, top = this.top) {
        this.count++;
        let value = null;
        if (this.count > 1) top = top;
        if (top !== null) {
            if (data !== top.data) {
                if (data < top.data) value = this.getValueTop(data, top.left);
                else value = this.getValueTop(data, top.right);
            } else {
                value = top;
            }
        }
        this.count = 0;
        return value;
    }

    remove (data) {
        let tempTree = new BinarySearchTree();
        tempTree = this.clone(data, this.top, tempTree);
        this.top = tempTree.top;
        this.size = tempTree.size;
    }

    clone(data, top, tempTree) {
        if (top !== null) {
            if (top.data !== data) {
                tempTree.add(top.data);
            }
            this.clone(data, top.left, tempTree);
            this.clone(data, top.right, tempTree);
        }
        return tempTree;
    }

    min() {
        let top = this.top;
        while (top.left !== null) {
            top = top.left;
        }
        return top.data;
    }

    max() {
        let top = this.top;
        while (top.right !== null) {
            top = top.right;
        }
        return top.data;
    }

}

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// console.log(tree.find(54).data, 54);
// console.log(tree.find(7), null);
// console.log(tree.has(4), false);
// tree.remove(14);
// console.log(tree);
// tree.remove(8);
// console.log(tree);
// tree.remove(9);
// console.log(tree);
// console.log(tree);
// console.log(tree.min(), 1);
// console.log(tree.max(), 54);
// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// tree.remove(6);
// tree.remove(2);
// console.log(tree.max(), 54);

module.exports = {
    BinarySearchTree
};