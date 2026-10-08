class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @return {number}
     */
    maxFrequency(arr, k) {
        // Sort numerically
        arr.sort((a, b) => a - b);
        
        let sum = 0n; // Using BigInt literal
        let l = 0;
        let ans = 1;
        let bigK = BigInt(k);
        
        for (let r = 0; r < arr.length; r++) {
            sum += BigInt(arr[r]);
            
            // Replaces: 1LL * arr[r] * (r - l + 1) - sum > k
            while (BigInt(arr[r]) * BigInt(r - l + 1) - sum > bigK) {
                sum -= BigInt(arr[l]);
                l++;
            }
            
            ans = Math.max(ans, r - l + 1);
        }
        
        return ans;
    }
}
