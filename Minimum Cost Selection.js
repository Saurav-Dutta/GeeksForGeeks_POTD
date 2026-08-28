class Solution {
    minCostSvc(i, mat, prev, dp) {
        if (i === mat.length) return 0;
        if (dp[i][prev] !== -1) return dp[i][prev];
        
        let ans = Infinity;
        for (let j = 0; j < mat[0].length; j++) {
            if (j !== prev) {
                ans = Math.min(ans, mat[i][j] + this.minCostSvc(i + 1, mat, j, dp));
            }
        }
        
        return dp[i][prev] = ans;
    }

    minCost(mat) {
        const n = mat.length;
        const m = mat[0].length;
        
        // Initialize a 2D array of size (n + 1) x (m + 1) filled with -1
        const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));
        
        return this.minCostSvc(0, mat, m, dp);
    }
}
