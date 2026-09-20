class Solution {
    largestSubsquare(mat) {
        const n = mat.length;
        if (n === 0) return 0;
        
        // Initialize 2D arrays with zeros
        const hor = Array.from({ length: n }, () => new Array(n).fill(0));
        const ver = Array.from({ length: n }, () => new Array(n).fill(0));
        
        // Fill hor and ver matrices
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 'X') {
                    hor[i][j] = (j === 0) ? 1 : hor[i][j - 1] + 1;
                    ver[i][j] = (i === 0) ? 1 : ver[i - 1][j] + 1;
                }
            }
        }
        
        let ans = 0;
        
        // Scan for the largest subsquare
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 'X') {
                    const maxSide = Math.min(hor[i][j], ver[i][j]);
                    for (let s = maxSide; s > ans; s--) {
                        if (hor[i - s + 1][j] >= s && ver[i][j - s + 1] >= s) {
                            ans = s;
                            break;
                        }
                    }
                }
            }
        }
        
        return ans;
    }
}
