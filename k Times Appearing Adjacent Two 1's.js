class Solution {
    countStrings(n, k) {
        const MOD = 1e9 + 7;

        if (k > n - 1) return 0;

        let dp = Array.from({ length: k + 1 }, () => Array(2).fill(0));

        dp[0][0] = 1;
        dp[0][1] = 1;

        for (let i = 2; i <= n; i++) {
            let ndp = Array.from({ length: k + 1 }, () => Array(2).fill(0));

            for (let j = 0; j <= k; j++) {
                ndp[j][0] = (ndp[j][0] + dp[j][0]) % MOD;
                ndp[j][0] = (ndp[j][0] + dp[j][1]) % MOD;

                ndp[j][1] = (ndp[j][1] + dp[j][0]) % MOD;

                if (j + 1 <= k) {
                    ndp[j + 1][1] =
                        (ndp[j + 1][1] + dp[j][1]) % MOD;
                }
            }

            dp = ndp;
        }

        return (dp[k][0] + dp[k][1]) % MOD;
    }
}