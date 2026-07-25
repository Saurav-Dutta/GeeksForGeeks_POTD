class Solution {
    maximumSum(mat, k) {
        const n = mat.length;
        const prefix = Array.from({ length: n }, () => Array(n).fill(0));

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                prefix[i][j] = mat[i][j];

                if (i > 0) prefix[i][j] += prefix[i - 1][j];
                if (j > 0) prefix[i][j] += prefix[i][j - 1];
                if (i > 0 && j > 0) prefix[i][j] -= prefix[i - 1][j - 1];
            }
        }

        let ans = -Infinity;

        for (let i = 0; i + k <= n; i++) {
            for (let j = 0; j + k <= n; j++) {
                let sum = prefix[i + k - 1][j + k - 1];

                if (i > 0) sum -= prefix[i - 1][j + k - 1];
                if (j > 0) sum -= prefix[i + k - 1][j - 1];
                if (i > 0 && j > 0) sum += prefix[i - 1][j - 1];

                ans = Math.max(ans, sum);
            }
        }

        return ans;
    }
}