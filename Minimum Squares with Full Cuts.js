class Solution {
    /**
     * @param {number} n
     * @param {number} m
     * @return {number}
     */
    minSquares(n, m) {
        if (n > m) return this.minSquares(m, n);
        if (n === 0) return 0;
        
        // Use Math.floor to ensure integer division
        let case1 = Math.floor(m / n);
        let rem = m % n;
        
        return case1 + (rem ? this.minSquares(n, rem) : 0);
    }
}
