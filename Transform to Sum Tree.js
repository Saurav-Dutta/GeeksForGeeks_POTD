class Solution {
    constructor() {
        this.sum = 0;
    }

    solve(node) {
        if (node === null) {
            return 0;
        }

        let a = this.solve(node.left);
        let b = this.solve(node.right);
        let c = node.data;

        node.data = a + b;

        return a + b + c;
    }

    toSumTree(node) {
        this.solve(node);
    }
}