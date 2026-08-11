class Solution {
    largestSquare(mat, queries, k) {
        const n = mat.length;
        const m = mat[0].length;
        const ans = [];

        const prefixSum = Array.from({ length: n }, () => Array(m).fill(0));

        // Build prefix sum matrix
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                prefixSum[i][j] = mat[i][j];
                if (i > 0) prefixSum[i][j] += prefixSum[i - 1][j];
                if (j > 0) prefixSum[i][j] += prefixSum[i][j - 1];
                if (i > 0 && j > 0) prefixSum[i][j] -= prefixSum[i - 1][j - 1];
            }
        }

        for (let i = 0; i < queries.length; i++) {
            const r = queries[i][0];
            const c = queries[i][1];

            if (mat[r][c] === 1 && k === 0) {
                ans.push(-1);
                continue;
            }

            let x = 1;

            while (true) {
                const rd_r = r + x;
                const rd_c = c + x;
                const ld_r = r + x;
                const ld_c = c - x;
                const ru_r = r - x;
                const ru_c = c + x;
                const lu_r = r - x;
                const lu_c = c - x;

                let cnt = 0;

                if (
                    rd_r < n && rd_c < m &&
                    ld_r < n && ld_c >= 0 &&
                    ru_r >= 0 && ru_c < m &&
                    lu_r >= 0 && lu_c >= 0
                ) {
                    cnt = prefixSum[rd_r][rd_c];
                    if (ru_r >= 1) cnt -= prefixSum[ru_r - 1][ru_c];
                    if (ld_c >= 1) cnt -= prefixSum[ld_r][ld_c - 1];
                    if (lu_r >= 1 && lu_c >= 1) cnt += prefixSum[lu_r - 1][lu_c - 1];
                } else {
                    break;
                }

                if (cnt > k) {
                    break;
                } else {
                    x++;
                }
            }

            ans.push(2 * x - 1);
        }

        return ans;
    }
}