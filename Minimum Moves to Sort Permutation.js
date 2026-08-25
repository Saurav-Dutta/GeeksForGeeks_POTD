class Solution {
    minMoves(arr) {
        const n = arr.length;
        // Create an array filled with 0s of size n + 1
        const pos = new Array(n + 1).fill(0);
        
        // Map each element to its index
        for (let i = 0; i < n; i++) {
            pos[arr[i]] = i;
        }
        
        let current = 1;
        let longest = 1;
        
        // Find the longest increasing consecutive subsequence
        for (let value = 1; value < n; value++) {
            if (pos[value] < pos[value + 1]) {
                current++;
            } else {
                current = 1;
            }
            longest = Math.max(longest, current);
        }
        
        return n - longest;
    }
}
