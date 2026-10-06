class Solution {
    constructor() {
        this.vis = [];
        this.dist = [];
        this.n = 0;
        this.m = 0;
    }

    bounds(i, j) {
        return !(i < 0 || j < 0 || i >= this.n || j >= this.m);
    }

    solve(matrix, i, j) {
        if (this.vis[i][j]) {
            return this.dist[i][j];
        }
        
        let res = 0;
        const mv = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        
        for (const it of mv) {
            const nextI = i + it[0];
            const nextJ = j + it[1];
            
            if (this.bounds(nextI, nextJ) && matrix[nextI][nextJ] > matrix[i][j]) {
                res = Math.max(res, this.solve(matrix, nextI, nextJ));
            }
        }
        
        this.vis[i][j] = true;
        this.dist[i][j] += res;
        return this.dist[i][j];
    }

    longIncPath(matrix, n, m) {
        this.n = n;
        this.m = m;
        
        // Initialize n x m grids for tracking visited states and distances
        this.vis = Array.from({ length: n }, () => Array(m).fill(false));
        this.dist = Array.from({ length: n }, () => Array(m).fill(1));
        
        let res = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (!this.vis[i][j]) {
                    res = Math.max(res, this.solve(matrix, i, j));
                }
            }
        }
        return res;
    }
}
