class Solution {
    constructor() {
        this.mp = new Map();
    }

    maxSum(n) {
        if (n === 0) {
            return 0;
        }

        if (this.mp.has(n)) {
            return this.mp.get(n);
        }

        let ans = Math.max(
            n,
            this.maxSum(Math.floor(n / 2)) +
            this.maxSum(Math.floor(n / 3)) +
            this.maxSum(Math.floor(n / 4))
        );

        this.mp.set(n, ans);

        return ans;
    }
}