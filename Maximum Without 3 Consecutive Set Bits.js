class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    maxValue(n) {
        // Iterate from MSB (30th bit) down to the 2nd bit
        for (let i = 30; i >= 2; i--) {
            // Check if bits at positions i, i-1, and i-2 are all set (1)
            let bit1 = (n & (1 << i)) !== 0;
            let bit2 = (n & (1 << (i - 1))) !== 0;
            let bit3 = (n & (1 << (i - 2))) !== 0;
            
            if (bit1 && bit2 && bit3) {
                // Greedily clear the lowest bit of the triplet (position i - 2)
                n = n & ~(1 << (i - 2));
                
                // Fast-forward past the fixed bit
                i -= 2;
            }
        }
        return n;
    }
}
