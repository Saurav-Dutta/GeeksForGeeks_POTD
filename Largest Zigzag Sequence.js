class Solution {
    zigzagSequence(mat) {
        const n = mat.length;

        if (n === 0) return 0;
        if (n === 1) return mat[0][0];

        let dp = [...mat[0]];

        for (let i = 1; i < n; i++) {
            let max1 = -1;
            let max2 = -1;
            let max1_col = -1;

            // Find largest and second largest values in dp
            for (let j = 0; j < n; j++) {
                if (dp[j] > max1) {
                    max2 = max1;
                    max1 = dp[j];
                    max1_col = j;
                } else if (dp[j] > max2) {
                    max2 = dp[j];
                }
            }

            const curr = new Array(n);

            for (let j = 0; j < n; j++) {
                if (j === max1_col) {
                    curr[j] = mat[i][j] + max2;
                } else {
                    curr[j] = mat[i][j] + max1;
                }
            }

            dp = curr;
        }

        let ans = 0;

        for (let j = 0; j < n; j++) {
            ans = Math.max(ans, dp[j]);
        }

        return ans;
    }
}