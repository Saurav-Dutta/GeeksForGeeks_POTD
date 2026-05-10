// User function Template for javascript

class Solution {

    maxProfit(x, y, a, b) {

        let n = a.length;

        let idx = Array.from({ length: n }, (_, i) => i);

        idx.sort((i, j) => {
            return Math.abs(a[j] - b[j]) - Math.abs(a[i] - b[i]);
        });

        let ans = 0;

        for (let id of idx) {

            if ((a[id] >= b[id] && x > 0) || y === 0) {
                ans += a[id];
                x--;
            } else {
                ans += b[id];
                y--;
            }
        }

        return ans;
    }
}