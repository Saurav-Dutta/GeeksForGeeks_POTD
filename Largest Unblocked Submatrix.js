// User function Template for javascript

class Solution {
    largestArea(n, m, arr) {
        let row = new Array(n).fill(0);
        let col = new Array(m).fill(0);

        for (let a of arr) {
            row[a[0] - 1] = 1;
            col[a[1] - 1] = 1;
        }

        let prev = -1;
        let maxiRow = 0;

        for (let i = 0; i < n; i++) {
            if (row[i] === 0) continue;
            maxiRow = Math.max(maxiRow, i - prev - 1);
            prev = i;
        }
        maxiRow = Math.max(maxiRow, n - prev - 1);

        prev = -1;
        let maxiCol = 0;

        for (let i = 0; i < m; i++) {
            if (col[i] === 0) continue;
            maxiCol = Math.max(maxiCol, i - prev - 1);
            prev = i;
        }
        maxiCol = Math.max(maxiCol, m - prev - 1);

        return maxiRow * maxiCol;
    }
}