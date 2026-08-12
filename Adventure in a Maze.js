class Solution {
    constructor() {
        this.MOD = 1000000007;
        this.dp = [];
    }

    recur(mat, x, y) {
        const n = mat.length;
        const m = mat[0].length;

        if (x === n - 1 && y === m - 1) {
            return [1, mat[x][y]];
        }

        if (x >= n || y >= m) {
            return [0, 0];
        }

        if (this.dp[x][y][0] !== -1) {
            return this.dp[x][y];
        }

        let paths = 0;
        let maxAdv = 0;

        if (mat[x][y] === 1) {
            if (y + 1 < m) {
                const [p, a] = this.recur(mat, x, y + 1);
                if (p > 0) {
                    paths = p % this.MOD;
                    maxAdv = mat[x][y] + a;
                }
            }
        } else if (mat[x][y] === 2) {
            if (x + 1 < n) {
                const [p, a] = this.recur(mat, x + 1, y);
                if (p > 0) {
                    paths = p % this.MOD;
                    maxAdv = mat[x][y] + a;
                }
            }
        } else {
            let rightPaths = 0;
            let rightAdv = 0;
            let downPaths = 0;
            let downAdv = 0;

            if (y + 1 < m) {
                const [p, a] = this.recur(mat, x, y + 1);
                if (p > 0) {
                    rightPaths = p % this.MOD;
                    rightAdv = mat[x][y] + a;
                }
            }

            if (x + 1 < n) {
                const [p, a] = this.recur(mat, x + 1, y);
                if (p > 0) {
                    downPaths = p % this.MOD;
                    downAdv = mat[x][y] + a;
                }
            }

            paths = (rightPaths + downPaths) % this.MOD;

            if (rightPaths > 0 && downPaths > 0) {
                maxAdv = Math.max(rightAdv, downAdv);
            } else if (rightPaths > 0) {
                maxAdv = rightAdv;
            } else if (downPaths > 0) {
                maxAdv = downAdv;
            }
        }

        this.dp[x][y] = [paths, maxAdv];
        return this.dp[x][y];
    }

    findWays(matrix) {
        const n = matrix.length;
        const m = matrix[0].length;

        this.dp = Array.from({ length: n }, () =>
            Array.from({ length: m }, () => [-1, -1])
        );

        const [totalPaths, maxAdventure] = this.recur(matrix, 0, 0);
        return [totalPaths % this.MOD, maxAdventure];
    }
}