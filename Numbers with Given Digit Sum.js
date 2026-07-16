class Solution {
    countWays(n, sum) {
        const mod = 1000000007;

        const v = Array.from({ length: n + 1 }, () =>
            new Array(sum + 1).fill(0)
        );

        v[0][0] = 1;

        for (let d = 1; d <= 9 && d <= sum; d++) {
            v[1][d] = 1;
        }

        for (let i = 2; i <= n; i++) {
            for (let j = 1; j <= sum; j++) {
                for (let d = 0; d <= 9; d++) {
                    if (j - d >= 0) {
                        v[i][j] = (v[i][j] + v[i - 1][j - d]) % mod;
                    }
                }
            }
        }

        return v[n][sum] === 0 ? -1 : v[n][sum];
    }
}