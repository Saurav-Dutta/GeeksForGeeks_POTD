class Solution {
    optimalKeys(n) {
        let dp = new Array(n + 1).fill(0);

        // Base case
        for (let i = 1; i <= n; i++) {
            dp[i] = i;
        }

        // DP calculation
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i - 3; j++) {
                dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
            }
        }

        return dp[n];
    }
}