class Solution {
    findMinCost(s1, s2, costS1, costS2) {
        let n = s1.length;
        let m = s2.length;
        
        // Swap to ensure s1 is the longer string (or equal) to optimize space
        if (n < m) {
            [s1, s2] = [s2, s1];
            [n, m] = [m, n];
            [costS1, costS2] = [costS2, costS1];
        }
        
        let prev = new Array(m + 1).fill(0);
        let curr = new Array(m + 1).fill(0);
        
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    curr[j] = prev[j - 1] + 1;
                } else {
                    curr[j] = Math.max(prev[j], curr[j - 1]);
                }
            }
            // Create a shallow copy or slice to avoid reference sharing issues
            prev = [...curr]; 
        }
        
        const lcs = prev[m];
        return (n - lcs) * costS1 + (m - lcs) * costS2;
    }
}
