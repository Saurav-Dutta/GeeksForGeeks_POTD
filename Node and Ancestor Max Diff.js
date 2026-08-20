class Solution {
    constructor() {
        this.res = -Infinity;
    }

    solve(root) {
        // Base case: Leaf node
        if (!root.left && !root.right) {
            return root.data;
        }

        // Node with only right child
        if (!root.left) {
            let low = this.solve(root.right);
            this.res = Math.max(this.res, root.data - low);
            return Math.min(low, root.data);
        }

        // Node with only left child
        if (!root.right) {
            let low = this.solve(root.left);
            this.res = Math.max(this.res, root.data - low);
            return Math.min(low, root.data);
        }

        // Node with both children
        let l1 = this.solve(root.left);
        let l2 = this.solve(root.right);

        this.res = Math.max(this.res, root.data - l1, root.data - l2);
        return Math.min(l1, l2, root.data);
    }

    maxDiff(root) {
        // Reset result for clean execution runs
        this.res = -Infinity;
        this.solve(root);
        return this.res;
    }
}
