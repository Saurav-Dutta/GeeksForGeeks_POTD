/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    constructor() {
        this.m = new Map();
        this.ind = 0;
    }

    fun(pre, i, j) {
        if (i > j) return null;

        let val = pre[this.ind++];
        let root = new Node(val);

        if (i === j) return root;

        let p = this.m.get(pre[this.ind]);

        root.left = this.fun(pre, p, j);
        root.right = this.fun(pre, i + 1, p - 1);

        return root;
    }

    constructBinaryTree(pre, preMirror) {
        this.m.clear();
        this.ind = 0;

        for (let i = 0; i < preMirror.length; i++) {
            this.m.set(preMirror[i], i);
        }

        return this.fun(pre, 0, pre.length - 1);
    }
}