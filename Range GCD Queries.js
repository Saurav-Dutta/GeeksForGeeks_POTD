class Solution {
    constructor() {
        this.tree = [];
        this.n = 0;
    }

    // Helper function to calculate Greatest Common Divisor (GCD)
    gcd(a, b) {
        while (b) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    build(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = arr[start];
            return;
        }
        let mid = Math.floor((start + end) / 2);
        this.build(arr, 2 * node, start, mid);
        this.build(arr, 2 * node + 1, mid + 1, end);
        this.tree[node] = this.gcd(this.tree[2 * node], this.tree[2 * node + 1]);
    }

    update(node, start, end, idx, val) {
        if (start === end) {
            this.tree[node] = val;
            return;
        }
        let mid = Math.floor((start + end) / 2);
        if (idx <= mid) {
            this.update(2 * node, start, mid, idx, val);
        } else {
            this.update(2 * node + 1, mid + 1, end, idx, val);
        }
        this.tree[node] = this.gcd(this.tree[2 * node], this.tree[2 * node + 1]);
    }

    query(node, start, end, l, r) {
        if (r < start || end < l) {
            return 0;
        }
        if (l <= start && end <= r) {
            return this.tree[node];
        }
        let mid = Math.floor((start + end) / 2);
        let left = this.query(2 * node, start, mid, l, r);
        let right = this.query(2 * node + 1, mid + 1, end, l, r);
        return this.gcd(left, right);
    }

    processQueries(arr, queries) {
        this.n = arr.length;
        // Replaces tree.assign(4 * n, 0)
        this.tree = new Array(4 * this.n).fill(0);
        
        this.build(arr, 1, 0, this.n - 1);
        
        let ans = [];
        for (let q of queries) {
            if (q[0] === 0) {
                ans.push(this.query(1, 0, this.n - 1, q[1], q[2]));
            } else {
                this.update(1, 0, this.n - 1, q[1], q[2]);
            }
        }
        return ans;
    }
}
