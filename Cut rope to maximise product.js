class Solution {
    constructor() {
        this.dp = [];
    }

    solve(n) {
        if (n === 1)
            return 1;

        if (this.dp[n] !== -1)
            return this.dp[n];

        let ans = 0;

        for (let i = 1; i < n; i++) {
            ans = Math.max(
                ans,
                Math.max(i * (n - i), i * this.solve(n - i))
            );
        }

        return this.dp[n] = ans;
    }

    maxProduct(n) {
        this.dp = new Array(n + 1).fill(-1);
        return this.solve(n);
    }
}