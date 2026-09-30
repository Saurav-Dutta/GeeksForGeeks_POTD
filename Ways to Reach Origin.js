class Solution {
    ways(x, y) {
        const mod = 1e9 + 7;
        
        // Creating an (x + 1) x (y + 1) matrix filled with 0
        let paths = Array.from({ length: x + 1 }, () => new Array(y + 1).fill(0));
        
        paths[x][y] = 1;
        
        // Iterating bottom-up from target to origin
        for (let i = x; i >= 0; --i) {
            for (let j = y; j >= 0; --j) {
                if (i + 1 <= x) {
                    paths[i][j] = (paths[i][j] + paths[i + 1][j]) % mod;
                }
                if (j + 1 <= y) {
                    paths[i][j] = (paths[i][j] + paths[i][j + 1]) % mod;
                }
            }
        }
        
        return paths[0][0];
    }
}
