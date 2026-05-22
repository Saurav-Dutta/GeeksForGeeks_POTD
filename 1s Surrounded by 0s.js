class Solution {

    svc(i, j, g) {
        let n = g.length;
        let m = g[0].length;

        if (
            i < 0 || j < 0 ||
            i >= n || j >= m ||
            g[i][j] !== 1
        ) {
            return;
        }

        g[i][j] = 2;

        this.svc(i - 1, j, g);
        this.svc(i, j + 1, g);
        this.svc(i + 1, j, g);
        this.svc(i, j - 1, g);
    }

    cntOnes(g) {
        let n = g.length;
        let m = g[0].length;

        // Traverse boundary cells
        for (let j = 0; j < m; j++) {
            if (g[0][j] === 1) {
                this.svc(0, j, g);
            }

            if (g[n - 1][j] === 1) {
                this.svc(n - 1, j, g);
            }
        }

        for (let i = 0; i < n; i++) {
            if (g[i][0] === 1) {
                this.svc(i, 0, g);
            }

            if (g[i][m - 1] === 1) {
                this.svc(i, m - 1, g);
            }
        }

        // Count remaining 1s
        let ans = 0;

        for (let row of g) {
            for (let ch of row) {
                if (ch === 1) {
                    ans++;
                }
            }
        }

        return ans;
    }
}