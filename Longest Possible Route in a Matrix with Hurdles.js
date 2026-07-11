// User template for JavaScript

class Solution {
    constructor() {
        this.r = [0, 0, -1, 1];
        this.c = [1, -1, 0, 0];
    }

    solve(x, y, dx, dy, mat, visited, obj, temAns, n, m) {
        if (x === dx && y === dy) {
            obj.ans = Math.max(obj.ans, temAns);
            return;
        }

        visited[x][y] = 1;
        temAns += 1;

        for (let i = 0; i < 4; i++) {
            let rr = x + this.r[i];
            let cc = y + this.c[i];

            if (
                rr >= 0 && rr < n &&
                cc >= 0 && cc < m &&
                visited[rr][cc] === 0 &&
                mat[rr][cc]
            ) {
                this.solve(rr, cc, dx, dy, mat, visited, obj, temAns, n, m);
            }
        }

        visited[x][y] = 0;
    }

    longestPath(mat, xs, ys, xd, yd) {
        if (mat[xd][yd] === 0 || mat[xs][ys] === 0) return -1;

        let n = mat.length;
        let m = mat[0].length;
        let visited = Array.from({ length: n }, () => Array(m).fill(0));
        let obj = { ans: 0 };

        this.solve(xs, ys, xd, yd, mat, visited, obj, 0, n, m);

        return obj.ans;
    }
}