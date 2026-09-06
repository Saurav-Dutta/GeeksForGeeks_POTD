class Solution {
    /**
     * @param {number} n
     * @returns {number}
     */
    nc2(n) {
        // Use BigInt to accurately represent large combinatorics numbers
        return (BigInt(n) * BigInt(n - 1)) / 2n;    
    }

    /**
     * @param {number[]} arr
     * @returns {number}
     */
    pairAndSum(arr) {
        let ans = 0n;

        for (let i = 0; i < 32; i++) {
            let count = 0;
            for (let x of arr) {
                // Shift bits and check if the i-th bit is set
                if ((x >> i) & 1) {
                    count++;       
                }
            }
            if (count > 1) {
                // 1n << BigInt(i) prevents standard bitwise 32-bit integer overflow issues
                ans += (1n << BigInt(i)) * this.nc2(count);
            }
        }
        
        // Convert the final result back to a standard JavaScript number safely
        return Number(ans);
    }
}
