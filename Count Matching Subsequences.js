class Solution {
    countWays(s1, s2) {
        const m = s1.length;
        const n = s2.length;
        const MOD = 1000000007;

        const dp = new Array(n + 1).fill(0);
        dp[0] = 1;

        for (let j = 0; j < m; j++) {
            for (let i = n; i >= 1; i--) {
                if (s2[i - 1] === s1[j]) {
                    dp[i] = (dp[i] + dp[i - 1]) % MOD;
                }
            }
        }

        return dp[n];
    }
}