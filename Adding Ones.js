class Solution {
    /**
     * @param {number} n
     * @param {number[]} updates
     * @return {number[]}
     */
    update(n, updates) {
        // Initialize an array of size n filled with 0
        let arr = new Array(n).fill(0);
        
        // Count the initial modifications
        for (let j of updates) {
            arr[j - 1]++;
        }
        
        // Compute the prefix sum profile across the array
        for (let i = 1; i < n; i++) {
            arr[i] += arr[i - 1];
        }
        
        return arr;
    }
}
