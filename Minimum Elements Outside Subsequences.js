class Solution {
    /**
     * @param {number[]} arr
     * @returns {number}
     */
    minCount(arr) {
        const n = arr.length;
        const NEG = -1000000000;
        
        // Initialize the 2D array 'prev' with dimensions (n + 1) x (n + 1) filled with NEG
        let prev = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(NEG));
        prev[0][0] = 0;
        
        for (let k = 1; k <= n; ++k) {
            // Initialize the 2D array 'cur' filled with NEG
            let cur = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(NEG));
            
            for (let i = 0; i <= n; ++i) {
                for (let j = 0; j <= n; ++j) {
                    if (prev[i][j] === NEG) {
                        continue;
                    }
                    
                    cur[i][j] = Math.max(cur[i][j], prev[i][j]);
                    
                    if (i === 0 || arr[k - 1] > arr[i - 1]) {
                        cur[k][j] = Math.max(cur[k][j], prev[i][j] + 1);
                    }
                    
                    if (j === 0 || arr[k - 1] < arr[j - 1]) {
                        cur[i][k] = Math.max(cur[i][k], prev[i][j] + 1);
                    }
                }
            }
            // In JavaScript, standard assignment overrides the reference directly (similar to move)
            prev = cur;
        }
        
        let best = 0;
        for (let i = 0; i <= n; ++i) {
            for (let j = 0; j <= n; ++j) {
                best = Math.max(best, prev[i][j]);
            }
        }
        
        return n - best;
    }
}
