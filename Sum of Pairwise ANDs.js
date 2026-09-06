class Solution {
    /**
     * @param {number} n
     * @returns {bigint}
     */
    nc2(n) {
        return (BigInt(n) * BigInt(n - 1)) / 2n;    
    }

    /**
     * @param {number[]} arr
     * @returns {string}
     */
    pairAndSum(arr) {
        let ans = 0n;

        for (let i = 0; i < 32; i++) {
            let count = 0;
            for (let x of arr) {
                if ((x >> i) & 1) {
                    count++;       
                }
            }
            if (count > 1) {
                ans += (1n << BigInt(i)) * this.nc2(count);
            }
        }
        
        // Convert to string to prevent both precision loss and the "n" character suffix
        return ans.toString(); 
    }
}
