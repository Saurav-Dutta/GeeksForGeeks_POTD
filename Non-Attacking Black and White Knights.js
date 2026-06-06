class Solution {
    numOfWays(n, m) {
        let no = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                let total = n * m - 1;
                for (let x = -2; x <= 2; x++) {
                    for (let y = -2; y <= 2; y++) {
                        if ((Math.abs(x) + Math.abs(y)) !== 3) continue;
                        let pos_x = i + x;
                        let pos_y = j + y;
                        if (pos_x >= 0 && pos_x < n && pos_y >= 0 && pos_y < m) total--;
                    }
                }
                no += total;
            }
        }
        return no;
    }
}