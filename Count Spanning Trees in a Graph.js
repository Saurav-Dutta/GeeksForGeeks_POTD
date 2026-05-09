// User function Template for javascript

class Solution {

    determinant(mat, n) {
        let det = 1;

        for (let i = 0; i < n; i++) {

            let pivot = i;

            for (let j = i + 1; j < n; j++) {
                if (Math.abs(mat[j][i]) > Math.abs(mat[pivot][i])) {
                    pivot = j;
                }
            }

            if (Math.abs(mat[pivot][i]) < 1e-9) {
                return 0;
            }

            if (pivot !== i) {
                [mat[pivot], mat[i]] = [mat[i], mat[pivot]];
                det *= -1;
            }

            det *= mat[i][i];

            for (let j = i + 1; j < n; j++) {
                let factor = mat[j][i] / mat[i][i];

                for (let k = i; k < n; k++) {
                    mat[j][k] -= factor * mat[i][k];
                }
            }
        }

        return Math.round(det);
    }

    countSpanTree(n, edges) {

        let lap = Array.from({ length: n }, () => Array(n).fill(0));

        for (let e of edges) {
            let u = e[0];
            let v = e[1];

            lap[u][u]++;
            lap[v][v]++;
            lap[u][v]--;
            lap[v][u]--;
        }

        let cofactor = Array.from({ length: n - 1 }, () => Array(n - 1).fill(0));

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                cofactor[i][j] = lap[i][j];
            }
        }

        return this.determinant(cofactor, n - 1);
    }
}