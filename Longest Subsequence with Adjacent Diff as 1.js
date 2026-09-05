class Solution {
    /**
     * @param {number[]} arr
     * @returns {number}
     */
    longestSubseq(arr) {
        // Use a JavaScript Map to emulate the C++ unordered_map
        let dp = new Map();
        let ans = 0;

        for (let x of arr) {
            // In C++, accessing a missing key automatically initializes it to 0.
            // In JavaScript, we must explicitly fall back to 0 using (dp.get(key) || 0).
            let prev = Math.max(dp.get(x - 1) || 0, dp.get(x + 1) || 0);
            
            dp.set(x, prev + 1);
            ans = Math.max(ans, dp.get(x));
        }

        return ans;
    }
}
