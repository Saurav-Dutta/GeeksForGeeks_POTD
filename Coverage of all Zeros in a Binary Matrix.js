class Solution {
    findCoverage(mat) {
        let n = mat.length;
        let m = mat[0].length;
        let ans = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {

                if (mat[i][j] === 0) {

                    // Left
                    for (let k = j - 1; k >= 0; k--) {
                        if (mat[i][k] === 1) {
                            ans++;
                            break;
                        }
                    }

                    // Right
                    for (let k = j + 1; k < m; k++) {
                        if (mat[i][k] === 1) {
                            ans++;
                            break;
                        }
                    }

                    // Up
                    for (let k = i - 1; k >= 0; k--) {
                        if (mat[k][j] === 1) {
                            ans++;
                            break;
                        }
                    }

                    // Down
                    for (let k = i + 1; k < n; k++) {
                        if (mat[k][j] === 1) {
                            ans++;
                            break;
                        }
                    }
                }
            }
        }

        return ans;
    }
}