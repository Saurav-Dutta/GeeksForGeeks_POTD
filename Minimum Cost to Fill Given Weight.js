class Solution {
    minimumCost(cost, w) {
        const dp = new Array(w + 1).fill(1e9);
        dp[0] = 0;

        for (let i = 1; i <= cost.length; i++) {
            if (cost[i - 1] === -1) continue;

            for (let j = i; j <= w; j++) {
                dp[j] = Math.min(dp[j], dp[j - i] + cost[i - 1]);
            }
        }

        return dp[w] === 1e9 ? -1 : dp[w];
    }
}