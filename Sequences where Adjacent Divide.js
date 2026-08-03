class Solution {
    count(n, m) {
        const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

        for (let i = 1; i <= m; i++) {
            dp[1][i] = 1;
        }

        for (let len = 2; len <= n; len++) {
            for (let last = 1; last <= m; last++) {
                for (let prev = 1; prev <= m; prev++) {
                    if (prev % last === 0 || last % prev === 0) {
                        dp[len][last] += dp[len - 1][prev];
                    }
                }
            }
        }

        let ans = 0;
        for (let i = 1; i <= m; i++) {
            ans += dp[n][i];
        }

        return ans;
    }
}