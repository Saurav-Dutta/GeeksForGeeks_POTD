class Solution {
    svc(i, n, m, dp) {
        if (i < m) return dp[i] = 1;
        if (i === m) return dp[i] = 2;
        if (dp[i] !== -1) return dp[i];
        return dp[i] = (this.svc(i - 1, n, m, dp) + this.svc(i - m, n, m, dp)) % 1000000007;
    }

    countWays(n, m) {
        const dp = new Array(n + 1).fill(-1);
        return this.svc(n, n, m, dp);
    }
}